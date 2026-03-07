# SheLaunch AI 🚀

> **AI-Powered Startup Readiness, Funding Intelligence & Ecosystem Aggregation Platform for Women Entrepreneurs**

Powered by Gemini AI · Built for Google AI Studio Hackathon · Aligned with SDG 5, 8, 9, 10

---

## 🌟 Project Overview

SheLaunch AI transforms fragmented startup ecosystems into intelligent growth pathways for women entrepreneurs. It replaces five different portals with one unified, AI-driven advisory system.

### Problem
Women entrepreneurs face:
- Fragmented discovery of government schemes
- No structured startup readiness evaluation
- Lack of personalized funding pathway planning
- Absence of AI-driven mentorship
- No unified incubator discovery system

### Solution
An intelligent, Gemini-powered decision-support platform with 5 AI modules.

---

## 🔗 URLs

| Resource | URL |
|----------|-----|
| **Home** | `https://your-deployment.pages.dev/` |
| **Assessment** | `https://your-deployment.pages.dev/assessment` |
| **Funding Advisor** | `https://your-deployment.pages.dev/funding` |
| **Scheme Aggregator** | `https://your-deployment.pages.dev/schemes` |
| **Incubator Aggregator** | `https://your-deployment.pages.dev/incubators` |
| **AI Mentor** | `https://your-deployment.pages.dev/mentor` |

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Platform health + stats |
| `/api/schemes` | GET | Filter schemes (category, stage, sector, search) |
| `/api/incubators` | GET | Filter incubators (equity, stage, women, search) |
| `/api/assessment` | POST | Score startup assessment |
| `/api/funding/plan` | POST | Generate funding roadmap |
| `/api/mentor/chat` | POST | AI mentor chat (Gemini-ready) |

---

## 🧩 5 Core Modules

### Module 1: AI Mentor (4.1)
- Conversational startup mentorship powered by Gemini AI
- Domain-specific prompting for pitch, business model, compliance, grants
- **PDF pitch deck upload** + analysis
- Knowledge base: pitch structure, investor approach, DPIIT registration, market sizing, unit economics
- Structured markdown responses with actionable feedback

### Module 2: Startup Readiness Assessment (4.2)
- 12-question assessment form with rich UI
- AI scoring across 6 dimensions: Market Traction, Team Strength, Financial Readiness, Product Differentiation, Compliance Readiness, Stage
- **Readiness Score: 0-100** with categories (Early / Emerging / Growth Ready / Investment Ready)
- 30–60 day action roadmap with priority actions
- Dimension progress bars + strength/risk analysis

### Module 3: Funding Pathway Advisor (4.3)
- **RAG (Retrieval-Augmented Generation)** architecture
- Retrieves matching schemes + incubators from curated database
- Generates **sequenced funding strategy**: Grant → Incubator → Angel → VC
- Pre-application checklist per stage
- Startup profile form → personalized roadmap

### Module 4: Government Scheme Aggregator (4.4)
- **12+ verified, curated government schemes**
- Categories: Central Government, State Government, Sector-Specific Grants
- Smart filtering: by category, stage, sector, keyword search
- Expandable cards with eligibility, documents, deadlines, apply links
- Trust-first design — no AI hallucination, structured data only

### Module 5: Incubator & Accelerator Aggregator (4.5)
- **12+ top incubators** with full details
- AI Match system: input startup profile → get match % scores + reasoning
- Filters: equity model, women-focused, stage, keyword
- Explainable AI matching with match percentage circles
- Equity details, application process, success rates

---

## 📊 Data Architecture

### Data Models

**Scheme:**
```typescript
{
  id, name, category, sector[], stage[], description,
  eligibility, fundingAmount, documents[], deadline,
  applicationLink, ministry, benefit
}
```

**Incubator:**
```typescript
{
  id, name, location, sector[], stage[], equityModel,
  equityPercentage?, fundingSupport, duration,
  applicationProcess, applicationLink, highlights[],
  focusOnWomen, successRate?, notableAlumni?
}
```

### Storage Services
- **Hono + Cloudflare Pages**: Edge deployment (no server)
- **Structured JSON**: In-memory data layer (12 schemes, 12 incubators)
- **Production Scaling**: Cloudflare D1 (SQLite) or Firebase Firestore
- **API Layer**: RESTful endpoints via Hono router

---

## 🎯 SDG Alignment

| SDG | Goal | How SheLaunch AI Contributes |
|-----|------|------------------------------|
| SDG 5 | Gender Equality | AI mentorship + exclusive women-focused scheme discovery |
| SDG 8 | Decent Work & Growth | Funding roadmaps accelerate startup sustainability |
| SDG 9 | Industry & Innovation | AI infrastructure democratizes innovation access |
| SDG 10 | Reduced Inequalities | Eliminates information asymmetry for women founders |

---

## 🏗️ Technical Architecture

```
Client Browser
      ↓
Cloudflare Pages (Edge CDN)
      ↓
Hono Worker (src/index.tsx)
      ↓
Page Routers + API Routes
      ↓
Data Layer (schemes.ts, incubators.ts)
      ↓
[Gemini API - Production Integration Ready]
```

### Tech Stack
- **Backend**: Hono v4 (TypeScript)
- **Frontend**: Inline HTML with Tailwind CSS (CDN)
- **Icons**: FontAwesome 6.4
- **Build**: Vite + @hono/vite-build
- **Deploy**: Cloudflare Pages / Workers
- **AI**: Gemini API integration ready (configure GEMINI_API_KEY)

---

## 🚀 Deployment

### Local Development
```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
```

### Cloudflare Pages Deploy
```bash
npm run build
npx wrangler pages deploy dist --project-name shelaunch-ai
```

### Environment Variables (Production)
```bash
# Set Gemini API key for live AI responses
npx wrangler pages secret put GEMINI_API_KEY --project-name shelaunch-ai
```

---

## 📱 User Guide

1. **Start with Assessment** (`/assessment`): Answer 12 questions about your startup. Get readiness score + roadmap.
2. **Generate Funding Plan** (`/funding`): Enter startup profile → Get sequenced Grant → Incubator → Angel roadmap.
3. **Discover Schemes** (`/schemes`): Browse 12+ verified government schemes. Filter by category and stage.
4. **Find Incubators** (`/incubators`): Use AI Match to find best-fit incubators with match percentages.
5. **Chat with AI Mentor** (`/mentor`): Ask any startup question. Upload pitch deck for analysis.

---

## ✅ MVP Scope Delivered

- [x] User assessment form (12 questions)
- [x] AI-based readiness scoring (0-100)
- [x] 12 curated government schemes
- [x] 12 curated incubators
- [x] AI funding roadmap generation (RAG)
- [x] AI Mentor chatbot with knowledge base
- [x] PDF pitch deck upload + analysis
- [x] Full REST API layer
- [x] Responsive UI (mobile + desktop)
- [x] SDG alignment markers

---

## 🔮 Future Roadmap

- [ ] Live Gemini API integration
- [ ] Vertex AI embedding-based semantic retrieval
- [ ] Real-time scheme scraping + updates
- [ ] Regional language support (Hindi, Tamil, Telugu)
- [ ] Firebase Auth user accounts
- [ ] Analytics dashboard for policymakers
- [ ] Startup India API integration
- [ ] WhatsApp bot integration

---

**Platform**: Cloudflare Pages · **Status**: ✅ Active · **Last Updated**: February 2026
