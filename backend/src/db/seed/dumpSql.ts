import { SEED_MODELS_DATA } from './seedModelsData';
import * as fs from 'fs';
import * as path from 'path';

const values = SEED_MODELS_DATA.map((m) => {
  const name = "'" + m.name.replace(/'/g, "''") + "'";
  const provider = "'" + m.provider.replace(/'/g, "''") + "'";
  const type = "'" + m.type + "'";
  const pricing = "'" + m.pricing + "'";
  const cw = "'" + m.context_window + "'";
  const rd = "'" + m.release_date + "'";
  const url = "'" + m.documentation_url.replace(/'/g, "''") + "'";
  const tp = m.trending_percent;
  return `(${name}, ${provider}, ${type}, ${pricing}, ${cw}, ${rd}, ${url}, ${tp})`;
}).join(',\n');

const sql = `INSERT INTO models (name, provider, type, pricing, context_window, release_date, documentation_url, trending_percent) VALUES\n${values};\n`;
fs.writeFileSync(path.join(__dirname, 'insert_models.sql'), sql);
console.log('Successfully generated insert_models.sql with', SEED_MODELS_DATA.length, 'models');
