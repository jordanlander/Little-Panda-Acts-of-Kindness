## Homepage rewrite — simpler, emotional, Etsy-forward

### New homepage order
```
Hero → Available Now → About → Spirit Doll Story → Recently Adopted → Custom Doll CTA → Contact → Final CTA → Footer
```
`/shop` page is untouched. `FeaturedDolls.tsx` is unmounted (file kept in repo).

---

### 1. Shared doll data + rename `squareUrl` → `etsyUrl`
- Create `src/data/dolls.ts` exporting `allDolls` and the `Doll` type, lifted verbatim from `src/pages/Shop.tsx`.
- Rename the field `squareUrl` → `etsyUrl` everywhere it's referenced:
  - `src/data/dolls.ts` (new)
  - `src/pages/Shop.tsx` (now imports `allDolls` instead of defining it)
  - `src/components/Collections.tsx`
  - `src/components/FeaturedDolls.tsx`
  - `src/lib/analytics.ts` (if it references the field name)
- Single source of truth: marking a doll `sold: true` removes it from Available Now, removes it from Shop's main grid, and adds it to Recently Adopted automatically.

### 2. Hero (`src/components/Hero.tsx`)
Keep carousel, Becky portrait, rotating Etsy review, Early Adopters Sale banner, and `Rebecca Coppock` H1.

Replace the tagline area + single CTA with:
- Emotional paragraph: *"Rebecca's dolls are handmade one at a time from reclaimed fabrics, memory, humor, grief, hope, and whatever strange little spark makes a face feel alive. Some are soft and silly. Some are spiritual. Some are deeply personal. The right one usually knows before you do."*
- Two CTAs side-by-side:
  - Primary — **See Available Dolls on Etsy** → `https://littlepandaacts.etsy.com` (new tab)
  - Secondary — **Request a Custom Doll** → smooth-scrolls to `#custom`
- Scarcity line: *"Each doll is handmade, one-of-a-kind, and gone once adopted."*

### 3. Available Now — new component
File: `src/components/AvailableNow.tsx`. Replaces `<FeaturedDolls />` in `Index.tsx`.

- Pulls from `allDolls.filter(d => !d.sold).slice(0, 6)` — never hardcoded.
- Responsive grid: 1 / 2 / 3 cols.
- Each card uses the existing card styling (image, name, story, "View on Etsy" button) and tracks via `trackProductClick`.
- Headline: **Available Now**
- Sub: *"A small peek at Rebecca's current handmade dolls. The full Etsy shop is organized by collection — Spirit Dolls, Art Plush Dolls, and other one-of-a-kind characters."*
- CTA below grid: **Browse the Full Etsy Shop** → `https://littlepandaacts.etsy.com`.

### 4. About — unchanged
No edits in this pass.

### 5. Spirit Doll Story — new component
File: `src/components/SpiritStory.tsx`. Placed after About.

- Lifts the Spirit Doll origin paragraphs already on the Shop page (`"I began creating these dolls when my husband went into the hospital..."`).
- Headline: **The Story Behind the Spirit Dolls**
- Lead: *"The Spirit Dolls began during one of Rebecca's hardest seasons, while her husband was in the hospital for major surgery. Stitch by stitch, they became small companions for courage, healing, memory, and hope."*
- One Spirit Doll image (Hearth or Lenora) beside the text.
- Soft text link: *"See the Spirit Dolls on Etsy →"*.

### 6. Recently Adopted — update existing `<AdoptedGallery compact />`
- Headline: **Recently Adopted**
- Sub: *"These handmade friends have already found their homes."*
- Add: *"Every Rebecca Coppock doll is one-of-a-kind. Once a doll is adopted, that exact face, fabric, story, and strange little spark is gone for good."*
- Replace existing "Visit Shop" link with CTA button: **See Available Dolls on Etsy** → Etsy shop.
- Keep current compact thumb styling.

### 7. Custom Doll CTA — new component
File: `src/components/CustomDollCTA.tsx`. ID `#custom`. Placed after Recently Adopted.

- Headline: **Have an idea for a custom doll?**
- Body: *"Rebecca occasionally accepts custom character requests — personal, symbolic, funny, memorial, political, or gift-inspired. Each request depends on timing, materials, and whether the idea feels like a good fit."*
- Button: **Ask About a Custom Doll** → `mailto:littlepandaacts@gmail.com?subject=Custom%20Doll%20Request`.

### 8. Contact — unchanged, stays before the final beat
No edits in this pass.

### 9. Final CTA — new component
File: `src/components/FinalCTA.tsx`. Placed between Contact and Footer.

- Two buttons:
  - Primary — **Browse Available Dolls on Etsy**
  - Secondary — **Ask About a Custom Doll** (mailto)
- Closing line: *"New dolls appear in small batches, and adopted dolls are gone for good."*

### 10. SEO schema
Yes — the site already ships JSON-LD: `WebSite` on Index, `Person` on About, `Organization` + `BreadcrumbList` on Shop.

Improvements in this pass:
- On Index, ship a bundle: `WebSite` (kept) + `Organization` with `sameAs` for Etsy + Instagram + Facebook + YouTube + `Person` for Rebecca + `ItemList` of the Available Now dolls (each item links to its Etsy URL — tells Google this is a curated preview, not a duplicate shop).
- Confirm all Etsy outbound links use `target="_blank" rel="noopener noreferrer"` and descriptive anchor text.

---

### Maintenance after this ships
- **Mark adopted:** flip `sold: true` on the entry in `src/data/dolls.ts` → vanishes from homepage, vanishes from Shop grid, appears in Recently Adopted. One edit.
- **Add a new doll:** add a new entry + import its image. Auto-eligible for Available Now.

### Out of scope
- `/shop` page layout, pricing logic, header/nav, About copy, YouTube embed.
