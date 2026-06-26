// Color inference for the /products filter sidebar.
// products.ts is auto-generated (no color metadata), so we derive a color
// family from each product name. Kept CONSERVATIVE on purpose: we only tag a
// color when a keyword is unambiguous, so the sidebar never mislabels a floor.
// A product with no confident match simply isn't color-filterable (still shows
// under its Product Type).

export type ColorFamily = {
  slug: string;
  label: string;
  swatch: string; // hex used for the sidebar dot
};

// Display order = sidebar order. Swatch hexes are representative, not exact.
export const colorFamilies: ColorFamily[] = [
  { slug: 'white', label: 'White', swatch: '#f3f1ea' },
  { slug: 'beige', label: 'Beige & Cream', swatch: '#e3d4b8' },
  { slug: 'tan', label: 'Tan & Sand', swatch: '#c9a96a' },
  { slug: 'natural', label: 'Natural Wood', swatch: '#b7864b' },
  { slug: 'gray', label: 'Gray', swatch: '#9aa0a6' },
  { slug: 'brown', label: 'Brown', swatch: '#6f4a2c' },
  { slug: 'charcoal', label: 'Charcoal & Black', swatch: '#2f2f31' },
  { slug: 'warm', label: 'Red & Warm', swatch: '#9c3b33' },
  { slug: 'gold', label: 'Gold & Bronze', swatch: '#b08a2c' },
  { slug: 'green', label: 'Green', swatch: '#5e7d5a' },
  { slug: 'blue', label: 'Blue', swatch: '#5577a0' },
];

// Keyword -> color family. Only strong, low-ambiguity words. Order doesn't
// matter; a product can land in more than one family (e.g. "Wine Cellar Grey").
const KEYWORDS: Record<string, string[]> = {
  white: ['white', 'blanc', 'bianchi', 'snow', 'frost', 'winter', 'calacatta', 'jade'],
  beige: ['beige', 'cream', 'bone', 'almond', 'ivory', 'lasa', 'baja'],
  tan: ['tan', 'sand', 'buff', 'desert', 'rattan', 'ginger', 'honey'],
  natural: ['oak', 'hickory', 'pine', 'walnut', 'barnboard', 'sawmill', 'natural', 'wood'],
  gray: ['grey', 'gray', 'gris', 'cinza', 'smoke', 'ash', 'slate', 'granite', 'silver', 'zinc', 'platina', 'stone'],
  brown: ['brown', 'mocha', 'chocolate', 'espresso', 'umber', 'noce', 'cedar', 'chickory', 'clove', 'nutmeg', 'rustic', 'burlap', 'koa', 'acorn'],
  charcoal: ['charcoal', 'black', 'iron', 'magnetite', 'galaxy', 'metallic', 'et06', 'sable'],
  warm: ['red', 'wine', 'copper', 'autumn', 'lipstick', 'bombshell', 'terra'],
  gold: ['gold', 'oro', 'venetian', 'bronze'],
  green: ['green', 'agave'],
  blue: ['blue', 'sky'],
};

/** Lowercased keyword scan -> array of color-family slugs for a product name. */
export function colorsForName(name: string): string[] {
  const n = name.toLowerCase();
  const out: string[] = [];
  for (const [family, words] of Object.entries(KEYWORDS)) {
    if (words.some((w) => n.includes(w))) out.push(family);
  }
  return out;
}
