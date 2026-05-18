# Floors To You OKC

Astro-built marketing site for [Floors To You OKC](https://floorstoyouokc.com), rebuilt from the ground up with a spacefloors-style architecture and a stronger local-SEO surface area.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview
```

## What's inside

| Path                       | Purpose                                                     |
| -------------------------- | ----------------------------------------------------------- |
| `src/data/`                | Single source of truth: services, areas, NAP, testimonials  |
| `src/components/`          | Header, Footer, Hero, ServiceGrid, AreaGrid, FAQ, Forms     |
| `src/components/schema/`   | LocalBusiness, Service, Breadcrumb, FAQ JSON-LD             |
| `src/layouts/`             | `BaseLayout.astro` — shared head + header/footer            |
| `src/pages/`               | Home, About, Contact, Reviews, Financing, Estimate, FAQ     |
| `src/pages/services/`      | `index.astro` + `[service].astro` (5 dynamic pages)         |
| `src/pages/areas/`         | `index.astro` + `[city].astro` (8 dynamic pages)            |
| `src/pages/[city]/[s].astro` | City × service matrix (40 pages)                          |
| `public/images/`           | WebP placeholders — overwrite with Nano Banana Pro exports  |
| `scripts/gen-placeholders.mjs` | Regenerate branded WebP placeholders                    |

See `DELIVERABLES.md` for the full sitemap, SEO breakdown, schema examples, and launch checklist. See `IMAGE_PROMPTS.md` for the per-image generation prompts.

## Deploy

The site is static — `dist/` can ship to **Netlify**, **Cloudflare Pages**, **Vercel**, S3+CloudFront, or any static host.

Recommended (Netlify):

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

Then add the redirect map from `DELIVERABLES.md` to `public/_redirects`.
