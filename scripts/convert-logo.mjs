import sharp from 'sharp';

const SRC = 'public/images/brand/floors-to-you-logo.png';
const OUT_DIR = 'public/images/brand';

// 1. Trimmed WebP for header/footer
const trimmed = await sharp(SRC).trim({ threshold: 5 }).toBuffer();
await sharp(trimmed).webp({ quality: 92 }).toFile(`${OUT_DIR}/floors-to-you-logo.webp`);

// 2. Square logo for schema (1200x1200 cream padded)
const size = 1200;
const pad = Math.round(size * 0.1);
await sharp(trimmed)
  .resize({ width: size - pad * 2, height: size - pad * 2, fit: 'contain', background: { r: 251, g: 247, b: 240, alpha: 1 } })
  .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 251, g: 247, b: 240, alpha: 1 } })
  .webp({ quality: 92 })
  .toFile(`${OUT_DIR}/floors-to-you-okc-logo.webp`);

// 3. OG card 1200x630 with logo centered on cream
await sharp({ create: { width: 1200, height: 630, channels: 4, background: { r: 251, g: 247, b: 240, alpha: 1 } } })
  .composite([{ input: await sharp(trimmed).resize({ width: 900, fit: 'contain' }).toBuffer() }])
  .webp({ quality: 90 })
  .toFile(`${OUT_DIR}/floors-to-you-okc-og.webp`);

const m = await sharp(`${OUT_DIR}/floors-to-you-logo.webp`).metadata();
console.log(`wrote: floors-to-you-logo.webp (${m.width}x${m.height})`);
console.log('wrote: floors-to-you-okc-logo.webp (1200x1200 schema)');
console.log('wrote: floors-to-you-okc-og.webp (1200x630 share card)');
