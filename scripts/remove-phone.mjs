import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const EXTS = new Set(['.astro', '.ts', '.md']);
const SWAPS = [
  // primary FTY phone variants → email
  [/Call \(405\)\s*913-7381/g, 'Email bsmith@allinfloors.com'],
  [/call \(405\)\s*913-7381/g, 'email bsmith@allinfloors.com'],
  [/\(405\)\s*913-7381/g, 'bsmith@allinfloors.com'],
  [/\(405\)\s*486-9165/g, 'bsmith@allinfloors.com'],
];

let touched = 0, total = 0;

async function walk(dir) {
  for (const entry of await readdir(dir)) {
    const p = join(dir, entry);
    const s = await stat(p);
    if (s.isDirectory()) { await walk(p); continue; }
    if (!EXTS.has(extname(p))) continue;
    let txt = await readFile(p, 'utf8');
    let count = 0;
    for (const [re, sub] of SWAPS) {
      txt = txt.replace(re, (m) => { count++; return sub; });
    }
    if (count > 0) {
      await writeFile(p, txt);
      touched++; total += count;
      console.log(`  ${String(count).padStart(2)} edits  ${p}`);
    }
  }
}

await walk('src');
console.log(`\nDone. ${touched} files, ${total} replacements.`);
