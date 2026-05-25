## Update Privacy Policy and Return Policy

Both pages reference Square checkout (no longer used — everything goes to Etsy) and Privacy links to a `/contact` page that doesn't exist. Update copy and links to reflect the current Etsy-based flow.

### 1. `src/pages/PrivacyPolicy.tsx`

- **"What We Collect"**: Rewrite — checkout happens on Etsy, so this site does not collect names, addresses, or payment info. Change to something like: "All purchases are completed on Etsy through the Little Panda Acts of Kindness shop. Etsy handles your name, shipping address, and payment information under their own privacy policy. This site itself does not collect or store personal or payment data."
- **"Third-Party Services"**: Replace Square paragraph with Etsy — link to https://www.etsy.com/legal/privacy/ for their policy. Mention Google Analytics again only if not already covered.
- **"How We Use Your Information"**: Soften — since we don't collect personal info here, narrow to "respond to questions you send by email" and "improve the browsing experience via anonymous analytics." Drop "fulfill your doll adoption / send shipping updates" (Etsy does that).
- **"Your Rights"**: Keep, but clarify the only info we'd have is anything sent by email.
- **Closing contact link**: `/#/contact` route does not exist. Replace with a mailto link to `contact@rebeccacoppock.com` (matches the Footer).

### 2. `src/components/ReturnPolicy.tsx`

- Copy is mostly fine (no Square mention), but update the "Questions before adopting?" line to make the channel explicit: direct buyers to message through the Etsy listing or email `contact@rebeccacoppock.com`. This matches the Etsy-only purchase flow.

### Out of scope (not requested, will leave alone)

- `src/components/Contact.tsx` toast still mentions "Square integration coming soon."
- `src/components/ShopPlaceholder.tsx` "Square Store Integration Coming Soon" copy.
- `src/components/Collections.tsx` and `src/data/dolls.ts` still contain `square.link` / `square.site` URLs in the doll data.

Happy to clean those up in a follow-up if you want — just say the word.
