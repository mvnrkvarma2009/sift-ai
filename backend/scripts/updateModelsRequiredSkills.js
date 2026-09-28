const fs = require('fs');
const path = require('path');

const modelsFilePath = path.join(__dirname, '../src/db/seed/seedModelsData.ts');
let code = fs.readFileSync(modelsFilePath, 'utf8');

// Ensure SeedModel interface has required_skills and github_url
if (!code.includes('required_skills?: string[];')) {
  code = code.replace(
    /trending_percent: number;\s*\}/,
    `trending_percent: number;\n  required_skills?: string[];\n  github_url?: string;\n}`
  );
}

// Map of explicit skills required by prompt
const EXPLICIT_SKILLS = {
  'llama 4 8b': ['Python', 'Ollama'],
  'llama 4 70b': ['Python', 'GPU', 'Ollama'],
  'llama 4 405b': ['Python', 'Multi-GPU', 'Docker', 'Linux'],
  'mistral 7b': ['Python', 'Ollama'],
  'mixtral 8x22b': ['Python', 'GPU', 'Docker'],
  'qwen 3 8b': ['Python', 'Ollama'],
  'qwen 3 72b': ['Python', 'GPU', 'Ollama'],
  'deepseek v4 open': ['Python', 'GPU', 'Docker', 'Linux'],
  'deepseek r1': ['Python', 'GPU', 'Ollama'],
  'phi-4': ['Python', 'Ollama'],
  'gemma 3 9b': ['Python', 'Ollama'],
  'gemma 3 27b': ['Python', 'GPU', 'Ollama'],
  'yi 34b': ['Python', 'GPU', 'Ollama'],
  'command r open': ['Python', 'Docker'],
  'falcon 180b': ['Python', 'Multi-GPU', 'Docker', 'Linux'],
};

function determineSkills(name, parameters, type) {
  const lowerName = name.toLowerCase().trim();
  for (const [key, skills] of Object.entries(EXPLICIT_SKILLS)) {
    if (lowerName === key || lowerName.startsWith(key)) {
      return skills;
    }
  }

  const p = (parameters || '').toUpperCase();
  if (p.includes('405B') || p.includes('180B') || lowerName.includes('grok-1') || lowerName.includes('dbrx') || p.includes('141B')) {
    return ['Python', 'Multi-GPU', 'Docker', 'Linux'];
  }
  if (p.includes('70B') || p.includes('72B') || p.includes('90B') || p.includes('34B') || p.includes('32B') || p.includes('40B') || p.includes('27B') || p.includes('30B') || p.includes('22B')) {
    return ['Python', 'GPU', 'Ollama'];
  }
  if (p.includes('1B') || p.includes('2B') || p.includes('3B') || p.includes('7B') || p.includes('8B') || p.includes('9B') || p.includes('11B') || p.includes('12B') || p.includes('14B') || p.includes('15B')) {
    return ['Python', 'Ollama'];
  }
  if (type === 'image' || lowerName.includes('diffusion') || lowerName.includes('flux')) {
    return ['Python', 'GPU', 'ComfyUI'];
  }
  if (lowerName.includes('whisper')) {
    return ['Python', 'FFmpeg'];
  }
  if (lowerName.includes('coder') || lowerName.includes('starcoder')) {
    return ['Python', 'Git', 'Ollama'];
  }
  return ['Python', 'GPU', 'Ollama'];
}

function determineGithub(name, provider, docUrl) {
  if (docUrl && docUrl.includes('github.com')) return docUrl;
  const lowerName = name.toLowerCase();
  const lowerProv = provider.toLowerCase();

  if (lowerName.includes('llama')) return 'https://github.com/meta-llama/llama';
  if (lowerName.includes('mistral') || lowerName.includes('mixtral')) return 'https://github.com/mistralai';
  if (lowerName.includes('qwen')) return 'https://github.com/QwenLM/Qwen2.5';
  if (lowerName.includes('deepseek')) return 'https://github.com/deepseek-ai';
  if (lowerName.includes('phi')) return 'https://github.com/microsoft/Phi-3CookBook';
  if (lowerName.includes('gemma')) return 'https://github.com/google-deepmind/gemma';
  if (lowerName.includes('yi')) return 'https://github.com/01-ai/Yi';
  if (lowerName.includes('falcon')) return 'https://github.com/falcon-llm';
  if (lowerName.includes('starcoder')) return 'https://github.com/bigcode-project/starcoder2';
  if (lowerName.includes('stable diffusion') || lowerName.includes('stable lm')) return 'https://github.com/Stability-AI';
  if (lowerName.includes('flux')) return 'https://github.com/black-forest-labs/flux';
  if (lowerName.includes('whisper')) return 'https://github.com/openai/whisper';
  if (lowerName.includes('olmo')) return 'https://github.com/allenai/OLMo';
  if (lowerName.includes('pythia')) return 'https://github.com/EleutherAI/pythia';
  if (lowerName.includes('tinyllama')) return 'https://github.com/jzhang38/TinyLlama';
  if (lowerName.includes('dbrx')) return 'https://github.com/databricks/dbrx';
  if (lowerName.includes('grok')) return 'https://github.com/xai-org/grok-1';
  if (lowerName.includes('command r') || lowerName.includes('aya')) return 'https://github.com/cohere-ai';
  if (lowerProv.includes('allenai')) return 'https://github.com/allenai';
  if (lowerProv.includes('eleuther')) return 'https://github.com/EleutherAI';
  if (lowerProv.includes('berkeley')) return 'https://github.com/Starling-LM';
  return 'https://github.com/huggingface/transformers';
}

// Parse existing SEED_MODELS_DATA and add required_skills and github_url to every model
// We can use a regex to inject required_skills and github_url before each closing brace
let updatedCount = 0;
// We'll require SEED_MODELS_DATA directly and write back clean JSON or AST
const { SEED_MODELS_DATA } = require('../src/db/seed/seedModelsData.ts');

const updatedModels = SEED_MODELS_DATA.map((m) => {
  const isOpensource = m.source_type === 'open_source';
  const skills = isOpensource ? determineSkills(m.name, m.parameters, m.type) : undefined;
  const github = isOpensource ? determineGithub(m.name, m.provider, m.documentation_url) : undefined;
  if (isOpensource) updatedCount++;
  return {
    ...m,
    ...(skills ? { required_skills: skills } : {}),
    ...(github ? { github_url: github } : {}),
  };
});

const newContent = `export interface SeedModel {
  name: string;
  provider: string;
  type: 'chat' | 'image' | 'video' | 'audio' | 'code' | 'music' | 'multimodal';
  source_type: 'closed_source' | 'open_source';
  pricing: 'free' | 'free_tier' | 'paid_only' | 'paid_hosting' | 'waitlist' | 'enterprise';
  price_monthly: number | null;
  context_window: string;
  parameters: string | null;
  speed_tokens_per_sec: number | null;
  cost_per_million_input: number | null;
  best_for: string[];
  modality: 'text' | 'multimodal' | 'image' | 'video' | 'audio' | 'music' | 'code';
  release_date: string;
  documentation_url: string;
  trending_percent: number;
  required_skills?: string[];
  github_url?: string;
}

export const SEED_MODELS_DATA: SeedModel[] = ${JSON.stringify(updatedModels, null, 2)};
`;

fs.writeFileSync(modelsFilePath, newContent, 'utf8');
console.log(`Successfully updated ${updatedCount} open-source models with required_skills and github_url!`);
