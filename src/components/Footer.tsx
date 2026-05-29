import { Heart, Instagram, Facebook, Mail, Youtube } from "lucide-react";
import SocialShare from "./SocialShare";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-rust-clay text-primary-foreground">
      <div className="container mx-auto max-w-4xl">
        {/* Share Buttons */}
        <div className="mb-8 pb-6 border-b border-primary-foreground/20">
          <SocialShare 
            title="Little Panda Acts of Kindness - Handmade Dolls by Rebecca Coppock"
            description="Discover one-of-a-kind, hand-stitched dolls made with love from recycled fabrics. Each doll has its own unique personality!"
          />
        </div>

        {/* Follow Links */}
        <p className="text-center text-sm font-heading font-semibold uppercase tracking-wider mb-4 opacity-90">
          Follow Along
        </p>
        <div className="flex items-center justify-center gap-6 mb-6">
          <a 
            href="https://www.instagram.com/littlepandaactsofkindness" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://www.facebook.com/littlepandaacts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="Follow on Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/@littlepandaacts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="Subscribe on YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a 
            href="mailto:contact@rebeccacoppock.com"
            className="hover:scale-110 transition-transform"
            aria-label="Send email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Brand lockup + copyright */}
        <div className="text-center">
          <p className="font-heading text-2xl md:text-3xl font-bold leading-tight">
            Rebecca Coppock
          </p>
          <p className="font-heading text-[11px] md:text-xs uppercase tracking-[0.22em] opacity-90 mt-1 mb-3">
            Little Panda Acts of Kindness
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-4 h-4 fill-current" />
            <p className="font-accent text-sm opacity-90">
              Hand-stitched with love · Shop available as <em>Little Panda Acts of Kindness</em> on Etsy
            </p>
          </div>
          <p className="font-accent text-xs opacity-75 mt-3">
            © {new Date().getFullYear()} rebeccacoppock.com |{" "}
            <a href="/#/privacy" className="hover:underline">
              Privacy Policy
            </a>
            {" "}|{" "}
            <a href="/#/return-policy" className="hover:underline">
              Return Policy
            </a>
            {" "}| Managed by{" "}
            <a
              href="https://oneweekendwebsites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Jordan Lander
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;