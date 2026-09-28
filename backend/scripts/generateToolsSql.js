const fs = require('fs');

// Read seedToolsData.ts and extract TOOLS_500_DATA
// We can use tsx or compile with ts
const ts = require('typescript');
const fileContent = fs.readFileSync('src/db/seed/seedToolsData.ts', 'utf8');
const result = ts.transpileModule(fileContent, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const sandbox = { exports: {} };
const fn = new Function('exports', result.outputText);
fn(sandbox.exports);
const tools = sandbox.exports.TOOLS_500_DATA;

console.log(`Loaded ${tools.length} tools`);

function escapeSql(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number') return val;
  if (typeof val === 'boolean') return val ? 'TRUE' : 'FALSE';
  if (Array.isArray(val)) {
    const escapedElements = val.map(item => `"${String(item).replace(/"/g, '\\"')}"`);
    return `'${"{" + escapedElements.join(',') + "}"}'`;
  }
  return `'${String(val).replace(/'/g, "''")}'`;
}

let sql = `DELETE FROM tools WHERE 1=1;\n\n`;

for (let i = 0; i < tools.length; i += 25) {
  const chunk = tools.slice(i, i + 25);
  const rows = chunk.map(t => {
    return `(gen_random_uuid(), ${escapeSql(t.name)}, ${escapeSql(t.category)}, ${escapeSql(t.pricing)}, ${escapeSql(t.signup_required)}, ${escapeSql(t.free_tier_slide_limit || null)}, ${escapeSql(t.free_tier_limits)}, ${escapeSql(t.export_formats || [])}, ${escapeSql(t.documentation_url || '')}, ${escapeSql(t.trending_percent || 75)}, ${escapeSql(t.best_for || [])}, ${escapeSql(t.type || 'tool')}, ${escapeSql(t.description || '')})`;
  });

  sql += `INSERT INTO tools (id, name, category, pricing, signup_required, free_tier_slide_limit, free_tier_limits, export_formats, documentation_url, trending_percent, best_for, type, description)\nVALUES\n${rows.join(',\n')};\n\n`;
}

fs.writeFileSync('scripts/seed_tools_supabase.sql', sql, 'utf8');
console.log('Generated scripts/seed_tools_supabase.sql successfully');
