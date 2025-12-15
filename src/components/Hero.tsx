import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";
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
  
  // Set sale end date (New Year's Day 2026)
  const saleEndDate = new Date('2026-01-01T23:59:59');

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
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Sale Banner */}
      <div className="relative z-10 w-full py-3 bg-gradient-to-r from-rust-clay via-blush-pink to-rust-clay animate-slide-down">
        <div className="container mx-auto text-center">
          <p className="text-white font-heading text-sm sm:text-base md:text-lg font-bold mb-1">
            🎄 Holiday Sale — 45% Off! 🎄
          </p>
          <p className="text-white/90 text-xs sm:text-sm mb-2">
            Celebrate the season — sale ends New Year's Day:
          </p>
          <CountdownTimer targetDate={saleEndDate} />
        </div>
      </div>
      
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
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 text-foreground">
          Rebecca Coppock
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 text-rust-clay font-heading italic">
          "Hand-stitched souls made from stories and sweaters."
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-foreground/80 font-accent">
          Artist • Dollmaker • Storyteller
        </p>
        
        <Link to="/shop">
          <Button 
            size="lg"
            className="bg-rust-clay hover:bg-rust-clay/90 text-white font-heading text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Adopt a Doll
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;