import { GoogleGenAI } from '@google/genai';
import {
  RequirementSchema,
  ExtractedRequirements,
  IntentSchema,
  QueryResponse,
} from '../schemas/zodSchemas';
import { env } from '../config/env';

let aiClient: GoogleGenAI | null = null;

try {
  if (env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
  }
} catch (err: any) {
  console.warn('[GEMINI] Initialization notice:', err.message);
}

/**
 * Classify user input as TASK or GENERAL
 */
export async function classifyIntent(rawDescription: string): Promise<{ intent: 'TASK' | 'GENERAL'; reason: string }> {
  const prompt = `You are an intent classifier. Read the user's message and decide if it is a TASK REQUEST (user is describing something they want to build, do, or find a tool for) or a GENERAL MESSAGE (a greeting, small talk, a question about the system, gibberish, or anything that is not a clear task request).

Rules:
- Under 12 chars and not a clear task (e.g. 'hi', 'hji', 'test', 'asdf') → GENERAL
- No verb describing an action → GENERAL
- Asking what Sift is or how it works → GENERAL
- Describing building/creating/writing/coding/designing/transcribing/analysing/finding a tool for an outcome → TASK

Return ONLY JSON: { "intent": "TASK"|"GENERAL", "reason": "<one short sentence>" }

User message: "${rawDescription}"`;

  if (aiClient) {
    const models = ['gemini-flash-lite-latest', 'gemini-flash-latest'];
    for (const model of models) {
      try {
        const response = await aiClient.models.generateContent({
          model,
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
          },
        });

        const text = response.text || '';
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanJson);
        const validated = IntentSchema.parse(parsed);
        return validated;
      } catch (geminiError: any) {
        console.warn(`[GEMINI] classifyIntent error with ${model}:`, geminiError.message);
      }
    }
  }

  // Deterministic heuristic fallback
  const trimmed = rawDescription.trim();
  const lower = trimmed.toLowerCase();
  const actionPattern = /(build|create|write|code|design|find|make|generate|transcribe|analyse|analyze|edit|research|need|want|recommend|assistant|tool|bot|app)/i;

  if (trimmed.length < 12 && !actionPattern.test(trimmed)) {
    return { intent: 'GENERAL', reason: 'Message is under 12 characters and lacks a clear task description.' };
  }
  if (/^(hi|hello|hey|yo|greetings|hola|test|asdf|qwerty|hji|testing|sup)[!.]*$/i.test(trimmed)) {
    return { intent: 'GENERAL', reason: 'Greeting or casual message without an actionable task.' };
  }
  if (/what is sift|how does sift work|who are you|help|what can you do/i.test(lower)) {
    return { intent: 'GENERAL', reason: 'General inquiry about the Sift platform rather than a task specification.' };
  }
  if (actionPattern.test(trimmed)) {
    return { intent: 'TASK', reason: 'User is describing an actionable outcome or tool requirement.' };
  }

  return { intent: 'GENERAL', reason: 'Input lacks a concrete task action or verifiable outcome.' };
}

/**
 * Two-mode extraction: branches between GENERAL conversational reply and TASK requirements
 */
export async function extractTwoMode(rawDescription: string): Promise<QueryResponse> {
  const classification = await classifyIntent(rawDescription);

  if (classification.intent === 'GENERAL') {
    const generalPrompt = `You are Sift, an AI tool verification assistant. The user sent a message that is not a task request: "${rawDescription}". Respond in 1-2 sentences. Be warm, brief, helpful. If they said hello, greet and invite them to describe what they want to build. If they asked what Sift is, explain in one sentence: 'Sift verifies which AI tools match your requirements using deterministic rules.' Never invent tools. Never recommend anything.`;

    let reply = '';
    if (aiClient) {
      const models = ['gemini-flash-lite-latest', 'gemini-flash-latest'];
      for (const model of models) {
        try {
          const res = await aiClient.models.generateContent({
            model,
            contents: generalPrompt,
          });
          reply = res.text?.trim() || '';
          if (reply) break;
        } catch (err: any) {
          console.warn(`[GEMINI] General reply error with ${model}:`, err.message);
        }
      }
    }

    if (!reply) {
      const lower = rawDescription.toLowerCase();
      if (/what is sift|how (it|does sift) work|explain sift/i.test(lower)) {
        reply = 'Sift verifies which AI tools match your requirements using deterministic rules.';
      } else if (/hi|hello|hey|good morning|good afternoon/i.test(lower)) {
        reply = "Hello! Describe what you want to build or find, and I'll verify which AI tools meet your requirements.";
      } else {
        reply = "I'm Sift, an AI tool verification assistant. Describe what you want to build or find, and I will verify which tools match your requirements.";
      }
    }

    return {
      mode: 'GENERAL',
      reply,
      intent_reason: classification.reason,
    };
  }

  const requirements = await extractRequirements(rawDescription);
  return {
    mode: 'TASK',
    requirements,
    intent_reason: classification.reason,
  };
}

