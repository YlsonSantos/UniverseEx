import { Rocket, Camera, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-space-deep relative overflow-hidden">
      <div className="absolute inset-0 nebula-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-mars-glow mb-6">
            Sobre o Projeto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A UniverseEx é uma plataforma dedicada à exploração e visualização de dados espaciais, 
            conectando você diretamente com as descobertas mais recentes dos rovers da NASA em Marte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-mars/10 rounded-lg flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-mars" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Missão</h3>
                  <p className="text-muted-foreground">
                    Nossa missão é democratizar o acesso às imagens e dados coletados pelos rovers da NASA, 
                    permitindo que qualquer pessoa explore as maravilhas de Marte através de uma interface 
                    intuitiva e moderna.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-mars/10 rounded-lg flex items-center justify-center">
                  <Camera className="h-6 w-6 text-mars" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tecnologia</h3>
                  <p className="text-muted-foreground">
                    Utilizamos a API oficial da NASA para acessar em tempo real as fotografias capturadas 
                    pelos rovers Curiosity, Perseverance e outros, oferecendo filtros avançados por rover, 
                    câmera e data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-mars/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-mars" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Exploração</h3>
                  <p className="text-muted-foreground">
                    Cada imagem conta uma história única sobre a superfície marciana, desde formações 
                    rochosas antigas até evidências de atividade geológica. Explore e descubra os 
                    segredos do planeta vermelho.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 fade-in-delay">
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-mars rounded-lg glass-effect p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mars-glow">500K+</div>
                  <div className="text-sm text-muted-foreground">Imagens Disponíveis</div>
                </div>
              </div>
              <div className="aspect-video bg-mars/10 rounded-lg glass-effect overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-mars/20 to-transparent flex items-center justify-center">
                  <span className="text-mars text-sm">Rover Curiosity</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="aspect-video bg-mars/10 rounded-lg glass-effect overflow-hidden">
                <div className="w-full h-full bg-gradient-to-bl from-accent/20 to-transparent flex items-center justify-center">
                  <span className="text-accent text-sm">Rover Perseverance</span>
                </div>
              </div>
              <div className="aspect-square bg-gradient-nebula rounded-lg glass-effect p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-sm text-muted-foreground">Rovers Ativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}