import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import EtsyTag from "@/components/EtsyTag";
import { trackProductClick } from "@/lib/analytics";
import dollPlaceholder from "@/assets/doll-placeholder.jpg";
import { allDolls, type Doll } from "@/data/dolls";


const DollCard = ({ name, image, story, etsyUrl, sold = false, price, collection }: Doll) => {
  const originalPrice = parseFloat((price || "$95").replace('$', ''));
  const salePrice = (originalPrice * 0.70).toFixed(2);
  
  const CardContent = (
    <Card className={`overflow-hidden group transition-transform duration-300 soft-glow bg-card ${sold ? 'opacity-90' : 'hover:scale-105'}`}>
      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
        <img 
          src={image || dollPlaceholder} 
          alt={`Handmade upcycled doll named ${name} by artist Rebecca Coppock`}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-transform duration-300 ${sold ? 'grayscale-[40%]' : 'group-hover:scale-110'}`}
          style={{ contentVisibility: 'auto' }}
        />
        {/* Sold Overlay */}
        {sold && (
          <div className="absolute inset-0 bg-gradient-to-t from-blush-pink/60 to-transparent flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg transform -rotate-12 border-2 border-blush-pink">
              <span className="text-xl font-heading font-bold text-rust-clay">Found a Home! 💕</span>
            </div>
          </div>
        )}
        {/* Sale Badge */}
        {!sold && (
          <div className="absolute top-3 right-3 bg-rust-clay text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            30% OFF
          </div>
        )}
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
          {sold ? "Adopted ❤️" : "Available"}
        </p>
        <Button 
          variant="outline" 
          size="sm"
          disabled={!etsyUrl || sold}
          className="w-full rounded-full border-2 bg-rust-clay text-white hover:bg-rust-clay/90 transition-colors disabled:opacity-50"
        >
          {sold ? "Adopted" : etsyUrl ? (
            <>
              View {name} <ArrowRight className="ml-2 h-3 w-3" />
            </>
          ) : "Coming Soon"}
        </Button>
        {!sold && etsyUrl && <EtsyTag />}
      </div>
    </Card>
  );


  if (etsyUrl && !sold) {
    const handleClick = () => {
      trackProductClick({
        dollName: name,
        collection: collection,
        price: parseFloat((originalPrice * 0.70).toFixed(2)),
        url: etsyUrl
      });
    };
    
    return (
      <a href={etsyUrl} target="_blank" rel="noopener noreferrer" className="block cursor-pointer" onClick={handleClick}>
        {CardContent}
      </a>
    );
  }
  
  return CardContent;
};

const Shop = () => {
  const [filter, setFilter] = useState<"all" | "random" | "love" | "spirit" | "adopted">("all");
  const navigate = useNavigate();
  const location = useLocation();
  

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

  const filteredDolls = filter === "adopted"
    ? allDolls.filter(doll => doll.sold)
    : filter === "all"
    ? allDolls.filter(doll => !doll.sold)
    : allDolls.filter(doll => doll.collection === filter && !doll.sold);

  const adoptedInContext = filter === "adopted"
    ? []
    : filter === "all"
    ? allDolls.filter(doll => doll.sold)
    : allDolls.filter(doll => doll.collection === filter && doll.sold);

  const getSEOTitle = () => {
    if (filter === "random") return "Random Acts of Love Collection • Handmade Upcycled Dolls";
    if (filter === "love") return "Love Happens Collection • Unique Plush Characters by Rebecca Coppock";
    if (filter === "spirit") return "Spirit & Healing Dolls • Mystical Handmade Companions by Rebecca Coppock";
    if (filter === "adopted") return "Adopted Dolls • These Friends Found Their Forever Homes";
    return "Handmade One-of-a-Kind Dolls for Adoption • Rebecca Coppock Art";
  };

  const getSEODescription = () => {
    if (filter === "random") return "Meet the Random Acts of Love Collection — soft, quirky, hand-stitched dolls made from reclaimed sweaters and shirts. Every doll has its own personality and is available for adoption with free U.S. shipping. International collectors welcome.";
    if (filter === "love") return "Explore colorful, expressive dolls inspired by stories, nostalgia, and creativity. Each piece is handmade by artist Rebecca Coppock from reclaimed fabrics.";
    if (filter === "spirit") return "Spiritual and healing dolls created during moments of life's deepest tenderness—each one holding space for magic, memory, and inner strength. Handcrafted from natural materials, twigs, fabrics, and beads.";
    if (filter === "adopted") return "These handmade dolls have found their forever homes. Each one-of-a-kind creation by Rebecca Coppock is now bringing joy to their new families.";
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
      "https://littlepandaacts.etsy.com",
      "https://www.instagram.com/littlepandaactsofkindness",
      "https://www.facebook.com/littlepandaacts",
      "https://youtube.com/@littlepandaacts"
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
          <Link to="/" className="leading-tight hover:text-primary transition-colors">
            <span className="block text-xl font-bold text-foreground font-heading">Rebecca Coppock</span>
            <span className="block text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-rust-clay/90">Little Panda Acts of Kindness</span>
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
          {/* Early Adopters Sale Banner */}
          <div className="max-w-4xl mx-auto mb-8 bg-rust-clay/10 border-2 border-rust-clay rounded-lg p-6 text-center animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold text-rust-clay mb-2 font-heading">
              ✨ Early Adopters Sale — Now On! ✨
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-3">
              <span className="text-foreground/90 font-semibold font-heading">🏷️ Every doll already marked down</span>
              <span className="hidden sm:inline text-rust-clay">•</span>
              <span className="text-foreground/90 font-semibold font-heading">🎁 Discover bundle deals on Etsy</span>
            </div>
            <p className="text-xs text-foreground/60 mb-2">
              Bundle discounts applied at checkout on our Etsy shop
            </p>
            <p className="text-sm text-foreground/70">
              Free U.S. Shipping • International collectors welcome — <a href="mailto:littlepandaacts@gmail.com" className="underline hover:text-rust-clay">message for a custom quote</a>
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
              Free U.S. Shipping • Ships from Pennsylvania
            </p>
            <p className="text-xs text-foreground/60 mt-1">
              International collectors welcome — please <a href="mailto:littlepandaacts@gmail.com" className="underline hover:text-rust-clay">email littlepandaacts@gmail.com</a> for a custom shipping quote before purchase
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
            <Button
              onClick={() => setFilter("adopted")}
              variant={filter === "adopted" ? "default" : "outline"}
              className="rounded-full"
            >
              Adopted 💕
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

          {/* Recently Adopted — compact strip */}
          {adoptedInContext.length > 0 && (
            <div className="mt-20 pt-12 border-t-2 border-dashed border-blush-pink/40 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Recently Adopted — These Friends Found Their Forever Homes 💕
                </h2>
                <p className="text-sm text-muted-foreground font-body max-w-xl mx-auto">
                  Thank you for the love! These dolls have flown the nest — your kindred spirit is waiting above.
                </p>
              </div>
              <div className="flex justify-center gap-5 flex-wrap mb-8">
                {adoptedInContext.map((doll) => (
                  <div key={doll.name} className="relative group">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-blush-pink/60 shadow-md">
                      <img
                        src={doll.image}
                        alt={`${doll.name} — adopted handmade doll`}
                        loading="lazy"
                        className="w-full h-full object-cover sepia-[0.3] brightness-95"
                      />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow text-xs font-heading font-semibold text-rust-clay whitespace-nowrap">
                      {doll.name} 💕
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button
                  onClick={() => setFilter("adopted")}
                  variant="outline"
                  className="rounded-full"
                >
                  View all adopted dolls →
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <ReturnPolicy />
      <Footer />
    </div>
  );
};

export default Shop;
