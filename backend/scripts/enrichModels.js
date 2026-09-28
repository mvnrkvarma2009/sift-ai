const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/db/seed/seedModelsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Update SeedModel interface
const oldInterface = `export interface SeedModel {
  name: string;
  provider: string;
  type: 'chat' | 'image' | 'video' | 'audio' | 'code' | 'music' | 'multimodal';
  source_type: 'closed_source' | 'open_source';
  pricing: 'free' | 'free_tier' | 'paid_only' | 'paid_hosting' | 'waitlist' | 'enterprise';
  price_monthly: number | null;
  context_window: string;
  release_date: string;
  documentation_url: string;
  trending_percent: number;
}`;

const newInterface = `export interface SeedModel {
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
}`;

// Explicit overrides mapping
const explicitData = {
  'GPT-6 Astra': { parameters: null, speed: 120, cost: 10.00, best_for: ['Reasoning', 'Multimodal'], modality: 'multimodal' },
  'GPT-5 Turbo': { parameters: null, speed: 110, cost: 10.00, best_for: ['General'], modality: 'text' },
  'Claude Opus 5.5': { parameters: null, speed: 85, cost: 15.00, best_for: ['Reasoning', 'Long context'], modality: 'multimodal' },
  'Claude Sonnet 4.7': { parameters: null, speed: 95, cost: 3.00, best_for: ['Coding', 'Writing'], modality: 'multimodal' },
  'Claude Haiku 3.5': { parameters: null, speed: 200, cost: 0.80, best_for: ['Fast', 'Cheap'], modality: 'text' },
  'Gemini 2.5 Pro': { parameters: null, speed: 130, cost: 1.25, best_for: ['Long context', 'Multimodal'], modality: 'multimodal' },
  'Gemini 2.5 Flash': { parameters: null, speed: 250, cost: 0.075, best_for: ['Fast', 'Cheap'], modality: 'multimodal' },
  'Gemini 3.8 Live': { parameters: null, speed: 80, cost: 7.50, best_for: ['Reasoning', 'Complex tasks'], modality: 'multimodal' },
  'Grok-4.7': { parameters: null, speed: 90, cost: 5.00, best_for: ['Reasoning', 'Real-time'], modality: 'text' },
  'Llama 4 70B': { parameters: '70B', speed: 60, cost: 0.60, best_for: ['Open source', 'Coding'], modality: 'text' },
  'Llama 4 405B': { parameters: '405B', speed: 25, cost: 2.70, best_for: ['Reasoning', 'Open source'], modality: 'text' },
  'Llama 4 8B': { parameters: '8B', speed: 180, cost: 0.05, best_for: ['Fast', 'Local'], modality: 'text' },
  'Qwen 3 72B': { parameters: '72B', speed: 55, cost: 0.40, best_for: ['Multilingual', 'Coding'], modality: 'text' },
  'DeepSeek V4': { parameters: null, speed: 100, cost: 0.14, best_for: ['Coding', 'Math'], modality: 'text' },
  'Mistral Large 3': { parameters: null, speed: 90, cost: 2.00, best_for: ['General', 'Coding'], modality: 'text' },
  'Gemma 3 27B': { parameters: '27B', speed: 70, cost: 0.20, best_for: ['Local', 'Free'], modality: 'text' },
  'Phi-4': { parameters: '14B', speed: 110, cost: 0.07, best_for: ['Small', 'Efficient'], modality: 'text' },
  'Whisper': { parameters: null, speed: null, cost: 0.006, best_for: ['Transcription'], modality: 'audio' },
  'DALL-E 3': { parameters: null, speed: null, cost: 40.00, best_for: ['Image generation'], modality: 'image' },
  'Midjourney v7': { parameters: null, speed: null, cost: 30.00, best_for: ['Artistic', 'Photorealistic'], modality: 'image' },
  'Midjourney v6': { parameters: null, speed: null, cost: 25.00, best_for: ['Artistic', 'Photorealistic'], modality: 'image' },
  'Suno v4': { parameters: null, speed: null, cost: 10.00, best_for: ['Music generation'], modality: 'music' },
  'ElevenLabs v3': { parameters: null, speed: null, cost: 5.00, best_for: ['Voice', 'Realistic'], modality: 'audio' },
  'Runway Gen-3': { parameters: null, speed: null, cost: 50.00, best_for: ['Video generation'], modality: 'video' },
  'Sora': { parameters: null, speed: null, cost: 100.00, best_for: ['Video generation'], modality: 'video' },
};

