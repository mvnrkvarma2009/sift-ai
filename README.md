# Sift — Daily Intelligence & Deterministic Verification for Builders

> A production-grade AI requirement extraction and deterministic verification engine built as a professional monorepo. Sift eliminates AI tool hype by transforming fuzzy natural language requirements into strict constraint ASTs evaluated against benchmarked capability rules.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-green)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16%2B-blue)](https://www.postgresql.org/)
[![Google Gemini](https://img.shields.io/badge/Gemini-2.0%20Flash-orange)](https://aistudio.google.com/)

---

## 🏛️ System Architecture

```
sift/
├── frontend/                     # React 18 + Vite + TailwindCSS + Framer Motion
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ui/               # Button, Card, Input, Badge, Skeleton
│   │   │   ├── layout/           # Navbar, Sidebar, Footer, Layout
│   │   │   ├── brand/            # SiftLogo, ThemeToggle
│   │   │   ├── landing/          # Hero, ProductShowcase, VerificationEngine, FeedPreview, etc.
│   │   │   ├── dashboard/        # FeedList, FeedCard, QueryInput, TrendingTools, MarketPulse
│   │   │   ├── verification/     # QueryResult, ToolVerdictCard, RuleRow, RequirementPills, AuditTimeline
│   │   │   └── common/           # ProtectedRoute, SectionReveal, SmoothScroll
│   │   ├── context/              # AuthContext, ThemeProvider
│   │   ├── hooks/                # useAuth, useReducedMotion
│   │   ├── lib/                  # api.ts, utils.ts
│   │   ├── pages/                # Landing, Login, Register, Dashboard, Query, Result, Audit, Tools, Discover, Profile, NotFound
│   │   ├── routes/               # AppRouter.tsx
│   │   ├── styles/               # index.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vercel.json               # Vercel deployment spec
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
├── backend/                      # Production Express + TypeScript + PostgreSQL backend
│   ├── src/
│   │   ├── config/               # env.ts (runtime secret validation guard)
│   │   ├── controllers/          # authController, feedController, toolsController, queriesController, auditController, dashboardController
│   │   ├── middleware/           # auth, errorHandler, validate, rateLimit, sanitizer
│   │   ├── models/               # User, FeedItem, Tool, Query, Verification, RuleEvaluation, AuditLog
│   │   ├── routes/               # authRoutes, feedRoutes, toolsRoutes, queriesRoutes, auditRoutes, dashboardRoutes, adminRoutes
│   │   ├── services/             # geminiService, ruleEngine, auditService, tavilyService
│   │   ├── schemas/              # zodSchemas (strict runtime payload validation)
│   │   ├── jobs/                 # dailyUpdate (6 AM UTC cron + on-demand refresh)
│   │   ├── db/
│   │   │   ├── pool.ts           # Resilient PostgreSQL pool + zero-downtime memory adapter
│   │   │   ├── migrate.ts        # Schema migration runner
│   │   │   ├── migrations/       # 001_initial_schema.sql
│   │   │   └── seed/             # seedTools.ts (61 real tools across 8 categories, 20 news items)
│   │   ├── utils/                # jwt.ts, bcrypt.ts
│   │   └── index.ts              # Express entrypoint with Helmet, CORS, and Sanitizer
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
├── render.yaml                   # Render web service blueprint
├── .gitignore                    # Monorepo git hygiene
├── LICENSE                       # MIT License
└── README.md                     # Comprehensive documentation
```

---

## 🔒 Security Best Practices & Audit Report

| Security Control | Implementation Standard | Status |
| :--- | :--- | :--- |
| **Password Hashing** | bcrypt with 10 salt rounds | ✅ PASSED |
| **Response Sanitization** | `responseSanitizer` middleware strips `password_hash`, `api_key`, `secret`, `token` | ✅ PASSED |
| **JWT Tokens** | HS256 algorithm, 7-day expiration, payload restricted to `{ userId, email }` | ✅ PASSED |
| **Secret Isolation** | Zero API keys in frontend code; all `.env` files untracked in `.gitignore` | ✅ PASSED |
| **Fail-Fast Runtime Guard** | `backend/src/config/env.ts` halts boot if required secrets are missing | ✅ PASSED |
| **SQL Injection Prevention** | 100% parameterized queries (`$1, $2`) across all database operations | ✅ PASSED |
| **Rate Limiting** | Auth Login: 5/15m; Auth Register: 3/1h; Queries: 20/1h per user | ✅ PASSED |
| **HTTP Security Headers** | Helmet.js configured with strict CSP, X-Frame-Options, X-Content-Type-Options | ✅ PASSED |
| **CORS Restriction** | Origin whitelisted to `FRONTEND_URL` with credentials allowed | ✅ PASSED |
| **Audit Trail** | All logins, registrations, query submissions, and rule executions logged to `audit_logs` | ✅ PASSED |

---

## 🤖 Verification Engine Workflow

1. **Natural Language Ingestion**: User enters unstructured prompt (e.g. *"I need a free coding assistant in VS Code with TypeScript"*).
2. **Gemini 2.0 Flash Extraction**: Extracts structured AST conforming strictly to `RequirementSchema` (with Groq and heuristic fallback pipelines).
3. **Zod Validation**: Validates extracted constraints (`budget`, `signup_required`, `export_format`, `slide_count`, `task_type`).
4. **Deterministic Rule Engine**: Runs 5 immutable rules against 60+ verified tool profiles:
   - `budget_check`: Evaluates free vs freemium vs paid.
   - `signup_check`: Verifies whether account registration is enforced.
   - `export_format_check`: Validates format capabilities (PDF, PPTX, MP4, etc.).
   - `slide_count_check`: Validates free tier quota limits.
   - `category_check`: Confirms alignment between task type and tool category.
5. **Verdict Computation**: Categorizes tool outcomes into `MEETS_REQUIREMENTS`, `PARTIALLY_MEETS`, or `DOES_NOT_MEET`.
6. **Immutable Ledger & Audit Log**: Saves query record, tool verifications, and rule evaluations into PostgreSQL.

---

## 🛠️ REST API Reference

### Authentication (`/api/auth`)
- `POST /api/auth/register` — Register new user (Rate limit: 3/hour/IP).
- `POST /api/auth/login` — Authenticate and receive 7-day JWT (Rate limit: 5/15min/IP).
- `GET /api/auth/me` — Retrieve current authenticated profile (JWT required).

### Intelligence Feed (`/api/feed`)
- `GET /api/feed` — Retrieve feed items with search, category filtering (`AI`, `STARTUP`, `TECH`, `FUNDING`), and pagination (JWT required).
- `POST /api/feed` — Post an intelligence brief (JWT required).

### Verified Tools Catalog (`/api/tools`)
- `GET /api/tools` — List tools sorted by `trending_percent DESC` by default with category filters (JWT required).
- `GET /api/tools/trending` — Top 8 trending AI tools (JWT required).
- `GET /api/tools/:id` — Retrieve full tool profile and specifications (JWT required).

### Query Verification Engine (`/api/queries`)
- `POST /api/queries` — Submit task description, execute Gemini extraction + 5-rule engine (Rate limit: 20/hour/user, JWT required).
- `GET /api/queries` — List user's historical queries (JWT required).
- `GET /api/queries/:id` — Retrieve query results, extracted requirements, and rule evaluations (JWT required).

### Audit Trail (`/api/audit`)
- `GET /api/audit` — List human-readable audit events (JWT required).
- `GET /api/audit/:queryId` — Get full audit log for a specific query (JWT required).

### Dashboard & Automation (`/api/dashboard` & `/api/admin`)
- `GET /api/dashboard/stats` — Summary metrics (total queries, verified tools, active feed items).
- `POST /api/admin/refresh` — Manually trigger auto-update pipeline (Tavily news & new tool discovery).

---

## 🔄 Daily Auto-Update Pipeline

- **Scheduled Execution**: `node-cron` runs automatically every morning at **6:00 AM UTC** (`0 6 * * *`).
- **Live Search**: Uses `@tavily/core` to fetch the latest breaking AI news and discover newly launched tools.
- **Fail-Safe Fallback**: Resilient fallback to Groq Llama 3.3 for synthesis if external news rate limits occur.
- **Judge & Demo Trigger**: The Feed dashboard UI features a **"Refresh now"** button next to the **"Today"** headline which triggers `POST /api/admin/refresh` and updates the feed live.

---

## 🚀 Quickstart & Local Setup

### 1. Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### 2. Environment Configuration
Copy `.env.example` in both subprojects:
```bash
# In backend/
cp .env.example .env

# In frontend/
cp .env.example .env
```

Fill in required keys in `backend/.env`:
- `DATABASE_URL` (PostgreSQL connection string or Supabase pooler)
- `GEMINI_API_KEY` (Google AI Studio)
- `JWT_SECRET` (Minimum 32 random characters)
- `TAVILY_API_KEY` (Tavily search API)

### 3. Run Migrations & Seed Tools
```bash
# Seed 61 tools across 8 categories + 20 news items
npm run seed
```

### 4. Start Development Servers
From the root workspace:
```bash
# Terminal 1: Backend (Port 5000)
npm run dev:backend

# Terminal 2: Frontend (Port 3000)
npm run dev:frontend
```

---

## 🌐 Production Deployment

### Backend (Render)
`render.yaml` is pre-configured:
1. Connect repository to [Render](https://render.com).
2. Set root directory to `backend`.
3. Set Build Command: `npm install && npm run build`.
4. Set Start Command: `npm start`.
5. Provide environment variables (`DATABASE_URL`, `GEMINI_API_KEY`, `JWT_SECRET`, `FRONTEND_URL`).

### Frontend (Vercel)
`frontend/vercel.json` is pre-configured:
1. Connect repository to [Vercel](https://vercel.com).
2. Set root directory to `frontend`.
3. Set environment variable: `VITE_API_BASE_URL=https://sift-backend.onrender.com`.
4. Deploy.

---

## 📄 License
Licensed under the [MIT License](LICENSE).
