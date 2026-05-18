// Import photos from the All About Floors NW asset folder.
// - Converts every .jpg/.png to .webp using sharp
// - Copies existing .webp files as-is
// - Skips the other company's logo + OG card
// - Re-buckets into /public/images/photos/{category}/ using filename heuristics
import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { extname, basename, resolve, join } from 'node:path';

const SRC = 'C:/Users/Billg/OneDrive/Desktop/Website Projects/All About Floors NW/public/images';
const OUT = 'C:/Users/Billg/OneDrive/Desktop/Website Projects/floorstoyou/public/images/photos';

// Files to skip outright (other-company branded assets)
const SKIP = new Set([
  'logo.webp',
  'og-default.webp',
  'all-about-floors-nw-showroom-interior-vancouver-wa.webp',
]);

// Bucket rules — first regex match wins; order matters.
const RULES = [
  // services we don't offer — keep but bucket for possible reuse
  { dir: 'epoxy', re: /epoxy|concretecoat/i },
  { dir: 'commercial', re: /^commercial|commercial[^a-z]/i },
  { dir: 'countertop', re: /countertop/i },
  { dir: 'refinish', re: /refinish|recoat|restain|stainingfloors|refnish/i },
  { dir: 'repair', re: /floor-repair|^repair\b|^repair\.webp/i },

  // materials
  { dir: 'carpet', re: /carpet|babysfeet|moderncarpet/i },
  { dir: 'tile', re: /^tile|tile\(|tileinstaller|tileluxury|marbeltile|marbletile/i },
  { dir: 'hardwood', re: /hardwood|wideplank|herringbone|closeuphard/i },
  { dir: 'laminate', re: /laminate|lamiante|lamaniate|doglaminate|doglamiate/i },
  { dir: 'lvp', re: /lvp|luxuryvinly|luxury-vinyl|^vinyl|vinyl-flooring|vinylchair|vinylliving|vinyllowtohigh|vinylslect|flooringpasteinstall/i },

  // misc
  { dir: 'showroom', re: /showroom|samples/i },
  { dir: 'team', re: /team|crew|installer|flooring-?team|flooriungteam/i },
  { dir: 'hero', re: /^hero|^hero-|herofloor/i },
  { dir: 'install', re: /install|removal|measuring/i },
  { dir: 'rooms', re: /kitchen|bedroom|bathroom|sunroom|staircase|livingroom|basement|chairincorner|fullhome|home\.|home\(|home_|space|select|sun\(/i },
  { dir: 'cleaning', re: /clean|hardsyurface|hardsurface/i },
  { dir: 'collage', re: /collage/i },
  { dir: 'areas', re: /flooring-[a-z]+-(wa|or)/i },
  { dir: 'generic', re: /.*/ },
];

function bucket(name) {
  for (const r of RULES) if (r.re.test(name)) return r.dir;
  return 'generic';
}

function safeName(file) {
  // strip parentheses + spaces + weird casing
  return file
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/_/g, '-')
    .toLowerCase();
}

const files = await readdir(SRC);
const made = {};

for (const f of files) {
  if (SKIP.has(f)) { console.log('SKIP   ' + f); continue; }
  const ext = extname(f).toLowerCase();
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) { console.log('SKIP   ' + f + ' (unsupported)'); continue; }

  const base = basename(f, ext);
  const dir = bucket(f);
  const targetDir = join(OUT, dir);
  await mkdir(targetDir, { recursive: true });
  const target = join(targetDir, safeName(base) + '.webp');

  if (ext === '.webp') {
    await copyFile(join(SRC, f), target);
  } else {
    await sharp(join(SRC, f)).webp({ quality: 82 }).toFile(target);
  }
  made[dir] = (made[dir] || 0) + 1;
  console.log(dir.padEnd(10) + ' ' + safeName(base) + '.webp');
}

console.log('\nTotals:');
for (const [k, v] of Object.entries(made).sort()) console.log(`  ${k.padEnd(12)} ${v}`);
