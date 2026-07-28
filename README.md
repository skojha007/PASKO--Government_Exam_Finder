<div align="center">

<img src="public/pasko-logo.svg" alt="PASKO Government Exam Finder" width="420">

# PASKO — Government Exam Finder

A calm, notice-board style index of Indian government exam notifications —
sorted by what is **open now**, **opening in 30 days**, or **recently closed**.

[Features](#features) · [Tech Stack](#tech-stack) · [Screenshots](#screenshots) · [Getting Started](#getting-started) · [Deploy on Vercel](#deploy-on-vercel) · [Project Structure](#project-structure) · [Data Model](#data-model) · [Roadmap](#roadmap) · [Disclaimer](#disclaimer)

</div>

---

## Overview

PASKO is an independent notice board that aggregates publicly available
Indian government recruitment notifications from official sources — UPSC,
State Public Service Commissions, SSC, state police recruitment boards,
teacher eligibility boards, Railway Recruitment Boards, and banking
recruiters like IBPS and SBI.

Instead of a long, undifferentiated list, PASKO groups every exam into
three simple buckets so aspirants can quickly see what to act on this week:

| Bucket | Meaning |
| --- | --- |
| **Open Now** | Application forms accepting submissions today |
| **Opening in 30 Days** | Forms expected to open in the next 30 days |
| **Closed Recently** | Forms that closed in the last 30 days |

Every card links back to its **official source** so the final dates and
eligibility can be verified before applying.

> **Note:** The dates shipped in `lib/exams-data.ts` are **sample
> placeholders** intended to demonstrate the layout. They are not live data
> and must be replaced by a real feed (official notifications / an editorial
> pipeline) before production use. See the [Data Model](#data-model) and
> [Roadmap](#roadmap) sections.

## Features

- **State-scoped notice board** — pick any of 28 states + 8 union
  territories (or an "All India" view for central exams). Central exams
  always appear alongside the selected state's own notifications.
- **Three-bucket board** — exams auto-sort into *Open Now*, *Opening in
  30 Days*, and *Closed Recently* based on the current date, with live
  day counters ("Closes 24 Jul 2026 · 3d left").
- **Search & category filters** — full-text search across exam name, body,
  and description, plus one-click category toggles (UPSC, State PCS, SSC,
  Police, Teacher, Railways, Banking, Other).
- **Eligibility dialog** — each card opens a detail dialog with minimum
  education, age limits, and domicile requirements, plus a link to the
  official notification.
- **Remembered state** — your selected state is saved in `localStorage`, so
  you return to your board on the next visit.
- **Gazette-inspired design** — paper-grain background, perforated
  admit-card dividers, an original circular seal wordmark, and a
  saffron/ink/seal-green palette that evokes an official notice board
  without using any real government emblem.
- **Responsive & accessible** — mobile-first layout, keyboard focus rings,
  ARIA labels, and a `prefers-reduced-motion` path that disables animation.
- **About page** — `/about` explains what PASKO does, its update cadence,
  and its independence from any government body.

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 13](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + CSS custom properties |
| UI primitives | [shadcn/ui](https://ui.shadcn.com/) components (Dialog, Badge, Button, Checkbox, …) |
| Icons | [lucide-react](https://lucide.dev/) |
| Fonts | Inter (sans), JetBrains Mono (mono), Fraunces (display serif) via `next/font` |
| Hosting | [Vercel](https://vercel.com/) (zero-config) |

No backend or database is required for the current sample-data build — all
data lives in `lib/exams-data.ts` and sorting happens client-side.

## Screenshots

> Screens coming soon. Run `npm run dev` to see the board live, or open the
> deployed preview on Vercel after your first push.

## Getting Started

### Prerequisites

- Node.js **18.17+** (required by Next.js 13)
- npm (ships with Node) — or pnpm/yarn if you prefer

### Install & run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The app is available at **http://localhost:3000**.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Serve the production build locally
npm run lint    # Run ESLint
```

## Deploy on Vercel

This project is configured for zero-config Vercel deployment. A minimal
`vercel.json` is included that sets the framework to `nextjs`; Vercel
auto-detects the build command (`next build`) and output directory.

### Option A — One-click via the Vercel dashboard

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel detects Next.js automatically — keep the defaults and click
   **Deploy**.
4. Your site is live on a `*.vercel.app` URL within a minute. Add a custom
   domain later under **Project → Settings → Domains**.

### Option B — Via the Vercel CLI

```bash
# Install the Vercel CLI (one time)
npm i -g vercel

# From the project root
vercel        # Preview deployment (creates a unique URL)
vercel --prod # Production deployment (uses your production domain)
```

### Environment variables

The current sample-data build needs **no environment variables**. When you
later wire PASKO to a live data source (an API route, Supabase, etc.), add
the required keys under **Project → Settings → Environment Variables** in
the Vercel dashboard and redeploy.

### Build notes

- `next.config.js` sets `eslint.ignoreDuringBuilds: true` so lint warnings
  never block a deploy, and `images.unoptimized: true` so the Next.js
  image optimizer is disabled (handy for static hosting / previews).
- No `@netlify/plugin-nextjs` dependency or `netlify.toml` remains — the
  repo is Vercel-only.

## Project Structure

```
.
├── app/
│   ├── about/page.tsx        # About page (what PASKO is, update cadence, disclaimer)
│   ├── globals.css           # Gazette palette + paper-grain + components
│   ├── layout.tsx            # Root layout, fonts, metadata
│   └── page.tsx              # Home: state picker → notice board
├── components/
│   ├── exam-board.tsx        # Three-column Open / Opening / Closed board
│   ├── exam-card.tsx         # Single notice card + eligibility dialog
│   ├── filter-bar.tsx        # Search input + category checkboxes
│   ├── pasko-header.tsx      # Top header with seal, state switch, About link
│   ├── pasko-seal.tsx        # Original circular SVG seal/wordmark
│   ├── state-selector.tsx    # State/UT picker screen
│   └── ui/                   # shadcn/ui primitives (dialog, badge, button, …)
├── lib/
│   ├── exams-data.ts         # Exam type + SAMPLE seed data (replace before production)
│   ├── exam-utils.ts         # Status calc, date formatting, state-relevance helpers
│   └── states.ts             # 28 states + 8 UTs + "All India" option
├── public/
│   └── pasko-logo.svg        # Logo used in this README
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json               # Vercel framework hint
```

## Data Model

Each exam is a typed object in `lib/exams-data.ts`:

```ts
interface Exam {
  id: string;                 // stable slug, e.g. "ssc-cgl-2026"
  name: string;               // full exam name
  body: string;               // recruiting organisation
  category: ExamCategory;     // UPSC | State PCS | SSC | Police | Teacher | Railways | Banking | Other
  description: string;
  scope: 'central' | 'state'; // central = shown for every state
  states: string[];           // state codes this exam applies to (empty for central)
  openDate: string;           // ISO YYYY-MM-DD — form opens
  closeDate: string;          // ISO YYYY-MM-DD — form closes
  possible?: boolean;         // speculative opening date → rendered "(possible)"
  officialUrl: string;        // link to the official notification
  eligibility: {
    education: string;
    age: string;
    domicile?: string;
  };
}
```

Status logic lives in `lib/exam-utils.ts`:

- `t < openDate` and `openDate − t ≤ 30d` → **opening**
- `t < openDate` and `> 30d` away → *upcoming* (not shown on the board)
- `openDate ≤ t ≤ end-of-closeDate` → **open**
- closed `≤ 30d` ago → **closed**
- closed `> 30d` ago → *archived* (not shown on the board)

To swap in real data, replace the `EXAMS` array (or load it from an API
route / Supabase / a CMS) while keeping the same `Exam` shape — no UI
changes are needed.

## Roadmap

- [ ] Replace sample data with a real editorial feed / official RSS pipeline
- [ ] Move exam data into Supabase with an admin update flow
- [ ] Email/Telegram reminders before a saved exam's form opens
- [ ] Per-exam detail page with full notification PDF link
- [ ] Saved/shortlisted exams (per-user, requires auth)
- [ ] Exam calendar view (month grid) alongside the notice board

## Disclaimer

PASKO is an **independent tool for aspirants**. It is not affiliated with,
endorsed by, or an official channel of any government body. It does not
reproduce any official government emblem — the PASKO seal is an original
wordmark designed for this site.

Dates shown are periodically-updated placeholders and may not reflect live
notifications. **Always verify final dates and eligibility on the official
source linked on each card before applying.**

## License

Released under the MIT License — see the repository for details. The PASKO
seal and wordmark are original artwork for this project.
