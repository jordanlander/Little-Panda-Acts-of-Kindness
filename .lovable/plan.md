## Mark Newly Adopted Dolls

Charlie and Henry are already marked sold. Need to update the rest and ensure all 7 appear in the Adopted Gallery with celebration vibes.

### 1. `src/pages/Shop.tsx`
Add `sold: true` to:
- Jane (line 85)
- Lee (line 87)
- Mary (line 96)
- Baily (line 97)
- Trevor (line 98)

(Charlie and Henry already marked.)

### 2. `src/components/AdoptedGallery.tsx`
Already has Charlie + Henry. Add 5 more:
- Jane, Lee, Mary, Baily, Trevor (all "Love Happens" collection)

Import their images from `@/assets/dolls/`.

### 3. `src/components/FeaturedDolls.tsx`
No sold dolls currently featured (Ellie, Agnes, Astra) — leave as-is.

### 4. Hype / "before" celebration
The Adopted Gallery already shows a "These Friends Found Their Forever Homes" section on the homepage (compact mode shows first 4). With 7 newly-added dolls, the rotation feels fresh. Update the compact subtitle copy on `AdoptedGallery.tsx` to reinforce momentum:

- Change `"They found love first... will you be next?"` → `"7 new friends just found homes this week — your kindred soul might be next."`

That's it — single, focused update across 2 files.

### Files Changed
- `src/pages/Shop.tsx` (5 sold flags)
- `src/components/AdoptedGallery.tsx` (5 new entries + subtitle copy)
