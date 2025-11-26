import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ReturnPolicy from "@/components/ReturnPolicy";
import CountdownTimer from "@/components/CountdownTimer";
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
import willowImg from "@/assets/dolls/spirit/willow.jpg";
import ravenImg from "@/assets/dolls/spirit/raven.jpg";
import lunaImg from "@/assets/dolls/spirit/luna.jpg";
import mossImg from "@/assets/dolls/spirit/moss.jpg";
import emberImg from "@/assets/dolls/spirit/ember.jpg";
import astraImg from "@/assets/dolls/spirit/astra.jpg";
import solsticeImg from "@/assets/dolls/spirit/solstice.jpg";
import brambleImg from "@/assets/dolls/spirit/bramble.jpg";

type Doll = {
  name: string;
  image: string;
  story?: string;
  squareUrl?: string;
  sold?: boolean;
  collection: "random" | "love" | "spirit";
  price?: string;
};

const allDolls: Doll[] = [
  { name: "Ellie", image: ellieImg, story: "Soft and snuggly, Ellie loves afternoon naps and warm hugs.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/ellie-random-acts-of-love-collection/T6MF3TMPBTWKSZPEGD5DOVTC", collection: "random", price: "$95" },
  { name: "Bert", image: bertImg, story: "Bert is curious and kind, always ready for a new adventure.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/bert-random-acts-of-love-collection/IFAAMXJYWQHB2A574XJRSWJ6", collection: "random", price: "$95" },
  { name: "Edith", image: edithImg, story: "Gentle Edith enjoys quiet moments and bedtime stories.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/edith-random-acts-of-love-collection/OSRAPVAO7FIIUBVG4RGKYERC", collection: "random", price: "$95" },
  { name: "Eddie", image: eddieImg, story: "Eddie is playful and spirited, bringing joy wherever he goes.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/eddie-random-acts-of-love-collection/2RTKBTQ3QZQUJ3KTFGFPZCYH", collection: "random", price: "$95" },
  { name: "Ginger", image: gingerImg, story: "Ginger is sweet and thoughtful, a loyal companion through and through.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/ginger-random-acts-of-love-collection/K45MMJU3VL76IOXDAT5NZF2K", collection: "random", price: "$95" },
  { name: "Steve", image: steveImg, story: "Steve loves comfort and calm, perfect for cozy evenings.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/steve-random-acts-of-love-collection/CMGXSY62YVE4ASJBDPUNA2EH", collection: "random", price: "$95" },
  { name: "Earl", image: earlImg, story: "Earl is wise and warm-hearted, a true friend to all.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/earl-random-acts-of-love-collection/7Y65CQPUU7FC3QAYYSANGX4K", collection: "random", price: "$95" },
  { name: "Hugh", image: hughImg, story: "Hugh is gentle and caring, always ready to listen.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/hugh-random-acts-of-love-collection/ZG36FZQB4S4GCNMESTXEYHZZ", collection: "random", price: "$95" },
  { name: "Scott", image: scottImg, story: "Scott is cheerful and bright, bringing smiles to every day.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/scott-random-acts-of-love-collection/J24FSAJNJ7JQDERQLLLE6SGC", collection: "random", price: "$95" },
  { name: "Charlie", image: charlieImg, story: "An artsy soul with a bold personality and unique flair.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/charlie-love-happens-collection/KFM54CIZNBC2MP4RQZCI2S7H", collection: "love", price: "$95" },
  { name: "Agnes", image: agnesImg, story: "Agnes is creative and expressive, a true work of art.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/agnes-love-happens-collection/M2KMZKUDQ6CIG4B75MEOY3VR", collection: "love", price: "$95" },
  { name: "Jane", image: janeImg, story: "Jane is elegant and sophisticated, made for display.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/jane-love-happens-collection/BXOS2EB5XJ3VRKBNQ2XOMOQI", collection: "love", price: "$95" },
  { name: "Tim", image: timImg, story: "Tim is quirky and charming, full of character.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/tim-love-happens-collection/WQ5VDXOZ5F7MRHQB2FXZPLJS", collection: "love", price: "$95" },
  { name: "Lee", image: leeImg, story: "Lee is modern and stylish, a statement piece.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/lee-love-happens-collection/G256A2KSTXDFI4FHFIVFGQRG", collection: "love", price: "$95" },
  { name: "Peggy", image: peggyImg, story: "Peggy is vintage-inspired and whimsical.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/peggy-love-happens-collection/S3OSQEGQHMDKZVR5FRX5ZTTP", collection: "love", price: "$95" },
  { name: "James", image: jamesImg, story: "James is distinguished and refined.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/james-love-happens-collection/O2ONXIGIXOWPKIFAF5SMHGBP", collection: "love", price: "$95" },
  { name: "Uli", image: uliImg, story: "Uli is artistic and unconventional.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/uli-love-happens-collection/W7QTSA4W5KLVHMRGZPJZDUR2", collection: "love", price: "$95" },
  { name: "Sue", image: sueImg, story: "Sue is graceful and poised.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/sue-love-happens-collection/KB5QRXAV7VGST5BWWIY6UHZ3", collection: "love", price: "$95" },
  { name: "Darrell", image: darrellImg, story: "Darrell is bold and confident.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/darrell-love-happens-collection/DSPVBFYX5OI7Z7HRYG3ZGVLJ", collection: "love", price: "$95" },
  { name: "Otis", image: otisImg, story: "Otis is fun-loving and spirited.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/otis-love-happens-collection/WM6RUEJWJH4IRFEZLHDWUQEE", collection: "love", price: "$95" },
  { name: "Henry", image: henryImg, story: "Henry is classic and timeless.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/henry-love-happens-collection/OZGUX7XAW6WXO3LWCOHYRVGB", collection: "love", price: "$95" },
  { name: "Stan", image: stanImg, story: "Stan is unique and memorable.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/stan-love-happens-collection/N236IRITL3D2WVGAQEFCWDQ4", collection: "love", price: "$95" },
  { name: "Mary", image: maryImg, story: "Mary is sweet and endearing.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/mary-love-happens-collection/4JHE4RXMKCH3YH6FZ2S77VUJ", collection: "love", price: "$95" },
  { name: "Baily", image: bailyImg, story: "Baily is playful and expressive.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/baily-love-happens-collection/SU577UYER2GOOLD6QDG7ZJVV", collection: "love", price: "$95" },
  { name: "Trevor", image: trevorImg, story: "Trevor is adventurous and free-spirited.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/trevor-love-happens-collection/NUPUSKCH2CJYQYGNYQ3Y5L6R", collection: "love", price: "$95" },
  { name: "Kim", image: kimImg, story: "Kim is stylish and contemporary.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/kim-love-happens-collection/E2YWBMAHRIWPQSRKFNOLGOHF", collection: "love", price: "$95" },
  { name: "Ann", image: annImg, story: "Ann is gentle and artistic.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/ann-love-happens-collection/Y3DKZF5NOOSXRDONN2EZH47M", collection: "love", price: "$95" },
  { name: "Howard", image: howardImg, story: "Howard is distinguished and one-of-a-kind.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/howard-love-happens-collection/K6CQWMDCLD3WMJOH63EUH3AB", collection: "love", price: "$95" },
  { name: "Willow", image: willowImg, story: "A guardian of tender moments, wrapped in lace and light.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/willow-spirit-doll-collection-/ZE7TQENTFD76VXEY4S6VOFC7", collection: "spirit", price: "$65" },
  { name: "Raven", image: ravenImg, story: "Keeper of ancient wisdom and midnight magic.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/raven-spirit-doll-collection-/OMQRNZJMYNIBEGAZXHXGB4DM", collection: "spirit", price: "$65" },
  { name: "Luna", image: lunaImg, story: "She holds space between shadow and moonlight, a companion for quiet strength.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/luna-spirit-doll-collection-/C42E26TDVRV7FTAJAYR3VRCJ", collection: "spirit", price: "$65" },
  { name: "Moss", image: mossImg, story: "Born from earth's whispers, she carries the healing power of wild places.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/moss-spirit-doll-collection-/KYZRSNXVAE6T3FKXGWDEGKYB", collection: "spirit", price: "$65" },
  { name: "Ember", image: emberImg, story: "A talisman of warmth, holding the sacred flame of resilience.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/ember-spirit-doll-collection-/4AG6KK7OF4KGKN5VDPJU6Q45", collection: "spirit", price: "$65" },
  { name: "Astra", image: astraImg, story: "Woven with stardust and memory, a guide through life's deepest passages.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/astra-spirit-doll-collection-/TJHGJKA5HSAZKPLVZ3EAOIHM", collection: "spirit", price: "$65" },
  { name: "Solstice", image: solsticeImg, story: "She marks the turning of seasons, a reminder that light returns.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/solstice-spirit-doll-collection-/H6REGDYT5SDROX42W6AAE3V6", collection: "spirit", price: "$65" },
  { name: "Bramble", image: brambleImg, story: "Wild and unbound, she teaches us to embrace our beautiful imperfections.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/bramble-spirit-doll-collection-/BQH635XA63GUSIZDR35AIO53", collection: "spirit", price: "$65" }
];

