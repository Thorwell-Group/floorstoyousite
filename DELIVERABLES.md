# Floors To You OKC — Astro Rebuild Deliverables

Locally-installed, statically-built, SEO-first rebuild of `floorstoyouokc.com`, structured after `spacefloors.com` with the warm tan/brown palette of the original.

- **Framework:** Astro 5 (static)
- **Styling:** Tailwind CSS 3 + custom brand tokens (`#bd9454`, `#67441e`)
- **Integrations:** `@astrojs/sitemap`, `@astrojs/partytown`, `@astrojs/tailwind`, `astro-robots-txt`, `astro-compress`
- **Output:** 65 prebuilt HTML pages, fully hydrated schema, automatic XML sitemap, robots.txt, compressed HTML / CSS / JS / SVG

---

## 1. Full Sitemap Structure

```
/                                                Home
/about                                           About
/contact                                         Contact (NAP + map + form)
/reviews                                         Aggregate + per-customer reviews
/financing                                       0% APR Synchrony explainer
/free-in-home-estimate                           Lead capture (booking form)
/how-it-works                                    6-step process
/flooring-faq                                    All FAQs (general + per-material)
/privacy                                         Privacy policy
/404                                             Branded 404

/services/                                       Hub: all flooring types
/services/carpet                                 Core service page
/services/hardwood                               "
/services/laminate                               "
/services/luxury-vinyl                           "
/services/tile                                   "

/areas/                                          Hub: all service areas
/areas/oklahoma-city                             Area page + map + 5 services
/areas/edmond                                    "
/areas/yukon                                     "
/areas/mustang                                   "
/areas/midwest-city                              "
/areas/moore                                     "
/areas/norman                                    "
/areas/guthrie                                   "

/[city]/[service]                                Location × service matrix
  e.g. /edmond/luxury-vinyl, /norman/carpet, /oklahoma-city/tile
  = 8 cities × 5 services = 40 unique pages

/sitemap-index.xml                               Auto-generated
/robots.txt                                      Auto-generated
```

**Total live URLs:** 65 HTML pages + sitemap + robots.

---

## 2. Page-By-Page SEO Breakdown

Every page sets a unique `<title>`, `<meta description>`, canonical URL, Open Graph card, Twitter card, and per-page schema. Examples:

| Page                         | Title                                                                                | Meta description                                                                                                                              | H1                                                  | Primary KW                  |
| ---------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------- |
| `/`                          | Flooring Store Oklahoma City \| Carpet, Hardwood, LVP & Tile \| Floors To You OKC    | OKC's largest in-stock flooring showroom. Carpet, hardwood, LVP, laminate & tile installed across OKC, Edmond, Yukon, Moore & Norman.         | Beautiful New Floors For Every OKC Home — In As Little As 24 Hours | flooring store oklahoma city |
| `/services/carpet`           | Carpet Flooring Oklahoma City \| In-Stock Carpet & Install \| Floors To You OKC      | Shop in-stock carpet in Oklahoma City with next-day installation, lifetime stain warranty, and 0% financing. Free in-home estimate.           | Carpet Flooring & Installation In Oklahoma City     | carpet flooring oklahoma city |
| `/services/hardwood`         | Hardwood Flooring Oklahoma City \| Solid & Engineered \| Floors To You OKC           | Real solid & engineered hardwood floors installed across Oklahoma City. In-stock oak, hickory & walnut, lifetime structural warranty.         | Hardwood Flooring & Installation In Oklahoma City   | hardwood flooring okc       |
| `/services/luxury-vinyl`     | Luxury Vinyl Plank (LVP) Oklahoma City \| Waterproof Floors \| Floors To You OKC     | 100% waterproof LVP flooring installed across Oklahoma City. SPC rigid core, pet-proof, lifetime warranty. Next-day install + 0% financing.   | Luxury Vinyl Plank (LVP) & Tile In Oklahoma City    | luxury vinyl plank okc      |
| `/areas/edmond`              | Flooring Store Edmond OK \| Carpet, Hardwood & LVP Install \| Floors To You OKC      | Edmond flooring installer with in-home estimates, next-day install on in-stock carpet, LVP, hardwood & tile. 100% guarantee + 0% financing.   | Flooring Installation In Edmond, OK                 | flooring edmond ok          |
| `/edmond/luxury-vinyl`       | Luxury Vinyl Edmond, OK \| Luxury Vinyl Installation \| Floors To You OKC            | Professional luxury vinyl installation in Edmond, OK. In-stock + next-day install, lifetime warranty, 0% financing. Free in-home estimate.    | Luxury Vinyl In Edmond, OK                          | luxury vinyl edmond ok      |
| `/free-in-home-estimate`     | Free In-Home Flooring Estimate \| Oklahoma City \| Floors To You OKC                 | Book a free in-home flooring estimate in OKC, Edmond, Yukon, Mustang, Moore, Norman or Guthrie. Written quote within one business day.        | Free In-Home Flooring Estimates Across The OKC Metro | flooring estimate okc       |
| `/financing`                 | 0% Financing on New Floors \| Synchrony Financing \| Floors To You OKC               | Finance your new Oklahoma City flooring at 0% APR for 24 months through Synchrony. Quick online approval, no prepayment penalty.              | New Floors Today. 0% APR For 24 Months.             | flooring financing okc      |

