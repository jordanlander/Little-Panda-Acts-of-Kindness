import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

// Import sold doll images
import peggyImg from "@/assets/dolls/peggy.jpg";
import sueImg from "@/assets/dolls/sue.jpg";
import stanImg from "@/assets/dolls/stan.jpg";
import otisImg from "@/assets/dolls/otis.jpg";
import kimImg from "@/assets/dolls/kim.jpg";
import emberImg from "@/assets/dolls/spirit/ember.jpg";
import solsticeImg from "@/assets/dolls/spirit/solstice.jpg";
import mossImg from "@/assets/dolls/spirit/moss.jpg";
import mendedImg from "@/assets/dolls/spirit/mended.jpg";
import rootboundImg from "@/assets/dolls/spirit/rootbound.jpg";
import ravenImg from "@/assets/dolls/spirit/raven.jpg";
import lunaImg from "@/assets/dolls/spirit/luna.jpg";

type AdoptedDoll = {
  name: string;
  image: string;
  collection: string;
};

const adoptedDolls: AdoptedDoll[] = [
  { name: "Peggy", image: peggyImg, collection: "Love Happens" },
  { name: "Sue", image: sueImg, collection: "Love Happens" },
  { name: "Stan", image: stanImg, collection: "Love Happens" },
  { name: "Otis", image: otisImg, collection: "Love Happens" },
  { name: "Kim", image: kimImg, collection: "Love Happens" },
  { name: "Ember", image: emberImg, collection: "Spirit" },
  { name: "Solstice", image: solsticeImg, collection: "Spirit" },
  { name: "Moss", image: mossImg, collection: "Spirit" },
  { name: "Mended", image: mendedImg, collection: "Spirit" },
  { name: "Rootbound", image: rootboundImg, collection: "Spirit" },
  { name: "Raven", image: ravenImg, collection: "Spirit" },
  { name: "Luna", image: lunaImg, collection: "Spirit" },
];

interface AdoptedGalleryProps {
  compact?: boolean;
}

const AdoptedGallery = ({ compact = false }: AdoptedGalleryProps) => {
  const displayDolls = compact ? adoptedDolls.slice(0, 4) : adoptedDolls;

  if (compact) {
    return (
      <section className="py-12 px-4 bg-gradient-to-b from-cream-canvas/50 to-blush-pink/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            These Friends Found Their Forever Homes 💕
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            They found love first... will you be next?
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {displayDolls.map((doll) => (
              <div key={doll.name} className="relative group">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-blush-pink/60 shadow-lg">
                  <img
                    src={doll.image}
                    alt={`${doll.name} - adopted handmade doll`}
                    className="w-full h-full object-cover sepia-[0.3] brightness-95"
                  />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow text-xs font-heading font-semibold text-rust-clay whitespace-nowrap">
                  {doll.name} 💕
                </div>
              </div>
            ))}
          </div>
          
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-rust-clay hover:text-rust-clay/80 font-heading font-semibold transition-colors"
          >
            <Heart className="w-4 h-4" />
            Visit Shop to Find Your Friend
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-cream-canvas/30 to-blush-pink/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            These Friends Found Their Forever Homes 💕
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Each of these one-of-a-kind dolls has been lovingly adopted and is now bringing joy to their new family.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayDolls.map((doll) => (
            <Card 
              key={doll.name} 
              className="overflow-hidden bg-card/80 backdrop-blur-sm border-blush-pink/30"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={doll.image}
                  alt={`${doll.name} - adopted handmade doll by Rebecca Coppock`}
                  className="w-full h-full object-cover sepia-[0.35] brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blush-pink/40 to-transparent" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg border border-blush-pink/40">
                  <span className="text-sm font-heading font-bold text-rust-clay whitespace-nowrap">
                    Home Sweet Home 💕
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground">{doll.name}</h3>
                <p className="text-xs text-muted-foreground font-accent">{doll.collection}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptedGallery;
