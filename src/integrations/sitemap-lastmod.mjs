import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

// Per-URL <lastmod> for @astrojs/sitemap.
//
// The sitemap used to stamp every URL with the build time (`lastmod: new Date()`),
// so all 129 URLs claimed to change on every deploy. Google ignores lastmod on
// sites where it is never accurate, which throws away the one hint that tells it
// a new or updated page is worth crawling soon.
//
// Now: blog posts use their own dateModified from posts.ts; every other page uses
// the last git commit that touched the files its main content comes from. If git
// is unavailable (e.g. a shallow CI clone) the URL simply gets no lastmod, which
// is better than a wrong one.

const gitCache = new Map();
function gitDate(file) {
  if (gitCache.has(file)) return gitCache.get(file);
  let d;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (out) d = new Date(out);
  } catch {
    d = undefined;
  }
  gitCache.set(file, d);
  return d;
}

function latest(files) {
  const dates = files.map(gitDate).filter(Boolean);
  if (!dates.length) return undefined;
  return new Date(Math.max(...dates.map((d) => d.getTime())));
}

// slug -> dateModified, read straight from the data file (no TS import needed).
let postDates;
function loadPostDates() {
  if (postDates) return postDates;
  postDates = new Map();
  try {
    const src = readFileSync(new URL('../data/posts.ts', import.meta.url), 'utf8');
    const re = /slug:\s*'([^']+)'[\s\S]*?dateModified:\s*'([^']+)'/g;
    let m;
    while ((m = re.exec(src))) postDates.set(m[1], new Date(m[2]));
  } catch {
    /* no blog data: fall through */
  }
  return postDates;
}

const P = 'src/pages/';
const D = 'src/data/';

export function lastmodFor(url) {
  const path = new URL(url).pathname.replace(/\/+$/, '') || '/';
  const parts = path.split('/').filter(Boolean);

  if (parts[0] === 'blog') {
    const posts = loadPostDates();
    if (parts[1]) return posts.get(parts[1]);
    const all = [...posts.values()];
    return all.length ? new Date(Math.max(...all.map((d) => d.getTime()))) : undefined;
  }
  if (path === '/') return latest([P + 'index.astro']);
  if (parts[0] === 'areas')
    return latest(parts[1] ? [P + 'areas/[city].astro', D + 'areas.ts'] : [P + 'areas/index.astro', D + 'areas.ts']);
  if (parts[0] === 'services')
    return latest(parts[1] ? [P + 'services/[service].astro', D + 'services.ts'] : [P + 'services/index.astro', D + 'services.ts']);
  if (parts[0] === 'proof') return latest([P + 'proof/[topic].astro', D + 'proof.ts']);
  if (parts.length === 1) return latest([P + parts[0] + '.astro']);
  if (parts.length === 2) return latest([P + '[city]/[service].astro', D + 'areas.ts', D + 'services.ts']);
  return undefined;
}

// For sitemap({ serialize }). Drops the build-time lastmod when we have no real one.
export function serializeWithLastmod(item) {
  const d = lastmodFor(item.url);
  if (d && !Number.isNaN(d.getTime())) item.lastmod = d.toISOString();
  else delete item.lastmod;
  return item;
}
