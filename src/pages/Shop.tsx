import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ReturnPolicy from "@/components/ReturnPolicy";

import AdoptedGallery from "@/components/AdoptedGallery";
import { trackProductClick } from "@/lib/analytics";
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
import rootboundImg from "@/assets/dolls/spirit/rootbound.jpg";
import thistlewingImg from "@/assets/dolls/spirit/thistlewing.jpg";
import breathkeeperImg from "@/assets/dolls/spirit/breathkeeper.jpg";
import mendedImg from "@/assets/dolls/spirit/mended.jpg";
import reachImg from "@/assets/dolls/spirit/reach.jpg";
import keeperImg from "@/assets/dolls/spirit/keeper.jpg";
import stitchwiseImg from "@/assets/dolls/spirit/stitchwise.jpg";
import hearthImg from "@/assets/dolls/spirit/hearth.jpg";

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
  { name: "Ellie", image: ellieImg, story: "Soft and snuggly, Ellie loves afternoon naps and warm hugs.", squareUrl: "https://littlepandaacts.etsy.com/listing/4407618752/ellie-handmade-art-doll-from-recycled", collection: "random", price: "$95" },
  { name: "Bert", image: bertImg, story: "Bert is curious and kind, always ready for a new adventure.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424748861/bert-handmade-one-of-a-kind-art-doll", collection: "random", price: "$95" },
  { name: "Edith", image: edithImg, story: "Gentle Edith enjoys quiet moments and bedtime stories.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424759918/edith-random-acts-of-love-collection", collection: "random", price: "$95" },
  { name: "Eddie", image: eddieImg, story: "Eddie is playful and spirited, bringing joy wherever he goes.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424752593/eddie-random-acts-of-love-collection", collection: "random", price: "$95" },
  { name: "Ginger", image: gingerImg, story: "Ginger is sweet and thoughtful, a loyal companion through and through.", squareUrl: "https://littlepandaacts.etsy.com/listing/4407640841/ginger-hand-stitched-art-plush-from", collection: "random", price: "$95" },
  { name: "Steve", image: steveImg, story: "Steve loves comfort and calm, perfect for cozy evenings.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424762336/steve-random-acts-of-love-collection", collection: "random", price: "$95" },
  { name: "Earl", image: earlImg, story: "Earl is wise and warm-hearted, a true friend to all.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424750889/earl-handmade-one-of-a-kind-art-doll", collection: "random", price: "$95" },
  { name: "Hugh", image: hughImg, story: "Hugh is gentle and caring, always ready to listen.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424761252/hugh-random-acts-of-love-collection", collection: "random", price: "$95" },
  { name: "Scott", image: scottImg, story: "Scott is cheerful and bright, bringing smiles to every day.", squareUrl: "https://littlepandaacts.etsy.com/listing/4407648465/scott-hand-stitched-soft-sculpture-from", collection: "random", price: "$95" },
  { name: "Charlie", image: charlieImg, story: "An artsy soul with a bold personality and unique flair.", squareUrl: "https://littlepandaacts.etsy.com/listing/4412102380/charlie-handmade-primitive-folk-art-soft", collection: "love", price: "$95" },
  { name: "Agnes", image: agnesImg, story: "Agnes is creative and expressive, a true work of art.", squareUrl: "https://littlepandaacts.etsy.com/listing/4427367211/agnes-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Jane", image: janeImg, story: "Jane is elegant and sophisticated, made for display.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428379150/jane-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Tim", image: timImg, story: "Tim is quirky and charming, full of character.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428382225/tim-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Lee", image: leeImg, story: "Lee is modern and stylish, a statement piece.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428384226/lee-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Peggy", image: peggyImg, story: "Peggy is vintage-inspired and whimsical.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428384226/peggy-love-happens-collection-upcycled", collection: "love", price: "$95", sold: true },
  { name: "James", image: jamesImg, story: "James is distinguished and refined.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428371063/james-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Uli", image: uliImg, story: "Uli is artistic and unconventional.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428387303/uli-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Sue", image: sueImg, story: "Sue is graceful and poised.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428384226/sue-love-happens-collection-upcycled", collection: "love", price: "$95", sold: true },
  { name: "Darrell", image: darrellImg, story: "Darrell is bold and confident.", squareUrl: "https://littlepandaacts.etsy.com/listing/4427377183/darrell-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Otis", image: otisImg, story: "Otis is fun-loving and spirited.", squareUrl: "https://littlepandaacts.etsy.com/listing/4427377183/otis-love-happens-collection-upcycled", collection: "love", price: "$95", sold: true },
  { name: "Henry", image: henryImg, story: "Henry is classic and timeless.", squareUrl: "https://littlepandaacts.etsy.com/listing/4427383960/henry-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Stan", image: stanImg, story: "Stan is unique and memorable.", squareUrl: "https://littlepandaacts.etsy.com/listing/4427383960/stan-love-happens-collection-upcycled", collection: "love", price: "$95", sold: true },
  { name: "Mary", image: maryImg, story: "Mary is sweet and endearing.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428380157/mary-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Baily", image: bailyImg, story: "Baily is playful and expressive.", squareUrl: "https://littlepandaacts.etsy.com/listing/4427376346/baily-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Trevor", image: trevorImg, story: "Trevor is adventurous and free-spirited.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428383735/trevor-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Kim", image: kimImg, story: "Kim is stylish and contemporary.", squareUrl: "https://littlepandaacts.etsy.com/listing/4428376585/kim-love-happens-collection-upcycled", collection: "love", price: "$95", sold: true },
  { name: "Ann", image: annImg, story: "Ann is gentle and artistic.", squareUrl: "https://littlepandaacts.etsy.com/listing/4427370193/ann-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Howard", image: howardImg, story: "Howard is distinguished and one-of-a-kind.", squareUrl: "https://littlepandaacts.etsy.com/listing/4427386042/howard-love-happens-collection-upcycled", collection: "love", price: "$95" },
  { name: "Willow", image: willowImg, story: "A guardian of tender moments, wrapped in lace and light.", squareUrl: "https://littlepandaacts.etsy.com/listing/4415531725/willow-spirit-doll-handmade-folk-art", collection: "spirit", price: "$65" },
  { name: "Raven", image: ravenImg, story: "Keeper of ancient wisdom and midnight magic.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424486931/raven-spirit-doll-collection-handmade", collection: "spirit", price: "$65", sold: true },
  { name: "Luna", image: lunaImg, story: "She holds space between shadow and moonlight, a companion for quiet strength.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424483731/luna-spirit-doll-collection-handmade", collection: "spirit", price: "$65" },
  { name: "Moss", image: mossImg, story: "Born from earth's whispers, she carries the healing power of wild places.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424493852/moss-spirit-doll-collection-handmade", collection: "spirit", price: "$65", sold: true },
  { name: "Ember", image: emberImg, story: "A talisman of warmth, holding the sacred flame of resilience.", squareUrl: "https://little-panda-acts-of-kindness.square.site/product/ember-spirit-doll-collection-/4AG6KK7OF4KGKN5VDPJU6Q45", collection: "spirit", price: "$65", sold: true },
  { name: "Astra", image: astraImg, story: "Woven with stardust and memory, a guide through life's deepest passages.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424479727/astra-spirit-doll-collection-handmade", collection: "spirit", price: "$65" },
  { name: "Solstice", image: solsticeImg, story: "She marks the turning of seasons, a reminder that light returns.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424492833/solstice-spirit-doll-collection-handmade", collection: "spirit", price: "$65", sold: true },
  { name: "Bramble", image: brambleImg, story: "Wild and unbound, she teaches us to embrace our beautiful imperfections.", squareUrl: "https://littlepandaacts.etsy.com/listing/4424495423/bramble-spirit-doll-collection-handmade", collection: "spirit", price: "$65" },
  { name: "Rootbound", image: rootboundImg, story: "A quiet talisman of earth and breath, grounding you in the present moment.", squareUrl: "https://littlepandaacts.etsy.com/listing/4432872532", collection: "spirit", price: "$65", sold: true },
  { name: "Thistlewing", image: thistlewingImg, story: "A charm of air and becoming, she carries the lightness of transformation.", squareUrl: "https://littlepandaacts.etsy.com/listing/4432889516", collection: "spirit", price: "$65" },
  { name: "Breathkeeper", image: breathkeeperImg, story: "A charm of fire, air and staying alive—she holds the sacred rhythm of breath.", squareUrl: "https://littlepandaacts.etsy.com/listing/4433452248", collection: "spirit", price: "$65" },
  { name: "Mended", image: mendedImg, story: "A charm of memory and repair—she honors the beauty in what's been broken and restored.", squareUrl: "https://littlepandaacts.etsy.com/listing/4433454310", collection: "spirit", price: "$65", sold: true },
  { name: "Reach", image: reachImg, story: "A charm of growth and claiming space—she encourages you to stretch toward the light.", squareUrl: "https://littlepandaacts.etsy.com/listing/4433456764", collection: "spirit", price: "$65" },
  { name: "Keeper", image: keeperImg, story: "A charm of endurance and care—she guards the tender work of showing up, again and again.", squareUrl: "https://littlepandaacts.etsy.com/listing/4434065695", collection: "spirit", price: "$65" },
  { name: "Stitchwise", image: stitchwiseImg, story: "A charm of attention and continuance—she honors the quiet wisdom found in mending.", squareUrl: "https://littlepandaacts.etsy.com/listing/4434069507", collection: "spirit", price: "$65" },
  { name: "Hearth", image: hearthImg, story: "A talisman of home and holding—she embodies the warmth and comfort of belonging.", squareUrl: "https://littlepandaacts.etsy.com/listing/4436987330/hearth-folk-art-spirit-doll-a-talisman", collection: "spirit", price: "$65" }
];

