import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer"; 

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
      </main>
      <Footer /> 
    </div>
  );
};

export default Index;