import { Button } from "@/components/ui/button";
import marsPlanet from "@/assets/mars-planet.jpg";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 nebula-bg" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8 fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-mars-glow leading-tight">
              Explore
              <span className="block text-accent">Marte</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Descubra as maravilhas do planeta vermelho através das lentes dos rovers da NASA. 
              Visualize e explore milhares de fotografias capturadas diretamente da superfície marciana.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="mars" size="xl" onClick={() => {
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explorar Marte
            </Button>
            <Button variant="mars-outline" size="xl" onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Saiba Mais
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-mars">3</div>
              <div className="text-sm text-muted-foreground">Rovers Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-mars">500K+</div>
              <div className="text-sm text-muted-foreground">Fotos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-mars">20+</div>
              <div className="text-sm text-muted-foreground">Câmeras Únicas</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center fade-in-delay">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
            <img 
              src={marsPlanet} 
              alt="Planeta Marte" 
              className="w-full h-full object-cover rounded-full mars-planet shadow-glow-mars"
            />
            <div className="absolute inset-0 rounded-full border border-mars/30 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-4 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
          </div>
          
          <div className="absolute top-10 -left-10 glass-effect p-3 rounded-lg animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-sm font-medium text-mars">Curiosity</div>
            <div className="text-xs text-muted-foreground">Ativo desde 2012</div>
          </div>
          
          <div className="absolute bottom-20 -right-10 glass-effect p-3 rounded-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            <div className="text-sm font-medium text-mars">Perseverance</div>
            <div className="text-xs text-muted-foreground">Ativo desde 2021</div>
          </div>
        </div>
      </div>
    </section>
  );
}