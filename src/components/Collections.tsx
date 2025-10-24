import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dollPlaceholder from "@/assets/doll-placeholder.jpg";
import ellieImg from "@/assets/dolls/ellie.jpg";
import bertImg from "@/assets/dolls/bert.jpg";
import edithImg from "@/assets/dolls/edith.jpg";
import eddieImg from "@/assets/dolls/eddie.jpg";
import gingerImg from "@/assets/dolls/ginger.jpg";
import steveImg from "@/assets/dolls/steve.jpg";
import earlImg from "@/assets/dolls/earl.jpg";
import hughImg from "@/assets/dolls/hugh.jpg";
import scottImg from "@/assets/dolls/scott.jpg";
import charlieImg from "@/assets/dolls/charlie.jpg";
import agnesImg from "@/assets/dolls/agnes.jpg";
import janeImg from "@/assets/dolls/jane.jpg";
import timImg from "@/assets/dolls/tim.jpg";
import leeImg from "@/assets/dolls/lee.jpg";
import peggyImg from "@/assets/dolls/peggy.jpg";
import jamesImg from "@/assets/dolls/james.jpg";
import uliImg from "@/assets/dolls/uli.jpg";
import sueImg from "@/assets/dolls/sue.jpg";
import darrellImg from "@/assets/dolls/darrell.jpg";
import otisImg from "@/assets/dolls/otis.jpg";
import henryImg from "@/assets/dolls/henry.jpg";
import stanImg from "@/assets/dolls/stan.jpg";
import maryImg from "@/assets/dolls/mary.jpg";
import bailyImg from "@/assets/dolls/baily.jpg";
import trevorImg from "@/assets/dolls/trevor.jpg";
import kimImg from "@/assets/dolls/kim.jpg";
import annImg from "@/assets/dolls/ann.jpg";
import howardImg from "@/assets/dolls/howard.jpg";

const randomActsOfLove = [
  { name: "Ellie", image: ellieImg },
  { name: "Bert", image: bertImg },
  { name: "Edith", image: edithImg },
  { name: "Eddie", image: eddieImg },
  { name: "Ginger", image: gingerImg },
  { name: "Steve", image: steveImg },
  { name: "Earl", image: earlImg },
  { name: "Hugh", image: hughImg },
  { name: "Scott", image: scottImg }
];

const loveHappens = [
  { name: "Charlie", image: charlieImg },
  { name: "Agnes", image: agnesImg },
  { name: "Jane", image: janeImg },
  { name: "Tim", image: timImg },
  { name: "Lee", image: leeImg },
  { name: "Peggy", image: peggyImg },
  { name: "James", image: jamesImg },
  { name: "Uli", image: uliImg },
  { name: "Sue", image: sueImg },
  { name: "Darrell", image: darrellImg },
  { name: "Otis", image: otisImg },
  { name: "Henry", image: henryImg },
  { name: "Stan", image: stanImg },
  { name: "Mary", image: maryImg },
  { name: "Baily", image: bailyImg },
  { name: "Trevor", image: trevorImg },
  { name: "Kim", image: kimImg },
  { name: "Ann", image: annImg },
  { name: "Howard", image: howardImg }
];

const DollCard = ({ name, image, available = true }: { name: string; image?: string; available?: boolean }) => (
  <Card className="overflow-hidden group hover:scale-105 transition-transform duration-300 soft-glow bg-card">
    <div className="aspect-square overflow-hidden bg-muted">
      <img 
        src={image || dollPlaceholder} 
        alt={`${name} - handmade doll by Rebecca Coppock`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="font-heading text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3 font-accent">
        {available ? "Available for Adoption" : "Adopted"}
      </p>
      <Button 
        variant="outline" 
        size="sm"
        disabled={!available}
        className="w-full rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        {available ? "Adopt Me" : "Adopted"}
      </Button>
    </div>
  </Card>
);

const Collections = () => {
  return (
    <section id="collections" className="py-20 px-4 starburst-pattern">
      <div className="container mx-auto max-w-7xl">
        {/* Random Acts of Love Collection */}
        <div className="mb-20 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Random Acts of Love Collection
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Lovable, huggable plush dolls — each waiting to be adopted.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {randomActsOfLove.map((doll) => (
              <DollCard key={doll.name} name={doll.name} image={doll.image} />
            ))}
          </div>
        </div>

        {/* Love Happens Collection */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Love Happens Collection
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              A more artsy, display-focused collection exploring individuality and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loveHappens.map((doll) => (
              <DollCard key={doll.name} name={doll.name} image={doll.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;