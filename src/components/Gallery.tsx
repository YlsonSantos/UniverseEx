import * as React from "react";
import { useState, useEffect } from "react";
import { Search, Camera, Satellite, ZoomIn, CalendarIcon, Eraser, AlertCircle } from "lucide-react";
import { format, parseISO, isValid, parse, endOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface MarsPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  camera: {
    name: string;
    full_name: string;
  };
  rover: {
    name: string;
  };
}

export function Gallery() {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState<MarsPhoto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRover, setSelectedRover] = useState("");
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [dateInput, setDateInput] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateError, setDateError] = useState("");

  const rovers = ["curiosity", "opportunity", "spirit", "perseverance"];
  const cameras = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];

  const API_KEY = "cAgK93cEaMd6ccayF9UhQLFmyKeWc7dCvuKX4o9G";

  useEffect(() => {
    fetchPhotos();
  }, [currentPage, selectedRover, selectedCamera, selectedDate]);

  useEffect(() => {
    if (selectedDate) {
      setDateInput(format(selectedDate, "dd/MM/yyyy", { locale: ptBR }));
    } else {
      setDateInput("");
    }
  }, [selectedDate]);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const roverName = selectedRover && selectedRover !== "all" ? selectedRover : "curiosity";
      let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?`;

      const params = new URLSearchParams({
        api_key: API_KEY,
        page: currentPage.toString(),
      });

      if (selectedDate) {
        params.append("earth_date", format(selectedDate, "yyyy-MM-dd"));
      } else {
        params.append("sol", "1000");
      }

      if (selectedCamera && selectedCamera !== "all") {
        params.append("camera", selectedCamera);
      }

      const response = await fetch(url + params.toString());
      const data = await response.json();
      const fetchedPhotos = data.photos || [];
      setPhotos(fetchedPhotos);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, "");

    if (value.length >= 2) {
      let dia = parseInt(value.substring(0, 2));
      if (dia > 31) dia = 31;
      value = dia.toString().padStart(2, "0") + value.substring(2);
    }

    if (value.length >= 4) {
      let mes = parseInt(value.substring(2, 4));
      if (mes > 12) mes = 12;
      value = value.substring(0, 2) + mes.toString().padStart(2, "0") + value.substring(4);
    }

    if (value.length > 2) value = value.substring(0, 2) + "/" + value.substring(2);
    if (value.length > 5) value = value.substring(0, 5) + "/" + value.substring(5, 9);

    setDateInput(value);

    if (value.length === 10) {
      const parsedDate = parse(value, "dd/MM/yyyy", new Date());
      const hoje = endOfDay(new Date());
      if (isValid(parsedDate)) {
        if (parsedDate > hoje) {
          setSelectedDate(undefined);
          setDateError("Data inválida");
        } else {
          setSelectedDate(parsedDate);
          setDateError("");
        }
      } else {
        setSelectedDate(undefined);
        setDateError("Data inválida.");
      }
    } else {
      setSelectedDate(undefined);
      setDateError("");
    }
  };

  const filteredPhotos = photos.filter(
    (photo) =>
      photo.rover.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.camera.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePhotoClick = (photo: MarsPhoto) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchPhotos();
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedRover("");
    setSelectedCamera("");
    setSelectedDate(undefined);
    setDateInput("");
    setDateError("");
    setCurrentPage(1);
    fetchPhotos();
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-mars-glow mb-4">Galeria de Marte</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore milhares de fotografias capturadas pelos rovers da NASA na superfície marciana
          </p>
        </div>

        <div className="glass-effect rounded-xl p-6 mb-8 fade-in-delay">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 justify-items-center">
            <div className="lg:col-span-2 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por rover ou câmera..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>
            </div>

            <Select value={selectedRover} onValueChange={setSelectedRover}>
              <SelectTrigger className="bg-background/50">
                <Satellite className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Selecione um Rover" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Rovers</SelectItem>
                {rovers.map((rover) => (
                  <SelectItem key={rover} value={rover}>
                    {rover.charAt(0).toUpperCase() + rover.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCamera} onValueChange={setSelectedCamera}>
              <SelectTrigger className="bg-background/50">
                <Camera className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Selecione uma Câmera" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Câmeras</SelectItem>
                {cameras.map((camera) => (
                  <SelectItem key={camera} value={camera}>
                    {camera}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <div className="relative w-full">
                <Input
                  placeholder="dd/mm/aaaa"
                  className="w-full bg-background/50 pr-10"
                  value={dateInput}
                  onChange={handleDateInputChange}
                  maxLength={10}
                />
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-10 w-10 text-muted-foreground hover:bg-transparent hover:text-foreground"
                  >
                    <CalendarIcon className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                {dateError && (
                  <div className="absolute right-0 top-full mt-1 flex items-center text-xs text-red-500">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {dateError}
                  </div>
                )}
              </div>
              <PopoverContent className="w-auto p-0" side="bottom" sideOffset={5} align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    const hoje = endOfDay(new Date());
                    if (date <= hoje) {
                      setSelectedDate(date);
                      setDateError("");
                      setIsCalendarOpen(false);
                    } else {
                      setDateError("Data inválida. Só é permitido até a data atual.");
                    }
                  }}
                  initialFocus
                  disabled={{ after: new Date() }}
                />
              </PopoverContent>
            </Popover>

            <div className="flex gap-2 w-full justify-center lg:justify-end md:col-span-2 lg:col-span-1">
              <Button
                variant="default"
                size="sm"
                className="w-full sm:w-auto"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? "Carregando..." : "Buscar Fotos"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto p-2 hover:bg-transparent hover:text-current"
                onClick={handleClearFilters}
              >
                <Eraser className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {filteredPhotos.slice(0, 24).map((photo, index) => (
                <Card
                  key={photo.id}
                  className="hover-glow cursor-pointer group glass-effect border-border/50"
                  onClick={() => handlePhotoClick(photo)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={photo.img_src}
                        alt={`${photo.rover.name} - ${photo.camera.full_name}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-mars">{photo.rover.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {format(parseISO(photo.earth_date), "dd/MM/yyyy")}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">{photo.camera.full_name}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {(photos.length >= 24 || currentPage > 1) && (
              <div className="flex justify-center items-center space-x-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={photos.length < 24}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}

        {!loading && filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-muted-foreground mb-2">Nenhuma foto encontrada</h3>
            <p className="text-muted-foreground">Tente ajustar os filtros ou buscar por outros termos</p>
          </div>
        )}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md md:max-w-xl lg:max-w-4xl glass-effect border-border/50 p-4 pt-6 rounded-xl">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-mars text-lg md:text-xl break-words">
              {selectedPhoto?.rover.name} - {selectedPhoto?.camera.full_name}
            </DialogTitle>
          </DialogHeader>
          {selectedPhoto && (
            <div className="space-y-4">
              <img
                src={selectedPhoto.img_src}
                alt={`${selectedPhoto.rover.name} - ${selectedPhoto.camera.full_name}`}
                className="w-full max-h-96 object-contain rounded-lg"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-mars">Data na Terra:</span>
                  <div className="text-muted-foreground">{format(parseISO(selectedPhoto.earth_date), "dd/MM/yyyy")}</div>
                </div>
                <div>
                  <span className="font-medium text-mars">Câmera:</span>
                  <div className="text-muted-foreground">{selectedPhoto.camera.name}</div>
                </div>
                <div>
                  <span className="font-medium text-mars">Rover:</span>
                  <div className="text-muted-foreground">{selectedPhoto.rover.name}</div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
