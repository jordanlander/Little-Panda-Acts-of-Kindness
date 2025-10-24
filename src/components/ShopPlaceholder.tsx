import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const ShopPlaceholder = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-vintage-peach/20 to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 animate-fade-in">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-rust-clay" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Adopt a Doll
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-6">
            Each doll is one-of-a-kind — once adopted, they're gone!
          </p>
        </div>
        
        <Card className="p-4 md:p-8 lg:p-12 bg-card mid-century-shadow animate-slide-up">
          <Heart className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-rust-clay" />
          
          <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4">
            Square Store Integration Coming Soon
          </h3>
          
          <p className="text-base md:text-lg mb-8 text-foreground/70">
            This section will connect to Rebecca's Square Online Store, where you can 
            browse available dolls, view detailed photos, and complete your adoption 
            with secure checkout.
          </p>
          
          <Button 
            size="lg"
            disabled
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading text-sm md:text-lg px-4 py-4 md:px-10 md:py-6 rounded-full w-full md:w-auto"
          >
            View Available Dolls (Coming Soon)
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground font-accent">
            Each doll is lovingly handmade and completely unique
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ShopPlaceholder;