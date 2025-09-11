import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-effect shadow-shadow-deep" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-mars" />
            <span className="text-xl font-bold text-mars-glow">UniverseEx</span>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <a href="#home" className="text-foreground transition-colors hover:text-mars">
              Início
            </a>
            <a href="#about" className="text-foreground transition-colors hover:text-mars">
              Sobre
            </a>
            <Button asChild className="rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white transition-colors hover:from-orange-700 hover:to-red-700">
              <a href="#gallery">
                Explore Marte
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {isMenuOpen && (
          <div className="glass-effect mt-2 animate-fade-in rounded-lg p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground transition-colors hover:text-mars">
                Início
              </a>
              <a href="#about" className="text-foreground transition-colors hover:text-mars">
                Sobre
              </a>
              <a href="#gallery" className="text-foreground transition-colors hover:text-mars">
                Explore Marte
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}