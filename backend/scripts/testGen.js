const fs = require('fs');
const path = require('path');

// 1. Models generator
const modelsPath = path.join(__dirname, '../src/db/seed/seedModelsData.ts');
const toolsPath = path.join(__dirname, '../src/db/seed/seedToolsData.ts');

console.log('Generating seed files...');
