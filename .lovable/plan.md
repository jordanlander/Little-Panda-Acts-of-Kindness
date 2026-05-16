## Add 3 New Etsy Reviews to Hero Rotation

Append three verified 5-star reviews to the `etsyReviews` array in `src/components/Hero.tsx` so they join the existing fade rotation. No structural changes.

### New entries

1. **Earl** — Random Acts of Love Collection
   > "Earl is simply perfect & super stuffed with love. He's always ready to give a smile or hug when needed. Great addition to my collection."

2. **Lee & Trevor** — Love Happens Collection
   > "Lee & Trevor are a great pair & enjoy hanging out together. These charming homemade dolls are so much fun to decorate with. Fast shipping & great customer service from this shop."
   - `doll: "Lee & Trevor"`

3. **Mary & Charlie** — Love Happens Collection
   > "Mary & Charlie were happy to be reunited. My daughter loves this pair together & enjoys seeing them every day. This shop puts so much heart into their dolls spreading happiness to anyone who purchases one. Highly recommend this seller."
   - `doll: "Mary & Charlie"`

Total reviews in rotation goes from 6 → 9. Existing min-height on the quote container already accommodates the longest one.