> **Pattern for the 40 city × service pages:** `{Service} {City}, OK | {Service} Installation | Floors To You OKC` — the most consistent long-tail format that ranks for both `{service} {city}` and `{service} installation {city}`.

### Heading hierarchy (every page)

- One `<h1>` (keyword + location).
- `<h2>` for major sections (Why, Benefits, Installation, FAQs, CTA).
- `<h3>` for sub-blocks (Best Rooms, Care, Neighborhoods, ZIPs).
- `<h4>` reserved for footer / sidebar groupings.

### URL strategy

- Lowercase, hyphenated, no trailing slash, no `.html`.
- Service taxonomy mirrors spacefloors (`/services/<material>`), but we add `/areas/<city>` and `/<city>/<service>` — the long-tail layer floorstoyouokc lacked.
- Existing high-traffic floorstoyouokc URLs are mappable via a redirect map (see Implementation Checklist).

---

## 3. Schema Examples (JSON-LD)

Every page injects at least breadcrumb + a relevant entity. Snippets below are rendered by the components in `src/components/schema/*.astro`.

### 3.1 LocalBusiness (every page, via `BaseLayout`)

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://floorstoyouokc.com/#business",
  "name": "Floors To You OKC",
  "url": "https://floorstoyouokc.com",
  "telephone": "(405) 913-7381",
  "image": "https://floorstoyouokc.com/images/brand/floors-to-you-okc-logo.webp",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Financing", "Synchrony"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4020 West Reno Avenue",
    "addressLocality": "Oklahoma City",
    "addressRegion": "OK",
    "postalCode": "73107",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 35.4659, "longitude": -97.5705 },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 35.4659, "longitude": -97.5705 },
    "geoRadius": 80450
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "https://schema.org/Monday", "opens": "09:00", "closes": "18:00" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Flooring Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpet Installation" } }
    ]
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "187" }
}
```

### 3.2 Service (every `/services/<slug>` page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://floorstoyouokc.com/services/luxury-vinyl#service",
  "name": "Luxury Vinyl Plank (LVP) & Tile",
  "serviceType": "Luxury Vinyl Plank (LVP) & Tile",
  "provider": { "@id": "https://floorstoyouokc.com/#business" },
  "areaServed": [
    { "@type": "City", "name": "Oklahoma City, OK" },
    { "@type": "City", "name": "Edmond, OK" }
  ],
  "image": "https://floorstoyouokc.com/images/services/luxury-vinyl-plank-oklahoma-city.webp",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "4.49",
    "priceSpecification": { "@type": "UnitPriceSpecification", "price": "4.49", "priceCurrency": "USD", "unitText": "SQF" }
  },
  "url": "https://floorstoyouokc.com/services/luxury-vinyl"
}
```

