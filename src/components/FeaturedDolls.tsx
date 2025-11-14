import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ellieImg from "@/assets/dolls/ellie.jpg";
import charlieImg from "@/assets/dolls/charlie.jpg";
import hughImg from "@/assets/dolls/hugh.jpg";

type Doll = {
  name: string;
  image: string;
  story: string;
  squareUrl: string;
  collection: string;
};

const featuredDolls: Doll[] = [
  { 
    name: "Ellie", 
    image: ellieImg, 
    story: "Soft and snuggly, Ellie loves afternoon naps and warm hugs.", 
    squareUrl: "https://square.link/u/XmB4Rw0x",
    collection: "Random Acts of Love"
  },
  { 
    name: "Charlie", 
    image: charlieImg, 
    story: "An artsy soul with a bold personality and unique flair.", 
    squareUrl: "https://square.link/u/rHLp0yxR",
    collection: "Love Happens"
  },
  { 
    name: "Hugh", 
    image: hughImg, 
    story: "Hugh is gentle and caring, always ready to listen.", 
    squareUrl: "https://square.link/u/4yciYxat",
    collection: "Random Acts of Love"
  }
];

const DollCard = ({ name, image, story, squareUrl, collection }: Doll) => (
  <Card className="overflow-hidden group hover:scale-105 transition-transform duration-300 soft-glow bg-card">
    <div className="aspect-[3/4] overflow-hidden bg-muted">
      <img 
        src={image} 
        alt={`${name} - handmade doll by Rebecca Coppock`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        style={{ contentVisibility: 'auto' }}
      />
    </div>
    <div className="p-4 text-center">
      <p className="text-xs text-rust-clay font-accent mb-1">{collection}</p>
      <h3 className="font-heading text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4 font-body italic min-h-[3rem]">
        {story}
      </p>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => window.open(squareUrl, '_blank')}
        className="w-full rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        Adopt Me <ExternalLink className="ml-2 h-3 w-3" />
      </Button>
    </div>
  </Card>
);

const FeaturedDolls = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-vintage-peach/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Dolls
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Each one-of-a-kind companion waiting for a loving home
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-slide-up">
          {featuredDolls.map((doll) => (
            <DollCard key={doll.name} {...doll} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-rust-clay text-rust-clay hover:bg-rust-clay hover:text-white transition-all px-8 py-6 text-lg font-heading"
            >
              Shop All Dolls <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDolls;
