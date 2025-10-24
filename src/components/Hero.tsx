import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToCollections = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground">
          Rebecca Coppock
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-rust-clay font-heading italic">
          "Hand-stitched souls made from stories and sweaters."
        </p>
        <p className="text-xl md:text-2xl mb-8 text-foreground/80 font-accent">
          Artist • Dollmaker • Storyteller
        </p>
        
        <Button 
          onClick={scrollToCollections}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg px-8 py-6 rounded-full mid-century-shadow transition-all hover:translate-y-[-2px]"
        >
          Meet the Collections
        </Button>
      </div>
    </section>
  );
};

export default Hero;