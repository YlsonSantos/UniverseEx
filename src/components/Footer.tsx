import { Linkedin, Instagram, X, Globe } from "lucide-react";
import marsGlobeIcon from "@/assets/mars-globe.png";

export function Footer() {
  return (
    <footer className="bg-space-deep border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={marsGlobeIcon} alt="Ícone do Planeta Marte" className="h-8 w-8 text-mars" />
              <span className="text-xl font-bold text-mars-glow">UniverseEx</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Explorando o universo através da tecnologia e dados da NASA.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Explorar</h3>
            <div className="space-y-2 text-sm">
              <a href="#home" className="text-muted-foreground hover:text-mars transition-colors block">
                Início
              </a>
              <a href="#about" className="text-muted-foreground hover:text-mars transition-colors block">
                Sobre
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-mars transition-colors block">
                Explore Marte
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <div className="space-y-2 text-sm">
              <a 
                href="https://api.nasa.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-mars transition-colors block"
              >
                API da NASA
              </a>
              <a 
                href="https://mars.nasa.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-mars transition-colors block"
              >
                Missões Mars
              </a>
              <a 
                href="https://www.jpl.nasa.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-mars transition-colors block"
              >
                JPL NASA
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Redes Sociais da NASA</h3>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.nasa.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-mars transition-colors"
                title="Site oficial da NASA"
              >
                <Globe className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/nasa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-mars transition-colors"
                title="LinkedIn da NASA"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/nasa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-mars transition-colors"
                title="Instagram da NASA"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/nasa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-mars transition-colors"
                title="X da NASA"
              >
                <X className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 UniverseEx. Dados fornecidos pela NASA. 
            <span className="text-mars"> Explore o universo responsavelmente.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}