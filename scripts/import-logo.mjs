import sharp from 'sharp';
import { copyFile } from 'node:fs/promises';

const SRC = 'C:/Users/Billg/AppData/Local/Temp/Floors To You Logo.png';
const OUT_DIR = 'C:/Users/Billg/OneDrive/Desktop/Website Projects/floorstoyou/public/images/brand';

// Trim transparent edge so it sits flush in the header
const trimmed = await sharp(SRC).trim({ threshold: 8 }).toBuffer();

// Color WebP (full size) for header/footer
await sharp(trimmed).webp({ quality: 92 }).toFile(`${OUT_DIR}/floors-to-you-logo.webp`);

// Square OG / schema logo: 1200×1200 with cream padding
const meta = await sharp(trimmed).metadata();
const size = 1200;
const pad = Math.round(size * 0.08);
await sharp(trimmed)
  .resize({
    width: size - pad * 2,
    height: size - pad * 2,
    fit: 'contain',
    background: { r: 251, g: 247, b: 240, alpha: 1 },
  })
  .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 251, g: 247, b: 240, alpha: 1 } })
  .webp({ quality: 92 })
  .toFile(`${OUT_DIR}/floors-to-you-okc-logo.webp`);

// Open Graph 1200×630
await sharp({ create: { width: 1200, height: 630, channels: 4, background: { r: 251, g: 247, b: 240, alpha: 1 } } })
  .composite([{ input: await sharp(trimmed).resize({ width: 900, fit: 'contain' }).toBuffer(), gravity: 'center' }])
  .webp({ quality: 90 })
  .toFile(`${OUT_DIR}/floors-to-you-okc-og.webp`);

console.log('logo dimensions trimmed:', meta.width, 'x', meta.height);
console.log('wrote: floors-to-you-logo.webp, floors-to-you-okc-logo.webp, floors-to-you-okc-og.webp');
