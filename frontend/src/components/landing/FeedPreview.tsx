import React from 'react';
import { SectionReveal } from '../common/SectionReveal';
import { Link } from 'react-router-dom';
import { getFeedCategoryColor } from '../../lib/utils';

export const FeedPreview: React.FC = () => {
  const previewItems = [
    {
      category: 'AI',
      isFunding: false,
      title: 'Mistral releases Large 2 with 128k context and native function calling',
      desc: 'Benchmarked directly against GPT-4o with significant improvements in multilingual code synthesis and reasoning.',
      time: '2h ago',
    },
    {
      category: 'FUNDING',
      isFunding: true,
      title: 'Physical Intelligence raises $400M at $2.4B valuation from Bezos and Thrive',
      desc: 'Developing foundation models for robotics and hardware automation across industrial applications.',
      time: '3h ago',
    },
    {
      category: 'STARTUP',
      isFunding: false,
      title: 'Harvey introduces automated contract generation and live docket sync',
      desc: 'Expanding legal AI workflows with audited redlining and real-time court repository ingestion.',
      time: '5h ago',
    },
    {
      category: 'TECH',
      isFunding: false,
      title: 'Anthropic details computer-use safety mitigations and runtime sandbox isolation',
      desc: 'Security protocols for autonomous tool execution, agentic browser navigation, and prompt injection defense.',
      time: '7h ago',
    },
    {
      category: 'AI',
      isFunding: false,
      title: 'OpenAI announces structural changes ahead of expected non-profit governance shift',
      desc: 'Corporate re-alignment aimed at securing larger debt facilities and compute partnerships.',
      time: '9h ago',
    },
  ];

  return (
    <SectionReveal className="w-full">
      <section className="w-full px-6 lg:px-12 pt-[96px] pb-[96px] border-t border-border-hairline bg-surface-base">
        <div className="max-w-[1200px] mx-auto flex flex-col">
          <span className="font-mono text-[11px] leading-[14px] uppercase text-text-muted tracking-[0.15em]">
            TODAY'S FEED
          </span>
          <h2 className="mt-[24px] font-serif text-[40px] leading-[1.15] tracking-[-0.02em] text-text-primary font-normal">
            One page. Every morning.
          </h2>
          <div className="mt-10 flex flex-col border-t border-border-hairline">
            {previewItems.map((item, idx) => (
              <Link
                key={idx}
                to="/dashboard"
                className="stagger-child py-6 border-b border-border-hairline hover:bg-surface-card/40 transition-colors px-2 cursor-pointer block"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.12em] font-semibold shrink-0 w-24 ${getFeedCategoryColor(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                  <div className="flex-1 max-w-[820px] flex flex-col gap-2">
                    <h3 className="text-[20px] leading-[1.4] text-text-primary font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-text-secondary">
                      {item.desc}
                    </p>
                  </div>
                  <span className="font-mono text-[12px] text-text-muted tabular-nums shrink-0 text-right md:w-20">
                    {item.time}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
};
