import { useState, useEffect } from "react";
import { Search, Calendar, Camera, Satellite, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<MarsPhoto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRover, setSelectedRover] = useState("");
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const rovers = ["curiosity", "opportunity", "spirit", "perseverance"];
  const cameras = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];

  const API_KEY = "cAgK93cEaMd6ccayF9UhQLFmyKeWc7dCvuKX4o9G";

  useEffect(() => {
    fetchPhotos();
  }, [currentPage, selectedRover, selectedCamera, selectedDate]);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover && selectedRover !== 'all' ? selectedRover : 'curiosity'}/photos?`;
      
      const params = new URLSearchParams({
        api_key: API_KEY,
        page: currentPage.toString(),
      });

      if (selectedDate) {
        params.append('earth_date', selectedDate);
      } else {
        params.append('sol', '1000'); 
      }

      if (selectedCamera && selectedCamera !== 'all') {
        params.append('camera', selectedCamera);
      }

      const response = await fetch(url + params.toString());
      const data = await response.json();
      
      setPhotos(data.photos || []);
      setTotalPhotos(data.photos?.length || 0);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredPhotos = photos.filter(photo =>
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

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-mars-glow mb-4">
            Galeria de Marte
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore milhares de fotografias capturadas pelos rovers da NASA na superfície marciana
          </p>
        </div>

        <div className="glass-effect rounded-xl p-6 mb-8 fade-in-delay">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="lg:col-span-2">
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
                <SelectValue placeholder="Rover" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Rovers</SelectItem>
                {rovers.map(rover => (
                  <SelectItem key={rover} value={rover}>
                    {rover.charAt(0).toUpperCase() + rover.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCamera} onValueChange={setSelectedCamera}>
              <SelectTrigger className="bg-background/50">
                <Camera className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Câmera" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Câmeras</SelectItem>
                {cameras.map(camera => (
                  <SelectItem key={camera} value={camera}>
                    {camera}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-background/50"
              />
            </div>
          </div>

          <Button 
            variant="mars" 
            size="sm"
            className="w-full sm:w-auto mt-4"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Buscar Fotos"}
          </Button>
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
              {filteredPhotos.map((photo, index) => (
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
                        <span className="text-sm font-medium text-mars">
                          {photo.rover.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {photo.earth_date}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {photo.camera.full_name}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPhotos.length > 0 && (
              <div className="flex justify-center items-center space-x-4">
                <Button
                  variant="mars-outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Anterior
                </Button>
                
                <span className="text-sm text-muted-foreground">
                  Página {currentPage}
                </span>
                
                <Button
                  variant="mars-outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  disabled={filteredPhotos.length < 25}
                >
                  Próxima
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </>
        )}

        {!loading && filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-muted-foreground mb-2">
              Nenhuma foto encontrada
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
          </div>
        )}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-4xl glass-effect border-border/50">
          <DialogHeader>
            <DialogTitle className="text-mars">
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
                  <div className="text-muted-foreground">{selectedPhoto.earth_date}</div>
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