/**
 * Per-product content for the 179 showroom SKU pages.
 *
 * The problem: each of these pages carried a single templated sentence of unique
 * copy ("{name} is one of N in-stock {category} options...") — roughly 13 words
 * against a full page of navigation. They are indexed (Bill's call, and the right
 * one), so they need to be worth landing on.
 *
 * The honest constraint: products.ts holds only name, category, image, service and
 * slug. There is no thickness, wear layer, species, AC rating or plank dimension
 * in the data, and none of that is invented below.
 *
 * What IS derivable is sitting in the product name, which suppliers encode
 * deliberately: "Trevi Grey 12x24" states a format, "Angelica Natural Oak" states a
 * species and tone, "Carrara White" states the look it reproduces, "Black Subway"
 * states a shape. Parsing that is reading the data we have, not guessing. Anything
 * a name does not state simply is not claimed.
 *
 * TO GO FURTHER: the supplier spec sheets would give wear layer, thickness, AC
 * rating and true dimensions. Add those to products.ts and this module can say
 * something genuinely specific about every SKU rather than what the name implies.
 */

export interface Derived {
  /** e.g. "12x24" — only when the name states it. */
  format?: string;
  /** e.g. "grey" — only when the name states it. */
  tone?: string;
  /** e.g. "oak", "carrara marble", "subway" — only when the name states it. */
  look?: string;
}

const TONES: [RegExp, string][] = [
  [/\b(grey|gray|greige)\b/i, 'grey'],
  [/\b(white|blanc|bianchi|snow|frost|jade)\b/i, 'white'],
  [/\b(black|noir|charcoal|graphite|magnetite|slate)\b/i, 'charcoal'],
  [/\b(beige|bone|sand|buff|tan|cream|natural|blonde)\b/i, 'warm neutral'],
  [/\b(brown|umber|mocha|chocolate|walnut|espresso|noce|bronze|copper)\b/i, 'brown'],
  [/\b(red|wine|terracotta|rust)\b/i, 'red-toned'],
  [/\b(blue|agave|ocean)\b/i, 'blue-toned'],
  [/\b(green|sage|olive)\b/i, 'green-toned'],
  [/\b(gold|honey|amber|oro)\b/i, 'golden'],
];

const LOOKS: [RegExp, string][] = [
  [/\bcarrara\b/i, 'Carrara marble'],
  [/\bcalacatta\b/i, 'Calacatta marble'],
  [/\btravertin/i, 'travertine'],
  [/\bsubway\b/i, 'classic subway'],
  [/\bherringbone\b/i, 'herringbone'],
  [/\bmosaic\b/i, 'mosaic'],
  [/\b(oak)\b/i, 'oak'],
  [/\b(hickory)\b/i, 'hickory'],
  [/\b(walnut)\b/i, 'walnut'],
  [/\b(maple)\b/i, 'maple'],
  [/\b(bamboo)\b/i, 'bamboo'],
  [/\b(pine|timberlake)\b/i, 'pine'],
  [/\b(acacia|acazia|koa)\b/i, 'acacia'],
  [/\b(stone|granite|marble|quartzite|limestone)\b/i, 'natural stone'],
  [/\b(concrete|cement)\b/i, 'concrete'],
];

/** Reads only what the product name actually states. */
export function derive(name: string): Derived {
  const d: Derived = {};
  const fmt = name.match(/\b(\d{1,2})\s*x\s*(\d{1,2})\b/i);
  if (fmt) d.format = `${fmt[1]}x${fmt[2]}`;
  for (const [re, label] of TONES) if (re.test(name)) { d.tone = label; break; }
  for (const [re, label] of LOOKS) if (re.test(name)) { d.look = label; break; }
  return d;
}

