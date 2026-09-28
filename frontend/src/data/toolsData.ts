export interface SeedTool {
  name: string;
  category: string;
  pricing: string;
  signup_required: boolean;
  free_tier_limits: string;
  free_tier_slide_limit?: number | null;
  export_formats: string[];
  documentation_url: string;
  trending_percent: number;
  best_for: string[];
  type?: string;
  description?: string;
}

export const TOOLS_DATA: SeedTool[] = [
  {
    "name": "Cursor",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "2,000 completions/mo, 50 premium requests",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.cursor.com",
    "trending_percent": 98,
    "best_for": [
      "TypeScript",
      "VS Code",
      "Composer"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Cursor is an AI tool for TypeScript, VS Code, Composer."
  },
  {
    "name": "GitHub Copilot",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "2,000 completions/mo, 50 chat messages",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.github.com/copilot",
    "trending_percent": 95,
    "best_for": [
      "GitHub",
      "Multi-language",
      "Pair programming"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GitHub Copilot is an AI tool for GitHub, Multi-language, Pair programming."
  },
  {
    "name": "Codeium",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited autocomplete and chat for individuals",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://codeium.com/docs",
    "trending_percent": 92,
    "best_for": [
      "VS Code",
      "JetBrains",
      "Fast In-IDE"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Codeium is an AI tool for VS Code, JetBrains, Fast In-IDE."
  },
  {
    "name": "Windsurf",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with AI Flows and autocomplete",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://codeium.com/windsurf",
    "trending_percent": 91,
    "best_for": [
      "Cascade Flows",
      "Multi-file Edit",
      "Next-gen Editor"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Windsurf is an AI tool for Cascade Flows, Multi-file Edit, Next-gen Editor."
  },
  {
    "name": "Replit Agent",
    "category": "Coding",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.replit.com",
    "trending_percent": 89,
    "best_for": [
      "Autonomous Apps",
      "Instant Deploy",
      "Cloud IDE"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Replit Agent is an AI tool for Autonomous Apps, Instant Deploy, Cloud IDE."
  },
  {
    "name": "Tabnine",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Basic in-IDE completions and chat",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.tabnine.com",
    "trending_percent": 84,
    "best_for": [
      "Local Models",
      "Enterprise Privacy",
      "Air-gapped"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Tabnine is an AI tool for Local Models, Enterprise Privacy, Air-gapped."
  },
  {
    "name": "Sourcegraph Cody",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "500 autocomplete credits and 20 chats/mo",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://sourcegraph.com/docs/cody",
    "trending_percent": 87,
    "best_for": [
      "Repo Intelligence",
      "Codebase Search",
      "Multi-repo Context"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Sourcegraph Cody is an AI tool for Repo Intelligence, Codebase Search, Multi-repo Context."
  },
  {
    "name": "Aider",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Open source CLI pairing with any LLM",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://aider.chat/docs",
    "trending_percent": 90,
    "best_for": [
      "Git Commits",
      "CLI Pair Programming",
      "Local Repos"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Aider is an AI tool for Git Commits, CLI Pair Programming, Local Repos."
  },
  {
    "name": "Continue.dev",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Open source extension for local/cloud LLMs",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.continue.dev",
    "trending_percent": 86,
    "best_for": [
      "Ollama",
      "VS Code",
      "Custom Prompts"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Continue.dev is an AI tool for Ollama, VS Code, Custom Prompts."
  },
  {
    "name": "Cline",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Autonomous coding agent in VS Code",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/cline/cline",
    "trending_percent": 93,
    "best_for": [
      "Autonomous Terminal",
      "File System Tooling",
      "MCP Protocols"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Cline is an AI tool for Autonomous Terminal, File System Tooling, MCP Protocols."
  },
  {
    "name": "Void",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Open source AI code editor alternative to Cursor",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://voideditor.com",
    "trending_percent": 82,
    "best_for": [
      "Privacy",
      "Self-hosted Models",
      "Full Control"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Void is an AI tool for Privacy, Self-hosted Models, Full Control."
  },
  {
    "name": "Zed AI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "High performance Rust editor with assistant panel",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://zed.dev/docs/assistant",
    "trending_percent": 88,
    "best_for": [
      "Ultra-low Latency",
      "CRDT Collaboration",
      "Anthropic API"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Zed AI is an AI tool for Ultra-low Latency, CRDT Collaboration, Anthropic API."
  },
  {
    "name": "JetBrains AI Assistant",
    "category": "Coding",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://www.jetbrains.com/help/idea/ai-assistant.html",
    "trending_percent": 83,
    "best_for": [
      "IntelliJ Native",
      "Refactoring",
      "Commit Generation"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "JetBrains AI Assistant is an AI tool for IntelliJ Native, Refactoring, Commit Generation."
  },
  {
    "name": "Amazon Q Developer",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with inline suggestions and CLI assistant",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.aws.amazon.com/amazonq",
    "trending_percent": 85,
    "best_for": [
      "AWS Integration",
      "Java Transformation",
      "Security Scanning"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Amazon Q Developer is an AI tool for AWS Integration, Java Transformation, Security Scanning."
  },
  {
    "name": "Google Project IDX",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Web-based workspace with Gemini Code Assist",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://idx.dev/docs",
    "trending_percent": 81,
    "best_for": [
      "Full-stack Templates",
      "Gemini In-IDE",
      "Cloud Workstations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Google Project IDX is an AI tool for Full-stack Templates, Gemini In-IDE, Cloud Workstations."
  },
  {
    "name": "Cognition Devin",
    "category": "Coding",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://cognition.ai",
    "trending_percent": 94,
    "best_for": [
      "Full Autonomous SWE",
      "End-to-End Tasks",
      "Sandboxed Execution"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cognition Devin is an AI tool for Full Autonomous SWE, End-to-End Tasks, Sandboxed Execution."
  },
  {
    "name": "Qodo",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier for personal testing and PR review",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.qodo.ai",
    "trending_percent": 84,
    "best_for": [
      "Test Generation",
      "Code Integrity",
      "PR Review"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Qodo is an AI tool for Test Generation, Code Integrity, PR Review."
  },
  {
    "name": "CodeRabbit",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free for public open-source repositories",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://coderabbit.ai/docs",
    "trending_percent": 92,
    "best_for": [
      "Automated PR Reviews",
      "Line-by-line Feedback",
      "GitLab / GitHub"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CodeRabbit is an AI tool for Automated PR Reviews, Line-by-line Feedback, GitLab / GitHub."
  },
  {
    "name": "Greptile",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with index for up to 3 repositories",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.greptile.com",
    "trending_percent": 80,
    "best_for": [
      "Codebase Search API",
      "Code Review Bot",
      "Context Generation"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Greptile is an AI tool for Codebase Search API, Code Review Bot, Context Generation."
  },
  {
    "name": "Mutable AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free trial for AI-generated wikis and auto-docs",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://mutable.ai",
    "trending_percent": 76,
    "best_for": [
      "Automated Wikis",
      "Code Refactoring",
      "Docstrings"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mutable AI is an AI tool for Automated Wikis, Code Refactoring, Docstrings."
  },
  {
    "name": "Claude Code",
    "category": "Coding",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code",
    "trending_percent": 96,
    "best_for": [
      "Terminal Agent",
      "Architecture",
      "Sonnet 3.5"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Claude Code is an AI tool for Terminal Agent, Architecture, Sonnet 3.5."
  },
  {
    "name": "OpenAI Codex",
    "category": "Coding",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://platform.openai.com/docs/guides/code",
    "trending_percent": 82,
    "best_for": [
      "Code Synthesis",
      "Docstring Parsing",
      "API Functions"
    ],
    "type": "api",
    "free_tier_slide_limit": null,
    "description": "OpenAI Codex is an AI tool for Code Synthesis, Docstring Parsing, API Functions."
  },
  {
    "name": "Supermaven",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 300k token context",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://supermaven.com",
    "trending_percent": 90,
    "best_for": [
      "1M Token Window",
      "Fast Typing Latency",
      "In-editor Assistant"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Supermaven is an AI tool for 1M Token Window, Fast Typing Latency, In-editor Assistant."
  },
  {
    "name": "Phind",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free searches with Phind-70B model",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://www.phind.com",
    "trending_percent": 89,
    "best_for": [
      "Developer Search Engine",
      "Technical Answers",
      "Web Grounding"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Phind is an AI tool for Developer Search Engine, Technical Answers, Web Grounding."
  },
  {
    "name": "Warp Terminal",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 100 Warp AI requests/month",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.warp.dev",
    "trending_percent": 94,
    "best_for": [
      "Modern Rust Terminal",
      "CLI Explanations",
      "Command Search"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Warp Terminal is an AI tool for Modern Rust Terminal, CLI Explanations, Command Search."
  },
  {
    "name": "OpenHands",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Open source autonomous AI developer platform",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/All-Hands-AI/OpenHands",
    "trending_percent": 91,
    "best_for": [
      "Agentic Coding",
      "Docker Sandboxing",
      "Full Workspace Execution"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "OpenHands is an AI tool for Agentic Coding, Docker Sandboxing, Full Workspace Execution."
  },
  {
    "name": "vLLM",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "High-throughput and memory-efficient LLM inference engine",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.vllm.ai",
    "trending_percent": 96,
    "best_for": [
      "PagedAttention",
      "Continuous Batching",
      "Tensor Parallelism"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "vLLM is an AI tool for PagedAttention, Continuous Batching, Tensor Parallelism."
  },
  {
    "name": "Ollama",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Get up and running with large language models locally",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://ollama.com/docs",
    "trending_percent": 97,
    "best_for": [
      "One-click CLI",
      "Modelfile Support",
      "Mac & Linux Acceleration"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Ollama is an AI tool for One-click CLI, Modelfile Support, Mac & Linux Acceleration."
  },
  {
    "name": "LM Studio",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Discover, download, and run local LLMs with UI",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://lmstudio.ai/docs",
    "trending_percent": 95,
    "best_for": [
      "GGUF Models",
      "Local API Server",
      "Hardware Acceleration"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "LM Studio is an AI tool for GGUF Models, Local API Server, Hardware Acceleration."
  },
  {
    "name": "llama.cpp",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "LLM inference in C/C++ with minimal dependencies",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/ggerganov/llama.cpp",
    "trending_percent": 98,
    "best_for": [
      "4-bit Quantization",
      "Apple Metal Support",
      "Raw Efficiency"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "llama.cpp is an AI tool for 4-bit Quantization, Apple Metal Support, Raw Efficiency."
  },
  {
    "name": "LangChain",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Building applications with LLMs through composability",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://python.langchain.com/docs",
    "trending_percent": 95,
    "best_for": [
      "Chains & Agents",
      "Prompt Templates",
      "Ecosystem Integrations"
    ],
    "type": "api",
    "free_tier_slide_limit": null,
    "description": "LangChain is an AI tool for Chains & Agents, Prompt Templates, Ecosystem Integrations."
  },
  {
    "name": "LlamaIndex",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Data framework for connecting custom data sources to LLMs",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.llamaindex.ai",
    "trending_percent": 93,
    "best_for": [
      "RAG Ingestion",
      "Document Parsers",
      "Sub-question Querying"
    ],
    "type": "api",
    "free_tier_slide_limit": null,
    "description": "LlamaIndex is an AI tool for RAG Ingestion, Document Parsers, Sub-question Querying."
  },
  {
    "name": "LangGraph",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Library for building stateful multi-actor applications with LLMs",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://langchain-ai.github.io/langgraph",
    "trending_percent": 94,
    "best_for": [
      "Cyclic Graphs",
      "State Persistence",
      "Human-in-the-loop Interrupts"
    ],
    "type": "api",
    "free_tier_slide_limit": null,
    "description": "LangGraph is an AI tool for Cyclic Graphs, State Persistence, Human-in-the-loop Interrupts."
  },
  {
    "name": "CrewAI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Framework for orchestrating role-playing autonomous AI agents",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.crewai.com",
    "trending_percent": 93,
    "best_for": [
      "Collaborative Agents",
      "Task Delegation",
      "Process Pipelines"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "CrewAI is an AI tool for Collaborative Agents, Task Delegation, Process Pipelines."
  },
  {
    "name": "Unsloth",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "5x faster 80% less memory LLM fine-tuning",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/unslothai/unsloth",
    "trending_percent": 94,
    "best_for": [
      "Custom CUDA Kernels",
      "Zero Accuracy Loss",
      "Llama & Mistral"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Unsloth is an AI tool for Custom CUDA Kernels, Zero Accuracy Loss, Llama & Mistral."
  },
  {
    "name": "Supabase Studio",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free project tier with AI SQL editor",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://supabase.com/docs/guides/platform",
    "trending_percent": 96,
    "best_for": [
      "AI SQL Assistant",
      "Postgres Management",
      "Row Level Security"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Supabase Studio is an AI tool for AI SQL Assistant, Postgres Management, Row Level Security."
  },
  {
    "name": "Bun",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Incredibly fast all-in-one JavaScript and TypeScript runtime",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://bun.sh/docs",
    "trending_percent": 96,
    "best_for": [
      "Bundler & Test Runner",
      "Node.js Compatible",
      "Native SQLite"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Bun is an AI tool for Bundler & Test Runner, Node.js Compatible, Native SQLite."
  },
  {
    "name": "Vite",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Next generation frontend tooling with lightning fast HMR",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://vitejs.dev/guide",
    "trending_percent": 97,
    "best_for": [
      "ES Modules Dev Server",
      "Rollup Production Build",
      "Plugin Ecosystem"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Vite is an AI tool for ES Modules Dev Server, Rollup Production Build, Plugin Ecosystem."
  },
  {
    "name": "Ruff",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Extremely fast Python linter and code formatter written in Rust",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://docs.astral.sh/ruff",
    "trending_percent": 97,
    "best_for": [
      "100x Faster than Flake8",
      "Drop-in Black Compatible",
      "Import Sorting"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Ruff is an AI tool for 100x Faster than Flake8, Drop-in Black Compatible, Import Sorting."
  },
  {
    "name": "Prettier",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Opinionated code formatter supporting multiple languages",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://prettier.io/docs/en",
    "trending_percent": 97,
    "best_for": [
      "AST Reparsing",
      "Consistent Formatting",
      "Zero Config"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Prettier is an AI tool for AST Reparsing, Consistent Formatting, Zero Config."
  },
  {
    "name": "ESLint",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Find and fix problems in your JavaScript code",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://eslint.org/docs/latest",
    "trending_percent": 95,
    "best_for": [
      "Pluggable Architecture",
      "Custom AST Rules",
      "Auto-fixing"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "ESLint is an AI tool for Pluggable Architecture, Custom AST Rules, Auto-fixing."
  },
  {
    "name": "Prisma AI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Type-safe ORM with automated migrations",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://www.prisma.io/docs",
    "trending_percent": 93,
    "best_for": [
      "Type-safety",
      "Schema Generation",
      "PostgreSQL / MySQL"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Prisma AI is an AI tool for Type-safety, Schema Generation, PostgreSQL / MySQL."
  },
  {
    "name": "Blackbox AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Blackbox+AI",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Blackbox AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "YouCode",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=YouCode",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "YouCode is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "AskCodi",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=AskCodi",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "AskCodi is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Mintlify",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Mintlify",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Mintlify is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "What The Diff",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=What+The+Diff",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "What The Diff is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Ellipsis",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Ellipsis",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Ellipsis is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Graphite Diamond",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Graphite+Diamond",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Graphite Diamond is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Sourcery",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Sourcery",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Sourcery is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Korbit AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Korbit+AI",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Korbit AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Diffblue Cover",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Diffblue+Cover",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Diffblue Cover is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "DeepCode",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=DeepCode",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "DeepCode is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "DeepSource",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=DeepSource",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "DeepSource is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Codiga",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Codiga",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Codiga is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "SonarQube",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=SonarQube",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "SonarQube is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Semgrep",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Semgrep",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Semgrep is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Snyk Code",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Snyk+Code",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Snyk Code is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Codacy",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Codacy",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Codacy is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "GitHub Advanced Security",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=GitHub+Advanced+Security",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "GitHub Advanced Security is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "CodeGeeX",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=CodeGeeX",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "CodeGeeX is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "CodeComplete",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=CodeComplete",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "CodeComplete is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Augment Code",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Augment+Code",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Augment Code is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Magic.dev",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Magic.dev",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Magic.dev is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Poolside",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Poolside",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Poolside is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Cosine Genie",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Cosine+Genie",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Cosine Genie is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "SWE-agent",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=SWE-agent",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "SWE-agent is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "AutoCodeRover",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=AutoCodeRover",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "AutoCodeRover is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "MetaGPT",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=MetaGPT",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "MetaGPT is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "ChatDev",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=ChatDev",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "ChatDev is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Devika",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Devika",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Devika is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Goose",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Goose",
    "trending_percent": 75,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Goose is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Plandex",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Plandex",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Plandex is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Mentat",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Mentat",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Mentat is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Smol Developer",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Smol+Developer",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Smol Developer is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "GPT Engineer",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=GPT+Engineer",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "GPT Engineer is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Devv AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Devv+AI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Devv AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Pieces for Developers",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Pieces+for+Developers",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Pieces for Developers is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Codiumate",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Codiumate",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Codiumate is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Codestral",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Codestral",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Codestral is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "StarCoder",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=StarCoder",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "StarCoder is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Tabby",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Tabby",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Tabby is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "FauxPilot",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=FauxPilot",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "FauxPilot is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Wave Terminal",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Wave+Terminal",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Wave Terminal is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "GitHub Copilot Workspace",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=GitHub+Copilot+Workspace",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "GitHub Copilot Workspace is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Amazon CodeCatalyst",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Amazon+CodeCatalyst",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Amazon CodeCatalyst is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Google Cloud Code",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Google+Cloud+Code",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Google Cloud Code is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "GitLab Duo",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=GitLab+Duo",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "GitLab Duo is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Postman Postbot",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Postman+Postbot",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Postman Postbot is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Insomnia AI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Insomnia+AI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Insomnia AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Hoppscotch AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Hoppscotch+AI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Hoppscotch AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Swagger AI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Swagger+AI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Swagger AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Readme.com AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Readme.com+AI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Readme.com AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Stoplight Studio",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Stoplight+Studio",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Stoplight Studio is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Apidog AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Apidog+AI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Apidog AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "SQLCoder",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=SQLCoder",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "SQLCoder is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Defog",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Defog",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Defog is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Vanna.ai",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Vanna.ai",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Vanna.ai is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Outerbase",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Outerbase",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Outerbase is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "DB-GPT",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=DB-GPT",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "DB-GPT is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Bytebase AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Bytebase+AI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Bytebase AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Drizzle Studio",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Drizzle+Studio",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Drizzle Studio is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Neon AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Neon+AI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Neon AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "PlanetScale",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=PlanetScale",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "PlanetScale is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Pinecone Assistant",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Pinecone+Assistant",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Pinecone Assistant is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Weaviate Verba",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Weaviate+Verba",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Weaviate Verba is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Qdrant FastEmbed",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Qdrant+FastEmbed",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Qdrant FastEmbed is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Chroma",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Chroma",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Chroma is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Milvus",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Milvus",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Milvus is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "LanceDB",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=LanceDB",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "LanceDB is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Marqo",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Marqo",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Marqo is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Vespa.ai",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Vespa.ai",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Vespa.ai is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Weights & Biases",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Weights+&+Biases",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Weights & Biases is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "MLflow",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=MLflow",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "MLflow is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Comet ML",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Comet+ML",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Comet ML is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "ClearML",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=ClearML",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "ClearML is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "BentoML",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=BentoML",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "BentoML is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Ray Serve",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Ray+Serve",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Ray Serve is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "LocalAI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=LocalAI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "LocalAI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Jan.ai",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Jan.ai",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Jan.ai is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Text Generation WebUI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Text+Generation+WebUI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Text Generation WebUI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "ExLlamaV2",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=ExLlamaV2",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "ExLlamaV2 is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "TGI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=TGI",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "TGI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Triton Inference Server",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Triton+Inference+Server",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Triton Inference Server is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "TensorRT-LLM",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=TensorRT-LLM",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "TensorRT-LLM is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "OpenVINO",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=OpenVINO",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "OpenVINO is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "ONNX Runtime",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=ONNX+Runtime",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "ONNX Runtime is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Axolotl",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Axolotl",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Axolotl is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "LLaMA-Factory",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=LLaMA-Factory",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "LLaMA-Factory is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Torchtune",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Torchtune",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Torchtune is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "PEFT",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=PEFT",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "PEFT is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "TRL",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=TRL",
    "trending_percent": 55,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "TRL is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "DeepSpeed",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=DeepSpeed",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "DeepSpeed is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Colossal-AI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Colossal-AI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Colossal-AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Haystack",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Haystack",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Haystack is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Semantic Kernel",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Semantic+Kernel",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Semantic Kernel is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "DSPy",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=DSPy",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "DSPy is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "AutoGen",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=AutoGen",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "AutoGen is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Flowise",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Flowise",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Flowise is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Langflow",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Langflow",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Langflow is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Dify",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Dify",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Dify is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "FastGPT",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=FastGPT",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "FastGPT is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Ragflow",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Ragflow",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Ragflow is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Mem0",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Mem0",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Mem0 is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Zep",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Zep",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Zep is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Biome",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Biome",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Biome is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Oxlint",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Oxlint",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Oxlint is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Pyright",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Pyright",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Pyright is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Mypy",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Mypy",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Mypy is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Checkov",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Checkov",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Checkov is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Trivy",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Trivy",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Trivy is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Infracost",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Infracost",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Infracost is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Terrascan",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Terrascan",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Terrascan is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Falco",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Falco",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Falco is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Open Policy Agent",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Open+Policy+Agent",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Open Policy Agent is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Kyverno",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Kyverno",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Kyverno is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Kubescape",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Kubescape",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Kubescape is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "GitLab CI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=GitLab+CI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "GitLab CI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Harness",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Harness",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Harness is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Argo CD",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Argo+CD",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Argo CD is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Datadog Bits",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Datadog+Bits",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Datadog Bits is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "New Relic Grok",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=New+Relic+Grok",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "New Relic Grok is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Honeycomb Query Assistant",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Honeycomb+Query+Assistant",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Honeycomb Query Assistant is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Grafana LLM",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Grafana+LLM",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Grafana LLM is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "LaunchDarkly AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=LaunchDarkly+AI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "LaunchDarkly AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Roboflow",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Roboflow",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Roboflow is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Labelbox",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Labelbox",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Labelbox is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Kili Technology",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Kili+Technology",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Kili Technology is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Voxel51 FiftyOne",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Voxel51+FiftyOne",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Voxel51 FiftyOne is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "DVC",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=DVC",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "DVC is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Neptune.ai",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Neptune.ai",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Neptune.ai is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Deno",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Deno",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Deno is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Turbopack",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Turbopack",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Turbopack is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Black",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Black",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Black is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Flake8",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Flake8",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Flake8 is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "RuboCop",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=RuboCop",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "RuboCop is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "PHPStan",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=PHPStan",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "PHPStan is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Psalm",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Psalm",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Psalm is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Checkstyle",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Checkstyle",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Checkstyle is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "SpotBugs",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=SpotBugs",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "SpotBugs is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "PMD",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=PMD",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "PMD is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Pylint",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Pylint",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Pylint is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Bandit",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Bandit",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Bandit is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Syft",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Syft",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Syft is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Grype",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Grype",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Grype is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Cosign",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Cosign",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Cosign is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "tfsec",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=tfsec",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "tfsec is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "KubeLinter",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=KubeLinter",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "KubeLinter is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Polaris",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Polaris",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Polaris is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "CodeSee",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=CodeSee",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "CodeSee is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Documatic",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Documatic",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Documatic is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Refact.ai",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Refact.ai",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Refact.ai is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Pythagora",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Pythagora",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Pythagora is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Sweep",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Sweep",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Sweep is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "16x Prompt",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=16x+Prompt",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "16x Prompt is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Bito",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Bito",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Bito is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "CodeGPT",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=CodeGPT",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "CodeGPT is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "SonarCloud",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=SonarCloud",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "SonarCloud is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "AutoGPT",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=AutoGPT",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "AutoGPT is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "OpenDevin",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=OpenDevin",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "OpenDevin is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Cursor Nightly",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Cursor+Nightly",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Cursor Nightly is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "GitKraken AI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=GitKraken+AI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "GitKraken AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Tower Git AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Tower+Git+AI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Tower Git AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "SourceTree AI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=SourceTree+AI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "SourceTree AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Sublime Merge AI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Sublime+Merge+AI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Sublime Merge AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Graphite CLI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Graphite+CLI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Graphite CLI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Sourcery CLI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Sourcery+CLI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Sourcery CLI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "SonarLint",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=SonarLint",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "SonarLint is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Snyk CLI",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Snyk+CLI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "Snyk CLI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "GitKraken CLI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=GitKraken+CLI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "cli",
    "free_tier_slide_limit": null,
    "description": "GitKraken CLI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Lazygit",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Lazygit",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Lazygit is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Neovim AI",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Neovim+AI",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Neovim AI is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Helix Editor",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Helix+Editor",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Helix Editor is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Micro Editor",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Micro+Editor",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Micro Editor is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Ripgrep",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Ripgrep",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Ripgrep is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Fd",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Fd",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Fd is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Bat",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Bat",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Bat is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Eza",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Eza",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Eza is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Delta",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Delta",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Delta is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Starship Prompt",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Starship+Prompt",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Starship Prompt is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Zoxide",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Zoxide",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Zoxide is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Fzf",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Fzf",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Fzf is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Esbuild",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Esbuild",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Esbuild is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Turborepo",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Turborepo",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Turborepo is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Bazel",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Bazel",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Bazel is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "CMake",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=CMake",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "CMake is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Ninja",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Ninja",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Ninja is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Cargo",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Cargo",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Cargo is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Poetry",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Poetry",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Poetry is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Terraform",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Terraform",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Terraform is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "OpenTofu",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=OpenTofu",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "OpenTofu is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Pulumi",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Pulumi",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Pulumi is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Ansible",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Ansible",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Ansible is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Helm",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Helm",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Helm is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "K3s",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=K3s",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "K3s is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Podman",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Podman",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Podman is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Docker Compose",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Docker+Compose",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Docker Compose is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "ShellCheck",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=ShellCheck",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "ShellCheck is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Act",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Act",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Act is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Husky",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Husky",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Husky is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Lint-staged",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Lint-staged",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Lint-staged is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Pre-commit",
    "category": "Coding",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Pre-commit",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Pre-commit is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Changesets",
    "category": "Coding",
    "pricing": "freemium",
    "signup_required": false,
    "free_tier_limits": "Free tier available",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Changesets",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Changesets is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Knip",
    "category": "Coding",
    "pricing": "free",
    "signup_required": true,
    "free_tier_limits": "Unlimited local",
    "export_formats": [
      "TypeScript",
      "Python",
      "JavaScript",
      "Markdown"
    ],
    "documentation_url": "https://github.com/search?q=Knip",
    "trending_percent": 32,
    "best_for": [
      "Coding",
      "Automation",
      "Developer Tools"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Knip is an AI tool for Coding, Automation, Developer Tools."
  },
  {
    "name": "Jasper",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Jasper+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Jasper is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Copy.ai",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Copy.ai+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Copy.ai is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Grammarly",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Grammarly+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Grammarly is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Sudowrite",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Sudowrite+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sudowrite is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Writesonic",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Writesonic+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Writesonic is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Rytr",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Rytr+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Rytr is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Anyword",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Anyword+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Anyword is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Copysmith",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Copysmith+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Copysmith is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Hypotenuse AI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Hypotenuse+AI+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hypotenuse AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ContentBot",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=ContentBot+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ContentBot is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Simplified",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Simplified+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Simplified is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "HyperWrite",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=HyperWrite+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "HyperWrite is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Wordtune",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Wordtune+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wordtune is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Notion AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Notion+AI+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Notion AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Lex",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Lex+writing",
    "trending_percent": 88,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lex is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "WordHero",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=WordHero+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "WordHero is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Peppertype",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Peppertype+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Peppertype is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "LongShot AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=LongShot+AI+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LongShot AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "GrowthBar",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=GrowthBar+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GrowthBar is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Scalenut",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Scalenut+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scalenut is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Textblaze",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Textblaze+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Textblaze is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Writefull",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Writefull+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Writefull is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Paperpal",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Paperpal+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Paperpal is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Jenni AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Jenni+AI+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Jenni AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Elephas",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Elephas+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Elephas is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Writer.com",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Writer.com+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Writer.com is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Chatsonic",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Chatsonic+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Chatsonic is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ClosersCopy",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=ClosersCopy+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ClosersCopy is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Neuroflash",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Neuroflash+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Neuroflash is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Koala Writer",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Koala+Writer+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Koala Writer is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Autoblogging.ai",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Autoblogging.ai+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Autoblogging.ai is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Article Forge",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Article+Forge+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Article Forge is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "AI-Writer",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=AI-Writer+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AI-Writer is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Speedwrite",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Speedwrite+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Speedwrite is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Spinbot",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Spinbot+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Spinbot is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Chibi AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Chibi+AI+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Chibi AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ShortlyAI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=ShortlyAI+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ShortlyAI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "StoryLab.ai",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=StoryLab.ai+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "StoryLab.ai is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Creaitor.ai",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Creaitor.ai+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Creaitor.ai is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Bertha.ai",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Bertha.ai+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Bertha.ai is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Craftly.ai",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Craftly.ai+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Craftly.ai is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Writecream",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Writecream+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Writecream is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Describely",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Describely+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Describely is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Copymatic",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Copymatic+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Copymatic is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "NeuralText",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=NeuralText+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "NeuralText is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "SEOwind",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=SEOwind+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SEOwind is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Outranking",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Outranking+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Outranking is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Dashword",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Dashword+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Dashword is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "RankIQ",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=RankIQ+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "RankIQ is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "PageOptimizer Pro",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=PageOptimizer+Pro+writing",
    "trending_percent": 60,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PageOptimizer Pro is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Contentatscale",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Contentatscale+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Contentatscale is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Undetectable AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Undetectable+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Undetectable AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "WordAI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=WordAI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "WordAI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Spin Rewriter",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Spin+Rewriter+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Spin Rewriter is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "CleverSpinner",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=CleverSpinner+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CleverSpinner is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "LanguageTool",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=LanguageTool+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LanguageTool is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Slick Write",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Slick+Write+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Slick Write is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Ginger Software",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Ginger+Software+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Ginger Software is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "WhiteSmoke",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=WhiteSmoke+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "WhiteSmoke is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "AutoCrit",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=AutoCrit+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AutoCrit is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Scrivener AI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Scrivener+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scrivener AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Dabble Writer",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Dabble+Writer+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Dabble Writer is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "NovelPad",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=NovelPad+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "NovelPad is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Plottr AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Plottr+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Plottr AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Campfire Technology",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Campfire+Technology+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Campfire Technology is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "World Anvil AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=World+Anvil+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "World Anvil AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Character Lab",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Character+Lab+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Character Lab is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Fable Studio",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Fable+Studio+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fable Studio is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Storii",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Storii+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Storii is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "TextCortex",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=TextCortex+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "TextCortex is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Reword",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Reword+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Reword is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Simplified Copy",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Simplified+Copy+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Simplified Copy is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Typli.ai",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Typli.ai+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Typli.ai is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Textmaker",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Textmaker+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Textmaker is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "AISEO",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=AISEO+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AISEO is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ParagraphAI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=ParagraphAI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ParagraphAI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Easy-Peasy.AI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Easy-Peasy.AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Easy-Peasy.AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Hoppy Copy",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Hoppy+Copy+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hoppy Copy is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Magic Blog",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Magic+Blog+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Magic Blog is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Cuppa",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Cuppa+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cuppa is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "BlogNLP",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=BlogNLP+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BlogNLP is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ContentForge",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=ContentForge+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ContentForge is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "PostNitro",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=PostNitro+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PostNitro is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Cohesive AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Cohesive+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cohesive AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "MagicWrite",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=MagicWrite+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MagicWrite is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Taskade AI Writer",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Taskade+AI+Writer+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Taskade AI Writer is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ClickUp Brain",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=ClickUp+Brain+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ClickUp Brain is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Coda AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Coda+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Coda AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Bearly.ai",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Bearly.ai+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Bearly.ai is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Scribe",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Scribe+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scribe is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "WriterZen",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=WriterZen+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "WriterZen is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "GetGenie",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=GetGenie+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GetGenie is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Robin AI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Robin+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Robin AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Spellbook",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Spellbook+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Spellbook is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Ironclad AI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Ironclad+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Ironclad AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ContractPodAi",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=ContractPodAi+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ContractPodAi is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Evisort",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Evisort+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Evisort is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Lawgeex",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Lawgeex+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lawgeex is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Lexis+ AI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Lexis++AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lexis+ AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Westlaw Precision",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Westlaw+Precision+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Westlaw Precision is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Casetext CoCounsel",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Casetext+CoCounsel+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Casetext CoCounsel is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Harvey AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Harvey+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Harvey AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Luminance",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Luminance+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Luminance is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Legislate",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Legislate+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Legislate is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Contractbook",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Contractbook+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Contractbook is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Juro",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Juro+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Juro is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "SpotDraft",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=SpotDraft+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SpotDraft is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "EvenUp",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=EvenUp+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "EvenUp is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Leya",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Leya+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Leya is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Paxton AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Paxton+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Paxton AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Draftsmith",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Draftsmith+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Draftsmith is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "EditFlow",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=EditFlow+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "EditFlow is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Writely",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Writely+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Writely is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "WordAi Pro",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=WordAi+Pro+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "WordAi Pro is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Copyleaks",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Copyleaks+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Copyleaks is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Originality AI",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Originality+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Originality AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Winston AI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Winston+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Winston AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Scribbr Proofreader",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Scribbr+Proofreader+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scribbr Proofreader is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Hemingway Editor Desktop",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Hemingway+Editor+Desktop+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hemingway Editor Desktop is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "QuillBot Summarizer",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=QuillBot+Summarizer+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "QuillBot Summarizer is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Wordtune Read",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Wordtune+Read+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wordtune Read is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Lex Co-pilot",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Lex+Co-pilot+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lex Co-pilot is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Squibler Editor",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Squibler+Editor+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Squibler Editor is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Novelcrafter Studio",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Novelcrafter+Studio+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Novelcrafter Studio is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Type Studio Docs",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Type+Studio+Docs+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Type Studio Docs is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Compose AI Extension",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Compose+AI+Extension+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Compose AI Extension is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Moonbeam Pro",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Moonbeam+Pro+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Moonbeam Pro is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Frase SEO Content",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Frase+SEO+Content+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Frase SEO Content is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Surfer AI",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Surfer+AI+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Surfer AI is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Clearscope Reports",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Clearscope+Reports+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Clearscope Reports is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "MarketMuse Suite",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=MarketMuse+Suite+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MarketMuse Suite is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "INK Content Suite",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=INK+Content+Suite+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "INK Content Suite is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ProWritingAid Desktop",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=ProWritingAid+Desktop+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ProWritingAid Desktop is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "QuillBot Flow",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=QuillBot+Flow+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "QuillBot Flow is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "Sudowrite Story Engine",
    "category": "Writing",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits monthly",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=Sudowrite+Story+Engine+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sudowrite Story Engine is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "CopyAI Blog Post Wizard",
    "category": "Writing",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "Markdown",
      "PDF",
      "DOCX",
      "TXT"
    ],
    "documentation_url": "https://www.google.com/search?q=CopyAI+Blog+Post+Wizard+writing",
    "trending_percent": 32,
    "best_for": [
      "Copywriting",
      "SEO Content",
      "Editing"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CopyAI Blog Post Wizard is an AI tool for Copywriting, SEO Content, Editing."
  },
  {
    "name": "ChatGPT",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=ChatGPT+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ChatGPT is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Claude",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Claude+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Claude is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Gemini",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Gemini+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Gemini is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Perplexity",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Perplexity+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Perplexity is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Grok",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Grok+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Grok is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "DeepSeek Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=DeepSeek+Chat+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DeepSeek Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Mistral Le Chat",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Mistral+Le+Chat+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mistral Le Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Meta AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Meta+AI+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Meta AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Microsoft Copilot",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Microsoft+Copilot+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Microsoft Copilot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Poe",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Poe+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Poe is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Pi",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Pi+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pi is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "HuggingChat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=HuggingChat+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "HuggingChat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Together Chat",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Together+Chat+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Together Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Groq Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Groq+Chat+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Groq Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "OpenRouter Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=OpenRouter+Chat+chat",
    "trending_percent": 94,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "OpenRouter Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Kimi",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Kimi+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kimi is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Qwen Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Qwen+Chat+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Qwen Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Ernie Bot",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Ernie+Bot+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Ernie Bot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Character.AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Character.AI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Character.AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Replika",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Replika+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Replika is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Chai",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Chai+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Chai is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Janitor AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Janitor+AI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Janitor AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Talkie",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Talkie+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Talkie is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Yodayo",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Yodayo+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Yodayo is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Crushon AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Crushon+AI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Crushon AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "SpicyChat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=SpicyChat+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SpicyChat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Chub AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Chub+AI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Chub AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Anima AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Anima+AI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Anima AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Paradot",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Paradot+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Paradot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Soulmate AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Soulmate+AI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Soulmate AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Botify AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Botify+AI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Botify AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Kindroid",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Kindroid+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kindroid is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Nomi AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Nomi+AI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Nomi AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Kajiwoto",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Kajiwoto+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kajiwoto is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "SillyTavern",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=SillyTavern+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SillyTavern is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Agnaistic",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Agnaistic+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Agnaistic is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Moemate",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Moemate+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Moemate is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "FlowGPT",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=FlowGPT+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "FlowGPT is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "ChatHub",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=ChatHub+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ChatHub is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "TypingMind",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=TypingMind+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "TypingMind is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "LibreChat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=LibreChat+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LibreChat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Chatbox",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Chatbox+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Chatbox is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "NextChat",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=NextChat+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "NextChat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Lobe Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Lobe+Chat+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lobe Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Big-AGI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Big-AGI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Big-AGI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "BetterChatGPT",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=BetterChatGPT+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BetterChatGPT is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "OpenWebUI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=OpenWebUI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "OpenWebUI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Ollama WebUI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Ollama+WebUI+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Ollama WebUI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Jan Desktop",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Jan+Desktop+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Jan Desktop is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Faraday.dev",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Faraday.dev+chat",
    "trending_percent": 65,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Faraday.dev is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Msty",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Msty+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Msty is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "BackYard AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=BackYard+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BackYard AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "KoboldAI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=KoboldAI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "KoboldAI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "GPT4All",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=GPT4All+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GPT4All is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "FreedomGPT",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=FreedomGPT+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "FreedomGPT is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Venice AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Venice+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Venice AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "DuckDuckGo AI Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=DuckDuckGo+AI+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DuckDuckGo AI Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Brave Leo AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Brave+Leo+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Brave Leo AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Opera Aria",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Opera+Aria+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Opera Aria is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Perplexity Pro",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Perplexity+Pro+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Perplexity Pro is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "You.com",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=You.com+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "You.com is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Andi Search",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Andi+Search+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Andi Search is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Komo Search",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Komo+Search+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Komo Search is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Exa AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Exa+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Exa AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Tavily Search",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Tavily+Search+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tavily Search is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Kagi Assistant",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Kagi+Assistant+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kagi Assistant is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Arc Max",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Arc+Max+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Arc Max is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "SigmaOS Airis",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=SigmaOS+Airis+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SigmaOS Airis is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Sidekick Browser AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Sidekick+Browser+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sidekick Browser AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Monica AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Monica+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Monica AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Sider AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Sider+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sider AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Harpa AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Harpa+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Harpa AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Merlin AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Merlin+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Merlin AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "SciSpace Copilot",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=SciSpace+Copilot+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SciSpace Copilot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "ChatPDF",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=ChatPDF+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ChatPDF is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "AskYourPDF",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=AskYourPDF+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AskYourPDF is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "PDF.ai",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=PDF.ai+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PDF.ai is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Sharly AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Sharly+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sharly AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Coral",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Coral+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Coral is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Cohere Playground",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Cohere+Playground+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cohere Playground is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Anthropic Console",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Anthropic+Console+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Anthropic Console is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Google AI Studio",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Google+AI+Studio+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Google AI Studio is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "OpenAI Playground",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=OpenAI+Playground+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "OpenAI Playground is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Replicate Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Replicate+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Replicate Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Fal.ai Chat",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Fal.ai+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fal.ai Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Fireworks AI Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Fireworks+AI+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fireworks AI Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Mistral Platform",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Mistral+Platform+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mistral Platform is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Anyscale Endpoints",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Anyscale+Endpoints+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Anyscale Endpoints is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Together AI Playground",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Together+AI+Playground+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Together AI Playground is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "DeepInfra",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=DeepInfra+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DeepInfra is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Baseten",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Baseten+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Baseten is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Modal Labs",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Modal+Labs+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Modal Labs is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "RunPod Serverless",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=RunPod+Serverless+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "RunPod Serverless is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Lepton AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Lepton+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lepton AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Cerebras Cloud Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Cerebras+Cloud+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cerebras Cloud Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "SambaNova Cloud",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=SambaNova+Cloud+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SambaNova Cloud is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Groq Playground",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Groq+Playground+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Groq Playground is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Nebius AI Studio",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Nebius+AI+Studio+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Nebius AI Studio is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Hyperbolic",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Hyperbolic+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hyperbolic is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Novita AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Novita+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Novita AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "SiliconFlow",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=SiliconFlow+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SiliconFlow is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Chatbase",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Chatbase+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Chatbase is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Dante AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Dante+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Dante AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "SiteGPT",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=SiteGPT+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SiteGPT is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "CustomGPT.ai",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=CustomGPT.ai+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CustomGPT.ai is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Yuma AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Yuma+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Yuma AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Fin AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Fin+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fin AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Ada Support",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Ada+Support+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Ada Support is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Forethought",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Forethought+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Forethought is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Kustomer AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Kustomer+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kustomer AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Tidio Lyro",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Tidio+Lyro+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tidio Lyro is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Gorgias AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Gorgias+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Gorgias AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "HelpScout AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=HelpScout+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "HelpScout AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Freshchat AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Freshchat+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Freshchat AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Zendesk AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Zendesk+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Zendesk AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "LivePerson AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=LivePerson+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LivePerson AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Drift AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Drift+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Drift AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Intercom Copilot",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Intercom+Copilot+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Intercom Copilot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Typebot",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Typebot+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Typebot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Botpress",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Botpress+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Botpress is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Voiceflow",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Voiceflow+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Voiceflow is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Stack AI",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Stack+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Stack AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Coze",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Coze+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Coze is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Relevance AI",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Relevance+AI+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Relevance AI is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "MindStudio",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=MindStudio+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MindStudio is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Amazon Q Business",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Amazon+Q+Business+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Amazon Q Business is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Salesforce Einstein Copilot",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Salesforce+Einstein+Copilot+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Salesforce Einstein Copilot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "ServiceNow Now Assist",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=ServiceNow+Now+Assist+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ServiceNow Now Assist is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "HubSpot ChatSpot",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=HubSpot+ChatSpot+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "HubSpot ChatSpot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Notion Q&A Chat",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Notion+Q&A+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Notion Q&A Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Quora Poe Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Quora+Poe+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Quora Poe Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Dify Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Dify+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Dify Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "LangChain Chat",
    "category": "Chat",
    "pricing": "free",
    "signup_required": false,
    "free_tier_limits": "Free access available",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=LangChain+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LangChain Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Gradio Chatbot",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Gradio+Chatbot+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Gradio Chatbot is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Streamlit Chat",
    "category": "Chat",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Daily free credits",
    "export_formats": [
      "Markdown",
      "JSON",
      "Text"
    ],
    "documentation_url": "https://www.google.com/search?q=Streamlit+Chat+chat",
    "trending_percent": 35,
    "best_for": [
      "Conversational AI",
      "Virtual Assistant",
      "Q&A"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Streamlit Chat is an AI tool for Conversational AI, Virtual Assistant, Q&A."
  },
  {
    "name": "Elicit",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Elicit+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Elicit is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Consensus",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Consensus+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Consensus is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Scite",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Scite+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scite is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Semantic Scholar",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Semantic+Scholar+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Semantic Scholar is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Connected Papers",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Connected+Papers+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Connected Papers is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ResearchRabbit",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ResearchRabbit+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ResearchRabbit is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Litmaps",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Litmaps+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Litmaps is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "SciSpace",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=SciSpace+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SciSpace is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Scholarcy",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Scholarcy+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scholarcy is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Zotero",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Zotero+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Zotero is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Mendeley",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Mendeley+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mendeley is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Undermind",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Undermind+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Undermind is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "STORM (Stanford)",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=STORM+(Stanford)+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "STORM (Stanford) is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "NotebookLM",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=NotebookLM+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "NotebookLM is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Humata",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Humata+research",
    "trending_percent": 88,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Humata is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Unriddle",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Unriddle+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Unriddle is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Explainpaper",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Explainpaper+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Explainpaper is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "R Discovery",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=R+Discovery+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "R Discovery is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Keenious",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Keenious+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Keenious is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Dimensions.ai",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Dimensions.ai+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Dimensions.ai is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Lens.org",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Lens.org+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lens.org is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Iris.ai",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Iris.ai+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Iris.ai is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Rayyan",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Rayyan+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Rayyan is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Covidence",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Covidence+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Covidence is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "DistillerSR",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=DistillerSR+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DistillerSR is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ASReview",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ASReview+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ASReview is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "System Pro",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=System+Pro+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "System Pro is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Causaly",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Causaly+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Causaly is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Owler",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Owler+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Owler is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "AlphaSense",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=AlphaSense+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AlphaSense is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Tegus",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Tegus+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tegus is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Tegus AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Tegus+AI+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tegus AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "FinChat.io",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=FinChat.io+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "FinChat.io is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Roam Research AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Roam+Research+AI+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Roam Research AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Logseq AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Logseq+AI+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Logseq AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Obsidian Smart Connections",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Obsidian+Smart+Connections+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Obsidian Smart Connections is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Mem.ai",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Mem.ai+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mem.ai is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Reflect Notes",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Reflect+Notes+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Reflect Notes is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Heptabase",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Heptabase+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Heptabase is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Capacities",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Capacities+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Capacities is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Affine",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Affine+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Affine is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Notion AI Research",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Notion+AI+Research+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Notion AI Research is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Scinapse",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Scinapse+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scinapse is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "OpenAlex",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=OpenAlex+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "OpenAlex is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Semantic Scholar API",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Semantic+Scholar+API+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Semantic Scholar API is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "CORE",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=CORE+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CORE is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Crossref AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Crossref+AI+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Crossref AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "PubMed Search AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=PubMed+Search+AI+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PubMed Search AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Cochrane Library AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Cochrane+Library+AI+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cochrane Library AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Trip Database AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Trip+Database+AI+research",
    "trending_percent": 60,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Trip Database AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ScienceDirect AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ScienceDirect+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ScienceDirect AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Wiley Online Library AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Wiley+Online+Library+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wiley Online Library AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Springer Nature AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Springer+Nature+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Springer Nature AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "IEEE Xplore AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=IEEE+Xplore+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "IEEE Xplore AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ACM Digital Library AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ACM+Digital+Library+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ACM Digital Library AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "arXiv Sanity Preserver",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=arXiv+Sanity+Preserver+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "arXiv Sanity Preserver is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "AlphaXiv",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=AlphaXiv+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AlphaXiv is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Hugging Face Papers",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Hugging+Face+Papers+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hugging Face Papers is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Papers With Code",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Papers+With+Code+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Papers With Code is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Catalyst AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Catalyst+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Catalyst AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ScienceOS",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ScienceOS+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ScienceOS is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Lateral",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Lateral+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lateral is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Genei",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Genei+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Genei is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Scholarcy Flashcards",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Scholarcy+Flashcards+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scholarcy Flashcards is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Paper Digest",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Paper+Digest+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Paper Digest is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Knowji",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Knowji+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Knowji is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Sourcely",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Sourcely+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sourcely is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Inciteful",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Inciteful+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Inciteful is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "LitSuggest",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=LitSuggest+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LitSuggest is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Citation Gecko",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Citation+Gecko+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Citation Gecko is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Visualizing Science",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Visualizing+Science+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Visualizing Science is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "CoCites",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=CoCites+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CoCites is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "CiteDrive",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=CiteDrive+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CiteDrive is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "EndNote AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=EndNote+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "EndNote AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "RefWorks",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=RefWorks+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "RefWorks is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ReadCube Papers",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ReadCube+Papers+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ReadCube Papers is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Citavi",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Citavi+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Citavi is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Docear",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Docear+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Docear is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "JabRef",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=JabRef+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "JabRef is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "MarginNote",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=MarginNote+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MarginNote is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "LiquidText",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=LiquidText+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LiquidText is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "LiquidText AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=LiquidText+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LiquidText AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "PDFGear",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=PDFGear+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PDFGear is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "PDFfiller AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=PDFfiller+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PDFfiller AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Smallpdf AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Smallpdf+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Smallpdf AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Foxit PDF AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Foxit+PDF+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Foxit PDF AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Acrobat Liquid Mode",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Acrobat+Liquid+Mode+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Acrobat Liquid Mode is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Wondershare PDFelement AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Wondershare+PDFelement+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wondershare PDFelement AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Sejda AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Sejda+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sejda AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "UPDF AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=UPDF+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "UPDF AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "PDF Reader Pro AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=PDF+Reader+Pro+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PDF Reader Pro AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Kdan PDF Reader AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Kdan+PDF+Reader+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kdan PDF Reader AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "PDF Expert AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=PDF+Expert+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PDF Expert AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "GoodNotes AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=GoodNotes+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GoodNotes AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Notability AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Notability+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Notability AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "CollaNote",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=CollaNote+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CollaNote is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Nebo",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Nebo+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Nebo is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Defter Notes",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Defter+Notes+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Defter Notes is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Muse",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Muse+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Muse is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Craft Docs AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Craft+Docs+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Craft Docs AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Slite AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Slite+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Slite AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Slab AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Slab+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Slab AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Guru AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Guru+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Guru AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Notion Q&A",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Notion+Q&A+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Notion Q&A is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "GitBook AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=GitBook+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GitBook AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Nuance Dragon",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Nuance+Dragon+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Nuance Dragon is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ReadCube",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ReadCube+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ReadCube is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Scopus AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Scopus+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scopus AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Web of Science Research Assistant",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Web+of+Science+Research+Assistant+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Web of Science Research Assistant is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Clarivate AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Clarivate+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Clarivate AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Elsevier Scopus AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Elsevier+Scopus+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Elsevier Scopus AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Statista AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Statista+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Statista AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "CB Insights AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=CB+Insights+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CB Insights AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "PitchBook AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=PitchBook+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PitchBook AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Tracxn AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Tracxn+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tracxn AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Crunchbase AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Crunchbase+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Crunchbase AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "BloombergGPT",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=BloombergGPT+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BloombergGPT is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Factiva AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Factiva+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Factiva AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "LexisNexis Research",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=LexisNexis+Research+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LexisNexis Research is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Westlaw Edge",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Westlaw+Edge+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Westlaw Edge is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Fastcase AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Fastcase+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fastcase AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "HeinOnline AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=HeinOnline+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "HeinOnline AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "vLex Vincent",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=vLex+Vincent+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "vLex Vincent is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Judicata",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Judicata+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Judicata is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Casetext Research",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Casetext+Research+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Casetext Research is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Docket Alarm",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Docket+Alarm+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Docket Alarm is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "CourtListener RECAP",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=CourtListener+RECAP+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CourtListener RECAP is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ScholarGate",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ScholarGate+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ScholarGate is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "ResearchHub",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=ResearchHub+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ResearchHub is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "PubPeer",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=PubPeer+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PubPeer is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "MedlinePlus AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=MedlinePlus+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MedlinePlus AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "BioMed Central AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=BioMed+Central+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BioMed Central AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Nature Portfolio AI",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=Nature+Portfolio+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Nature Portfolio AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "PLOS Research AI",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=PLOS+Research+AI+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PLOS Research AI is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "BioRxiv Explorer",
    "category": "Research",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free tier with 5 papers/month",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=BioRxiv+Explorer+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BioRxiv Explorer is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "MedRxiv Assistant",
    "category": "Research",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "BibTeX",
      "Markdown",
      "RIS"
    ],
    "documentation_url": "https://www.google.com/search?q=MedRxiv+Assistant+research",
    "trending_percent": 34,
    "best_for": [
      "Literature Review",
      "Citations",
      "Academic Research"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MedRxiv Assistant is an AI tool for Literature Review, Citations, Academic Research."
  },
  {
    "name": "Midjourney",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Midjourney+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Midjourney is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "DALL-E 3",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=DALL-E+3+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DALL-E 3 is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Stable Diffusion",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Stable+Diffusion+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Stable Diffusion is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Leonardo.ai",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Leonardo.ai+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Leonardo.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Ideogram",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Ideogram+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Ideogram is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Flux.1",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Flux.1+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Flux.1 is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Adobe Firefly",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Adobe+Firefly+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Adobe Firefly is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Playground AI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Playground+AI+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Playground AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "NightCafe",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=NightCafe+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "NightCafe is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "DreamStudio",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=DreamStudio+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DreamStudio is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Recraft.ai",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Recraft.ai+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Recraft.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Krea.ai",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Krea.ai+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Krea.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Magnific AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Magnific+AI+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Magnific AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Clipdrop",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Clipdrop+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Clipdrop is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Photoroom",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Photoroom+image+ai",
    "trending_percent": 92,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Photoroom is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Remove.bg",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Remove.bg+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Remove.bg is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Cleanup.pictures",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Cleanup.pictures+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cleanup.pictures is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Upscayl",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Upscayl+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Upscayl is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Topaz Photo AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Topaz+Photo+AI+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Topaz Photo AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Luminar Neo",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Luminar+Neo+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Luminar Neo is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Canva Magic Media",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Canva+Magic+Media+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Canva Magic Media is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Adobe Express AI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Adobe+Express+AI+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Adobe Express AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Fotor",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Fotor+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fotor is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Pixlr",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Pixlr+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pixlr is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Vance AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Vance+AI+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vance AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Cutout.pro",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Cutout.pro+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cutout.pro is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "InsoPaint",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=InsoPaint+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "InsoPaint is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "DeepAI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=DeepAI+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DeepAI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Artbreeder",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Artbreeder+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Artbreeder is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Craiyon",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Craiyon+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Craiyon is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Hotpot.ai",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Hotpot.ai+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hotpot.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Getimg.ai",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Getimg.ai+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Getimg.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "StarryAI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=StarryAI+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "StarryAI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Wombo Dream",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Wombo+Dream+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wombo Dream is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Dezgo",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Dezgo+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Dezgo is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Neural Love",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Neural+Love+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Neural Love is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "RunComfy",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=RunComfy+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "RunComfy is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Civitai",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Civitai+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Civitai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Mage.space",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Mage.space+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mage.space is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "OpenArt",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=OpenArt+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "OpenArt is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "SeaArt",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=SeaArt+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SeaArt is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Tensor.art",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Tensor.art+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tensor.art is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "PromptHunt",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=PromptHunt+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PromptHunt is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Lexica.art",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Lexica.art+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lexica.art is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Arthub.ai",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Arthub.ai+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Arthub.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "PixAI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=PixAI+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PixAI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "PicSo",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=PicSo+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PicSo is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "NovelAI Image",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=NovelAI+Image+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "NovelAI Image is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Midjourney Web",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Midjourney+Web+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Midjourney Web is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Fooocus",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Fooocus+image+ai",
    "trending_percent": 62,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fooocus is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Automatic1111",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Automatic1111+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Automatic1111 is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "ComfyUI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=ComfyUI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ComfyUI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "InvokeAI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=InvokeAI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "InvokeAI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "SD.Next",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=SD.Next+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SD.Next is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Easy Diffusion",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Easy+Diffusion+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Easy Diffusion is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "DiffusionBee",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=DiffusionBee+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DiffusionBee is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Draw Things",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Draw+Things+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Draw Things is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "ChaiNNer",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=ChaiNNer+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ChaiNNer is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Real-ESRGAN",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Real-ESRGAN+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Real-ESRGAN is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Gigapixel AI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Gigapixel+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Gigapixel AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "DeNoise AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=DeNoise+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DeNoise AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Sharpen AI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Sharpen+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sharpen AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Photo AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Photo+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Photo AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "ImagenAI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=ImagenAI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ImagenAI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Aftershoot",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Aftershoot+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Aftershoot is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Evoto",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Evoto+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Evoto is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Imagen",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Imagen+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Imagen is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Radiant Photo",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Radiant+Photo+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Radiant Photo is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Retouch4me",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Retouch4me+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Retouch4me is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "DxO PureRAW",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=DxO+PureRAW+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DxO PureRAW is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Skylum Luminar",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Skylum+Luminar+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Skylum Luminar is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Photoleap",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Photoleap+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Photoleap is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Prisma",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Prisma+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Prisma is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Lensa",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Lensa+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lensa is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "FaceApp",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=FaceApp+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "FaceApp is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Remini",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Remini+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Remini is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "PhotoRoom Pro",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=PhotoRoom+Pro+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PhotoRoom Pro is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Pixelcut",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Pixelcut+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pixelcut is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Slazzer",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Slazzer+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Slazzer is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Erase.bg",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Erase.bg+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Erase.bg is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "BgSub",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=BgSub+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BgSub is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Magic Studio",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Magic+Studio+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Magic Studio is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Vectorizer.ai",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Vectorizer.ai+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vectorizer.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Vector Magic",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Vector+Magic+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vector Magic is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "SVGcode",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=SVGcode+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SVGcode is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Recraft Vector",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Recraft+Vector+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Recraft Vector is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Illustrator Text to Vector",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Illustrator+Text+to+Vector+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Illustrator Text to Vector is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Kittl",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Kittl+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kittl is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Designify",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Designify+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Designify is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Let's Enhance",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Let's+Enhance+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Let's Enhance is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Deep Image",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Deep+Image+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Deep Image is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Bigjpg",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Bigjpg+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Bigjpg is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Img.upscaler",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Img.upscaler+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Img.upscaler is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Upscale.media",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Upscale.media+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Upscale.media is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Nero AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Nero+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Nero AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "HitPaw Photo Enhancer",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=HitPaw+Photo+Enhancer+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "HitPaw Photo Enhancer is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "AVCLabs Photo Enhancer",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=AVCLabs+Photo+Enhancer+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AVCLabs Photo Enhancer is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Fotor Photo Enhancer",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Fotor+Photo+Enhancer+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fotor Photo Enhancer is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "BeFunky AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=BeFunky+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BeFunky AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "PicMonkey",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=PicMonkey+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PicMonkey is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Visme AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Visme+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Visme AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Snappa",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Snappa+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Snappa is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Picmaker",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Picmaker+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Picmaker is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "VistaCreate",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=VistaCreate+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "VistaCreate is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Polarr",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Polarr+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Polarr is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Photomator",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Photomator+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Photomator is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Pixelmator Pro AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Pixelmator+Pro+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pixelmator Pro AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Darkroom",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Darkroom+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Darkroom is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Lightroom AI Masking",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Lightroom+AI+Masking+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lightroom AI Masking is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Photoshop Generative Fill",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Photoshop+Generative+Fill+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Photoshop Generative Fill is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Photoshop Generative Expand",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Photoshop+Generative+Expand+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Photoshop Generative Expand is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Capture One AI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Capture+One+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Capture One AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Affinity Photo AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Affinity+Photo+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Affinity Photo AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "GIMP Resynthesizer",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=GIMP+Resynthesizer+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GIMP Resynthesizer is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Krita AI Diffusion",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Krita+AI+Diffusion+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Krita AI Diffusion is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Paint.NET AI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Paint.NET+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Paint.NET AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Chaotica",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Chaotica+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Chaotica is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Mandelbulb 3D",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Mandelbulb+3D+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mandelbulb 3D is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Meshy",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Meshy+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Meshy is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Tripo3D",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Tripo3D+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tripo3D is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Rodin 3D",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Rodin+3D+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Rodin 3D is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Luma Genie",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Luma+Genie+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Luma Genie is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "CSM 3D",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=CSM+3D+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CSM 3D is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Shap-E",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Shap-E+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Shap-E is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Point-E",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Point-E+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Point-E is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Spline AI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Spline+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Spline AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Sloyd.ai",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Sloyd.ai+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sloyd.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Masterpiece X",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Masterpiece+X+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Masterpiece X is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "3DFY.ai",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=3DFY.ai+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "3DFY.ai is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Alpha3D",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Alpha3D+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Alpha3D is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Kaedim",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Kaedim+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kaedim is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Mirage",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Mirage+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mirage is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Polycam AI",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Polycam+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Polycam AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Luma AI 3D",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Luma+AI+3D+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Luma AI 3D is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Scenario.gg",
    "category": "Image",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Scenario.gg+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Scenario.gg is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Rosebud AI",
    "category": "Image",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PNG",
      "JPG",
      "SVG",
      "WEBP"
    ],
    "documentation_url": "https://www.google.com/search?q=Rosebud+AI+image+ai",
    "trending_percent": 32,
    "best_for": [
      "Image Generation",
      "Photo Enhancement",
      "Design"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Rosebud AI is an AI tool for Image Generation, Photo Enhancement, Design."
  },
  {
    "name": "Runway",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Runway+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Runway is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Pika",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Pika+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pika is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Sora",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Sora+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sora is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Descript",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Descript+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Descript is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "CapCut",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=CapCut+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CapCut is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "HeyGen",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=HeyGen+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "HeyGen is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Synthesia",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Synthesia+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Synthesia is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "D-ID",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=D-ID+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "D-ID is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Colossyan",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Colossyan+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Colossyan is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Elai.io",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Elai.io+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Elai.io is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Veed.io",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Veed.io+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Veed.io is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "InVideo",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=InVideo+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "InVideo is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Pictory",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Pictory+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pictory is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Fliki",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Fliki+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fliki is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Steve.ai",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Steve.ai+video+ai",
    "trending_percent": 93,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Steve.ai is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Lumen5",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Lumen5+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lumen5 is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Flixier",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Flixier+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Flixier is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Kaiber",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Kaiber+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kaiber is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Kling AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Kling+AI+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kling AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Hailuo AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Hailuo+AI+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hailuo AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Luma Dream Machine",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Luma+Dream+Machine+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Luma Dream Machine is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Genmo Mochi",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Genmo+Mochi+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Genmo Mochi is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "CogVideoX",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=CogVideoX+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CogVideoX is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "AnimateDiff",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=AnimateDiff+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AnimateDiff is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Deforum",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Deforum+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Deforum is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Stable Video Diffusion",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Stable+Video+Diffusion+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Stable Video Diffusion is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Moonvalley",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Moonvalley+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Moonvalley is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Hotshot",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Hotshot+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hotshot is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Morph Studio",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Morph+Studio+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Morph Studio is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Haiper AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Haiper+AI+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Haiper AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Viggle AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Viggle+AI+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Viggle AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "DomoAI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=DomoAI+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DomoAI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "PixVerse",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=PixVerse+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PixVerse is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Vidu",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Vidu+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vidu is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "NeverEnds",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=NeverEnds+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "NeverEnds is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Sora Web",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Sora+Web+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sora Web is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Runway Gen-3 Alpha",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Runway+Gen-3+Alpha+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Runway Gen-3 Alpha is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Pika 2.0",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Pika+2.0+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pika 2.0 is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Luma Ray",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Luma+Ray+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Luma Ray is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Kuaishou Kling",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Kuaishou+Kling+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kuaishou Kling is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Tencent Hunyuan Video",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Tencent+Hunyuan+Video+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tencent Hunyuan Video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Wanx Video",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Wanx+Video+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wanx Video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "ByteDance Seaweed",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=ByteDance+Seaweed+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ByteDance Seaweed is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "DeepBrain AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=DeepBrain+AI+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DeepBrain AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Hour One",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Hour+One+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hour One is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Yepic AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Yepic+AI+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Yepic AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Tavus",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Tavus+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tavus is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Gan.ai",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Gan.ai+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Gan.ai is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Rephrase.ai",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Rephrase.ai+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Rephrase.ai is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "BHuman",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=BHuman+video+ai",
    "trending_percent": 63,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BHuman is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Vshot",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Vshot+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vshot is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Wonder Dynamics",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Wonder+Dynamics+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wonder Dynamics is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Move.ai",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Move.ai+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Move.ai is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "DeepMotion",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=DeepMotion+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "DeepMotion is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Plask",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Plask+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Plask is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Radical Motion",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Radical+Motion+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Radical Motion is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Rokoko Vision",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Rokoko+Vision+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Rokoko Vision is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Kinetix",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Kinetix+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kinetix is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Cascadeur",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Cascadeur+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cascadeur is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "EbSynth",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=EbSynth+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "EbSynth is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Topaz Video AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Topaz+Video+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Topaz Video AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "HitPaw Video Enhancer",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=HitPaw+Video+Enhancer+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "HitPaw Video Enhancer is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "AVCLabs Video Enhancer",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=AVCLabs+Video+Enhancer+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AVCLabs Video Enhancer is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Winxvideo AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Winxvideo+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Winxvideo AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "CapCut Pro AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=CapCut+Pro+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "CapCut Pro AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Premiere Pro Generative Extend",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Premiere+Pro+Generative+Extend+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Premiere Pro Generative Extend is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "DaVinci Resolve Magic Mask",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=DaVinci+Resolve+Magic+Mask+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "DaVinci Resolve Magic Mask is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Final Cut Pro AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Final+Cut+Pro+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Final Cut Pro AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "After Effects AI Roto Brush",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=After+Effects+AI+Roto+Brush+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "After Effects AI Roto Brush is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Filmora AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Filmora+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Filmora AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "CyberLink PowerDirector AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=CyberLink+PowerDirector+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CyberLink PowerDirector AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Movavi Video Editor AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Movavi+Video+Editor+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Movavi Video Editor AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Camtasia AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Camtasia+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Camtasia AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Screen Studio",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Screen+Studio+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Screen Studio is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Tella",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Tella+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tella is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Loom AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Loom+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Loom AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Vidyard AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Vidyard+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vidyard AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Dubverse",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Dubverse+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Dubverse is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Rask AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Rask+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Rask AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Papercup",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Papercup+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Papercup is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Maestra",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Maestra+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Maestra is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Speechify Video",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Speechify+Video+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Speechify Video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Lipdub AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Lipdub+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lipdub AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Sync Labs",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Sync+Labs+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sync Labs is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Captions.ai",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Captions.ai+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Captions.ai is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Submagic",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Submagic+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Submagic is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Opus Clip",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Opus+Clip+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Opus Clip is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Klap",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Klap+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Klap is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Munch",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Munch+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Munch is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Vizard",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Vizard+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vizard is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Vidyo.ai",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Vidyo.ai+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vidyo.ai is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Spikes Studio",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Spikes+Studio+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Spikes Studio is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "GlossAi",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=GlossAi+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GlossAi is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "2short.ai",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=2short.ai+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "2short.ai is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "QuickVid",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=QuickVid+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "QuickVid is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "AutoPod",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=AutoPod+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AutoPod is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Riverside Magic Clips",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Riverside+Magic+Clips+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Riverside Magic Clips is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Castmagic Video",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Castmagic+Video+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Castmagic Video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Headliner",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Headliner+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Headliner is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Wavve",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Wavve+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wavve is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Kamua",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Kamua+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kamua is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Zubtitle",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Zubtitle+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Zubtitle is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "VEED Subtitles",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=VEED+Subtitles+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "VEED Subtitles is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Kapwing AI",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Kapwing+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kapwing AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Clipchamp AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Clipchamp+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Clipchamp AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "FlexClip",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=FlexClip+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "FlexClip is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "WeVideo AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=WeVideo+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "WeVideo AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Renderforest",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Renderforest+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Renderforest is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Wave.video",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Wave.video+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wave.video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Moovly",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Moovly+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Moovly is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Vyond",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Vyond+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vyond is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Powtoon",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Powtoon+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Powtoon is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "VideoScribe",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=VideoScribe+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "VideoScribe is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Raw Shorts",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Raw+Shorts+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Raw Shorts is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Offeo",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Offeo+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Offeo is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Biteable",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Biteable+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Biteable is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Animoto",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Animoto+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Animoto is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Promo.com",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Promo.com+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "Promo.com is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Magisto",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Magisto+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Magisto is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Vidyard",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Vidyard+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vidyard is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Wistia AI",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Wistia+AI+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wistia AI is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Hippo Video",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Hippo+Video+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Hippo Video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Synthesys",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Synthesys+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Synthesys is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Steve AI Video",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Steve+AI+Video+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Steve AI Video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "VideoBolt",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=VideoBolt+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "VideoBolt is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Renderforest Video",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Renderforest+Video+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Renderforest Video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Moovly Studio",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Moovly+Studio+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Moovly Studio is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Animaker",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Animaker+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Animaker is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Toonly",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Toonly+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Toonly is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Doodly",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Doodly+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Doodly is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Explaindio",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Explaindio+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Explaindio is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Typeframes",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Typeframes+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Typeframes is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "VideoAsk",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=VideoAsk+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "VideoAsk is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "Fliki Video",
    "category": "Video",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=Fliki+Video+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fliki Video is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "InVideo Studio",
    "category": "Video",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP4",
      "MOV",
      "GIF"
    ],
    "documentation_url": "https://www.google.com/search?q=InVideo+Studio+video+ai",
    "trending_percent": 33,
    "best_for": [
      "Video Editing",
      "Generative Video",
      "Subtitles"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "InVideo Studio is an AI tool for Video Editing, Generative Video, Subtitles."
  },
  {
    "name": "ElevenLabs",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=ElevenLabs+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ElevenLabs is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Suno",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Suno+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Suno is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Udio",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Udio+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Udio is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Adobe Podcast",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Adobe+Podcast+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Adobe Podcast is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Murf.ai",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Murf.ai+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Murf.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "PlayHT",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=PlayHT+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PlayHT is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Resemble AI",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Resemble+AI+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Resemble AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Speechify",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Speechify+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Speechify is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Descript Overdub",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Descript+Overdub+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Descript Overdub is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Podcast.ai",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Podcast.ai+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Podcast.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "LALAL.AI",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=LALAL.AI+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LALAL.AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Moises.ai",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Moises.ai+audio+ai",
    "trending_percent": 91,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Moises.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Krisp",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Krisp+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Krisp is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Voicemod",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Voicemod+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Voicemod is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Soundraw",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Soundraw+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Soundraw is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "AIVA",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=AIVA+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AIVA is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Boomy",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Boomy+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Boomy is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Beatoven.ai",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Beatoven.ai+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Beatoven.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Mubert",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Mubert+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mubert is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Loudly",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Loudly+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Loudly is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Endel",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Endel+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Endel is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Brain.fm",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Brain.fm+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Brain.fm is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Amper Music",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Amper+Music+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Amper Music is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Splash Pro",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Splash+Pro+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Splash Pro is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Stable Audio",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Stable+Audio+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Stable Audio is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "AudioCraft",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=AudioCraft+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AudioCraft is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "MusicLM",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=MusicLM+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MusicLM is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Jukebox",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Jukebox+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Jukebox is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Suno v3",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Suno+v3+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Suno v3 is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Udio 130",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Udio+130+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Udio 130 is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Riffusion",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Riffusion+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Riffusion is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Soundful",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Soundful+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Soundful is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Voicemaker",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Voicemaker+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Voicemaker is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Narakeet",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Narakeet+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Narakeet is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "WellSaid Labs",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=WellSaid+Labs+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "WellSaid Labs is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "LOVO AI",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=LOVO+AI+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LOVO AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Replica Studios",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Replica+Studios+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Replica Studios is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Altered Studio",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Altered+Studio+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Altered Studio is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Respeecher",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Respeecher+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Respeecher is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "FakeYou",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=FakeYou+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "FakeYou is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Uberduck",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Uberduck+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Uberduck is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Kits.ai",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Kits.ai+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kits.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Weights.gg",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Weights.gg+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Weights.gg is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Voice.ai",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Voice.ai+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Voice.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Metavoice",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Metavoice+audio+ai",
    "trending_percent": 58,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Metavoice is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Coqui TTS",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Coqui+TTS+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Coqui TTS is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Piper TTS",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Piper+TTS+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Piper TTS is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Bark",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Bark+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Bark is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Tortoise TTS",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Tortoise+TTS+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Tortoise TTS is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "XTTS",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=XTTS+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "XTTS is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Whisper (OpenAI)",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Whisper+(OpenAI)+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Whisper (OpenAI) is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "WhisperX",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=WhisperX+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "WhisperX is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Insanely Fast Whisper",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Insanely+Fast+Whisper+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Insanely Fast Whisper is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Deepgram",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Deepgram+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Deepgram is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "AssemblyAI",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=AssemblyAI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AssemblyAI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Rev AI",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Rev+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Rev AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Speechmatics",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Speechmatics+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Speechmatics is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Otter.ai",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Otter.ai+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Otter.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Fireflies.ai",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Fireflies.ai+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fireflies.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Fathom",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Fathom+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fathom is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Grain",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Grain+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Grain is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Supernormal",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Supernormal+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Supernormal is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Fellow.app",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Fellow.app+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Fellow.app is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Jamie AI",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Jamie+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Jamie AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Krisp Meeting Assistant",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Krisp+Meeting+Assistant+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Krisp Meeting Assistant is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "MacWhisper",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=MacWhisper+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MacWhisper is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Whisper Web",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Whisper+Web+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Whisper Web is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Audiate",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Audiate+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Audiate is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Auphonic",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Auphonic+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Auphonic is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Cleanvoice AI",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Cleanvoice+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Cleanvoice AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Podcastle",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Podcastle+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Podcastle is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Riverside.fm",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Riverside.fm+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Riverside.fm is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Castmagic",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Castmagic+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Castmagic is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Swell AI",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Swell+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Swell AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Deciphr AI",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Deciphr+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Deciphr AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Capsho",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Capsho+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Capsho is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Podbean AI",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Podbean+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Podbean AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Buzzsprout AI",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Buzzsprout+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Buzzsprout AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Transistor AI",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Transistor+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Transistor AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Libsyn AI",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Libsyn+AI+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Libsyn AI is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Podsqueeze",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Podsqueeze+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Podsqueeze is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "AudioShake",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=AudioShake+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "AudioShake is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Splitter.ai",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Splitter.ai+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Splitter.ai is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "PhonicMind",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=PhonicMind+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PhonicMind is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "RipX DAW",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=RipX+DAW+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "RipX DAW is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "FL Studio Stem Separator",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=FL+Studio+Stem+Separator+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "FL Studio Stem Separator is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Logic Pro Stem Splitter",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Logic+Pro+Stem+Splitter+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Logic Pro Stem Splitter is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Serato Pitch 'n Time",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Serato+Pitch+'n+Time+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Serato Pitch 'n Time is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "iZotope RX 11",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=iZotope+RX+11+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "desktop",
    "free_tier_slide_limit": null,
    "description": "iZotope RX 11 is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Waves Clarity VX",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Waves+Clarity+VX+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Waves Clarity VX is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Accentize",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Accentize+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Accentize is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "LANDR Mastering",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=LANDR+Mastering+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "LANDR Mastering is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "eMastered",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=eMastered+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "eMastered is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "CloudBounce",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=CloudBounce+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "CloudBounce is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "BandLab Mastering",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=BandLab+Mastering+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "BandLab Mastering is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Sonible smart:EQ",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Sonible+smart:EQ+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Sonible smart:EQ is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Soundtheory Gullfoss",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Soundtheory+Gullfoss+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Soundtheory Gullfoss is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Oeksound Soothe2",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Oeksound+Soothe2+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Oeksound Soothe2 is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Baby Audio BA-1",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Baby+Audio+BA-1+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Baby Audio BA-1 is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Output Arcade",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Output+Arcade+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Output Arcade is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Steinberg SpectraLayers",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Steinberg+SpectraLayers+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Steinberg SpectraLayers is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Celemony Melodyne",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Celemony+Melodyne+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Celemony Melodyne is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Antares Auto-Tune Pro",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Antares+Auto-Tune+Pro+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Antares Auto-Tune Pro is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Soundtoys Little AlterBoy",
    "category": "Audio",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=Soundtoys+Little+AlterBoy+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Soundtoys Little AlterBoy is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "FabFilter Pro-Q 3",
    "category": "Audio",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free credits on signup",
    "export_formats": [
      "MP3",
      "WAV",
      "FLAC"
    ],
    "documentation_url": "https://www.google.com/search?q=FabFilter+Pro-Q+3+audio+ai",
    "trending_percent": 31,
    "best_for": [
      "Audio Processing",
      "Voice & Music",
      "Mastering"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "FabFilter Pro-Q 3 is an AI tool for Audio Processing, Voice & Music, Mastering."
  },
  {
    "name": "Gamma",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Gamma+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Gamma is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Beautiful.ai",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Beautiful.ai+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Beautiful.ai is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Canva Magic Presentations",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Canva+Magic+Presentations+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Canva Magic Presentations is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Pitch",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Pitch+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pitch is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Slidebean",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Slidebean+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Slidebean is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Decktopus",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Decktopus+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Decktopus is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Genially",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Genially+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Genially is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Prezi AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Prezi+AI+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Prezi AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "SlidesGPT",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=SlidesGPT+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "SlidesGPT is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "MagicSlides",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=MagicSlides+slides+ai",
    "trending_percent": 90,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "MagicSlides is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Plus AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Plus+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Plus AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Deckrobot",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Deckrobot+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Deckrobot is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Storydoc",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Storydoc+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Storydoc is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Qortex",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Qortex+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Qortex is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Sendsteps",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Sendsteps+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Sendsteps is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Presentations.AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Presentations.AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Presentations.AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Chronicle",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Chronicle+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Chronicle is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Wepik Presentations",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Wepik+Presentations+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wepik Presentations is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "SlidesAI.io",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=SlidesAI.io+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "SlidesAI.io is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "PopAi",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=PopAi+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PopAi is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Visme Presentations",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Visme+Presentations+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Visme Presentations is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Simplified AI Presentations",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Simplified+AI+Presentations+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Simplified AI Presentations is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Zoho Show AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Zoho+Show+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Zoho Show AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Google Slides Duet AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Google+Slides+Duet+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Google Slides Duet AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Microsoft Copilot for PowerPoint",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Microsoft+Copilot+for+PowerPoint+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Microsoft Copilot for PowerPoint is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Mentimeter AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Mentimeter+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Mentimeter AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "AhaSlides",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=AhaSlides+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "AhaSlides is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Slido AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Slido+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Slido AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Wooclap AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Wooclap+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Wooclap AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Kahoot AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Kahoot+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Kahoot AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Quizizz AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Quizizz+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Quizizz AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Vev",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Vev+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Vev is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Webflow Sliders AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Webflow+Sliders+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Webflow Sliders AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Keynote AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Keynote+AI+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Keynote AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Apple Keynote",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Apple+Keynote+slides+ai",
    "trending_percent": 55,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Apple Keynote is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Haiku Deck",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Haiku+Deck+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Haiku Deck is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Slidecamp",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Slidecamp+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Slidecamp is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "SlideTeam",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=SlideTeam+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SlideTeam is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "SlideModel",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=SlideModel+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "SlideModel is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "SketchBubble",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=SketchBubble+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SketchBubble is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Slidesgo",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Slidesgo+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Slidesgo is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "SlidesCarnival",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=SlidesCarnival+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "SlidesCarnival is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "PoweredTemplate",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=PoweredTemplate+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "PoweredTemplate is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "PresentationLoad",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=PresentationLoad+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "PresentationLoad is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Envato Elements Slides",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Envato+Elements+Slides+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Envato Elements Slides is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "GraphicRiver Templates",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=GraphicRiver+Templates+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "GraphicRiver Templates is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Canva Pro Presentations",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Canva+Pro+Presentations+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Canva Pro Presentations is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Pitch.com Team",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Pitch.com+Team+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Pitch.com Team is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Gamma App Pro",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Gamma+App+Pro+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Gamma App Pro is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Decktopus AI Pro",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Decktopus+AI+Pro+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Decktopus AI Pro is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Sendsteps.ai",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Sendsteps.ai+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Sendsteps.ai is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Slidebean Pitch Deck",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Slidebean+Pitch+Deck+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Slidebean Pitch Deck is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Knovio",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Knovio+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Knovio is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Brainshark",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Brainshark+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Brainshark is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Showpad",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Showpad+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Showpad is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Highspot",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Highspot+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Highspot is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Seismic",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Seismic+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Seismic is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "ClearSlide",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=ClearSlide+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ClearSlide is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "MindTickle",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=MindTickle+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "MindTickle is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Allego",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Allego+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Allego is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Eduflow AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Eduflow+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Eduflow AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Teachfloor",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Teachfloor+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Teachfloor is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Thinkific AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Thinkific+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Thinkific AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Teachable AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Teachable+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Teachable AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Kajabi AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Kajabi+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Kajabi AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Coursera AI Course Builder",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Coursera+AI+Course+Builder+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Coursera AI Course Builder is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "edX AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=edX+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "edX AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "ClassMarker AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=ClassMarker+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "ClassMarker AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "TestGorilla AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=TestGorilla+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "TestGorilla AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Codility Slides",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Codility+Slides+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Codility Slides is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "HackerRank Presentation",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=HackerRank+Presentation+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "HackerRank Presentation is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Miro AI Assist",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Miro+AI+Assist+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Miro AI Assist is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Mural AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Mural+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Mural AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Lucidspark AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Lucidspark+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Lucidspark AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "FigJam AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=FigJam+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "FigJam AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Whimsical AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Whimsical+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Whimsical AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Creately AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Creately+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "Creately AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Boardmix",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Boardmix+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Boardmix is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "EdrawMax AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=EdrawMax+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "EdrawMax AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "XMind AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=XMind+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "XMind AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "MindMeister AI",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=MindMeister+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "MindMeister AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Coggle AI",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Coggle+AI+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Coggle AI is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "GitMind",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=GitMind+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "GitMind is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "Wondershare EdrawMind",
    "category": "Presentations",
    "pricing": "paid",
    "signup_required": true,
    "free_tier_limits": "",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=Wondershare+EdrawMind+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": null,
    "description": "Wondershare EdrawMind is an AI tool for Decks, Visual Slides, Presentations."
  },
  {
    "name": "MindNode",
    "category": "Presentations",
    "pricing": "freemium",
    "signup_required": true,
    "free_tier_limits": "Free basic slides",
    "export_formats": [
      "PDF",
      "PPTX"
    ],
    "documentation_url": "https://www.google.com/search?q=MindNode+slides+ai",
    "trending_percent": 30,
    "best_for": [
      "Decks",
      "Visual Slides",
      "Presentations"
    ],
    "type": "web",
    "free_tier_slide_limit": 5,
    "description": "MindNode is an AI tool for Decks, Visual Slides, Presentations."
  }
];
