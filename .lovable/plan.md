## Improve Hero Trust Strip — More Reviews + Better Readability

### Readability fixes
The carousel of doll backgrounds bleeds through behind the review card and the "Meet Becky" pill, making them hard to read.

**Changes to `src/components/Hero.tsx`:**

1. **Review card** — make it solid + sturdier:
   - Replace `bg-cream-canvas/95 backdrop-blur-sm` with a fully opaque cream background and a subtle vintage paper feel.
   - Add a heavier shadow + a thin double-border ring (like a 1950s polaroid card).
   - Bump quote text from `text-foreground/90` → `text-foreground` and slightly increase line-height for legibility.
   - Tighten the rotated/handcrafted look so it still feels stitched but doesn't compete visually.

2. **"Meet Becky" pill** — replace the floating cream chip with a solid rust-clay banner (white text, bold heading font) anchored under the portrait. High contrast over any background.

3. **Background dim under trust strip** — add a soft cream-canvas radial glow / vignette behind just the trust strip area so the dolls fade out where the card sits, without losing the carousel everywhere else.

### More reviews
Add 5 new verified 5-star Etsy reviews to the `etsyReviews` array (rotation already wired):

- **Charlie** (Love Happens) — Michelle: "Charlie is all good vibes! He's colorful, well-made and has plenty of charm. The seller/artist shipped quickly and was good with communication too. I would 100% buy from this shop again!"
- **Hearth** (Spirit) — justine: "Quick shipping! I love her so much, I unwrapped her and gasped. Thank you!"
- **Lenora** (Spirit) — Sheryl: "Lenora, the spirit doll, is quite lovely. A wonderful addition to my collection — well made, with care and soul."
- **Ember** (Spirit) — Sheryl: "The Ember spirit doll is well made and very expressive." *(typo "cery" corrected)*
- **Raven** (Spirit) — Matilda: "This doll is beautifully made with care. I'm glad she is in my home. I have been feeling the spirit of the Raven lately and am attracted to their wisdom."

(Henry stays as #1.)

### Files Changed
- `src/components/Hero.tsx` — append reviews, opaque card styling, solid Meet Becky banner, vignette behind trust strip.
