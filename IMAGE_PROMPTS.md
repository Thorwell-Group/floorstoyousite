# Image Generation Prompts — Nano Banana Pro

Paste each prompt into Nano Banana Pro, export at the listed dimensions in **WebP**, and save to the exact path. Filenames and alt text are already wired into the site — no code change needed when you overwrite a placeholder.

Style brief for every image:
- Brand palette: warm tan `#bd9454`, deep brown `#67441e`, soft cream `#fbf6ee`.
- Natural light, photoreal, shallow depth of field, premium residential interior.
- No people unless specified. No watermarks, no signage. Wide negative space on one side so headlines can lay over.

---

## Brand

| Path                                                | Size      | Prompt |
| --------------------------------------------------- | --------- | ------ |
| `/images/brand/floors-to-you-okc-logo.webp`         | 600×600   | Modern flat logo: serif wordmark "Floors To You OKC" in `#67441e` on cream background, small `F` monogram in `#bd9454` square with rounded corners on the left, balanced kerning. |
| `/images/brand/floors-to-you-okc-og.webp`           | 1200×630  | Open Graph card: wide-plank tan oak floor occupying lower 60%, soft top-down sunlight, top 40% deep brown band with "Floors To You OKC" in elegant serif and tagline "Oklahoma City's Largest In-Stock Flooring Showroom" beneath. |

## Hero

| Path | Size | Prompt |
| ---- | ---- | ------ |
| `/images/hero/floors-to-you-okc-showroom-hero.webp` | 1600×1200 | Bright, airy flooring showroom interior at golden hour: stacked oak hardwood samples on warm tan display walls, cream concrete floor, gallery lighting, deep brown furniture vignettes, no people, copy-space on the left third of the frame. |

## About

| Path | Size | Prompt |
| ---- | ---- | ------ |
| `/images/about/floors-to-you-okc-team-showroom.webp` | 1600×1200 | Three flooring design consultants (mixed gender, business-casual khakis + branded polos in tan + brown) discussing a sample board inside a warm showroom, soft window light, friendly genuine smiles, candid mid-conversation, blurred wood-look floor samples in background. |

## Financing

| Path | Size | Prompt |
| ---- | ---- | ------ |
| `/images/financing/floors-to-you-okc-financing-synchrony.webp` | 1200×900 | Modern living room with brand-tan hardwood plank floor; subtle floating callout reading "0% APR · 24 Months" in cream on deep brown, soft golden-hour light, no logos, no people. |

## Core Service Pages (vertical aspect for grid)

All sized **1200×1500**. Filenames keep the city in the slug for SEO.

| Path | Prompt |
| ---- | ------ |
| `/images/services/carpet-flooring-oklahoma-city.webp` | Cozy master bedroom in an Oklahoma City home: plush warm-beige cut-pile carpet, cream upholstered bed, soft morning light, throw blanket in tan tones, no people, no visible windows large enough to identify location. |
| `/images/services/hardwood-flooring-oklahoma-city.webp` | Spacious open-concept living room with wide-plank natural oak hardwood (`#a37b3f` tone), cream sectional, terracotta and tan accent pillows, indoor fig tree, warm afternoon light, no people. |
| `/images/services/laminate-flooring-oklahoma-city.webp` | Modern family living room with realistic oak-look laminate plank flooring, light cream walls, tan leather chair, woven rug, plant in clay pot, late-afternoon sun, photoreal. |
| `/images/services/luxury-vinyl-plank-oklahoma-city.webp` | Bright contemporary kitchen with wide-plank waterproof LVP in mid-brown oak tone, white shaker cabinets, brass hardware, tan island stools, sunlight pooling on the floor, no people. |
| `/images/services/tile-flooring-oklahoma-city.webp` | Spa-like master bathroom with large-format matte porcelain tile in warm beige, freestanding tub, brass fixtures, eucalyptus on tray, soft window light, no people. |

## Area Pages (landscape for hero)

All sized **1600×1200**. Use city-evocative cues but keep them subtle (no signage).

| Path | Prompt |
| ---- | ------ |
| `/images/areas/flooring-installer-oklahoma-city-ok.webp` | A flooring installer (gender-neutral, in branded tan polo and tool belt) kneeling and clicking together LVP planks in a sunlit modern OKC home with neutral walls, golden afternoon light from a window, focused expression, no logos. |
| `/images/areas/flooring-installer-edmond-ok.webp`        | A flooring installer measuring a wide-plank oak hardwood install in a refined Edmond, Oklahoma home with traditional crown molding and tan upholstered chair, soft morning light. |
| `/images/areas/flooring-installer-yukon-ok.webp`         | Friendly installer rolling out a fresh roll of plush carpet in a Yukon, OK family room, warm tan tones, late-day light. |
| `/images/areas/flooring-installer-mustang-ok.webp`       | Installer cutting LVP plank with a tapping block in a new-build Mustang, OK home, sawdust glimmering in low side light, neutral cream walls. |
| `/images/areas/flooring-installer-midwest-city-ok.webp`  | Installer setting waterproof LVP in a Midwest City, OK kitchen with shaker cabinets, mid-day light, no people in background. |
| `/images/areas/flooring-installer-moore-ok.webp`         | Installer carrying a stack of tile boxes into a Moore, OK bathroom remodel, fresh framing visible, golden hour. |
| `/images/areas/flooring-installer-norman-ok.webp`        | Installer laying laminate plank flooring in a Norman, OK student-friendly rental home, warm tones, no logos visible. |
| `/images/areas/flooring-installer-guthrie-ok.webp`       | Installer sanding wide-plank hardwood in a historic Guthrie, Oklahoma Victorian home with original trim and tall windows, soft sunlight. |

---

## After-export checklist

1. Drop each WebP at the **exact** path listed.
2. Re-run `npm run build`.
3. The placeholder is overwritten; alt text, dimensions, and structured data all remain wired.

If you also want responsive `srcset`, add the Astro `<Image />` component to `Hero.astro` and `ServiceGrid.astro` later — current `<img>` tags already include explicit `width`/`height` and lazy-loading hints, which is enough for a perfect Lighthouse score with the placeholders.
