## Updates to the Shop

### 1. Mark Scott and Ellie as adopted
**File:** `src/pages/Shop.tsx` — add `sold: true` to the Ellie and Scott entries in `allDolls`.
**File:** `src/components/Collections.tsx` — add `sold: true` to Ellie and Scott in `randomActsOfLove` (matches the existing pattern used for Earl/Tim).
**File:** `src/components/AdoptedGallery.tsx` — add Ellie and Scott to the `adoptedDolls` list (with their images and "Love Happens"/"Random Acts of Love" collection labels) so they appear in the adopted gallery. Update the compact tagline copy ("Tim & Earl just found their forever homes!") to reference the new adoptions.

### 2. Redesign the adopted dolls treatment on the Shop page
The problem: sold dolls take equal-size cards in the main grid and push available dolls down. Recommended fix — keep available dolls front and center, move adopted into a clearly separated, condensed strip at the bottom.

**File:** `src/pages/Shop.tsx`

- In the main grid (`filteredDolls`), when `filter` is `"all"`, `"random"`, `"love"`, or `"spirit"`, filter OUT sold dolls so only available ones render at full size. The `"adopted"` filter continues to show sold dolls full-size for browsers who want to see them.
- Below the main grid, when not on the `"adopted"` filter, render a new **"Recently Adopted"** condensed section:
  - Compact circular thumbnails (similar styling to the existing `AdoptedGallery` `compact` variant: ~24/28 size, blush-pink ring, soft sepia, "Name 💕" pill).
  - Horizontal wrap (or horizontal scroll on mobile) showing dolls matching the current filter that are sold.
  - Heading: "Recently Adopted — These Friends Found Their Forever Homes 💕"
  - Subcopy: short line acknowledging the success and inviting browsing of available dolls.
  - A "View all adopted dolls →" button that switches the filter to `"adopted"`.
- Remove the standalone `<AdoptedGallery />` render at the bottom of the page (it duplicates the new in-context strip). The component itself stays in the codebase in case it's reused elsewhere.

### Why this works
- Available dolls dominate the page again — no sold cards interleaved.
- Sold dolls still get celebratory visibility (social proof of "we're selling well") but in a compact, lower-priority strip.
- The existing "Adopted 💕" filter still gives a full-size gallery view for those who want it.
- Per-collection filters also benefit — e.g. filtering by "Love Happens" no longer surfaces a mostly-sold grid.

### Out of scope
No copy changes elsewhere, no price/SEO changes, no changes to `Collections.tsx` rendering on the homepage beyond the two `sold: true` flags.
