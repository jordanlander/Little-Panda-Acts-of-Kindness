Add the new Pocket Spirit Dolls Collection Two (Etsy listing 4513424952, variations A–J) so it shows up in "Available Now" alongside the art plush dolls.

**Changes:**

1. **Save image asset** — copy `user-uploads://new_spirit_dolls_with_pouches.jpg` (the branded "Handcrafted Pocket Spirit Dolls" hero with pouches & worry stones) to `src/assets/dolls/spirit/pocket-spirits-two.jpg`. This is the cleanest card image; the F–J shot is secondary marketing and not needed for a single card.

2. **Add doll entry in `src/data/dolls.ts`** — import the new image and insert a new `Doll` near the top of `allDolls` so `AvailableNow`'s `.slice(0, 6)` picks it up:
   - `name`: "Pocket Spirit Dolls · Collection Two"
   - `collection`: "spirit"
   - `price`: "$35.70" (matches the original Pocket Spirit Dolls entry)
   - `story`: "A new batch of tiny companions for encouragement, reflection, and heart. Each ~2 inch handmade folk art doll arrives with a fabric pouch, chakra worry stone, and handwritten message. Choose your one-of-a-kind spirit (A–J) on Etsy."
   - `etsyUrl`: "https://littlepandaacts.etsy.com/listing/4513424952/pocket-spirit-dolls-collection-two"

No changes to `AvailableNow.tsx`, `SpiritStory.tsx`, or the existing original Pocket Spirit Dolls entry — both remain available so Collection One and Two are both represented.

**Result:** the homepage Available Now grid surfaces the new Collection Two pocket dolls next to art plush dolls; the card links to the new Etsy listing where buyers pick A–J from the dropdown.