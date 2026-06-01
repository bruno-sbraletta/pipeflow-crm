# PipeFlow CRM — Engineering Briefing

## Project

PipeFlow CRM is a multi-tenant SaaS CRM for small businesses, freelancers, and sales teams.  
Full PRD: [docs/PRD.md](docs/PRD.md)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS + shadcn/ui |
| Database + Auth | Supabase (PostgreSQL + RLS + Auth) |
| Payments | Stripe (Checkout + Webhooks + Customer Portal) |
| Email | Resend |
| Drag-and-drop | @dnd-kit |
| Charts | Recharts |
| Deploy | Vercel (frontend) + Supabase (backend/DB) |

## Folder Structure (target)

```
/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Login, register, invite flows
│   ├── (app)/                  # Authenticated app shell
│   │   ├── dashboard/          # Metrics + funnel chart
│   │   ├── pipeline/           # Kanban board
│   │   ├── leads/              # Lead list + detail pages
│   │   └── settings/           # Workspace settings, billing, members
│   ├── (landing)/              # Public landing page
│   └── api/                    # API routes + Stripe webhooks
├── components/
│   ├── ui/                     # shadcn/ui primitives (auto-generated)
│   ├── kanban/                 # Pipeline board components
│   ├── leads/                  # Lead cards, detail, activity timeline
│   └── shared/                 # Layout, sidebar, navbar, workspace switcher
├── lib/
│   ├── supabase/               # Supabase client (server + client)
│   ├── stripe/                 # Stripe helpers
│   └── utils.ts                # Shared utilities
├── types/                      # Global TypeScript types
├── supabase/
│   ├── migrations/             # SQL schema migrations
│   └── functions/              # Edge Functions (e.g. stripe webhooks)
└── docs/
    └── PRD.md                  # Full product requirements document
```

## Key Conventions

- **Server Components by default** — use `"use client"` only when needed (interactivity, hooks, dnd)
- **RLS enforced on every table** — all data access scoped by `workspace_id` via Supabase RLS policies
- **Multi-tenant isolation** — every DB table has a `workspace_id` FK; never expose cross-workspace data
- **API Routes** live in `app/api/`; prefer Server Actions for mutations where possible
- **Stripe webhooks** handled via a Supabase Edge Function at `/supabase/functions/stripe-webhook/`
- **Environment variables** — all secrets in `.env.local`; never commit secrets
- **shadcn/ui** components are added via `npx shadcn@latest add <component>`, never hand-rolled
- **TypeScript strict mode** — no `any`, explicit return types on all exported functions
- **Commit style** — `feat:`, `fix:`, `chore:`, `refactor:` prefixes; small, focused commits

## Data Model (high-level)

```
workspaces        → id, name, plan (free|pro), stripe_customer_id
workspace_members → workspace_id, user_id, role (admin|member)
leads             → id, workspace_id, name, email, phone, company, job_title, status, owner_id
deals             → id, workspace_id, lead_id, title, value, stage, owner_id, due_date
activities        → id, workspace_id, lead_id, author_id, type (call|email|meeting|note), description, created_at
```

## Plans & Limits

| Feature | Free | Pro (R$49/mês) |
|---------|------|----------------|
| Collaborators | 2 | Unlimited |
| Leads | 50 | Unlimited |
| Workspaces | 1 | Unlimited |

## Design Language

- Inspired by **Pipedrive** (pipeline UX) and **HubSpot** (clean dashboard)
- Color palette: neutral grays + strong blue primary (`blue-600`)
- Typography: Inter (system font via Tailwind)
- Kanban cards: compact, `shadow-sm`, `rounded-lg`, status color-coded
- Sidebar: collapsible, workspace switcher at top, nav items with Lucide icons
- Dark mode: optional, not required in v1

## Milestones (build order)

1. Auth + Workspace setup (Supabase Auth, workspace creation, RLS)
2. Lead management (CRUD, list, detail page, activity timeline)
3. Pipeline Kanban (deal cards, drag-and-drop with @dnd-kit)
4. Dashboard (metrics cards, Recharts funnel)
5. Multi-tenant collaboration (invites via Resend, role management)
6. Monetization (Stripe plans, checkout, webhook, customer portal)
7. Landing page
8. Polish + onboarding
