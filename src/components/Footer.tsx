import { Heart, Instagram, Facebook, Mail } from "lucide-react";
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
            href="mailto:contact@rebeccacoppock.com"
            className="hover:scale-110 transition-transform"
            aria-label="Send email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-5 h-5 fill-current" />
            <p className="font-heading text-lg">
              © {new Date().getFullYear()} Rebecca Coppock
            </p>
          </div>
          <p className="font-accent text-sm opacity-90 mb-1">
            Hand-stitched with love
          </p>
          <p className="font-accent text-xs opacity-75">
            rebeccacoppock.com |{" "}
            <a href="/#/privacy" className="hover:underline">
              Privacy Policy
            </a>
            {" "}|{" "}
            <a href="/#/shop#return-policy" className="hover:underline">
              Return Policy
            </a>
            {" "}| Managed by Jordan Lander
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;