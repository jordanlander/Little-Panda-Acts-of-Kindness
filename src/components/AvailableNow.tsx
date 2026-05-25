import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { allDolls, ETSY_SHOP_URL, collectionLabels } from "@/data/dolls";
import { trackProductClick } from "@/lib/analytics";

const AvailableNow = () => {
  const available = allDolls.filter((d) => !d.sold && d.etsyUrl).slice(0, 6);

  return (
    <section
      id="available-now"
      className="py-14 md:py-20 px-4 bg-gradient-to-b from-background to-blush-pink/10"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Available Now
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-2">
            A small peek at Rebecca's current handmade dolls. The full Etsy shop is organized by collection — Spirit Dolls, Art Plush Dolls, and other one-of-a-kind characters.
          </p>
          <p className="text-sm text-rust-clay font-heading mt-3">
            Each doll is handmade, one-of-a-kind, and gone once adopted.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-slide-up">
          {available.map((doll) => {
            const handleClick = () => {
              trackProductClick({
                dollName: doll.name,
                collection: collectionLabels[doll.collection],
                url: doll.etsyUrl!,
              });
            };
            return (
              <a
                key={doll.name}
                href={doll.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="block cursor-pointer"
              >
                <Card className="overflow-hidden group hover:scale-[1.03] transition-transform duration-300 soft-glow bg-card h-full flex flex-col">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={doll.image}
                      alt={`Handmade upcycled doll named ${doll.name} by artist Rebecca Coppock`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col">
                    <p className="text-xs text-rust-clay font-accent mb-1">
                      {collectionLabels[doll.collection]}
                    </p>
                    <h3 className="font-heading text-xl font-semibold mb-2">{doll.name}</h3>
                    {doll.story && (
                      <p className="text-sm text-muted-foreground mb-4 font-body italic flex-1">
                        {doll.story}
                      </p>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full border-2 bg-rust-clay text-white hover:bg-rust-clay/90 transition-colors"
                    >
                      View on Etsy <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="rounded-full bg-rust-clay hover:bg-rust-clay/90 text-white px-10 py-7 text-lg md:text-xl font-heading shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Browse the Full Etsy Shop <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            Free U.S. shipping • International collectors welcome
          </p>
        </div>
      </div>
    </section>
  );
};

export default AvailableNow;