### 3.3 City-scoped Service (every `/[city]/[service]` page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://floorstoyouokc.com/edmond/luxury-vinyl#service",
  "name": "Luxury Vinyl Installation in Edmond, OK",
  "provider": { "@id": "https://floorstoyouokc.com/#business" },
  "areaServed": { "@type": "City", "name": "Edmond, OK" },
  "url": "https://floorstoyouokc.com/edmond/luxury-vinyl",
  "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "4.49" }
}
```

### 3.4 LocalBusiness with city `areaServed` (every `/areas/<city>` page)

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://floorstoyouokc.com/areas/edmond#business",
  "name": "Floors To You OKC – Serving Edmond, OK",
  "parentOrganization": { "@id": "https://floorstoyouokc.com/#business" },
  "areaServed": {
    "@type": "City",
    "name": "Edmond, OK",
    "containedInPlace": { "@type": "AdministrativeArea", "name": "Oklahoma County, Oklahoma" }
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 35.6528, "longitude": -97.4781 }
}
```

### 3.5 BreadcrumbList (every page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorstoyouokc.com/" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://floorstoyouokc.com/areas" },
    { "@type": "ListItem", "position": 3, "name": "Edmond", "item": "https://floorstoyouokc.com/areas/edmond" }
  ]
}
```

### 3.6 FAQPage (home, faq, every service, every area, every city×service)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does luxury vinyl cost in Edmond, OK?",
      "acceptedAnswer": { "@type": "Answer", "text": "LVP installation in Edmond starts at $4.49 / sq ft installed..." }
    }
  ]
}
```

### 3.7 AggregateRating + Review (on `/reviews`)

```json
{
  "@type": "LocalBusiness",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": 6 },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
      "author": { "@type": "Person", "name": "Wensdae S." },
      "reviewBody": "WOW! Service, service, service..."
    }
  ]
}
```

---

## 4. Internal Linking Plan

Every page intentionally links to:

- **Up** to its parent (`/services/x` ↔ `/services`, `/areas/x` ↔ `/areas`)
- **Across** to sibling pages (service ↔ areas grid, area ↔ service grid)
- **Down** to long-tail children (area page lists all 5 services for that city; service page lists all 8 cities for that service)
- **Out** to high-intent conversion pages (`/free-in-home-estimate`, `/financing`)

### Concretely

| From                           | Links to                                                              | Anchor format                              |
| ------------------------------ | --------------------------------------------------------------------- | ------------------------------------------ |
| Home                           | All 5 services, all 8 areas, reviews, financing, FAQ, estimate, about | "Carpet", "Edmond", "Read All Reviews"     |
| `/services` (hub)              | All 5 services                                                        | "{Service}"                                |
| `/services/{slug}`             | All 8 city × this-service pages, all 5 other services (via header)    | "{Service} in {City}"                      |
| `/areas` (hub)                 | All 8 cities                                                          | "{City}, OK"                               |
| `/areas/{city}`                | All 5 city × service pages, all other areas (via header)              | "{Service} in {City}"                      |
| `/{city}/{service}`            | Parent area, parent service, 4 sibling city-services, financing       | "All flooring in {City}"                   |
| Footer (every page)            | All 5 services, all 8 areas, About, Process, Financing, FAQ, Reviews  | Brand keyword anchors                      |

This produces a balanced internal graph: every key SEO page has ≥ 6 internal inbound links, every city × service page is ≤ 3 clicks from the homepage.

---

## 5. Image Naming & Alt-Text Plan

All images: **WebP**, descriptive lowercase kebab-case filenames, keyword-rich alt text. Files live under `public/images/{category}/`.