const DollCard = ({ name, image, story, squareUrl, sold = false, price, collection }: Doll) => {
  const originalPrice = price === "$65" ? 65 : 95;
  const salePrice = (originalPrice * 0.55).toFixed(2);
  
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
            45% OFF
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
          disabled={!squareUrl || sold}
          className="w-full rounded-full border-2 bg-rust-clay text-white hover:bg-rust-clay/90 transition-colors disabled:opacity-50"
        >
          {sold ? "Adopted" : squareUrl ? (
            <>
              Buy Now <ExternalLink className="ml-2 h-3 w-3" />
            </>
          ) : "Coming Soon"}
        </Button>
      </div>
    </Card>
  );

  if (squareUrl && !sold) {
    const handleClick = () => {
      trackProductClick({
        dollName: name,
        collection: collection,
        price: price === "$65" ? 35.75 : 52.25,
        url: squareUrl
      });
    };
    
    return (
      <a href={squareUrl} target="_blank" rel="noopener noreferrer" className="block cursor-pointer" onClick={handleClick}>
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

  const filteredDolls = filter === "all" 
    ? allDolls 
    : filter === "adopted"
    ? allDolls.filter(doll => doll.sold)
    : allDolls.filter(doll => doll.collection === filter);

  const getSEOTitle = () => {
    if (filter === "random") return "Random Acts of Love Collection • Handmade Upcycled Dolls";
    if (filter === "love") return "Love Happens Collection • Unique Plush Characters by Rebecca Coppock";
    if (filter === "spirit") return "Spirit & Healing Dolls • Mystical Handmade Companions by Rebecca Coppock";
    if (filter === "adopted") return "Adopted Dolls • These Friends Found Their Forever Homes";
    return "Handmade One-of-a-Kind Dolls for Adoption • Rebecca Coppock Art";
  };

  const getSEODescription = () => {
    if (filter === "random") return "Meet the Random Acts of Love Collection — soft, quirky, hand-stitched dolls made from reclaimed sweaters and shirts. Every doll has its own personality and is available for adoption with free U.S. shipping.";
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
          {/* Early Adopters Sale Banner */}
          <div className="max-w-4xl mx-auto mb-8 bg-rust-clay/10 border-2 border-rust-clay rounded-lg p-6 text-center animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold text-rust-clay mb-2 font-heading">
              ✨ Early Adopters Sale — 45% Off! ✨
            </p>
            <p className="text-lg text-foreground/90 font-semibold mb-2">
              Be one of the first 100 online adopters to save!
            </p>
            <p className="text-sm text-foreground/70">
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
        </div>
      </section>

      <AdoptedGallery />
      <ReturnPolicy />
      <Footer />
    </div>
  );
};

export default Shop;
