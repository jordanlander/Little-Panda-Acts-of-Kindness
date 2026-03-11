

## Add Pocket Spirit Dolls — Single Listing Card

### Changes

**1. New image asset**
- Save the labeled group photo as `src/assets/dolls/spirit/pocket-spirits.jpg`

**2. `src/pages/Shop.tsx`**
- Import `pocketSpiritsImg`
- Add one entry to `allDolls`:
  - Name: "Pocket Spirit Dolls"
  - Story: "Tiny talismans of intention — each ~2 inch handmade folk art doll comes with a fabric pouch, chakra worry stone, and handwritten inspirational message. Choose your one-of-a-kind spirit (A–F) on Etsy."
  - Price: `"$35"`, Collection: `"spirit"`
  - Etsy URL: `https://littlepandaacts.etsy.com/listing/4470017968/pocket-spirit-dolls-handmade-folk-art`
- Update pricing logic in `DollCard` to dynamically parse any price instead of hardcoded $65/$95 checks:
  - `const originalPrice = parseFloat((price || "$95").replace('$', ''));`
  - Sale price at 30% off: **$24.99**
- Update analytics tracking to use the same dynamic price calculation

### Pricing

| Tier | Original | 30% Off |
|------|----------|---------|
| Pocket Spirit | $35 | $24.99 |
| Spirit Dolls | $65 | $45.50 |
| Love Collections | $95 | $66.50 |

### Files Changed
- `src/assets/dolls/spirit/pocket-spirits.jpg` (new)
- `src/pages/Shop.tsx` (new entry + dynamic pricing)

