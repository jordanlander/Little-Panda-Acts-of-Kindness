import Hero from "@/components/Hero";
import FeaturedDolls from "@/components/FeaturedDolls";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AdoptedGallery from "@/components/AdoptedGallery";

const Index = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rebecca Coppock - Handmade Art Dolls",
    "url": "https://rebeccacoppock.com",
    "description": "Discover one-of-a-kind handmade dolls created by retired art teacher Rebecca Coppock. Each character is lovingly stitched from recycled sweaters and shirts.",
    "author": {
      "@type": "Person",
      "name": "Rebecca Coppock"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Rebecca Coppock • Hand-Stitched Dolls & Original Art in Erie, PA"
        description="Discover one-of-a-kind handmade dolls created by retired art teacher Rebecca Coppock. Each character is lovingly stitched from recycled sweaters and shirts, crafted with personality, heart, and humor. Free U.S. shipping from Pennsylvania. International collectors welcome."
        keywords="Rebecca Coppock, handmade dolls, art dolls, recycled sweater dolls, plush monster dolls, unique handmade gifts, Erie PA artists, Little Panda Acts of Kindness, one-of-a-kind dolls, upcycled fabric art"
        canonical="/"
        jsonLd={homeSchema}
      />
      <Hero />
      <FeaturedDolls />
      <About />
      <AdoptedGallery compact />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;