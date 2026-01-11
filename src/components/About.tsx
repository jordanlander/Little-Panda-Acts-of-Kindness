import artistWithDolls from "@/assets/artist-with-dolls-captioned.webp";
import artistWorkspace1 from "@/assets/artist-workspace-captioned.webp";
import artistWorkspace2 from "@/assets/artist-stitching-captioned.webp";
import pandaLogo from "@/assets/panda-logo.jpg";
import SEO from "@/components/SEO";

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rebecca Coppock",
    "jobTitle": "Artist & Dollmaker",
    "description": "Retired art teacher and the creative mind behind Little Panda Acts of Kindness. Rebecca transforms recycled fabrics into soulful, quirky dolls with distinct personalities.",
    "url": "https://rebeccacoppock.com",
    "image": "https://rebeccacoppock.com/artist-portrait.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Erie",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Art Education"
    }
  };

  return (
    <section id="about" className="relative py-12 md:py-16 px-4 overflow-hidden">
      <SEO
        title="About Rebecca Coppock • Erie, PA Artist & Dollmaker"
        description="Learn about Rebecca Coppock, a retired art teacher and the creative mind behind Little Panda Acts of Kindness. Rebecca transforms recycled fabrics into soulful, quirky dolls with distinct personalities."
        keywords="Rebecca Coppock, Erie PA artist, dollmaker, retired art teacher, Little Panda Acts of Kindness, recycled fabric art, handmade doll artist"
        canonical="/about"
        jsonLd={aboutSchema}
      />
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-60" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero section with logo and title */}
        <div className="flex flex-col items-center mb-20 animate-fade-in">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
            <div className="relative w-56 h-56 rounded-3xl overflow-hidden soft-glow transform group-hover:scale-105 transition-transform duration-500">
              <img 
                src={pandaLogo} 
                alt="Little Panda Acts of Kindness logo by Rebecca Coppock"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-6 bg-card"
              />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-4 font-heading">
            Meet Rebecca
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl">
            The heart and hands behind Little Panda Acts of Kindness
          </p>
        </div>
        
        {/* Story timeline */}
        <div className="space-y-16">
          {/* First story block - The Beginning */}
          <div className="grid md:grid-cols-5 gap-8 items-center animate-fade-in">
            <div className="md:col-span-3 order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden mid-century-shadow transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={artistWithDolls} 
                  alt="Rebecca Coppock holding several handmade dolls - Adopt a friend, spread a little kindness"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 order-1 md:order-2 space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">The Beginning</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground font-heading">
                From Teacher to Creator
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                After years of inspiring PreK through 12th-grade students as an art teacher, 
                Rebecca retired with a dream: to create her own personal art and share it with 
                the world. Three years ago, Little Panda was born.
              </p>
            </div>
          </div>

          {/* Quote block */}
          <div className="max-w-4xl mx-auto animate-fade-in">
            <blockquote className="relative text-center py-12 px-8 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 mid-century-shadow">
              <div className="absolute top-6 left-6 text-6xl text-primary/20 font-serif">"</div>
              <p className="text-3xl md:text-4xl font-heading italic text-foreground mb-4 relative z-10">
                Finding comfort and character in handmade art
              </p>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
            </blockquote>
          </div>

          {/* Second story block - The Purpose */}
          <div className="grid md:grid-cols-5 gap-8 items-center animate-fade-in">
            <div className="md:col-span-2 space-y-4">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full">
                <span className="text-sm font-semibold text-foreground">The Purpose</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground font-heading">
                A Journey of Pride & Personality
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Inspired by her son's involvement with the Erie Pride Festival, Rebecca discovered 
                her true calling: creating semi-ugly dolls, recycled stuffed animals, closet monsters, 
                and inspirational drawings. Each piece is hand-stitched from recycled sweaters and 
                shirts, with its own unique personality and name.
              </p>
            </div>
            
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative rounded-3xl overflow-hidden soft-glow transform hover:scale-105 transition-all duration-500">
                  <img 
                    src={artistWorkspace1} 
                    alt="Rebecca Coppock at her workspace - Handmade with heart and hope"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden soft-glow transform hover:scale-105 transition-all duration-500">
                  <img 
                    src={artistWorkspace2} 
                    alt="Rebecca Coppock crafting dolls - Every stitch tells a story"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Call to action block */}
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 p-12 mid-century-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-foreground font-heading mb-6">
                  Spreading Kindness, One Doll at a Time
                </h3>
                <p className="text-xl text-muted-foreground mb-1">
                  Custom orders are welcome, and every doll ships free within the U.S.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  International collectors welcome — <a href="mailto:littlepandaacts@gmail.com" className="underline hover:text-primary">email for a custom shipping quote</a>
                </p>
                <p className="text-2xl font-semibold text-primary italic font-heading">
                  Because every creation is a little "Panda Act of Kindness"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;