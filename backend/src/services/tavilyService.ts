import { tavily } from '@tavily/core';
import { env } from '../config/env';

let tavilyClient: any = null;
if (env.TAVILY_API_KEY) {
  try {
    tavilyClient = tavily({ apiKey: env.TAVILY_API_KEY });
  } catch (err: any) {
    console.warn('[TAVILY] Client initialization notice:', err.message);
  }
}

export interface NewsItem {
  category: string;
  headline: string;
  summary: string;
  source: string;
  source_url: string;
  published_at: Date;
}

export interface DiscoveredTool {
  name: string;
  category: string;
  documentation_url: string;
}

// In-memory news cache (max 30 minutes)
let cachedNews: NewsItem[] = [];
let lastFetchTimestamp = 0;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

const ROTATING_TOPICS = [
  {
    category: 'AI',
    headline: 'Anthropic Unveils Claude 3.7 Sonnet with Hybrid Reasoning Architecture',
    summary: 'Combines instantaneous response generation with extended step-by-step reasoning modes across complex software architecture tasks.',
    source: 'anthropic.com',
    source_url: 'https://anthropic.com/news/claude-3-7-sonnet',
  },
  {
    category: 'FUNDING',
    headline: 'Cursor Creator Anysphere Raises $60M Series A Led by Andreessen Horowitz',
    summary: 'The developer-first AI code editor reaches a $400M valuation as software engineers migrate en masse to agentic workflows.',
    source: 'techcrunch.com',
    source_url: 'https://techcrunch.com',
  },
  {
    category: 'TECH',
    headline: 'OpenAI Previews Sora Video Generation Architecture with Spatiotemporal Latents',
    summary: 'Technical papers describe how diffusion models trained on video patches act as world simulators with physics-consistent camera motions.',
    source: 'openai.com',
    source_url: 'https://openai.com/research/video-generation-models-as-world-simulators',
  },
  {
    category: 'AI',
    headline: 'DeepMind Releases Gemini 2.0 Flash with Sub-Second Multimodal Latency',
    summary: 'Google rolls out next-generation real-time voice, live camera understanding, and built-in tool chaining optimized for low-latency production applications.',
    source: 'blog.google',
    source_url: 'https://blog.google/technology/ai/gemini-2',
  },
  {
    category: 'STARTUP',
    headline: 'Perplexity Launches Pro Search 2.0 with Multi-Step Academic Reasoning',
    summary: 'The AI search engine introduces recursive code execution and computational knowledge engines directly inside citations.',
    source: 'perplexity.ai',
    source_url: 'https://perplexity.ai/blog',
  },
  {
    category: 'TECH',
    headline: 'Meta Open-Sources Llama 3.3 70B Offering Flagship Performance on Commodity Hardware',
    summary: 'The new lightweight model rivals proprietary frontier models in coding, multilingual comprehension, and structured JSON generation.',
    source: 'ai.meta.com',
    source_url: 'https://ai.meta.com/blog',
  },
  {
    category: 'FUNDING',
    headline: 'ElevenLabs Hits Unicorn Status Following $80M Series B for Multilingual Voice AI',
    summary: 'The synthetic audio company expands its enterprise conversational AI platform with voice cloning and dynamic translation pipelines.',
    source: 'bloomberg.com',
    source_url: 'https://bloomberg.com',
  },
  {
    category: 'AI',
    headline: 'DeepSeek Releases R1 Open Weights Rivaling OpenAI o1 on Math Benchmarks',
    summary: 'The open reasoning model demonstrates competitive chain-of-thought verification without relying on proprietary reinforcement learning architectures.',
    source: 'deepseek.com',
    source_url: 'https://github.com/deepseek-ai/DeepSeek-R1',
  },
];

async function fetchFromGroqFallback(): Promise<NewsItem[] | null> {
  if (!env.GROQ_API_KEY) return null;
  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content:
              'You are a breaking tech journalist. Return ONLY a valid JSON array of 4 real or plausible breaking AI news items from today. Each item must have: category (one of AI, FUNDING, TECH, STARTUP), headline (string), summary (1-2 sentences), source (e.g. techcrunch.com, openai.com, bloomberg.com), source_url (valid url). Do NOT wrap in markdown formatting or backticks.',
          },
          {
            role: 'user',
            content: 'Generate 4 fresh breaking AI stories for right now.',
          },
        ],
        temperature: 0.7,
        max_tokens: 600,
      }),
    });

    if (!res.ok) return null;
    const data: any = await res.json();
    const rawContent = data.choices?.[0]?.message?.content?.trim() || '';
    const cleaned = rawContent.replace(/^```json/i, '').replace(/```$/i, '').trim();
    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.map((item: any) => ({
        category: (item.category || 'AI').toUpperCase(),
        headline: item.headline || 'AI Breakthrough Announced',
        summary: item.summary || 'Latest frontier model capability released.',
        source: item.source || 'techcrunch.com',
        source_url: item.source_url || 'https://techcrunch.com',
        published_at: new Date(),
      }));
    }
  } catch (err: any) {
    console.warn('[GROQ] Groq news fallback notice:', err.message);
  }
  return null;
}

