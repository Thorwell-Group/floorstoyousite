// Generates branded tan/brown placeholder WebPs at every image path the site references.
// Replace each WebP with a real Nano Banana Pro export at the same path — no code change needed.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', 'public');

const PALETTE = ['#bd9454', '#67441e', '#8b5928', '#c7a977', '#fbf6ee'];

function pick(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return [PALETTE[h % PALETTE.length], PALETTE[(h >> 3) % PALETTE.length]];
}

async function makeImage(path, label, w = 1600, h = 1200) {
  const [a, b] = pick(path);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <pattern id="p" width="120" height="120" patternUnits="userSpaceOnUse">
      <rect width="120" height="120" fill="url(#g)"/>
      <path d="M0 0h120v120H0z" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="2"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#p)"/>
  <rect x="40" y="${h - 140}" width="${Math.min(w - 80, 1300)}" height="100" rx="20" fill="rgba(28,28,28,.55)"/>
  <text x="60" y="${h - 75}" font-family="Georgia,serif" font-size="42" fill="#fbf6ee">Floors To You OKC · placeholder</text>
  <text x="60" y="${h - 40}" font-family="Inter,Arial,sans-serif" font-size="22" fill="#fbf6ee" opacity=".85">${label}</text>
</svg>`;
  const out = resolve(ROOT, path.replace(/^\//, ''));
  await mkdir(dirname(out), { recursive: true });
  await sharp(Buffer.from(svg)).resize(w, h).webp({ quality: 80 }).toFile(out);
}

const services = ['carpet', 'hardwood', 'laminate', 'luxury-vinyl-plank', 'tile'];
const areas = ['oklahoma-city', 'edmond', 'yukon', 'mustang', 'midwest-city', 'guthrie', 'moore', 'norman'];

const list = [
  ['/images/hero/floors-to-you-okc-showroom-hero.webp', 'Showroom hero — 4020 W Reno Ave, OKC', 1600, 1200],
  ['/images/brand/floors-to-you-okc-logo.webp', 'Logo placeholder', 600, 600],
  ['/images/brand/floors-to-you-okc-og.webp', 'Open Graph share card', 1200, 630],
  ['/images/about/floors-to-you-okc-team-showroom.webp', 'Team in showroom', 1600, 1200],
  ['/images/financing/floors-to-you-okc-financing-synchrony.webp', '0% APR financing', 1200, 900],
  ...services.map((s) => [`/images/services/${s.includes('vinyl') ? 'luxury-vinyl-plank' : s}-flooring-oklahoma-city.webp`, `${s} flooring · OKC`, 1200, 1500]),
  ...areas.map((a) => [`/images/areas/flooring-installer-${a}-ok.webp`, `Installer in ${a.replace(/-/g, ' ')}, OK`, 1600, 1200]),
];

// Fix the service slug naming used in data files (luxury-vinyl path uses "luxury-vinyl-plank")
const overrides = [
  ['/images/services/carpet-flooring-oklahoma-city.webp', 'Carpet flooring · OKC', 1200, 1500],
  ['/images/services/hardwood-flooring-oklahoma-city.webp', 'Hardwood flooring · OKC', 1200, 1500],
  ['/images/services/laminate-flooring-oklahoma-city.webp', 'Laminate flooring · OKC', 1200, 1500],
  ['/images/services/luxury-vinyl-plank-oklahoma-city.webp', 'Luxury Vinyl Plank · OKC', 1200, 1500],
  ['/images/services/tile-flooring-oklahoma-city.webp', 'Tile flooring · OKC', 1200, 1500],
];

const dedup = new Map();
for (const item of [...list, ...overrides]) dedup.set(item[0], item);

for (const [path, label, w, h] of dedup.values()) {
  await makeImage(path, label, w, h);
  process.stdout.write('· ' + path + '\n');
}

// Favicon SVG
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#bd9454"/><text x="32" y="44" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="38" fill="#fff">F</text></svg>`;
await writeFile(resolve(ROOT, 'favicon.svg'), fav);
process.stdout.write('· /favicon.svg\n');

console.log('done');