/** Category-level guidance. True of the whole category, and genuinely useful. */
interface CatInfo {
  /** One-line description of what this category IS. */
  what: string;
  /** Where it belongs in an Oklahoma home, and where it does not. */
  rooms: string;
  /** The Oklahoma-specific consideration that actually matters. */
  climate: string;
  /** How to look after it. */
  care: string;
  /** The question worth asking before buying this category. */
  ask: string;
}

export const CATEGORY: Record<string, CatInfo> = {
  carpet: {
    what: 'Carpet is still the warmest, quietest floor you can put in a bedroom, and modern stain-resistant fibers handle family life far better than the carpet most people remember.',
    rooms: 'Bedrooms, stairs, bonus rooms and anywhere you want sound softened. We would steer you away from carpet at an entry, in a laundry, or anywhere that sees wet shoes regularly.',
    climate: 'Oklahoma summers push a lot of dust and pollen indoors, so fiber choice and a good vacuum matter more here than in a milder climate. Carpet in a storm shelter or below-grade room needs a moisture-tolerant pad.',
    care: 'Vacuum traffic lanes twice a week, blot spills with cool water rather than rubbing, and schedule a deep clean every 12 to 18 months — most stain warranties require it.',
    ask: 'Ask what pad is going underneath. It carries the traffic, it is where cheap quotes cut, and it is the difference between carpet that still feels new in year three and carpet that has flattened in the walkways.',
  },
  'engineered-wood': {
    what: 'Engineered wood is a real hardwood wear layer over a stable plywood core. You get the look and the resale value of solid hardwood with far less movement.',
    rooms: 'Living rooms, dining rooms, hallways, bedrooms and open-plan main floors. It is also the correct product for a slab-built room where solid hardwood cannot go.',
    climate: 'This is the reason engineered wood suits Oklahoma. Homes here swing between humid summers and dry, heated winters, and that movement is what gaps and cups solid boards. A stable core handles it.',
    care: 'Sweep or vacuum on a hard-floor setting, damp-mop with a wood-safe cleaner — never a steam mop — and try to hold indoor humidity between 35 and 55 percent year-round.',
    ask: 'Ask about the wear layer thickness. It decides whether the floor can ever be refinished, and it is the number most quotes leave out entirely.',
  },
  laminate: {
    what: 'Modern laminate is a photographic wood or stone layer under a tough clear wear coat. The current generation is a genuinely different product from the click-together boards that swelled at the seams a decade ago.',
    rooms: 'Living areas, bedrooms, hallways and playrooms. Waterproof-core laminate also works in a kitchen or laundry, though for a full bathroom we would usually point you at vinyl plank instead.',
    climate: 'Laminate floats rather than being fixed down, so it needs room to move at the perimeter as humidity changes through an Oklahoma year. That expansion gap is where rushed installs fail.',
    care: 'Sweep or vacuum, damp-mop sparingly with a laminate-safe cleaner, and wipe spills up rather than letting them sit in a seam. Never wet-mop.',
    ask: 'Ask whether it is water-resistant or genuinely waterproof — the two words get used loosely and they mean very different things once something spills.',
  },
  tile: {
    what: 'Porcelain and ceramic tile is the hardest-wearing, most water-tolerant surface you can install, and modern printing means it convincingly reproduces stone, marble and wood.',
    rooms: 'Bathrooms, kitchens, laundries, entries and mud rooms — anywhere water lands. It also works through main living areas if you like the look and do not mind a harder, cooler surface underfoot.',
    climate: 'Tile is indifferent to Oklahoma humidity, which is its real advantage here. It is also the sensible choice for a storm shelter or below-grade room where moisture is a genuine possibility.',
    care: 'Sweep and damp-mop with a neutral cleaner. Grout is the part that needs attention — seal it, and avoid acidic cleaners that break the seal down.',
    ask: 'Ask about the substrate, not just the tile. Cracked grout is almost always movement underneath rather than a grout problem, and that gets solved before anything is set.',
  },
  'vinyl-click': {
    what: 'Click-lock luxury vinyl plank is a rigid waterproof core with a printed wear layer on top. It floats over almost any flat subfloor with no adhesive, and it is the fastest-growing floor in Oklahoma for good reason.',
    rooms: 'Genuinely whole-home — kitchens, bathrooms, basements, living areas and rentals. There is no room in a normal house where it cannot go.',
    climate: 'A rigid SPC core barely moves with Oklahoma humidity, which is exactly why it has taken over here. It also handles a slab-built home without the moisture worries wood brings.',
    care: 'Sweep and damp-mop with a vinyl-safe cleaner. Skip wax and polish — it is finished for life. Felt pads under chair legs keep the wear layer intact.',
    ask: 'Ask for the wear layer in mils. For a household with kids or a dog, 12 mil is the sensible minimum and 20 mil is genuinely durable — a lot of budget LVP is 6 to 8.',
  },
  'vinyl-glue': {
    what: 'Glue-down luxury vinyl tile is the thinnest and most stable vinyl available. Bonded directly to the subfloor, it has no hollow sound underfoot and no movement at all.',
    rooms: 'Kitchens, bathrooms, basements, laundries and light commercial spaces. It is also the answer where a doorway height will not take the build-up of a floating floor.',
    climate: 'Because it is bonded rather than floating, it does not expand and contract with Oklahoma humidity the way a floating floor does. The trade-off is that the subfloor beneath it has to be properly flat and dry first.',
    care: 'Sweep and damp-mop with a vinyl-safe cleaner. No wax, no polish, and felt pads under furniture legs.',
    ask: 'Ask about subfloor prep. Glue-down telegraphs whatever is underneath it, so the self-levelling and moisture testing are most of the labour on this install.',
  },
};