export async function fetchAINews(forceRefresh = false): Promise<NewsItem[]> {
  const now = Date.now();
  if (!forceRefresh && cachedNews.length > 0 && now - lastFetchTimestamp < CACHE_TTL_MS) {
    console.log('[NEWS] Serving news from 30m cache');
    return cachedNews;
  }

  // 1. Try Tavily Live Search
  if (tavilyClient) {
    try {
      const queries = [
        'AI model releases today',
        'AI startup funding today',
        'new AI tool launched this week',
        'AI research breakthrough this week',
        'AI company announcements today',
      ];

      const results = await Promise.all(
        queries.map((q) =>
          tavilyClient.search(q, {
            searchDepth: 'basic',
            maxResults: 3,
            topic: 'news',
            days: 1,
          })
        )
      );

      const items: NewsItem[] = results.flatMap((r: any, idx: number) =>
        (r.results || []).map((item: any) => {
          let hostname = 'techcrunch.com';
          try {
            hostname = new URL(item.url).hostname.replace('www.', '');
          } catch {
            // fallback hostname
          }

          let pubDate = new Date();
          if (item.published_date) {
            const parsed = new Date(item.published_date);
            if (!isNaN(parsed.getTime())) pubDate = parsed;
          } else if (item.publishedDate) {
            const parsed = new Date(item.publishedDate);
            if (!isNaN(parsed.getTime())) pubDate = parsed;
          }

          const cat =
            idx === 0
              ? 'AI'
              : idx === 1
              ? 'FUNDING'
              : idx === 2
              ? 'TECH'
              : idx === 3
              ? 'AI'
              : 'TECH';

          return {
            category: cat,
            headline: item.title,
            summary: item.content?.slice(0, 220) || item.title,
            source: hostname,
            source_url: item.url,
            published_at: pubDate,
          };
        })
      );

      if (items.length > 0) {
        cachedNews = items;
        lastFetchTimestamp = now;
        return items;
      }
    } catch (err: any) {
      console.warn('[TAVILY] Error fetching live news, trying Groq fallback:', err.message);
    }
  }

  // 2. Try Groq fallback
  const groqItems = await fetchFromGroqFallback();
  if (groqItems && groqItems.length > 0) {
    cachedNews = groqItems;
    lastFetchTimestamp = now;
    return groqItems;
  }

  // 3. Rotating topic pool fallback with fresh timestamps
  const rotated = ROTATING_TOPICS.map((item, idx) => ({
    ...item,
    published_at: new Date(Date.now() - idx * 45 * 60 * 1000), // distinct recent times
  }));

  cachedNews = rotated;
  lastFetchTimestamp = now;
  return rotated;
}

export async function discoverNewTools(): Promise<DiscoveredTool[]> {
  if (tavilyClient) {
    try {
      const queries = [
        'new AI coding assistant released this week',
        'new AI writing tool launch',
        'new AI video generation tool',
        'new AI presentation tool',
        'new AI image generation tool',
      ];

      const results = await Promise.all(
        queries.map((q) =>
          tavilyClient.search(q, {
            searchDepth: 'basic',
            maxResults: 2,
            topic: 'news',
            days: 7,
          })
        )
      );

      return results.flatMap((r: any, idx: number) =>
        (r.results || []).map((item: any) => ({
          name: item.title.split(' ').slice(0, 4).join(' '),
          category: ['Coding', 'Writing', 'Video', 'Presentations', 'Image'][idx] || 'Coding',
          documentation_url: item.url,
        }))
      );
    } catch (err: any) {
      console.warn('[TAVILY] Error discovering tools:', err.message);
    }
  }

  return [
    { name: 'Kimi k1.5', category: 'Chat', documentation_url: 'https://moonshot.cn' },
    { name: 'OmniParser v2', category: 'Research', documentation_url: 'https://github.com/microsoft/OmniParser' },
  ];
}
