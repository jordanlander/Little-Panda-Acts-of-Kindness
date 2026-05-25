Fix Hero "Request a Custom Doll" button — currently `href="#custom"` is captured by HashRouter as route `/custom` and 404s.

**Edit `src/components/Hero.tsx`:**
- Add `const CUSTOM_MAILTO = "mailto:littlepandaacts@gmail.com?subject=Custom%20Doll%20Request";`
- Change the secondary CTA anchor from `href="#custom"` to `href={CUSTOM_MAILTO}` (mirrors `FinalCTA.tsx`).

No other files touched.