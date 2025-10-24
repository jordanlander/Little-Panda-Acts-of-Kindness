import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-rust-clay text-primary-foreground">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-5 h-5 fill-current" />
          <p className="font-heading text-lg">
            © {new Date().getFullYear()} Rebecca Coppock Art
          </p>
        </div>
        <p className="font-accent text-sm opacity-90">
          Hand-stitched with love
        </p>
      </div>
    </footer>
  );
};

export default Footer;