import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Star } from "lucide-react";
import { ETSY_SHOP_URL } from "@/data/dolls";
import EtsyTag from "@/components/EtsyTag";
import beckyPortrait from "@/assets/artist-portrait.jpg";

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
  {
    quote: "Earl is simply perfect & super stuffed with love. He's always ready to give a smile or hug when needed. Great addition to my collection.",
    doll: "Earl",
    collection: "Random Acts of Love Collection",
  },
  {
    quote: "Lee & Trevor are a great pair & enjoy hanging out together. These charming homemade dolls are so much fun to decorate with. Fast shipping & great customer service from this shop.",
    doll: "Lee & Trevor",
    collection: "Love Happens Collection",
  },
  {
    quote: "Mary & Charlie were happy to be reunited. My daughter loves this pair together & enjoys seeing them every day. This shop puts so much heart into their dolls spreading happiness to anyone who purchases one. Highly recommend this seller.",
    doll: "Mary & Charlie",
    collection: "Love Happens Collection",
  },
];


const Hero = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewVisible, setReviewVisible] = useState(true);

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
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-cream-canvas">
      {/* Subtle warm wash — no imagery, so the Etsy review stays readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_hsl(var(--blush-pink)/0.35)_0%,_hsl(var(--cream))_55%,_hsl(var(--cream))_100%)]"
      />

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

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in pt-6 md:pt-10">
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

          <div className="relative bg-cream-canvas rounded-2xl px-6 py-7 md:px-8 md:py-8 max-w-md shadow-2xl ring-1 ring-rust-clay/20 border-2 border-rust-clay/40 md:-rotate-1">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 bg-rust-clay text-white text-[10px] md:text-xs font-heading font-bold tracking-wider uppercase px-3 py-0.5 rounded-full shadow">
              ★ Verified Etsy Review
            </span>

            {/* Decorative open quote */}
            <span aria-hidden className="absolute top-2 left-3 md:top-3 md:left-4 font-heading text-5xl md:text-6xl leading-none text-rust-clay/25 select-none">“</span>

            <div className="flex items-center justify-center md:justify-start gap-1 mb-3 mt-1 relative">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-rust-clay text-rust-clay" />
              ))}
            </div>
            <div className={`relative transition-opacity duration-300 ${reviewVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-[17px] md:text-[18px] text-ink-black font-body font-medium leading-[1.55] mb-3 min-h-[6.5rem] md:min-h-[7rem]">
                {review.quote}
              </p>
              <p className="text-sm font-heading font-bold text-rust-clay tracking-wide">
                — {review.doll} <span className="font-normal text-foreground/70 italic">· {review.collection}</span>
              </p>
            </div>
            <a
              href="https://littlepandaacts.etsy.com/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs font-heading font-bold text-rust-clay underline underline-offset-2 hover:text-rust-clay/80"
            >
              Read more reviews on Etsy →
            </a>
          </div>
        </div>

        {/* Brand lockup — Rebecca leads, Little Panda supports. Etsy is intentionally absent here. */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-3 text-foreground">
          Rebecca Coppock
        </h1>
        <p className="text-[11px] sm:text-xs md:text-sm font-heading font-bold uppercase tracking-[0.25em] text-rust-clay mb-5 md:mb-7">
          Little Panda Acts of Kindness
        </p>

        <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-foreground/85 font-body leading-relaxed max-w-2xl mx-auto">
          Rebecca's dolls are handmade one at a time from reclaimed fabrics, memory, humor, grief, hope, and whatever strange little spark makes a face feel alive. Some are soft and silly. Some are spiritual. Some are deeply personal.{" "}
          <span className="italic text-rust-clay">The right one usually knows before you do.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-start sm:items-center mb-4">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-rust-clay hover:bg-rust-clay/90 text-white font-heading text-base sm:text-lg px-7 sm:px-9 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
              >
                See Available Dolls <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <EtsyTag />
          </div>
          <a href="#custom" className="block w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-rust-clay text-rust-clay hover:bg-rust-clay/10 bg-cream-canvas/80 backdrop-blur-sm font-heading text-base sm:text-lg px-7 sm:px-9 py-6 rounded-full transition-all w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" /> Request a Custom Doll
            </Button>
          </a>
        </div>
        <p className="text-xs sm:text-sm text-foreground/70 italic font-body max-w-md mx-auto mt-4">
          Each doll is handmade, one-of-a-kind, and gone once adopted.
        </p>
      </div>
    </section>
  );
};

export default Hero;
