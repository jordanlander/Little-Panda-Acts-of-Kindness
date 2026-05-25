import Hero from "@/components/Hero";
import AvailableNow from "@/components/AvailableNow";
import About from "@/components/About";
import SpiritStory from "@/components/SpiritStory";
import AdoptedGallery from "@/components/AdoptedGallery";
import CustomDollCTA from "@/components/CustomDollCTA";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { allDolls, collectionLabels } from "@/data/dolls";

const Index = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rebecca Coppock — Handmade Art Dolls",
    "url": "https://rebeccacoppock.com",
    "description":
      "Handmade one-of-a-kind dolls by artist Rebecca Coppock. Hand-stitched from reclaimed fabrics with personality, heart, and humor.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Little Panda Acts of Kindness",
    "founder": { "@type": "Person", "name": "Rebecca Coppock" },
    "url": "https://rebeccacoppock.com",
    "logo": "https://rebeccacoppock.com/panda-logo.jpg",
    "sameAs": [
      "https://littlepandaacts.etsy.com",
      "https://www.instagram.com/littlepandaactsofkindness",
      "https://www.facebook.com/littlepandaacts",
      "https://youtube.com/@littlepandaacts",
    ],
    "description":
      "Handmade one-of-a-kind dolls crafted from recycled materials by artist Rebecca Coppock.",
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rebecca Coppock",
    "jobTitle": "Artist & Dollmaker",
    "url": "https://rebeccacoppock.com",
    "image": "https://rebeccacoppock.com/artist-portrait.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Erie",
      "addressRegion": "PA",
      "addressCountry": "US",
    },
  };

  const availableForSchema = allDolls.filter((d) => !d.sold && d.etsyUrl).slice(0, 6);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Available Now — featured handmade dolls",
    "itemListElement": availableForSchema.map((d, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": d.etsyUrl,
      "name": d.name,
      "item": {
        "@type": "Product",
        "name": d.name,
        "image": d.image,
        "description": d.story,
        "category": collectionLabels[d.collection],
        "url": d.etsyUrl,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Rebecca Coppock • Hand-Stitched Dolls & Original Art in Erie, PA"
        description="One-of-a-kind handmade dolls by Rebecca Coppock — hand-stitched from reclaimed fabrics with heart, humor, and a little bit of magic. Free U.S. shipping. International collectors welcome."
        keywords="Rebecca Coppock, handmade dolls, art dolls, spirit dolls, recycled sweater dolls, plush art dolls, Erie PA artist, Little Panda Acts of Kindness, one-of-a-kind dolls, upcycled fabric art"
        canonical="/"
        jsonLd={[websiteSchema, organizationSchema, personSchema, itemListSchema]}
      />
      <Hero />
      <AvailableNow />
      <About />
      <SpiritStory />
      <AdoptedGallery compact />
      <CustomDollCTA />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