export async function extractRequirements(rawDescription: string): Promise<ExtractedRequirements> {
  const prompt = `You are a requirement extraction assistant. Read the user's task description and extract structured requirements.
STRICT RULES:
- Extract only what is stated or clearly implied
- If a requirement is not stated, set to null
- Never recommend tools. Never judge. Only extract.
- Return only valid JSON.

Fields:
- task_type: string ("coding", "writing", "chatting", "research", "image", "video", "presentation", "audio")
- constraints: {
    budget: "free" | "paid" | "any" | null,
    signup_required: boolean | null,
    export_format: string | null,
    slide_count: number | null,
    other_constraints: string[]
  }

User description: ${rawDescription}`;

  // 1. Primary: Google Gemini Flash
  if (aiClient) {
    const models = ['gemini-flash-lite-latest', 'gemini-flash-latest'];
    for (const model of models) {
      try {
        const response = await aiClient.models.generateContent({
          model,
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
          },
        });

        const text = response.text || '';
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanJson);
        const validated = RequirementSchema.parse(parsed);
        return validated;
      } catch (geminiError: any) {
        console.warn(`[GEMINI] extractRequirements error with ${model}:`, geminiError.message);
      }
    }
  }

  // 2. Secondary fallback: Groq API
  if (env.GROQ_API_KEY) {
    try {
      const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: 'You extract JSON requirements from user prompts. Always return pure JSON matching the schema.' },
            { role: 'user', content: prompt },
          ],
          response_format: { type: 'json_object' },
        }),
      });

      if (groqRes.ok) {
        const data = await groqRes.json();
        const content = data.choices[0]?.message?.content || '{}';
        const parsed = JSON.parse(content);
        return RequirementSchema.parse(parsed);
      }
    } catch (groqError: any) {
      console.warn('[GROQ] Secondary extraction error:', groqError.message);
    }
  }

  // 3. Deterministic heuristic extraction fallback (guarantees zero downtime)
  const lower = rawDescription.toLowerCase();
  let detectedType = 'coding';
  if (/write|essay|copy|article|blog|grammar/i.test(lower)) detectedType = 'writing';
  else if (/chat|talk|companion|converse/i.test(lower)) detectedType = 'chatting';
  else if (/research|paper|citation|academic|scholar/i.test(lower)) detectedType = 'research';
  else if (/image|draw|logo|art|photo|picture/i.test(lower)) detectedType = 'image';
  else if (/video|clip|movie|animation|avatar/i.test(lower)) detectedType = 'video';
  else if (/presentation|slide|deck|pitch/i.test(lower)) detectedType = 'presentation';
  else if (/audio|voice|speech|music|podcast|sound/i.test(lower)) detectedType = 'audio';

  const isFree = /free|no cost|without paying|0\$/i.test(lower);
  const noSignup = /no signup|no account|guest/i.test(lower);
  const slideMatch = lower.match(/(\d+)\s*slides?/i);

  const heuristicData = {
    task_type: detectedType,
    constraints: {
      budget: isFree ? ('free' as const) : null,
      signup_required: noSignup ? false : null,
      export_format: /pdf/i.test(lower) ? 'PDF' : /png/i.test(lower) ? 'PNG' : /pptx/i.test(lower) ? 'PPTX' : null,
      slide_count: slideMatch ? parseInt(slideMatch[1], 10) : null,
      other_constraints: [],
    },
  };

  return RequirementSchema.parse(heuristicData);
}
