# Plan: Add YouTube Channel Link

## Summary
Add the YouTube channel link (`https://youtube.com/@littlepandaacts`) to the two existing social link areas on the site.

## Changes

### 1. Footer — "Follow Along" icons
**File:** `src/components/Footer.tsx`
- Import `Youtube` from `lucide-react` alongside existing icons.
- Add a fourth icon link in the "Follow Along" row, between Facebook and Mail, linking to `https://youtube.com/@littlepandaacts`.
- Set `aria-label="Follow on YouTube"`.

### 2. Contact — "Connect with me" links
**File:** `src/components/Contact.tsx`
- Import `Youtube` from `lucide-react` alongside existing icons.
- Add a fourth link in the "Connect with me" list, between Facebook and the location card, linking to `https://youtube.com/@littlepandaacts`.
- Display label: "Little Panda Acts of Kindness" (matching the other social links).

## No New Dependencies
Uses the existing `lucide-react` `Youtube` icon already available in the project.

## SEO / Accessibility
- All links open in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).
- Proper `aria-label` on the Footer icon.