const DollCard = ({ name, image, story, squareUrl, sold = false, price }: Doll) => {
  const originalPrice = price === "$65" ? 65 : 95;
  const salePrice = (originalPrice * 0.5).toFixed(2);
  
  return (
    <Card className="overflow-hidden group hover:scale-105 transition-transform duration-300 soft-glow bg-card">
      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
        <img 
          src={image || dollPlaceholder} 
          alt={`Handmade upcycled doll named ${name} by artist Rebecca Coppock`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          style={{ contentVisibility: 'auto' }}
        />
        {/* Sale Badge */}
        <div className="absolute top-3 right-3 bg-rust-clay text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
          50% OFF
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-heading text-xl font-semibold mb-2">{name}</h3>
        {story && (
          <p className="text-sm text-muted-foreground mb-3 font-body italic min-h-[3rem]">
            {story}
          </p>
        )}
        {/* Vintage-Inspired Pricing */}
        <div className="mb-3 flex items-center justify-center gap-3">
          <div className="relative">
            <span className="text-lg font-bold text-muted-foreground/50 line-through decoration-2 decoration-rust-clay">
              ${originalPrice}
            </span>
          </div>
          <div className="bg-gradient-to-r from-mint-fresh to-blush-pink px-3 py-1 rounded-md shadow-sm">
            <span className="text-2xl font-bold text-foreground font-heading">
              ${salePrice}
            </span>
          </div>
        </div>
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
};

const Shop = () => {
  const [filter, setFilter] = useState<"all" | "random" | "love" | "spirit">("all");
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set sale end date (December 13, 2025 at midnight)
  const saleEndDate = new Date('2025-12-13T23:59:59');

  // Handle hash navigation on page load and when hash changes
  useEffect(() => {
    const hash = window.location.hash.split('#').pop();
    if (hash && hash !== 'shop') {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location]);

  const handleNavigateToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const filteredDolls = filter === "all" 
    ? allDolls 
    : allDolls.filter(doll => doll.collection === filter);

  const getSEOTitle = () => {
    if (filter === "random") return "Random Acts of Love Collection • Handmade Upcycled Dolls";
    if (filter === "love") return "Love Happens Collection • Unique Plush Characters by Rebecca Coppock";
    if (filter === "spirit") return "Spirit & Healing Dolls • Mystical Handmade Companions by Rebecca Coppock";
    return "Handmade One-of-a-Kind Dolls for Adoption • Rebecca Coppock Art";
  };

  const getSEODescription = () => {
    if (filter === "random") return "Meet the Random Acts of Love Collection — soft, quirky, hand-stitched dolls made from reclaimed sweaters and shirts. Every doll has its own personality and is available for adoption with free U.S. shipping.";
    if (filter === "love") return "Explore colorful, expressive dolls inspired by stories, nostalgia, and creativity. Each piece is handmade by artist Rebecca Coppock from reclaimed fabrics.";
    if (filter === "spirit") return "Spiritual and healing dolls created during moments of life's deepest tenderness—each one holding space for magic, memory, and inner strength. Handcrafted from natural materials, twigs, fabrics, and beads.";
    return "Shop all handmade dolls by artist Rebecca Coppock. Each doll is crafted from recycled materials and designed with a unique personality, ready to be adopted and shipped free within the U.S.";
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Little Panda Acts of Kindness",
    "founder": {
      "@type": "Person",
      "name": "Rebecca Coppock"
    },
    "url": "https://rebeccacoppock.com",
    "logo": "https://rebeccacoppock.com/panda-logo.jpg",
    "sameAs": [
      "https://www.instagram.com/littlepandaactsofkindness",
      "https://www.facebook.com/littlepandaacts"
    ],
    "description": "Handmade one-of-a-kind dolls crafted from recycled materials by artist Rebecca Coppock"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rebeccacoppock.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shop",
        "item": "https://rebeccacoppock.com/shop"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={getSEOTitle()}
        description={getSEODescription()}
        keywords="adoptable dolls, handmade plush dolls, soft sculpture art, recycled dolls, eco-friendly gifts, one-of-a-kind plush art, art dolls for sale"
        canonical="/shop"
        jsonLd={[organizationSchema, breadcrumbSchema]}
      />
      {/* Header */}
      <header className="py-4 px-4 border-b border-border/20 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Rebecca Coppock
          </Link>
          <nav className="flex gap-4 items-center">
            <Link to="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors font-heading">
              Home
            </Link>
            <button 
              onClick={() => handleNavigateToSection('about')}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-heading"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigateToSection('contact')}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-heading"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Shop Content */}
      <section className="py-12 px-4 starburst-pattern">
        <div className="container mx-auto max-w-7xl">
          {/* Black Friday Sale Banner */}
          <div className="max-w-4xl mx-auto mb-8 bg-rust-clay/10 border-2 border-rust-clay rounded-lg p-6 text-center animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold text-rust-clay mb-2 font-heading">
              🎉 Early Black Friday & Holiday Sale! 🎉
            </p>
            <p className="text-lg text-foreground/90 font-semibold mb-4">
              50% OFF All Dolls Site-Wide
            </p>
            <CountdownTimer targetDate={saleEndDate} />
            <p className="text-sm text-foreground/70 mt-4">
              Free U.S. Shipping
            </p>
          </div>

          {/* Title & Shipping Info */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Shop All Dolls
            </h1>
            <p className="text-lg text-foreground/80 mb-2">
              Each doll is one-of-a-kind, handmade with love
            </p>
            <p className="text-sm text-rust-clay font-heading">
              Free Shipping (U.S.) • Ships from Pennsylvania by the artist
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button
              onClick={() => setFilter("all")}
              variant={filter === "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All Dolls
            </Button>
            <Button
              onClick={() => setFilter("random")}
              variant={filter === "random" ? "default" : "outline"}
              className="rounded-full"
            >
              Random Acts of Love
            </Button>
            <Button
              onClick={() => setFilter("love")}
              variant={filter === "love" ? "default" : "outline"}
              className="rounded-full"
            >
              Love Happens
            </Button>
            <Button
              onClick={() => setFilter("spirit")}
              variant={filter === "spirit" ? "default" : "outline"}
              className="rounded-full"
            >
              Spirit Dolls
            </Button>
          </div>

          {/* Spirit Dolls Collection Intro */}
          {filter === "spirit" && (
            <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-in">
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
                🌿 Spirit & Healing Dolls 🌿
              </h2>
              <p className="text-lg text-foreground/90 mb-6 font-body italic">
                Spiritual and healing dolls created during moments of life's deepest tenderness—each one holding space for magic, memory, and inner strength.
              </p>
              <div className="text-left bg-card/50 p-6 rounded-lg border border-border/20 soft-glow">
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  I began creating these dolls when my husband went into the hospital for major surgery. I worked on a doll during his stay in the hospital, it is titled "You got this" spirit doll. When I finished this doll, my husband took a turn for the better.
                </p>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  I believe the spirit/healing dolls have an enchanting exploration of dolls as vessels of magic, memory, and spirit. I find that these dolls hold space for healing, power, and kindred spirits of our childhood past.
                </p>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  We all have that one magic moment or object that we hold dear to help us as we journey through tough moments in our lives. As Clarissa Pinkola Estes writes, "Dolls are believed to be infused with life by their makers. They are used as markers of authority and talismans to remind one of one's own power."
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Each Spirit Doll is handmade from natural materials including twigs, fabrics, beads, and intuitive design. Free Story Card Included.
                </p>
              </div>
            </div>
          )}

          {/* Dolls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-slide-up">
            {filteredDolls.map((doll) => (
              <DollCard key={doll.name} {...doll} />
            ))}
          </div>
        </div>
      </section>

      <ReturnPolicy />
      <Footer />
    </div>
  );
};

export default Shop;
