import { query } from '../pool';
import { MODELS_DATA } from './data/models';

export async function seedModels(): Promise<number> {
  const startTime = Date.now();
  console.log(`[SEED_MODELS] Starting seed of ${MODELS_DATA.length} AI models...`);

  try {
    const batchSize = 40;
    let inserted = 0;

    for (let i = 0; i < MODELS_DATA.length; i += batchSize) {
      const chunk = MODELS_DATA.slice(i, i + batchSize);
      const valueClauses: string[] = [];
      const params: any[] = [];

      chunk.forEach((model, idx) => {
        const base = idx * 23;
        valueClauses.push(
          `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, $${base + 8}, $${base + 9}, $${base + 10}, $${base + 11}, $${base + 12}, $${base + 13}, $${base + 14}, $${base + 15}, $${base + 16}, $${base + 17}, $${base + 18}, $${base + 19}, $${base + 20}, $${base + 21}, $${base + 22}, $${base + 23})`
        );
        params.push(
          model.name,
          model.provider,
          model.type || model.source_type || 'closed_source',
          model.source_type || model.type || 'closed_source',
          model.category || 'chat',
          model.parameters || null,
          model.context_window || null,
          model.required_skills || [],
          model.best_for || [],
          model.documentation_url || model.docs_url || '',
          model.docs_url || model.documentation_url || null,
          model.release_date || '2024-10-01',
          model.trending_percent || 80,
          model.pricing || 'paid_only',
          model.price_monthly || 0,
          model.speed_tokens_per_sec || null,
          model.cost_per_million_input || 0,
          model.modality || 'multimodal',
          model.license || (model.type === 'open_source' ? 'Apache-2.0' : 'Proprietary'),
          model.hf_url || null,
          model.github_url || null,
          model.model_family || 'other',
          model.chat_product_url || null
        );
      });

      await query(
        `INSERT INTO models (name, provider, type, source_type, category, parameters, context_window, required_skills, best_for, documentation_url, docs_url, release_date, trending_percent, pricing, price_monthly, speed_tokens_per_sec, cost_per_million_input, modality, license, hf_url, github_url, model_family, chat_product_url)
         VALUES ${valueClauses.join(', ')}
         ON CONFLICT (name, provider) DO UPDATE SET
           type = EXCLUDED.type,
           source_type = EXCLUDED.source_type,
           category = EXCLUDED.category,
           parameters = EXCLUDED.parameters,
           context_window = EXCLUDED.context_window,
           required_skills = EXCLUDED.required_skills,
           best_for = EXCLUDED.best_for,
           docs_url = EXCLUDED.docs_url,
           hf_url = EXCLUDED.hf_url,
           github_url = EXCLUDED.github_url,
           release_date = EXCLUDED.release_date,
           trending_percent = EXCLUDED.trending_percent,
           pricing = EXCLUDED.pricing,
           price_monthly = EXCLUDED.price_monthly,
           speed_tokens_per_sec = EXCLUDED.speed_tokens_per_sec,
           cost_per_million_input = EXCLUDED.cost_per_million_input,
           modality = EXCLUDED.modality,
           license = EXCLUDED.license,
           model_family = EXCLUDED.model_family,
           chat_product_url = EXCLUDED.chat_product_url`,
        params
      );
      inserted += chunk.length;
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    const closedCount = MODELS_DATA.filter(m => (m.type === 'closed_source' || m.source_type === 'closed_source')).length;
    const openCount = MODELS_DATA.filter(m => (m.type === 'open_source' || m.source_type === 'open_source')).length;
    console.log(`[SEED_MODELS] Successfully seeded ${inserted} AI models in ${elapsed}s!`);
    console.log(`✓ seeded ${inserted} models (${closedCount} closed, ${openCount} open)`);
    return inserted;
  } catch (error) {
    console.error('[SEED_MODELS] Error seeding models:', error);
    throw error;
  }
}

if (require.main === module) {
  seedModels()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
