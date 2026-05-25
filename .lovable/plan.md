## 1. Hero — remove scrolling dolls background
File: `src/components/Hero.tsx`

- Delete the `heroImages` array, the `currentImageIndex` state, the preload effect, the rotation interval, and the absolute-positioned image layers.
- Replace background with a solid `bg-cream-canvas` plus a very subtle radial cream→blush wash for warmth (no imagery).
- Remove the vignette behind the trust strip (it existed to mask the busy carousel).
- Keep: sale banner, Becky portrait, rotating Etsy review card, H1, paragraph, CTAs, scarcity line.

## 2. Brand hierarchy — Rebecca leads, Etsy supports

**Principle:** `Rebecca Coppock · Little Panda Acts of Kindness` is the brand. Etsy is the shelf, shown as a small trust tag at the point of action — never co-headlined.

### New reusable component: `src/components/EtsyTag.tsx`
Small inline lockup: tiny Etsy-orange dot + `on Etsy` in uppercase, tracked, 10–11px, 70% opacity, heading font. One source of truth, dropped under every shop CTA and on shop-bound sections.

### Brand lockup (header, footer, hero)
- **Header** (`src/components/Header.tsx`): wordmark becomes two lines — `Rebecca Coppock` (display) + `Little Panda Acts of Kindness` (small subtitle, tracked uppercase). No Etsy in the lockup.
- **Footer** (`src/components/Footer.tsx`): same two-line lockup, plus one quiet sentence: "Shop available as *Little Panda Acts of Kindness* on Etsy."
- **Hero H1** (`Hero.tsx`): keep `Rebecca Coppock` as the large H1; add a small line beneath: `Little Panda Acts of Kindness` (heading font, rust-clay, tracked uppercase, smaller). No Etsy here.

### CTA language rules
Every shop-bound button uses **your verb on top, `<EtsyTag />` underneath**, never "Shop on Etsy" as the headline.

| Location | Button label | Sub-tag |
|---|---|---|
| Hero primary | `See Available Dolls →` | `on Etsy` |
| Hero secondary | `Request a Custom Doll` (mailto) | *(none — different action)* |
| Available Now card | `View [Doll]` | `on Etsy` |
| Available Now section | `Browse the Full Collection →` | `Little Panda Acts of Kindness on Etsy` |
| Spirit Story | `See Spirit Dolls →` | `on Etsy` |
| Adopted gallery | `See Available Dolls →` | `on Etsy` |
| Final CTA primary | `See Available Dolls →` | `on Etsy` |
| Final CTA secondary | `Request a Custom Doll` (mailto) | *(none)* |

Files touched for this pass: `Hero.tsx`, `AvailableNow.tsx`, `SpiritStory.tsx`, `AdoptedGallery.tsx`, `FinalCTA.tsx`, `Shop.tsx` (card CTAs).

### Where Etsy stays loud (intentional)
- The "★ Verified Etsy Review" badge on the review card — that's the right place for Etsy prominence, because the trust transfers without competing with CTAs.

## 3. Custom Doll CTA — fix mobile button overflow
File: `src/components/CustomDollCTA.tsx`

- Button: `w-full sm:w-auto`, padding `px-5 sm:px-8`, text `text-base sm:text-lg`, add `whitespace-normal leading-tight` as safety.
- Anchor: wrap with `block w-full sm:inline-block sm:w-auto` so the full-width mobile button anchors cleanly.
- Card padding: `p-6 sm:p-12` (down from `p-8 md:p-12`) for more breathing room on mobile.
- Label stays "Ask About a Custom Doll" — fits once the button is responsive.

## 4. SEO updates
File: `src/pages/Index.tsx`

- `Organization` JSON-LD: `name: "Rebecca Coppock"`, `alternateName: "Little Panda Acts of Kindness"`.
- Update `<title>` and meta description to include both names once, e.g. `Rebecca Coppock — Little Panda Acts of Kindness | Handmade Spirit Dolls`.

## Out of scope
- Doll data, Available Now grid logic, Spirit Story copy, Adopted gallery logic, pricing, header nav structure, color palette.

## Files touched
- `src/components/Hero.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/CustomDollCTA.tsx`
- `src/components/EtsyTag.tsx` *(new)*
- `src/components/AvailableNow.tsx`
- `src/components/SpiritStory.tsx`
- `src/components/AdoptedGallery.tsx`
- `src/components/FinalCTA.tsx`
- `src/pages/Shop.tsx`
- `src/pages/Index.tsx`
