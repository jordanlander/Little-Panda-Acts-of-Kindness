import Hero from "@/components/Hero";
import FeaturedDolls from "@/components/FeaturedDolls";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedDolls />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;