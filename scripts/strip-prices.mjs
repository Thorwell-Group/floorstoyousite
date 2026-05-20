// Blank every priceFrom in services.ts and rewrite the carpet-pricing FAQ.
import { readFile, writeFile } from 'node:fs/promises';

let t = await readFile('src/data/services.ts', 'utf8');
const before = t;

t = t.replace(/priceFrom: '\$[^']+',/g, "priceFrom: '',");

t = t.replace(
  "a: 'Most whole-room carpet projects at Floors To You OKC range from $2.49 to $5.99 per square foot installed, including pad, removal of old flooring, and labor. Bring your room measurements to the showroom for a same-day quote.',",
  "a: 'Carpet pricing depends on the style, fiber, pad selection, and square footage of your home. Book a free in-home measure for a same-day, itemized quote.',"
);

await writeFile('src/data/services.ts', t);

const left = (t.match(/\$[0-9]/g) || []).length;
console.log('priceFrom blanked. Remaining dollar amounts in services.ts:', left);