function inferParams(name, type, sourceType, provider) {
  if (explicitData[name]) {
    return explicitData[name];
  }

  // Modality inference
  let modality = 'text';
  if (type === 'image') modality = 'image';
  else if (type === 'video') modality = 'video';
  else if (type === 'audio') modality = 'audio';
  else if (type === 'music') modality = 'music';
  else if (type === 'multimodal' || name.toLowerCase().includes('vision') || name.toLowerCase().includes('vl') || name.toLowerCase().includes('omni') || name.toLowerCase().includes('4o')) modality = 'multimodal';
  else if (type === 'code' || name.toLowerCase().includes('coder')) modality = 'code';

  // Parameters inference (only for open source or explicit sizes)
  let parameters = null;
  const sizeMatch = name.match(/(\d+(?:\.\d+)?B)/i);
  if (sizeMatch && sourceType === 'open_source') {
    parameters = sizeMatch[1].toUpperCase();
  } else if (name.includes('Mixtral 8x22B')) {
    parameters = '8x22B';
  } else if (name.includes('Mixtral 8x7B')) {
    parameters = '8x7B';
  } else if (name.includes('DBRX')) {
    parameters = '132B';
  }

  // Speed inference
  let speed = null;
  if (['chat', 'code', 'multimodal'].includes(type)) {
    if (parameters && (parameters.includes('405B') || parameters.includes('180B'))) speed = 25;
    else if (parameters && (parameters.includes('70B') || parameters.includes('72B'))) speed = 60;
    else if (parameters && (parameters.includes('27B') || parameters.includes('32B') || parameters.includes('34B'))) speed = 80;
    else if (parameters && (parameters.includes('8B') || parameters.includes('7B') || parameters.includes('9B') || parameters.includes('14B'))) speed = 150;
    else if (parameters && (parameters.includes('1B') || parameters.includes('2B') || parameters.includes('3B'))) speed = 220;
    else if (name.toLowerCase().includes('flash') || name.toLowerCase().includes('haiku') || name.toLowerCase().includes('mini')) speed = 210;
    else if (name.toLowerCase().includes('pro') || name.toLowerCase().includes('sonnet') || name.toLowerCase().includes('turbo')) speed = 110;
    else if (name.toLowerCase().includes('ultra') || name.toLowerCase().includes('opus') || name.toLowerCase().includes('o1')) speed = 50;
    else speed = 95;
  }

  // Cost per million input inference
  let cost = null;
  if (type === 'image') cost = 30.00;
  else if (type === 'video') cost = 60.00;
  else if (type === 'music') cost = 10.00;
  else if (type === 'audio') cost = 5.00;
  else if (sourceType === 'open_source') {
    if (parameters && (parameters.includes('405B') || parameters.includes('180B'))) cost = 2.50;
    else if (parameters && (parameters.includes('70B') || parameters.includes('72B'))) cost = 0.50;
    else if (parameters && (parameters.includes('27B') || parameters.includes('32B') || parameters.includes('34B'))) cost = 0.25;
    else cost = 0.05;
  } else {
    // closed source
    if (name.toLowerCase().includes('ultra') || name.toLowerCase().includes('opus') || name.toLowerCase().includes('o1')) cost = 15.00;
    else if (name.toLowerCase().includes('sonnet') || name.toLowerCase().includes('pro')) cost = 3.00;
    else if (name.toLowerCase().includes('flash') || name.toLowerCase().includes('mini') || name.toLowerCase().includes('haiku')) cost = 0.15;
    else cost = 2.50;
  }

  // Best for inference (2-3 tags)
  let best_for = [];
  if (type === 'image') best_for = ['Image generation', 'Design'];
  else if (type === 'video') best_for = ['Video generation', 'Creative'];
  else if (type === 'audio') best_for = ['Audio synthesis', 'Speech'];
  else if (type === 'music') best_for = ['Music creation', 'Audio'];
  else if (type === 'code' || name.toLowerCase().includes('coder')) best_for = ['Coding', 'Refactoring'];
  else if (sourceType === 'open_source') {
    if (parameters && (parameters.includes('70B') || parameters.includes('405B'))) best_for = ['Reasoning', 'Open source'];
    else if (parameters && (parameters.includes('8B') || parameters.includes('7B') || parameters.includes('2B') || parameters.includes('1B'))) best_for = ['Fast', 'Local'];
    else best_for = ['Open source', 'General'];
  } else {
    if (name.toLowerCase().includes('o1') || name.toLowerCase().includes('reasoning')) best_for = ['Reasoning', 'Math'];
    else if (name.toLowerCase().includes('flash') || name.toLowerCase().includes('haiku') || name.toLowerCase().includes('mini')) best_for = ['Fast', 'Cheap'];
    else if (modality === 'multimodal') best_for = ['Multimodal', 'Vision'];
    else best_for = ['General', 'Reasoning'];
  }

  return { parameters, speed, cost, best_for, modality };
}

// Replace interface
content = content.replace(oldInterface, newInterface);

// Now parse the models array and add the fields
// Matches each model object block
const regex = /\{\s*name:\s*'([^']+)',\s*provider:\s*'([^']+)',\s*type:\s*'([^']+)',\s*source_type:\s*'([^']+)',\s*pricing:\s*'([^']+)',\s*price_monthly:\s*([^,\n]+),\s*context_window:\s*'([^']+)',\s*release_date:\s*'([^']+)',\s*documentation_url:\s*'([^']+)',\s*trending_percent:\s*(\d+),?\s*\}/g;

let count = 0;
content = content.replace(regex, (match, name, provider, type, sourceType, pricing, priceMonthly, contextWindow, releaseDate, docUrl, trending) => {
  count++;
  const params = inferParams(name, type, sourceType, provider);
  
  const paramVal = params.parameters ? `'${params.parameters}'` : 'null';
  const speedVal = params.speed !== null ? params.speed : 'null';
  const costVal = params.cost !== null ? params.cost : 'null';
  const bestForVal = JSON.stringify(params.best_for);

  return `{
    name: '${name}',
    provider: '${provider}',
    type: '${type}',
    source_type: '${sourceType}',
    pricing: '${pricing}',
    price_monthly: ${priceMonthly.trim()},
    context_window: '${contextWindow}',
    parameters: ${paramVal},
    speed_tokens_per_sec: ${speedVal},
    cost_per_million_input: ${costVal},
    best_for: ${bestForVal},
    modality: '${params.modality}',
    release_date: '${releaseDate}',
    documentation_url: '${docUrl}',
    trending_percent: ${trending},
  }`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Enriched ${count} models in ${filePath}`);
