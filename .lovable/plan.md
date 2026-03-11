
## Three-Tier Discount Structure: Safe to Implement

ChatGPT confirmed that Etsy applies only the **best single discount** per item -- no stacking. Your three tiers work cleanly:

- **30% off** a single doll
- **45% off** when buying 2+
- **60% off** on specific curated bundles

### Changes Overview

**1. Hero Banner** (`src/components/Hero.tsx`, lines 47-52)
- Change "Early Adopters Sale -- 45% Off!" to: **"Early Adopters Sale -- Save Up to 60%!"**
- Update subtitle to: **"30% off any doll | 45% off 2+ | Exclusive bundles on Etsy!"**

**2. Shop Page Sale Banner** (`src/pages/Shop.tsx`, lines 328-339)
- Update to show all three tiers clearly with a visual layout:
  - "30% off any doll"
  - "45% off when you buy 2+"
  - "Up to 60% off curated bundles on Etsy"
- Keep the shipping info and international email link

**3. Doll Card Pricing** (`src/pages/Shop.tsx`, lines 117-166)
- Update the sale calculation from 45% off (multiply by 0.55) to **30% off** (multiply by 0.70):
  - Spirit Dolls: ~~$65~~ **$45.50**
  - Love collections: ~~$95~~ **$66.50**
- Change the badge from **"45% OFF"** to **"30% OFF"** (lines 141-145)
- Keep the crossed-out original price and sale price display -- it still works great for showing the individual deal
- Update analytics tracking price to reflect 30% discount (line 191): $45.50 for Spirit, $66.50 for Love

**4. Collections Page** (`src/components/Collections.tsx`)
- No changes needed -- this page doesn't show pricing or sale badges

**5. Featured Dolls** (`src/components/FeaturedDolls.tsx`)
- No changes needed -- doesn't show pricing

### What Stays the Same
- All Etsy links remain as-is
- "Buy Now" button text and clickable card behavior unchanged
- Sold/adopted doll styling unchanged
- Free shipping messaging unchanged

### Technical Details

| Item | Current | Updated |
|------|---------|---------|
| Sale badge text | "45% OFF" | "30% OFF" |
| Price multiplier | 0.55 (45% off) | 0.70 (30% off) |
| Spirit sale price | $35.75 | $45.50 |
| Love sale price | $52.25 | $66.50 |
| Hero banner | "45% Off!" | "Save Up to 60%!" |
| Shop banner | Single tier (45%) | Three tiers (30% / 45% / 60%) |
| Analytics price (Spirit) | 35.75 | 45.50 |
| Analytics price (Love) | 52.25 | 66.50 |
