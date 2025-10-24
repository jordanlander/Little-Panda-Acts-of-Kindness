import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import About from "@/components/About";
import ShopPlaceholder from "@/components/ShopPlaceholder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Collections />
      <About />
      <ShopPlaceholder />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;