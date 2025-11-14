import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form placeholder - will be connected later
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. This is a demo form - Square integration coming soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg">
              Interested in a custom doll or have questions about adoptions? 
              I'd love to hear from you!
            </p>
            
            <div>
              <h3 className="font-heading text-xl font-semibold mb-3">Connect with me</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:bjcoppock@gmail.com"
                  className="flex items-center gap-2 text-rust-clay hover:text-rust-clay/80 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-accent">bjcoppock@gmail.com</span>
                </a>
                <a 
                  href="https://instagram.com/littlepandaactsofkindness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rust-clay hover:text-rust-clay/80 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-accent">Little Panda Acts of Kindness</span>
                </a>
                <a 
                  href="https://facebook.com/littlepandaactsofkindness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rust-clay hover:text-rust-clay/80 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="font-accent">Little Panda Acts of Kindness</span>
                </a>
              </div>
            </div>
            
            <div className="p-6 bg-vintage-peach/20 rounded-2xl">
              <p className="text-sm font-accent">
                Based in Erie, Pennsylvania
              </p>
              <p className="text-sm mt-2 text-foreground/70">
                I will take orders online and ship free of charge. Each doll is handmade 
                with recycled materials and endless love.
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up">
            <div>
              <Label htmlFor="name" className="text-base font-heading">Name</Label>
              <Input 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="mt-1 rounded-lg"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-base font-heading">Email</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="mt-1 rounded-lg"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="text-base font-heading">Message</Label>
              <Textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={5}
                className="mt-1 rounded-lg resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg py-6 rounded-full mid-century-shadow"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;