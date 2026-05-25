import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CUSTOM_MAILTO =
  "mailto:littlepandaacts@gmail.com?subject=Custom%20Doll%20Request&body=Hi%20Rebecca%2C%0A%0AI%27d%20love%20to%20ask%20about%20a%20custom%20doll.%20Here%27s%20what%20I%27m%20imagining%3A%0A%0A";

const CustomDollCTA = () => {
  return (
    <section id="custom" className="py-14 md:py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-cream-canvas/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center mid-century-shadow border-2 border-rust-clay/30 animate-fade-in">
          <p className="inline-block text-xs font-heading font-bold tracking-widest uppercase text-rust-clay bg-rust-clay/10 px-3 py-1 rounded-full mb-4">
            By Request
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-heading">
            Have an idea for a custom doll?
          </h2>
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed font-body">
            Rebecca occasionally accepts custom character requests — personal, symbolic, funny, memorial, political, or gift-inspired. Each request depends on timing, materials, and whether the idea feels like a good fit.
          </p>
          <a href={CUSTOM_MAILTO}>
            <Button
              size="lg"
              className="rounded-full bg-rust-clay hover:bg-rust-clay/90 text-white px-8 py-6 text-lg font-heading shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Mail className="mr-2 h-5 w-5" /> Ask About a Custom Doll
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomDollCTA;
