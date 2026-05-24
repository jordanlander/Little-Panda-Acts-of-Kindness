# Plan: Embed Becky's Introduction Video in the About Section

## Summary
Add a YouTube embed of Becky's introduction video (`ucbl3Dm3Yvk`) into the About section on the landing page. Place it as a new story block between the quote block and the call-to-action, styled to match the 1950s vintage aesthetic.

## Placement
Insert a new story block inside the `.space-y-16` story timeline in `src/components/About.tsx`, positioned **after the quote block and before the call-to-action block**.

## Layout
- A centered, rounded-3xl container with a cream/muted background and a subtle vintage border (`ring-1 ring-rust-clay/20 border-2 border-rust-clay/40` — consistent with the Hero review card styling).
- A pill badge above the video reading "Hear From Becky" in the vintage heading style.
- A responsive 16:9 iframe embed using `aspect-video` from Tailwind.
- The iframe uses the standard YouTube embed URL: `https://www.youtube.com/embed/ucbl3Dm3Yvk`.
- The iframe includes `title`, `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"`, and `allowFullScreen` for accessibility and functionality.

## Styling Details
- Background: `bg-cream-canvas` or `bg-card` to blend with the page.
- Shadow: `shadow-2xl` and `mid-century-shadow` for depth.
- Padding: comfortable padding around the iframe (`p-2` or `p-4` inside the container).
- Responsive: full width up to `max-w-4xl`, centered with `mx-auto`.
- Animation: `animate-fade-in` class for consistency with other blocks.

## Files to Change
- `src/components/About.tsx` — add the new video block.

## No New Dependencies
Standard YouTube iframe embed; no packages needed.

## SEO Consideration
The iframe `title` attribute will read "Rebecca Coppock introduces Little Panda Acts of Kindness" for screen readers and search indexing.
