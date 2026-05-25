import hearthImg from "@/assets/dolls/spirit/hearth.jpg";
import { ETSY_SHOP_URL } from "@/data/dolls";

const SpiritStory = () => {
  return (
    <section
      id="spirit-story"
      className="py-14 md:py-20 px-4 bg-gradient-to-b from-cream-canvas/60 to-background"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden mid-century-shadow ring-1 ring-rust-clay/20 border-2 border-rust-clay/30 rotate-[-1.5deg]">
              <img
                src={hearthImg}
                alt="Hearth, a handmade Spirit Doll by Rebecca Coppock"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-cream-canvas px-4 py-1 rounded-full text-xs font-heading font-bold text-rust-clay shadow whitespace-nowrap border border-rust-clay/30">
              A Spirit Doll
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="inline-block text-xs font-heading font-bold tracking-widest uppercase text-rust-clay bg-rust-clay/10 px-3 py-1 rounded-full mb-4">
              The Story Behind
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-foreground font-heading">
              The Story Behind the Spirit Dolls
            </h2>
            <p className="text-lg text-foreground/90 italic mb-6 leading-relaxed font-body">
              The Spirit Dolls began during one of Rebecca's hardest seasons, while her husband was in the hospital for major surgery. Stitch by stitch, they became small companions for courage, healing, memory, and hope.
            </p>
            <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
              The first one she finished is titled <em>"You got this"</em>. When she completed it, her husband took a turn for the better.
            </p>
            <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
              Each Spirit Doll is handmade from natural materials — twigs, reclaimed fabrics, beads, and intuitive design — and arrives with a free story card. They aren't products so much as small talismans, made for the tender moments we all carry.
            </p>
            <a
              href={`${ETSY_SHOP_URL}/section/52988996`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-heading font-bold text-rust-clay underline underline-offset-4 hover:text-rust-clay/80"
            >
              See the Spirit Dolls on Etsy →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritStory;
