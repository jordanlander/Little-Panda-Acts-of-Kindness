import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trackProductClick } from "@/lib/analytics";
import ellieImg from "@/assets/dolls/ellie.jpg";
import charlieImg from "@/assets/dolls/charlie.jpg";
import willowImg from "@/assets/dolls/spirit/willow.jpg";

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
    squareUrl: "https://littlepandaacts.etsy.com/listing/4407618752/ellie-handmade-art-doll-from-recycled",
    collection: "Random Acts of Love"
  },
  { 
    name: "Charlie", 
    image: charlieImg, 
    story: "An artsy soul with a bold personality and unique flair.", 
    squareUrl: "https://littlepandaacts.etsy.com/listing/4412102380/charlie-handmade-primitive-folk-art-soft",
    collection: "Love Happens"
  },
  { 
    name: "Willow", 
    image: willowImg, 
    story: "A guardian of tender moments, wrapped in lace and light.", 
    squareUrl: "https://littlepandaacts.etsy.com/listing/4415531725/willow-spirit-doll-handmade-folk-art",
    collection: "Spirit Dolls"
  }
];

const DollCard = ({ name, image, story, squareUrl, collection }: Doll) => {
  const handleClick = () => {
    trackProductClick({
      dollName: name,
      collection: collection,
      url: squareUrl
    });
  };

  return (
  <a 
    href={squareUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block cursor-pointer"
    onClick={handleClick}
  >
    <Card className="overflow-hidden group hover:scale-105 transition-transform duration-300 soft-glow bg-card">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={`Handmade upcycled doll named ${name} by artist Rebecca Coppock`}
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
          className="w-full rounded-full border-2 bg-rust-clay text-white hover:bg-rust-clay/90 transition-colors"
        >
          Buy Now <ExternalLink className="ml-2 h-3 w-3" />
        </Button>
      </div>
    </Card>
  </a>
  );
};

const FeaturedDolls = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-vintage-peach/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Dolls
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-2">
            A glimpse into the collections
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-2">
            Each one-of-a-kind companion is handcrafted with love and waiting for their forever home
          </p>
          <p className="text-sm text-rust-clay font-heading">
            Free U.S. Shipping • <a href="mailto:littlepandaacts@gmail.com" className="underline hover:text-rust-clay/80">International collectors welcome</a>
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
              className="rounded-full bg-rust-clay hover:bg-rust-clay/90 text-white transition-all px-10 py-7 text-xl font-heading shadow-lg hover:shadow-xl hover:scale-105"
            >
              Shop All Dolls <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDolls;
