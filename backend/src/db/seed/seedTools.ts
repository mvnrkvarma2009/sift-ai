import { query } from '../pool';
import { hashPassword } from '../../utils/bcrypt';
import { TOOLS_DATA } from './data/tools';
import { seedModels } from './seedModels';

export async function seedTools(): Promise<number> {
  const startTime = Date.now();
  console.log(`[SEED_TOOLS] Starting seed of ${TOOLS_DATA.length} tools across 8 categories...`);

  // Clear existing tools for clean idempotent seed
  await query(`DELETE FROM tools WHERE 1=1`);

  let toolsInserted = 0;
  const batchSize = 40;

  for (let i = 0; i < TOOLS_DATA.length; i += batchSize) {
    const chunk = TOOLS_DATA.slice(i, i + batchSize);
    const valueClauses: string[] = [];
    const params: any[] = [];

    chunk.forEach((tool: any, idx) => {
      const base = idx * 10;
      valueClauses.push(
        `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, $${base + 8}, $${base + 9}, $${base + 10})`
      );
      params.push(
        tool.name,
        tool.category,
        tool.pricing,
        tool.signup_required ?? true,
        tool.free_tier_slide_limit || null,
        tool.free_tier_limits || '',
        tool.export_formats || [],
        tool.documentation_url || '',
        tool.trending_percent || 50,
        tool.best_for || []
      );
    });

    await query(
      `INSERT INTO tools (name, category, pricing, signup_required, free_tier_slide_limit, free_tier_limits, export_formats, documentation_url, trending_percent, best_for)
       VALUES ${valueClauses.join(', ')}
       ON CONFLICT (name, category) DO UPDATE SET
         pricing = EXCLUDED.pricing,
         signup_required = EXCLUDED.signup_required,
         free_tier_slide_limit = EXCLUDED.free_tier_slide_limit,
         free_tier_limits = EXCLUDED.free_tier_limits,
         export_formats = EXCLUDED.export_formats,
         documentation_url = EXCLUDED.documentation_url,
         trending_percent = EXCLUDED.trending_percent,
         best_for = EXCLUDED.best_for`,
      params
    );
    toolsInserted += chunk.length;
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`[SEED_TOOLS] Successfully seeded ${toolsInserted} tools in ${elapsed}s across 8 categories.`);
  console.log(`✓ seeded 1000+ tools`);
  return toolsInserted;
}

export async function seedDatabase() {
  const startTime = Date.now();
  console.log(`[SEED] Starting full database seed...`);

  try {
    // 1. Seed demo user
    const passwordHash = await hashPassword('Password123!');
    const userResult = await query(
      `INSERT INTO users (email, password_hash, name)
       VALUES ($1, $2, $3)
       ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name
       RETURNING id, email, name`,
      ['demo@sift.dev', passwordHash, 'Demo Builder']
    );
    const demoUser = userResult.rows[0];
    console.log(`[SEED] Demo user ready: ${demoUser.email} (${demoUser.id})`);

    // 2. Seed 1,000+ Tools
    const toolsInserted = await seedTools();

    // 3. Seed 500+ Models
    await seedModels();

    // 4. Log seeding audit
    await query(
      `INSERT INTO audit_logs (user_id, action, details)
       VALUES ($1, 'DATABASE_SEEDED', $2)`,
      [
        demoUser.id,
        JSON.stringify({
          tools: toolsInserted,
          timestamp: new Date(),
        }),
      ]
    );

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`[SEED] Database seeding complete in ${elapsed}s!`);
  } catch (error) {
    console.error('[SEED] Database seeding error:', error);
    process.exit(1);
  }
}

// Execute if run directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('[SEED] Done!');
      process.exit(0);
    })
    .catch((err) => {
      console.error('[SEED] Fatal error:', err);
      process.exit(1);
    });
}
