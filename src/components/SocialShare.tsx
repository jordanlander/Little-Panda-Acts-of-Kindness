import { Facebook, Twitter, Mail, Link2, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

const SocialShare = ({ 
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "Check out these handmade dolls by Rebecca Coppock!",
  description = "One-of-a-kind, hand-stitched dolls made with love from recycled fabrics.",
  className = ""
}: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-secondary hover:bg-secondary/80",
      label: "Share"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-accent hover:bg-accent/80",
      label: "Tweet"
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: "bg-muted hover:bg-muted/80",
      label: "Email"
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <p className="text-sm font-heading font-semibold text-foreground/70 uppercase tracking-wider">
        Share the Love
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group flex items-center gap-2 px-4 py-2 rounded-full
              ${link.color} text-foreground
              mid-century-shadow transform hover:scale-105 hover:-translate-y-0.5
              transition-all duration-300 font-heading text-sm font-medium
            `}
            aria-label={`${link.name} - ${link.label}`}
          >
            <link.icon size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline">{link.label}</span>
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className={`
            group flex items-center gap-2 px-4 py-2 rounded-full
            bg-primary text-primary-foreground
            mid-century-shadow transform hover:scale-105 hover:-translate-y-0.5
            transition-all duration-300 font-heading text-sm font-medium
          `}
          aria-label="Copy link"
        >
          {copied ? (
            <Check size={16} className="text-primary-foreground" />
          ) : (
            <Link2 size={16} className="group-hover:rotate-12 transition-transform duration-300" />
          )}
          <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
