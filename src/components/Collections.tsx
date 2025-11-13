import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
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

// Type definition for doll data
type Doll = {
  name: string;
  image: string;
  story?: string;
  squareUrl?: string;
  sold?: boolean;
};

const randomActsOfLove: Doll[] = [
  { name: "Ellie", image: ellieImg, story: "Soft and snuggly, Ellie loves afternoon naps and warm hugs." },
  { name: "Bert", image: bertImg, story: "Bert is curious and kind, always ready for a new adventure.", squareUrl: "https://square.link/u/oKqklKbJ" },
  { name: "Edith", image: edithImg, story: "Gentle Edith enjoys quiet moments and bedtime stories." },
  { name: "Eddie", image: eddieImg, story: "Eddie is playful and spirited, bringing joy wherever he goes." },
  { name: "Ginger", image: gingerImg, story: "Ginger is sweet and thoughtful, a loyal companion through and through." },
  { name: "Steve", image: steveImg, story: "Steve loves comfort and calm, perfect for cozy evenings." },
  { name: "Earl", image: earlImg, story: "Earl is wise and warm-hearted, a true friend to all.", squareUrl: "https://square.link/u/QwUBTugj" },
  { name: "Hugh", image: hughImg, story: "Hugh is gentle and caring, always ready to listen." },
  { name: "Scott", image: scottImg, story: "Scott is cheerful and bright, bringing smiles to every day." }
];

const loveHappens: Doll[] = [
  { name: "Charlie", image: charlieImg, story: "An artsy soul with a bold personality and unique flair.", squareUrl: "https://square.link/u/HHq9bbVN" },
  { name: "Agnes", image: agnesImg, story: "Agnes is creative and expressive, a true work of art.", squareUrl: "https://square.link/u/6g7ixaDY" },
  { name: "Jane", image: janeImg, story: "Jane is elegant and sophisticated, made for display." },
  { name: "Tim", image: timImg, story: "Tim is quirky and charming, full of character." },
  { name: "Lee", image: leeImg, story: "Lee is modern and stylish, a statement piece." },
  { name: "Peggy", image: peggyImg, story: "Peggy is vintage-inspired and whimsical." },
  { name: "James", image: jamesImg, story: "James is distinguished and refined." },
  { name: "Uli", image: uliImg, story: "Uli is artistic and unconventional." },
  { name: "Sue", image: sueImg, story: "Sue is graceful and poised." },
  { name: "Darrell", image: darrellImg, story: "Darrell is bold and confident.", squareUrl: "https://square.link/u/ESvstetA" },
  { name: "Otis", image: otisImg, story: "Otis is fun-loving and spirited." },
  { name: "Henry", image: henryImg, story: "Henry is classic and timeless." },
  { name: "Stan", image: stanImg, story: "Stan is unique and memorable." },
  { name: "Mary", image: maryImg, story: "Mary is sweet and endearing." },
  { name: "Baily", image: bailyImg, story: "Baily is playful and expressive.", squareUrl: "https://square.link/u/yAiW1jC3" },
  { name: "Trevor", image: trevorImg, story: "Trevor is adventurous and free-spirited." },
  { name: "Kim", image: kimImg, story: "Kim is stylish and contemporary." },
  { name: "Ann", image: annImg, story: "Ann is gentle and artistic.", squareUrl: "https://square.link/u/VDerUtTB" },
  { name: "Howard", image: howardImg, story: "Howard is distinguished and one-of-a-kind." }
];

const DollCard = ({ name, image, story, squareUrl, sold = false }: Doll) => (
  <Card className="overflow-hidden group hover:scale-105 transition-transform duration-300 soft-glow bg-card">
    <div className="aspect-[3/4] overflow-hidden bg-muted">
      <img 
        src={image || dollPlaceholder} 
        alt={`${name} - handmade doll by Rebecca Coppock`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 blur-0"
        style={{ contentVisibility: 'auto' }}
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="font-heading text-xl font-semibold mb-2">{name}</h3>
      {story && (
        <p className="text-sm text-muted-foreground mb-3 font-body italic min-h-[3rem]">
          {story}
        </p>
      )}
      <p className="text-xs text-muted-foreground mb-3 font-accent">
        {sold ? "Adopted" : "Available for Adoption"}
      </p>
      <Button 
        variant="outline" 
        size="sm"
        disabled={!squareUrl || sold}
        onClick={() => squareUrl && window.open(squareUrl, '_blank')}
        className="w-full rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50"
      >
        {sold ? "Adopted" : squareUrl ? (
          <>
            Adopt Me <ExternalLink className="ml-2 h-3 w-3" />
          </>
        ) : "Coming Soon"}
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
              <DollCard key={doll.name} {...doll} />
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
              <DollCard key={doll.name} {...doll} />
            ))}
          </div>
        </div>

        {/* Instructions for Square Integration */}
        <div className="mt-16 p-6 bg-card rounded-lg soft-glow max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-semibold mb-3 text-center">
            Ready to Sell?
          </h3>
          <p className="text-sm text-muted-foreground text-center font-body">
            To connect each doll to Square: Add your Square product URLs to the doll data above. 
            Each "Adopt Me" button will open the Square checkout page in a new tab. 
            When a doll sells out on Square, mark it as <code className="bg-muted px-1 rounded">sold: true</code> in the code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collections;
