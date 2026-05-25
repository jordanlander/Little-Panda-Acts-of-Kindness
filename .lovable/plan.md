The "See the Spirit Dolls →" link in `src/components/SpiritStory.tsx` currently points to an incorrect Etsy section URL (`/section/52988996`). Update it to the Pocket Spirit Dolls product listing the user requested.

**Change:**
- File: `src/components/SpiritStory.tsx`
- Replace `href={`${ETSY_SHOP_URL}/section/52988996`}` with `href="https://littlepandaacts.etsy.com/listing/4470017968"`
- CTA label stays "See the Spirit Dolls →" — the Pocket Spirit Dolls listing is the entry point they want to promote.