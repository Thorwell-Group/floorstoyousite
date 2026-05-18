// Downloads every product image from _research/products.json,
// converts to WebP at 2 sizes (600x600 detail + 400x400 thumb),
// outputs under /public/images/products/{category}/{slug}.webp
import sharp from 'sharp';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const products = JSON.parse(await readFile('_research/products.json', 'utf8'));
const OUT_BASE = 'public/images/products';

let ok = 0, skip = 0, fail = 0;
const failed = [];

async function downloadOne(p, idx) {
  const dir = `${OUT_BASE}/${p.category}`;
  await mkdir(dir, { recursive: true });
  const out = `${dir}/${p.slug}.webp`;

  if (existsSync(out)) { skip++; return; }

  try {
    const r = await fetch(p.image, { headers: { 'User-Agent': UA } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const buf = Buffer.from(await r.arrayBuffer());

    // resize to max 800px on longest edge, square crop center, output webp q82
    await sharp(buf)
      .resize({ width: 800, height: 800, fit: 'cover', position: 'center' })
      .webp({ quality: 82 })
      .toFile(out);

    ok++;
    if (idx % 20 === 0) process.stdout.write(`  ${idx}/${products.length} ok\n`);
  } catch (e) {
    fail++;
    failed.push({ slug: p.slug, image: p.image, err: e.message });
    console.log(`  FAIL ${p.slug}: ${e.message}`);
  }
}

// Run with limited concurrency (8 at a time)
const conc = 8;
let i = 0;
async function worker() {
  while (true) {
    const idx = i++;
    if (idx >= products.length) return;
    await downloadOne(products[idx], idx + 1);
  }
}
await Promise.all(Array.from({ length: conc }, worker));

console.log(`\nDone. ok=${ok}, skipped=${skip}, failed=${fail}`);
if (failed.length) await writeFile('_research/products-failed.json', JSON.stringify(failed, null, 2));
