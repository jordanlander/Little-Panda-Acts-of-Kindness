import artistPortrait from "@/assets/artist-portrait.jpg";
import pandaLogo from "@/assets/panda-logo.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12 animate-fade-in">
          <div className="w-48 h-48 mb-6 rounded-2xl overflow-hidden bg-card soft-glow">
            <img 
              src={pandaLogo} 
              alt="Little Panda Acts of Kindness logo by Rebecca Coppock"
              className="w-full h-full object-contain p-4"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground">
            About the Artist
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="rounded-3xl overflow-hidden mid-century-shadow">
              <img 
                src={artistPortrait} 
                alt="Rebecca Coppock - doll maker and artist"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed animate-fade-in">
            <blockquote className="text-2xl font-heading italic text-rust-clay border-l-4 border-rust-clay pl-6 mb-8">
              "Finding comfort and character in handmade art"
            </blockquote>
            
            <p>
              I am a retired art teacher with years of experience working with PreK through 
              12th-grade students. I started Little Panda about three years ago after retiring, 
              wanting to begin creating my own personal art and find a purpose in sharing it 
              with others.
            </p>
            
            <p>
              After my son got me involved with the Erie Pride Festival, I found my purpose 
              through the creation of semi-ugly dolls, recycled stuffed animals, and now my 
              closet monsters and inspirational drawings. Each doll is hand-stitched from 
              recycled sweaters and shirts, designed to have its own personality and name.
            </p>
            
            <p className="text-rust-clay font-semibold italic">
              I will take orders online and ship free of charge. I try to share a little 
              "Panda Acts of Kindness" with the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;