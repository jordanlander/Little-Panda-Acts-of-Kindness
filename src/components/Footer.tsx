import { Heart, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-rust-clay text-primary-foreground">
      <div className="container mx-auto max-w-4xl">
        {/* Social Links */}
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
            {" "}| Managed by Jordan Lander
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;