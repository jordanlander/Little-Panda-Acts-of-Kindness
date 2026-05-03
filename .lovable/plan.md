## Make Etsy Review Quote More Readable

The review card frame is great — the quote text inside is the weak link. It's small, italic, light-weight serif on cream, which strains the eye.

### Changes — `src/components/Hero.tsx` (review card only)

1. **Quote text**: drop italic, bump size + weight + line-height
   - Size: `text-[15px] md:text-base` → **`text-[17px] md:text-[18px]`**
   - Weight: add **`font-medium`**
   - Color: `text-foreground` → **`text-ink-black`** (true high-contrast)
   - Style: remove `italic`, remove the surrounding `"..."` quotes from the string and use a large decorative open-quote glyph in the corner instead
   - Line-height: `leading-relaxed` → **`leading-[1.55]`** for better rhythm

2. **Decorative open quote** in top-left corner (`"` at ~5xl, `text-rust-clay/25`) — gives editorial weight without competing with the quote.

3. **Attribution line** — currently small + same color as the badge above. Make it scannable:
   - `— Doll Name` in **bold rust-clay heading**, then `· Collection Name` in lighter italic body.

4. **Card padding + border**:
   - Bump padding `p-5 md:p-6` → `px-6 py-7 md:px-8 md:py-8` so text breathes
   - Border `border-blush-pink/60` → `border-rust-clay/40` (matches the verified pill, less pastel-on-pastel mush)

5. **Read-more link** — add `font-bold` and `underline-offset-2` so it reads as a clear CTA.

That's it — no structural changes, no new components. Same rotation logic.
