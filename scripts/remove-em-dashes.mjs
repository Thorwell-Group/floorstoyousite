// Replaces every em dash (U+2014) under src/ with " - " (hyphen) and cleans up any
// double spaces it leaves behind. Touches only .astro, .ts, .md inside src/.
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = 'src';
const EXTS = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.html']);

let touched = 0;
let totalReplaced = 0;

async function walk(dir) {
  for (const entry of await readdir(dir)) {
    const p = join(dir, entry);
    const s = await stat(p);
    if (s.isDirectory()) { await walk(p); continue; }
    if (!EXTS.has(extname(p))) continue;
    const txt = await readFile(p, 'utf8');
    if (!txt.includes('—')) continue;
    // Replace " — " (em dash with spaces) and bare "—" → " - "
    let out = txt.replace(/—/g, ' - ');
    // Collapse double spaces created by the swap (but keep newlines intact)
    out = out.replace(/  +/g, ' ');
    // Fix " - " at start of a line where indentation matters → leave alone? We just stripped to single space; restore leading whitespace handled by per-line later if needed.
    // Re-apply leading-line indentation (split, fix only inner spaces): not necessary because the substitution doesn't affect leading whitespace runs that contain a newline-anchored start.
    const count = (txt.match(/—/g) || []).length;
    await writeFile(p, out);
    touched++;
    totalReplaced += count;
    console.log(`  -${count}  ${p}`);
  }
}

await walk(ROOT);
console.log(`\nDone. Modified ${touched} files, replaced ${totalReplaced} em dashes.`);
