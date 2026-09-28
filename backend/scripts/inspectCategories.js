const fs = require('fs');
const content = fs.readFileSync('src/db/seed/seedToolsData.ts', 'utf8');
const cats = {};
const lines = content.split('\n');
for (const l of lines) {
  if (l.includes('category:')) {
    const c = l.split('category:')[1].replace(/['",\r]/g, '').trim();
    if (c && !c.includes('|')) {
      cats[c] = (cats[c] || 0) + 1;
    }
  }
}
console.log('Categories in seedToolsData.ts:');
console.log(JSON.stringify(cats, null, 2));
