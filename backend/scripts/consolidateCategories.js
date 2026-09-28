const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/db/seed/seedToolsData.ts');
let code = fs.readFileSync(filePath, 'utf8');

const categoryMap = {
  Sales: 'Marketing',
  Support: 'Productivity',
  Legal: 'Productivity',
  Healthcare: 'Research',
  Education: 'Research',
  HR: 'Productivity',
  Finance: 'Data',
  DevTools: 'Coding',
  Voice: 'Audio',
  Automation: 'Productivity',
  '3D': 'Design',
  Translation: 'Writing',
  Security: 'Productivity',
};

// Replace categories
for (const [oldCat, newCat] of Object.entries(categoryMap)) {
  const re = new RegExp(`category:\\s*'${oldCat}'`, 'g');
  code = code.replace(re, `category: '${newCat}'`);
}

// Replace pricing: 'freemium' -> 'free_tier'
code = code.replace(/pricing:\s*'freemium'/g, "pricing: 'free_tier'");
code = code.replace(
  /'free' \| 'freemium' \| 'paid' \| 'waitlist' \| 'enterprise'/,
  "'free' | 'free_tier' | 'paid' | 'waitlist' | 'enterprise'"
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully consolidated seedToolsData categories and pricing!');
