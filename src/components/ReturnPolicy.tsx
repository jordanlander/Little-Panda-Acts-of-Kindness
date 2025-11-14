import { Heart, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

const ReturnPolicy = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <Card className="p-8 bg-vintage-peach/10 border-rust-clay/20">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-rust-clay flex-shrink-0 mt-1" />
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-foreground flex items-center gap-2">
                About Your Adoption
              </h3>
              <div className="space-y-3 text-foreground/80 font-accent">
                <p>
                  Each doll is lovingly handcrafted as a one-of-a-kind companion. 
                  Just like adopting a pet, once you welcome a doll into your home, 
                  they become uniquely yours—with their own personality, quirks, and character.
                </p>
                <p>
                  Because of the deeply personal nature of each creation and the time 
                  invested in bringing them to life, <strong className="text-foreground">all adoptions are final</strong>.
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-rust-clay fill-current" />
                  <span>
                    Questions before adopting? Feel free to reach out—I'm happy to share 
                    more details about each doll to ensure they're the perfect fit for you.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ReturnPolicy;