```
public/images/
├── brand/
│   ├── floors-to-you-okc-logo.webp                     alt: "Floors To You OKC logo"
│   └── floors-to-you-okc-og.webp                       (social share, 1200×630)
├── hero/
│   └── floors-to-you-okc-showroom-hero.webp            alt: "Floors To You OKC showroom on West Reno Avenue in Oklahoma City"
├── about/
│   └── floors-to-you-okc-team-showroom.webp            alt: "Floors To You OKC team standing inside the West Reno Avenue showroom"
├── financing/
│   └── floors-to-you-okc-financing-synchrony.webp      alt: "0% APR financing badge for Floors To You OKC flooring purchases"
├── services/
│   ├── carpet-flooring-oklahoma-city.webp              alt: "Plush bedroom carpet installed by Floors To You OKC in an Oklahoma City home"
│   ├── hardwood-flooring-oklahoma-city.webp            alt: "Wide-plank oak hardwood flooring installed in an Oklahoma City living room"
│   ├── laminate-flooring-oklahoma-city.webp            alt: "Modern oak-look laminate flooring in an Oklahoma City open-concept living room"
│   ├── luxury-vinyl-plank-oklahoma-city.webp           alt: "Waterproof luxury vinyl plank flooring in an Oklahoma City kitchen"
│   └── tile-flooring-oklahoma-city.webp                alt: "Large-format porcelain tile floor in an Oklahoma City bathroom"
└── areas/
    ├── flooring-installer-oklahoma-city-ok.webp        alt: "Floors To You OKC installer working in an Oklahoma City, Oklahoma home"
    ├── flooring-installer-edmond-ok.webp               alt: "Floors To You OKC installer working in an Edmond, Oklahoma home"
    ├── flooring-installer-yukon-ok.webp                alt: "Floors To You OKC installer working in a Yukon, Oklahoma home"
    ├── flooring-installer-mustang-ok.webp              alt: "Floors To You OKC installer working in a Mustang, Oklahoma home"
    ├── flooring-installer-midwest-city-ok.webp         alt: "Floors To You OKC installer working in a Midwest City, Oklahoma home"
    ├── flooring-installer-moore-ok.webp                alt: "Floors To You OKC installer working in a Moore, Oklahoma home"
    ├── flooring-installer-norman-ok.webp               alt: "Floors To You OKC installer working in a Norman, Oklahoma home"
    └── flooring-installer-guthrie-ok.webp              alt: "Floors To You OKC installer working in a Guthrie, Oklahoma home"
```

> Branded tan/brown placeholder WebPs are already in place at every path, so the site renders today. See **IMAGE_PROMPTS.md** for the exact prompt + dimensions to drop into Nano Banana Pro for each filename — overwrite the placeholder, no code change needed.

---

## 6. Technical & Performance

- **Static output** — zero JS to render any page; only `<details>` for FAQ accordions (native).
- **Astro auto-CSS-inlining** keeps small per-page CSS inline, large styles split.
- **Fonts:** Inter + Playfair Display via preconnect + `display=swap` (eliminates render-blocking).
- **Hero images:** `loading="eager" fetchpriority="high"` to feed LCP.
- **Below-fold images:** `loading="lazy"`.
- **Iframes (Google Maps):** `loading="lazy"`.
- **HTML/CSS/JS compression** via `astro-compress`.
- **Partytown** wired for any third-party script (GA4, Meta pixel) without main-thread tax.
- **No client JS frameworks** — Astro islands only when needed.
- **Auto-XML sitemap** + **robots.txt** generated at build.
- **SVG favicon** + theme-color meta for installable PWA feel.

Expected Lighthouse (Performance / SEO / A11y / Best Practices): **95 / 100 / 95 / 100** on a clean host with the static assets cached. CLS = 0 (every image has explicit width + height).

---

## 7. Implementation Checklist

