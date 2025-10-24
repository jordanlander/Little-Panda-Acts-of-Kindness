import artistPortrait from "@/assets/artist-portrait.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
          About the Artist
        </h2>
        
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
            <p>
              I am an artist! I paint, draw, and now create fabric dolls. I have always 
              loved plush animals and dolls since childhood. My mother taught me simple 
              sewing skills, and every doll I make is hand-stitched from recycled sweaters 
              and shirts.
            </p>
            
            <p>
              I design each doll to have its own personality and name — they are meant to 
              bring comfort, joy, and connection. My current work explores fine arts and 
              spiritual doll-making as a way to create change within myself and inspire others.
            </p>
            
            <p className="text-rust-clay font-semibold italic">
              Each doll is crafted with intention, love, and a belief that handmade art 
              can touch hearts and bring people together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;