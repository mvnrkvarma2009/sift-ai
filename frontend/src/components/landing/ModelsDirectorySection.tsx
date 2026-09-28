import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Cpu, ArrowRight } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';
import { useStaggerChildren } from '../../lib/mercuryMotion';

interface OpenSourceModelRow {
  name: string;
  provider: string;
  skills: string;
  slug: string;
}

const LOCAL_OLLAMA_MODELS: OpenSourceModelRow[] = [
  { name: 'Ministral 3 8B', provider: 'Mistral AI', skills: 'Python, Ollama', slug: 'ministral-3-8b' },
  { name: 'Qwen 3.8 Flash', provider: 'Alibaba', skills: 'Python, Ollama', slug: 'qwen-3-8-flash' },
  { name: 'Mistral 3 14B', provider: 'Mistral AI', skills: 'Python, GPU (16GB VRAM), Ollama', slug: 'mistral-3-14b' },
  { name: 'MiMo-V2.6-Flash', provider: 'Xiaomi', skills: 'Python, GPU (16GB VRAM), Ollama', slug: 'mimo-v2-6-flash' },
  { name: 'GLM-5.2', provider: 'Zhipu AI', skills: 'Python, GPU (16GB VRAM), Ollama', slug: 'glm-5-2' },
  { name: 'DeepSeek V4 Flash', provider: 'DeepSeek', skills: 'Python, GPU (16GB VRAM), Ollama', slug: 'deepseek-v4-flash' },
  { name: 'Llama 4 Scout 109B', provider: 'Meta', skills: 'Python, Multi-GPU, Docker, vLLM', slug: 'llama-4-scout-109b' },
  { name: 'Phi-4', provider: 'Microsoft', skills: 'Python, GPU (16GB VRAM), Ollama', slug: 'phi-4' },
];

const SERVER_HIGH_CAPACITY_MODELS: OpenSourceModelRow[] = [
  { name: 'Qwen 3.8 Max', provider: 'Alibaba', skills: 'Python, Multi-GPU, Docker, vLLM', slug: 'qwen-3-8-max' },
  { name: 'MiMo-V2.6-Pro', provider: 'Xiaomi', skills: 'Python, GPU (48GB VRAM), Ollama', slug: 'mimo-v2-6-pro' },
  { name: 'GLM-5.3', provider: 'Zhipu AI', skills: 'Python, GPU (48GB VRAM), Ollama', slug: 'glm-5-3' },
  { name: 'Mistral Large 3', provider: 'Mistral AI', skills: 'Python, Multi-GPU (8×A100), Docker, Linux', slug: 'mistral-large-3' },
  { name: 'Llama 4 Maverick 400B', provider: 'Meta', skills: 'Python, Multi-GPU (8×A100), Docker, Linux', slug: 'llama-4-maverick-400b' },
  { name: 'DeepSeek R1', provider: 'DeepSeek', skills: 'Python, Multi-GPU (8×A100), Docker, Linux', slug: 'deepseek-r1' },
  { name: 'DeepSeek V4 Pro', provider: 'DeepSeek', skills: 'Python, Multi-GPU, Docker, vLLM', slug: 'deepseek-v4-pro' },
  { name: 'Qwen 3 Coder 480B', provider: 'Alibaba', skills: 'Python, Multi-GPU (8×A100), Docker, Linux', slug: 'qwen-3-coder-480b' },
];

export const ModelsDirectorySection: React.FC = () => {
  const navigate = useNavigate();
  const { child: colVariants } = useStaggerChildren(0.08);

  const handleCardClick = (slug: string) => {
    navigate(`/models/${slug}`);
  };

  return (
    <SectionReveal stagger className="w-full">
      <section className="relative w-full py-16 lg:py-24 bg-surface-base border-t border-b border-border-hairline px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* HEADER */}
          <motion.div
            variants={colVariants}
            className="flex flex-col items-start"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent-indigo">
              OPEN SOURCE MODELS DIRECTORY
            </span>
            <h2 className="mt-4 text-[32px] sm:text-[40px] font-serif font-normal text-text-primary leading-tight">
              Run on your own hardware. Zero cloud lock-in.
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-text-muted max-w-[620px] leading-relaxed">
              Download weights, inspect architectures, and deploy locally. Every open source foundation model verified with clear hardware and skill requirements.
            </p>
          </motion.div>

          {/* TWO-COLUMN OPEN SOURCE LAYOUT */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* LEFT COLUMN: Local & Lightweight Models */}
            <motion.div variants={colVariants} className="flex flex-col space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-border-hairline">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-text-primary">Local & Laptop Ready</h3>
                  <span className="font-mono text-[12px] text-text-muted block">
                    Models you can run via Ollama or Apple Silicon Mac
                  </span>
                </div>
              </div>

              <div className="divide-y divide-border-hairline border-t border-b border-border-hairline">
                {LOCAL_OLLAMA_MODELS.map((m) => (
                  <div
                    key={m.name}
                    onClick={() => handleCardClick(m.slug)}
                    className="py-3.5 px-2 flex items-center justify-between cursor-pointer rounded-md hover:bg-accent-indigo/[0.04] transition-colors group"
                  >
                    <div className="flex items-baseline gap-2 min-w-0 pr-2">
                      <span className="text-[15px] font-medium text-text-primary group-hover:text-accent-indigo transition-colors truncate">
                        {m.name}
                      </span>
                      <span className="text-[12px] text-text-muted shrink-0">· {m.provider}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[10px] sm:text-[11px] text-text-secondary bg-surface-elevated/70 border border-border-hairline px-2 py-0.5 rounded truncate max-w-[120px] sm:max-w-none">
                        {m.skills}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-accent-indigo opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: High Capacity & Server Deployments */}
            <motion.div variants={colVariants} className="flex flex-col space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-border-hairline">
                <div className="w-8 h-8 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-text-primary">High Capacity & Servers</h3>
                  <span className="font-mono text-[12px] text-text-muted block">
                    Frontier weights requiring GPU clusters or Docker runtimes
                  </span>
                </div>
              </div>

              <div className="divide-y divide-border-hairline border-t border-b border-border-hairline">
                {SERVER_HIGH_CAPACITY_MODELS.map((m) => (
                  <div
                    key={m.name}
                    onClick={() => handleCardClick(m.slug)}
                    className="py-3.5 px-2 flex items-center justify-between cursor-pointer rounded-md hover:bg-accent-indigo/[0.04] transition-colors group"
                  >
                    <div className="flex items-baseline gap-2 min-w-0 pr-2">
                      <span className="text-[15px] font-medium text-text-primary group-hover:text-accent-indigo transition-colors truncate">
                        {m.name}
                      </span>
                      <span className="text-[12px] text-text-muted shrink-0">· {m.provider}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[10px] sm:text-[11px] text-text-secondary bg-surface-elevated/70 border border-border-hairline px-2 py-0.5 rounded truncate max-w-[120px] sm:max-w-none">
                        {m.skills}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-accent-indigo opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* BOTTOM LINK */}
          <motion.div
            variants={colVariants}
            className="mt-12 pt-6 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-[13px] text-text-muted">
              Explore 500+ open source models with skills, dependencies, and HuggingFace repositories.
            </p>
            <Link
              to="/models"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-card hover:bg-surface-elevated border border-border-hairline hover:border-accent-indigo text-text-primary text-[13px] font-mono transition-all group"
            >
              <span>View all open source models</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-indigo group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
};
