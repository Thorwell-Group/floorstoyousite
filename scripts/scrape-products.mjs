// Scrapes every product from the 6 product-category pages on floorstoyouokc.com.
// Walks pagination, parses product cards, writes _research/products.json.
import { writeFile, mkdir } from 'node:fs/promises';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const CATEGORIES = [
  { slug: 'carpet',           service: 'carpet' },
  { slug: 'engineered-wood',  service: 'engineered-wood' },
  { slug: 'laminate',         service: 'laminate' },
  { slug: 'tile',             service: 'tile' },
  { slug: 'vinyl-glue',       service: 'vinyl-glue' },
  { slug: 'vinyl-click',      service: 'vinyl-click' },
];

async function fetchPage(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'text/html' } });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return await r.text();
}

function highestResImg(html) {
  // From data-srcset, pick the largest width URL. Fall back to data-src then src.
  const srcset = html.match(/data-srcset="([^"]+)"/)?.[1];
  if (srcset) {
    const candidates = srcset.split(',').map((s) => s.trim()).map((s) => {
      const [u, w] = s.split(/\s+/);
      return { url: u, width: parseInt(w, 10) || 0 };
    });
    candidates.sort((a, b) => b.width - a.width);
    return candidates[0].url;
  }
  const ds = html.match(/data-src="([^"]+)"/)?.[1];
  if (ds) return ds;
  return html.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null;
}

function stripResize(url) {
  // Drop ?resize=WxH and &resize=WxH; keep ssl=1 if present
  return url.replace(/[?&]resize=\d+(%2C|,)\d+/i, '');
}

function parseProductCards(html) {
  const items = [];
  const re = /<li[^>]*class="[^"]*\bproduct\b[^"]*"[^>]*>([\s\S]*?)<\/li>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const body = m[1];
    if (m[0].includes('menu-item')) continue;
    const linkM = body.match(/<a[^>]+href="(https:\/\/floorstoyouokc\.com\/product\/([^"/]+)\/)"/);
    if (!linkM) continue;
    const slug = linkM[2];
    const altM = body.match(/alt="([^"]+)"/);
    const name = altM ? altM[1] : slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    let img = highestResImg(body);
    if (!img) continue;
    img = stripResize(img);
    items.push({ slug, name, image: img });
  }
  return items;
}

async function scrapeCategory(cat) {
  let page = 1;
  const seen = new Map();
  while (true) {
    const url = page === 1
      ? `https://floorstoyouokc.com/product-category/${cat.slug}/`
      : `https://floorstoyouokc.com/product-category/${cat.slug}/page/${page}/`;
    let html;
    try { html = await fetchPage(url); }
    catch (e) { console.log(`  [${cat.slug}] page ${page} stop: ${e.message}`); break; }

    const items = parseProductCards(html);
    if (items.length === 0) { console.log(`  [${cat.slug}] page ${page} = 0 items, done`); break; }
    let added = 0;
    for (const it of items) if (!seen.has(it.slug)) { seen.set(it.slug, it); added++; }
    console.log(`  [${cat.slug}] page ${page}: +${added} (total ${seen.size})`);
    if (added === 0) break;
    // Check pagination
    if (!html.includes(`page/${page + 1}/`) && !html.includes(`page=${page + 1}`)) break;
    page++;
    if (page > 12) break;
  }
  return [...seen.values()].map((p) => ({ ...p, category: cat.slug, service: cat.service }));
}

const all = [];
for (const c of CATEGORIES) {
  console.log(`\nScraping /product-category/${c.slug}/`);
  const items = await scrapeCategory(c);
  all.push(...items);
}

await mkdir('_research', { recursive: true });
await writeFile('_research/products.json', JSON.stringify(all, null, 2));
console.log(`\nWrote _research/products.json with ${all.length} products.`);
console.log('Per category:');
for (const c of CATEGORIES) {
  const n = all.filter((p) => p.category === c.slug).length;
  console.log(`  ${c.slug.padEnd(16)} ${n}`);
}
