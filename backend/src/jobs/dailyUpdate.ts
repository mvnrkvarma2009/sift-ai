import cron from 'node-cron';
import { fetchAINews, discoverNewTools } from '../services/tavilyService';
import { query, memoryStore } from '../db/pool';

export async function runManualUpdate(): Promise<{ news_added: number; tools_added: number; timestamp: string }> {
  console.log('[UPDATE] Executing news & tool refresh pipeline...');
  let newsAdded = 0;
  let toolsAdded = 0;

  try {
    // 1. Fetch fresh live news (force refresh)
    const news = await fetchAINews(true);
    for (const item of news) {
      // Check if headline already exists to prevent duplicate insertion
      const existing = await query(
        'SELECT id FROM feed_items WHERE LOWER(headline) = LOWER($1) LIMIT 1',
        [item.headline.trim()]
      );

      if (existing.rows.length === 0) {
        await query(
          `INSERT INTO feed_items (category, headline, summary, source, source_url, published_at) VALUES ($1, $2, $3, $4, $5, $6)`,
          [item.category, item.headline, item.summary, item.source, item.source_url, item.published_at || new Date()]
        );
        newsAdded++;
      }
    }
    console.log(`[UPDATE] Added ${newsAdded} fresh news items`);

    // 2. Discover new tools
    const tools = await discoverNewTools();
    for (const tool of tools) {
      const existingTool = await query(
        'SELECT id FROM tools WHERE LOWER(name) = LOWER($1) LIMIT 1',
        [tool.name.trim()]
      );
      if (existingTool.rows.length === 0) {
        await query(
          `INSERT INTO tools (name, category, documentation_url, pricing, signup_required) VALUES ($1, $2, $3, 'free_tier', true)`,
          [tool.name, tool.category, tool.documentation_url]
        );
        toolsAdded++;
      }
    }
    console.log(`[UPDATE] Discovered ${toolsAdded} new tools`);

    // 3. Log audit event
    const firstUserId = memoryStore.users[0]?.id || '00000000-0000-0000-0000-000000000001';
    await query(
      `INSERT INTO audit_logs (user_id, action, details) VALUES ($1, 'DAILY_UPDATE', $2)`,
      [firstUserId, JSON.stringify({ news: newsAdded, tools: toolsAdded, timestamp: new Date() })]
    );
  } catch (error) {
    console.error('[UPDATE] Update pipeline error:', error);
  }

  return {
    news_added: newsAdded,
    tools_added: toolsAdded,
    timestamp: new Date().toISOString(),
  };
}

export function scheduleDailyUpdate() {
  // Run every 6 hours for fresh, live AI news & tool updates
  cron.schedule('0 */6 * * *', async () => {
    console.log('[CRON] Starting 6-hour news & tool refresh via Tavily...');
    await runManualUpdate();
  });
  console.log('[CRON] Auto-update scheduled every 6 hours (0 */6 * * *)');
}
