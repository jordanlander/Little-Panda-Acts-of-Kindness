import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import beckyPortrait from "@/assets/artist-portrait.jpg";
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

// Etsy 5-star reviews — paste more verified quotes here to add to the rotation.
const etsyReviews = [
  {
    quote: "Henry is such a delightful guy with all of his amazing details. So much personality to appreciate in him. Couldn't love him more! Excellent customer service & communication from this shop.",
    doll: "Henry",
    collection: "Love Happens Collection",
  },
  {
    quote: "Charlie is all good vibes! He's colorful, well-made and has plenty of charm. The seller/artist shipped quickly and was good with communication too. I would 100% buy from this shop again!",
    doll: "Charlie",
    collection: "Love Happens Collection",
  },
  {
    quote: "Quick shipping! I love her so much, I unwrapped her and gasped. Thank you!",
    doll: "Hearth",
    collection: "Spirit Doll Collection",
  },
  {
    quote: "Lenora, the spirit doll, is quite lovely. A wonderful addition to my collection — well made, with care and soul.",
    doll: "Lenora",
    collection: "Spirit Doll Collection",
  },
  {
    quote: "The Ember spirit doll is well made and very expressive.",
    doll: "Ember",
    collection: "Spirit Doll Collection",
  },
  {
    quote: "This doll is beautifully made with care. I'm glad she is in my home. I have been feeling the spirit of the Raven lately and am attracted to their wisdom.",
    doll: "Raven",
    collection: "Spirit Doll Collection",
  },
];


const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewVisible, setReviewVisible] = useState(true);

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

  // Rotate reviews every 7s with a quick fade transition
  useEffect(() => {
    if (etsyReviews.length <= 1) return;
    const interval = setInterval(() => {
      setReviewVisible(false);
      setTimeout(() => {
        setReviewIndex((prev) => (prev + 1) % etsyReviews.length);
        setReviewVisible(true);
      }, 350);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const review = etsyReviews[reviewIndex];

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Sale Banner */}
      <div className="relative z-10 w-full py-3 bg-gradient-to-r from-rust-clay via-blush-pink to-rust-clay animate-slide-down">
        <div className="container mx-auto text-center">
          <p className="text-white font-heading text-sm sm:text-base md:text-lg font-bold mb-1">
            ✨ Early Adopters Sale — Now On! ✨
          </p>
          <p className="text-white/90 text-xs sm:text-sm">
            Marked-down prices on every doll | Bundle deals in the shop
          </p>
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
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in pt-6 md:pt-10">
        {/* Soft vignette behind trust strip to calm the busy doll carousel */}
        <div className="absolute inset-x-0 -top-4 h-[280px] md:h-[260px] -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_hsl(var(--cream))_0%,_hsl(var(--cream)/0.85)_45%,_transparent_75%)]" />

        {/* Trust strip: Becky portrait + Etsy review */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-7 mb-8 md:mb-10">
          <div className="relative shrink-0 pb-4">
            <img
              src={beckyPortrait}
              alt="Rebecca 'Becky' Coppock — handmade doll artist in Erie, PA"
              loading="eager"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover ring-4 ring-rust-clay/80 shadow-2xl border-4 border-cream-canvas"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-rust-clay px-4 py-1 rounded-full text-[11px] md:text-xs font-heading font-bold text-white shadow-lg whitespace-nowrap tracking-wide uppercase">
              Meet Becky
            </span>
          </div>

          <div className="relative bg-cream-canvas rounded-2xl p-5 md:p-6 max-w-md shadow-2xl ring-1 ring-rust-clay/20 border-2 border-blush-pink/60 md:-rotate-1">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 bg-rust-clay text-white text-[10px] md:text-xs font-heading font-bold tracking-wider uppercase px-3 py-0.5 rounded-full shadow">
              ★ Verified Etsy Review
            </span>
            <div className="flex items-center justify-center md:justify-start gap-1 mb-2 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-rust-clay text-rust-clay" />
              ))}
            </div>
            <div className={`transition-opacity duration-300 ${reviewVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-[15px] md:text-base text-foreground font-body italic leading-relaxed mb-2 min-h-[6rem] md:min-h-[6.5rem]">
                "{review.quote}"
              </p>
              <p className="text-xs font-heading text-rust-clay">
                ★ Verified Etsy buyer • <span className="italic">{review.doll}, {review.collection}</span>
              </p>
            </div>
            <a
              href="https://littlepandaacts.etsy.com/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs font-heading text-rust-clay underline hover:text-rust-clay/80"
            >
              Read more reviews on Etsy →
            </a>
          </div>
        </div>

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