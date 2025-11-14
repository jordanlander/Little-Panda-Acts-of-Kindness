import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ellieImg from "@/assets/dolls/ellie.jpg";
import bertImg from "@/assets/dolls/bert.jpg";
import edithImg from "@/assets/dolls/edith.jpg";
import eddieImg from "@/assets/dolls/eddie.jpg";
import gingerImg from "@/assets/dolls/ginger.jpg";
import steveImg from "@/assets/dolls/steve.jpg";
import charlieImg from "@/assets/dolls/charlie.jpg";
import agnesImg from "@/assets/dolls/agnes.jpg";
import janeImg from "@/assets/dolls/jane.jpg";
import timImg from "@/assets/dolls/tim.jpg";
import leeImg from "@/assets/dolls/lee.jpg";
import peggyImg from "@/assets/dolls/peggy.jpg";

const heroImages = [
  ellieImg, bertImg, edithImg, eddieImg, gingerImg, steveImg,
  charlieImg, agnesImg, janeImg, timImg, leeImg, peggyImg
];


const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload hero images for faster transitions
  useEffect(() => {
    heroImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Image carousel with fade transitions */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-top transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
      ))}
      
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
        
        <Link to="/shop">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg px-8 py-6 rounded-full mid-century-shadow transition-all hover:translate-y-[-2px]"
          >
            Adopt a Doll
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;