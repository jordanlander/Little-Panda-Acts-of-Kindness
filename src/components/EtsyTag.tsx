interface EtsyTagProps {
  /** Override the small label after the dot. Defaults to "on Etsy". */
  label?: string;
  /** Center under a button by default; set false for inline use. */
  block?: boolean;
  className?: string;
}

/**
 * Tiny reusable trust tag — small Etsy-orange dot + uppercase label.
 * Use under shop-bound CTAs so Etsy reads as a quiet credibility cue,
 * not a co-headline with the Rebecca Coppock brand.
 */
const EtsyTag = ({ label = "on Etsy", block = true, className = "" }: EtsyTagProps) => {
  return (
    <span
      className={[
        block ? "mt-2 flex" : "inline-flex",
        "items-center justify-center gap-1.5 text-[10px] md:text-[11px] font-heading font-semibold uppercase tracking-[0.18em] text-foreground/60",
        className,
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className="inline-block w-1.5 h-1.5 rounded-full bg-[#F1641E]"
      />
      {label}
    </span>
  );
};

export default EtsyTag;