export const CATEGORY_LABEL: Record<string, string> = {
  carpet: 'carpet',
  'engineered-wood': 'engineered wood',
  laminate: 'laminate',
  tile: 'tile',
  'vinyl-click': 'luxury vinyl plank',
  'vinyl-glue': 'glue-down luxury vinyl tile',
};

/** Opening line built only from what the name states. */
export function openingLine(name: string, categorySlug: string): string {
  const d = derive(name);
  const label = CATEGORY_LABEL[categorySlug] ?? 'flooring';
  const bits: string[] = [];
  if (d.format) bits.push(`a ${d.format} format`);
  if (d.look) bits.push(`${/^[aeiou]/i.test(d.look) ? 'an' : 'a'} ${d.look} look`);
  if (d.tone) bits.push(`${/^[aeiou]/i.test(d.tone) ? 'an' : 'a'} ${d.tone} tone`);

  if (!bits.length) {
    return `${name} is one of our in-stock ${label} options, on the floor at our West Reno Avenue showroom in Oklahoma City and available for next-day installation.`;
  }
  const joined = bits.length === 1 ? bits[0] : `${bits.slice(0, -1).join(', ')} and ${bits[bits.length - 1]}`;
  return `${name} is an in-stock ${label} with ${joined}. It is on the floor at our West Reno Avenue showroom in Oklahoma City, and available for next-day installation.`;
}

/** Deterministic variation so same-category products do not read identically. */
export function variant(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return { pick: (n: number) => h % n, flip: (b = 0) => ((h >> b) & 1) === 1 };
}

/** Which of the category facts to lead with, varied per product. */
export function orderedFacts(categorySlug: string, slug: string): { heading: string; body: string }[] {
  const c = CATEGORY[categorySlug];
  if (!c) return [];
  const all = [
    { heading: 'Where it belongs', body: c.rooms },
    { heading: 'How it handles an Oklahoma year', body: c.climate },
    { heading: 'Looking after it', body: c.care },
    { heading: 'Worth asking before you buy', body: c.ask },
  ];
  const v = variant(slug);
  const start = v.pick(all.length);
  return [...all.slice(start), ...all.slice(0, start)];
}
