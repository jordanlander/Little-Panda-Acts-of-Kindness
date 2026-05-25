import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { ETSY_SHOP_URL } from "@/data/dolls";
import EtsyTag from "@/components/EtsyTag";

const CUSTOM_MAILTO =
  "mailto:littlepandaacts@gmail.com?subject=Custom%20Doll%20Request";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-blush-pink/15 to-cream-canvas">
      <div className="container mx-auto max-w-3xl text-center animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 text-foreground font-heading">
          Find your one-of-a-kind.
        </h2>
        <p className="text-base md:text-lg text-foreground/80 mb-10 max-w-xl mx-auto font-body italic">
          New dolls appear in small batches, and adopted dolls are gone for good.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-start sm:items-center">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
              <Button
                size="lg"
                className="rounded-full bg-rust-clay hover:bg-rust-clay/90 text-white px-5 sm:px-8 py-6 text-base sm:text-lg font-heading shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto whitespace-normal leading-tight"
              >
                See Available Dolls <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Button>
            </a>
            <EtsyTag />
          </div>
          <a href={CUSTOM_MAILTO} className="block w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-rust-clay text-rust-clay hover:bg-rust-clay/10 px-5 sm:px-8 py-6 text-base sm:text-lg font-heading w-full sm:w-auto whitespace-normal leading-tight"
            >
              <Mail className="mr-2 h-5 w-5 shrink-0" /> Ask About a Custom Doll
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

