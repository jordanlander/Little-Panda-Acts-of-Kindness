Make the footer "Return Policy" link open a dedicated page that explains the adoption policy and sends visitors to Etsy — instead of jumping to the shop grid.

**Changes:**

1. **New page `src/pages/ReturnPolicy.tsx`** — mirrors `PrivacyPolicy.tsx` structure (SEO + "Back to Home" header + Card + Footer). Content reframed away from a storefront tone:
   - Lead: "All adoptions happen on Etsy" — every doll is purchased through the Little Panda Acts of Kindness Etsy shop, which handles checkout, payment, and shipping.
   - "All adoptions are final" section — explains the one-of-a-kind handmade nature; no returns/refunds for change-of-mind.
   - "If something goes wrong" — damaged-in-shipping or incorrect-item issues are resolved through Etsy messages, per Etsy's buyer protection.
   - "Questions before adopting?" — encourage messaging through the Etsy listing or emailing `littlepandaacts@gmail.com`.
   - Primary CTA button to `https://littlepandaacts.etsy.com` (opens in new tab) plus secondary `mailto:` link.

2. **Add route** in `src/App.tsx`: `<Route path="/return-policy" element={<ReturnPolicy />} />` above the catch-all.

3. **Update Footer** (`src/components/Footer.tsx` line 77): change `href="/#/shop#return-policy"` → `href="/#/return-policy"`.

4. **Remove the embedded `<ReturnPolicy />` section from `src/pages/Shop.tsx`** (import on line 8 and usage on line 386) so the shop page no longer tries to host the policy. The existing `src/components/ReturnPolicy.tsx` component is no longer referenced after this — leave it in place or delete; safest is to leave it for now since no other refs.

Result: footer link → standalone, focused policy page that explains and redirects to Etsy, matching the "entice and explain, then send to Etsy" direction.