## Add Trust-Building Hero: Becky Portrait + Etsy Review

Mirror the Integrity EV Solutions / Cody Lander hero pattern — owner photo + 5-star testimonial right at the top to create instant credibility.

### Design (mobile-first)

```text
┌─────────────────────────────────────────┐
│ [Sale Banner — unchanged]               │
├─────────────────────────────────────────┤
│                                         │
│   [Becky photo]   ★★★★★                 │
│    (rounded,      "Henry is such a      │
│     vintage       delightful guy with   │
│     frame)        all of his amazing    │
│                   details... Couldn't   │
│                   love him more!"       │
│                   — Etsy buyer, Henry   │
│                                         │
│         Rebecca Coppock                 │
│   "Hand-stitched souls..."              │
│         [Adopt a Doll]                  │
└─────────────────────────────────────────┘
```

On mobile: photo stacks above the review card. On desktop: photo left, rotating review right, name/CTA centered below.

### Implementation — `src/components/Hero.tsx`

1. Add a new **trust strip** between the sale banner and the existing name/CTA block:
   - Round/oval-framed Becky portrait (`@/assets/artist-portrait.jpg`) with a cream-canvas border and soft shadow (1950s vintage frame feel)
   - Adjacent "review card": cream/blush background, 5 gold stars (lucide `Star` filled with `rust-clay`), italic quote, attribution line
2. Add a **rotating reviews array** so the testimonial cycles every ~6 seconds (3 reviews to start). Use the Henry review as #1, plus two short ones placeholder until user supplies more — but since user only sent the Henry screenshot, start with just **one verified review** and leave a TODO comment listing the easy place to paste more.
3. Keep the existing rotating doll background carousel and CTA — they still work.
4. Slightly reduce hero `min-h` since there's more content (`min-h-[90vh] md:min-h-[95vh]`).

### Copy (from screenshot)

> ★★★★★
> "Henry is such a delightful guy with all of his amazing details. So much personality to appreciate in him. Couldn't love him more! Shipped quickly. Excellent customer service & communication from this shop."
> — Verified Etsy buyer • *Henry, Love Happens Collection*

Add a small text link below: **"Read more reviews on Etsy →"** linking to `https://littlepandaacts.etsy.com/reviews`.

### Visual style notes

- Use existing tokens: `bg-cream-canvas/90 backdrop-blur`, `border-blush-pink`, `text-rust-clay`, `font-heading` for stars + name, `font-body italic` for quote.
- Portrait: 96px mobile / 128px desktop, `rounded-full` with `ring-4 ring-blush-pink/60` and `shadow-xl`.
- Review card: `rounded-2xl`, max-width ~28rem, slight rotation on desktop (`md:-rotate-1`) for handcrafted feel.

### Files Changed
- `src/components/Hero.tsx` — add trust strip + rotating review state
