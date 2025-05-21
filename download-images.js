// download-images.js
// Rulează: npm install node-fetch fs-extra && node download-images.js
import fetch from 'node-fetch';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// înlocuim __dirname:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, 'property-images');
await fs.ensureDir(outputDir);

const queries = [
  "house","apartment","villa","living-room","kitchen","bedroom","bathroom",
  "modern-house","cottage","loft","estate","real-estate","front-yard",
  "backyard","dining-room","studio","condo","farmhouse","penthouse","architecture"
];

for (let i = 0; i < queries.length; i++) {
  const q = queries[i];
  const url = `https://source.unsplash.com/1024x768/?${q}`;
  console.log(`Downloading ${q}…`);
  const res = await fetch(url);
  const buffer = await res.buffer();
  await fs.writeFile(path.join(outputDir, `${String(i+1).padStart(2,'0')}_${q}.jpg`), buffer);
  console.log(`→ saved as ${i+1}_${q}.jpg`);
}

console.log("Done! Imaginile le găsești în:", outputDir);
