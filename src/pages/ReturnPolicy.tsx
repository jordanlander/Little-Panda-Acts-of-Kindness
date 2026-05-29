import { Heart, Info, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ETSY_SHOP_URL } from "@/data/dolls";

const ReturnPolicy = () => {
  return (
    <>
      <SEO
        title="Return Policy - Rebecca Coppock"
        description="How adoptions work for Rebecca Coppock's handmade dolls — all purchases are completed through the Little Panda Acts of Kindness Etsy shop."
        canonical="/return-policy"
      />
      <div className="min-h-screen bg-background">
        <header className="py-8 px-4 bg-vintage-peach/10">
          <div className="container mx-auto max-w-3xl">
            <a href="/#/" className="text-rust-clay hover:text-rust-clay/80 transition-colors">
              ← Back to Home
            </a>
          </div>
        </header>

        <main className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-8 bg-vintage-peach/10 border-rust-clay/20">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-rust-clay flex-shrink-0 mt-1" />
                <div>
                  <h1 className="text-3xl font-heading font-semibold text-foreground mb-2">
                    Return Policy
                  </h1>
                  <p className="text-sm text-foreground/60 font-accent">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-foreground/80 font-accent">
                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    Adoptions happen on Etsy
                  </h2>
                  <p>
                    This site is a gallery and story — every doll you see here is adopted through the{" "}
                    <em>Little Panda Acts of Kindness</em> shop on Etsy. Etsy handles checkout, payment,
                    shipping, and order messaging. Each listing has its own detailed photos, measurements,
                    and care notes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    All adoptions are final
                  </h2>
                  <p>
                    Each doll is lovingly handcrafted as a one-of-a-kind companion. Because of the deeply
                    personal nature of every creation and the time invested in bringing them to life,
                    <strong className="text-foreground"> all adoptions are final</strong> — no returns,
                    exchanges, or refunds for change of mind. Please review the Etsy listing carefully
                    before checking out, and reach out with any questions first.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    If something goes wrong
                  </h2>
                  <p>
                    If your doll arrives damaged in shipping, or you receive the wrong item, please message
                    me through your Etsy order within a few days of delivery. Etsy's buyer protection covers
                    these situations and we'll make it right together.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rust-clay fill-current" />
                    Questions before adopting?
                  </h2>
                  <p className="mb-4">
                    I'm happy to share more details about any doll to make sure they're the perfect fit.
                    Message me through the Etsy listing, or email{" "}
                    <a href="mailto:littlepandaacts@gmail.com" className="underline">
                      littlepandaacts@gmail.com
                    </a>
                    .
                  </p>
                  <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-full bg-rust-clay hover:bg-rust-clay/90 text-white font-heading">
                      Visit the Etsy Shop <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </section>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ReturnPolicy;