### Pre-launch
- [ ] Replace placeholder WebPs in `public/images/` with Nano Banana Pro exports (see `IMAGE_PROMPTS.md`).
- [ ] Drop real logo into `public/images/brand/floors-to-you-okc-logo.webp` (600×600).
- [ ] Drop OG share card into `public/images/brand/floors-to-you-okc-og.webp` (1200×630).
- [ ] Update real email in `src/data/site.ts` (currently `info@floorstoyouokc.com`).
- [ ] Verify hours in `src/data/site.ts` against showroom signage.
- [ ] Verify lat/lng in `src/data/site.ts` (currently `35.4659, -97.5705`).
- [ ] Wire form `action` in `src/components/EstimateForm.astro` (Netlify form, Formspree, or HubSpot).
- [ ] Add Google Analytics 4 measurement ID (load via Partytown).
- [ ] Add Google Search Console verification meta in `BaseLayout.astro` if needed.

### Build & deploy
- [ ] `npm run build` (must finish without errors)
- [ ] Deploy `dist/` to Netlify, Cloudflare Pages, or Vercel.
- [ ] Set custom domain → CNAME to host.
- [ ] Force HTTPS, HSTS preload.
- [ ] Submit `https://floorstoyouokc.com/sitemap-index.xml` to Google Search Console.

### Post-launch redirects (preserve existing equity)
| Old WordPress URL                              | New URL                            |
| ---------------------------------------------- | ---------------------------------- |
| `/hardwood/`                                   | `/services/hardwood`               |
| `/laminate/`                                   | `/services/laminate`               |
| `/luxury-vinyl/`                               | `/services/luxury-vinyl`           |
| `/tile/`                                       | `/services/tile`                   |
| `/flooring-store-edmond/`                      | `/areas/edmond`                    |
| `/flooring-store-yukon-oklahoma/`              | `/areas/yukon`                     |
| `/flooring-store-mustang-oklahoma/`            | `/areas/mustang`                   |
| `/flooring-store-midwest-city-oklahoma/`       | `/areas/midwest-city`              |
| `/flooring-store-guthrie-oklahoma/`            | `/areas/guthrie`                   |
| `/about-us/`                                   | `/about`                           |
| `/contact-us/`                                 | `/contact`                         |
| `/see-our-reviews/`                            | `/reviews`                         |
| `/see-offers/`                                 | `/financing`                       |
| `/how-floor-to-you-works/`                     | `/how-it-works`                    |
| `/estimate/`                                   | `/free-in-home-estimate`           |

Add the above 15 lines to `public/_redirects` (Netlify) or your host's equivalent.

### Ongoing
- [ ] Monthly: write one blog post per service or city (e.g., "Best LVP for Edmond Homes With Dogs") — Astro content collection can be added in 30 minutes.
- [ ] Quarterly: refresh testimonials in `src/data/testimonials.ts` and re-build.
- [ ] Annual: review pricing in `src/data/services.ts`.

---

## 8. How To Run Locally

```bash
cd "C:\Users\Billg\OneDrive\Desktop\Website Projects\floorstoyou"
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serves dist/
```

Re-run `node scripts/gen-placeholders.mjs` if you ever delete the placeholder images and want them regenerated.

---

## 9. Where Things Live

```
src/
├── data/                  # single source of truth (site, services, areas, testimonials, faqs)
├── components/            # Header, Footer, Hero, ServiceGrid, AreaGrid, Testimonials, FAQ, EstimateForm, GoogleMap...
│   └── schema/            # LocalBusiness, Service, Breadcrumb, FAQ schema components
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro                       # home
│   ├── about / contact / reviews / ...   # core pages
│   ├── services/index.astro              # service hub
│   ├── services/[service].astro          # dynamic service page
│   ├── areas/index.astro                 # area hub
│   ├── areas/[city].astro                # dynamic area page
│   └── [city]/[service].astro            # city × service matrix (40 pages)
└── styles/global.css
public/
└── images/                # WebP placeholders → swap with Nano Banana Pro exports
scripts/
└── gen-placeholders.mjs   # regenerates branded WebP placeholders
astro.config.mjs           # integrations + sitemap config
tailwind.config.mjs        # brand color tokens
DELIVERABLES.md            # this file
IMAGE_PROMPTS.md           # Nano Banana Pro prompts per image
```
