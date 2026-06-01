# PipeFlow CRM — Execution Plan

> Interface-first strategy: all UI milestones (M0–M6) are built with mock/static data.
> Backend milestones (M7–M12) wire up real Supabase, Stripe, and Resend.
> Each milestone = one git branch + one final merge commit.

---

## M0 — Project Setup

**Branch:** `setup/foundation`

**Objetivo:** Bootstrapar Next.js 14 com toda a stack instalada e estrutura de pastas criada.

### Entregas

- [ ] `npx create-next-app@latest . --typescript --tailwind --app --src-dir false --eslint`
- [ ] `npx shadcn@latest init` (tema neutral, CSS variables)
- [ ] Instalar dependências: `@dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities recharts @supabase/supabase-js @supabase/ssr resend stripe`
- [ ] Instalar devDeps: `@types/node`
- [ ] Criar estrutura de pastas completa:
  ```
  app/(auth)/login  app/(auth)/register  app/(auth)/invite/[token]
  app/(app)/dashboard  app/(app)/leads/[id]  app/(app)/pipeline  app/(app)/settings
  app/(landing)
  app/api/webhooks/stripe
  components/ui  components/kanban  components/leads  components/shared  components/landing
  lib/supabase  lib/stripe
  types
  supabase/migrations  supabase/functions/stripe-webhook
  docs
  ```
- [ ] Criar `.env.local` com todas as variáveis (valores placeholder):
  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  SUPABASE_SERVICE_ROLE_KEY=
  STRIPE_SECRET_KEY=
  STRIPE_WEBHOOK_SECRET=
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
  RESEND_API_KEY=
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  ```
- [ ] Configurar `tailwind.config.ts`: adicionar Inter via `next/font`, paleta `blue-600` como primary
- [ ] `types/index.ts` — definir tipos globais: `Lead`, `Deal`, `Activity`, `Workspace`, `WorkspaceMember`, `LeadStatus`, `DealStage`, `ActivityType`
- [ ] `lib/mock-data.ts` — dados mock para leads, deals, activities, workspaces
- [ ] Inicializar git: `git init`, `.gitignore` (incluir `.env.local`), commit inicial

**Commit final:** `chore: bootstrap Next.js 14 project with full stack configuration`

---

## M1 — App Shell + Auth UI

**Branch:** `feat/app-shell-auth-ui`

**Objetivo:** Criar o layout autenticado (sidebar, navbar) e páginas de autenticação com UI estática.

### Entregas

- [ ] `app/(app)/layout.tsx` — layout com sidebar fixa + área de conteúdo
- [ ] `components/shared/Sidebar.tsx` — logo PipeFlow, nav links (Dashboard, Leads, Pipeline, Configurações) com ícones Lucide, `WorkspaceSwitcher` no topo, versão colapsável mobile via Sheet
- [ ] `components/shared/Navbar.tsx` — barra superior com campo de busca global (UI), avatar do usuário + DropdownMenu (Perfil, Sair)
- [ ] `components/shared/WorkspaceSwitcher.tsx` — dropdown mostrando workspace ativo + lista mock, botão "Criar workspace"
- [ ] `app/(auth)/login/page.tsx` — form e-mail + senha, link "Criar conta", layout centralizado
- [ ] `app/(auth)/register/page.tsx` — form nome, e-mail, senha, nome do workspace
- [ ] `app/(auth)/invite/[token]/page.tsx` — página "Você foi convidado para [Workspace]", botão aceitar
- [ ] `app/(auth)/layout.tsx` — layout simples sem sidebar, logo centrado
- [ ] Shadcn: `Button`, `Input`, `Label`, `Card`, `DropdownMenu`, `Avatar`, `Sheet`, `Separator`

**Commit final:** `feat: add app shell layout, sidebar, navbar, and static auth pages`

---

## M2 — Leads UI

**Branch:** `feat/leads-ui`

**Objetivo:** Interface completa de gestão de leads e atividades com dados mock.

### Entregas

- [ ] `app/(app)/leads/page.tsx` — página de listagem (Server Component, passa mock data)
- [ ] `components/leads/LeadList.tsx` — tabela com colunas: Nome, Empresa, Status badge, Responsável, Criado em; botão "Novo Lead"
- [ ] `components/leads/LeadFilters.tsx` — selects de filtro: Status, Responsável; exibe contagem de resultados
- [ ] `components/leads/LeadSearch.tsx` — input com ícone de busca
- [ ] `components/leads/LeadForm.tsx` — Dialog/Drawer com campos: nome*, e-mail*, telefone, empresa, cargo, status; botões Cancelar/Salvar
- [ ] `app/(app)/leads/[id]/page.tsx` — página de detalhe
- [ ] `components/leads/LeadProfile.tsx` — header com avatar inicial, nome, empresa/cargo, badges de e-mail/telefone, status select, responsável
- [ ] `components/leads/ActivityTimeline.tsx` — lista cronológica de atividades; cada item tem ícone por tipo (ligação, e-mail, reunião, nota), autor, data relativa, descrição
- [ ] `components/leads/AddActivityForm.tsx` — form inline: select de tipo, textarea de descrição, botão Registrar
- [ ] Shadcn: `Table`, `Badge`, `Dialog`, `Drawer`, `Select`, `Textarea`, `Tabs`, `Tooltip`

**Commit final:** `feat: add leads list, detail page, and activity timeline UI`

---

## M3 — Pipeline Kanban UI

**Branch:** `feat/pipeline-ui`

**Objetivo:** Board Kanban com drag-and-drop funcional usando dados mock.

### Entregas

- [ ] `app/(app)/pipeline/page.tsx` — passa deals mock, renderiza `KanbanBoard`
- [ ] `components/kanban/KanbanBoard.tsx` — `DndContext` com `onDragEnd` atualizando estado local; scroll horizontal no mobile
- [ ] `components/kanban/KanbanColumn.tsx` — `SortableContext`; header com nome da etapa, contagem de cards e soma total de valor (R$); zona de drop com indicador visual
- [ ] `components/kanban/DealCard.tsx` — card arrastável (`useSortable`): título do negócio, valor formatado em R$, avatar do lead, nome do responsável, badge de prazo (verde/amarelo/vermelho conforme proximidade)
- [ ] `components/kanban/DealForm.tsx` — Dialog: campos título*, valor (R$), lead vinculado (select), responsável, prazo (date picker)
- [ ] `components/kanban/AddDealButton.tsx` — botão "+ Negócio" no rodapé de cada coluna
- [ ] 6 colunas fixas: `novo-lead`, `contato-realizado`, `proposta-enviada`, `negociacao`, `fechado-ganho`, `fechado-perdido`
- [ ] Shadcn: `Card`, `Badge`, `Avatar`, `Dialog`, `Popover` (date picker)

**Commit final:** `feat: add pipeline Kanban with drag-and-drop using @dnd-kit`

---

## M4 — Dashboard UI

**Branch:** `feat/dashboard-ui`

**Objetivo:** Dashboard com métricas e gráfico de funil usando dados estáticos.

### Entregas

- [ ] `app/(app)/dashboard/page.tsx` — página principal do app, redireciona `/` para cá
- [ ] `components/shared/MetricCard.tsx` — card com ícone Lucide, label, valor grande, variação percentual em verde/vermelho
- [ ] 4 MetricCards: "Total de Leads" (Users2), "Negócios Abertos" (Briefcase), "Valor do Pipeline" (DollarSign, formato R$), "Taxa de Conversão" (TrendingUp, formato %)
- [ ] `components/shared/FunnelChart.tsx` — `"use client"`, BarChart horizontal do Recharts com as 6 etapas do pipeline; tooltip com valor e contagem; cores degradê de azul para verde
- [ ] `components/shared/UpcomingDeals.tsx` — lista dos 5 negócios com prazo mais próximo: nome do deal, lead, prazo formatado, badge de etapa
- [ ] Shadcn: `Card`, `Separator`, `Badge`

**Commit final:** `feat: add dashboard with metric cards and funnel chart`

---

## M5 — Landing Page

**Branch:** `feat/landing-page`

**Objetivo:** Página pública de apresentação do PipeFlow CRM.

### Entregas

- [ ] `app/(landing)/layout.tsx` — layout sem sidebar, com `LandingNav` e `Footer`
- [ ] `app/(landing)/page.tsx` — composição das seções
- [ ] `components/landing/LandingNav.tsx` — logo, links âncora (#features, #pricing), botão "Entrar" e botão primary "Começar Grátis"
- [ ] `components/landing/Hero.tsx` — headline grande, subheadline, 2 CTAs (Começar Grátis / Ver Demo), badge "Sem cartão de crédito", imagem/screenshot do dashboard
- [ ] `components/landing/Features.tsx` — grid 3×2 com 6 features: Pipeline Visual, Gestão de Leads, Registro de Atividades, Dashboard de Métricas, Multi-empresa, Segurança com RLS; cada feature tem ícone Lucide, título, descrição
- [ ] `components/landing/Pricing.tsx` — 2 cards (Free / Pro), lista de features com checkmark/X, botão "Começar Grátis" / "Assinar Pro — R$49/mês"
- [ ] `components/landing/CTA.tsx` — seção escura com headline de conversão e botão de cadastro
- [ ] `components/landing/Footer.tsx` — logo, links (Termos, Privacidade), copyright

**Commit final:** `feat: add public landing page with hero, features, and pricing`

---

## M6 — Settings UI

**Branch:** `feat/settings-ui`

**Objetivo:** Páginas de configuração do workspace (UI estática).

### Entregas

- [ ] `app/(app)/settings/layout.tsx` — layout com sub-nav lateral: Workspace, Membros, Faturamento
- [ ] `app/(app)/settings/workspace/page.tsx` — form com nome do workspace, logo (upload UI), botão Salvar; zona de perigo com botão "Excluir Workspace" (vermelho, Dialog de confirmação)
- [ ] `app/(app)/settings/members/page.tsx` — `MemberList` + `InviteForm`
- [ ] `components/shared/MemberList.tsx` — tabela: Avatar + Nome, E-mail, Role (Select Admin/Membro), botão Remover; linha do próprio usuário é readonly
- [ ] `components/shared/InviteForm.tsx` — input de e-mail, select de role, botão "Enviar Convite"; mostra limite do plano (ex: "1/2 colaboradores no plano Free")
- [ ] `app/(app)/settings/billing/page.tsx` — card com plano atual (badge Free/Pro), lista de features do plano, botão "Fazer Upgrade para Pro" ou "Gerenciar Assinatura" (Stripe portal); histórico de faturas (mock)
- [ ] Shadcn: `Tabs`, `Table`, `Badge`, `Switch`, `Alert`, `AlertDialog`

**Commit final:** `feat: add workspace settings, members, and billing UI`

---

## M7 — Backend: Auth + Workspace

**Branch:** `feat/backend-auth-workspace`

**Objetivo:** Autenticação real com Supabase Auth e gestão de workspaces com RLS.

### Entregas

- [ ] `supabase/migrations/001_workspaces.sql` — tabelas `workspaces`, `workspace_members`; RLS policies: SELECT/INSERT/UPDATE por membership
- [ ] `lib/supabase/server.ts` — `createServerClient` com cookies (Server Components e Server Actions)
- [ ] `lib/supabase/client.ts` — `createBrowserClient` para componentes `"use client"`
- [ ] `middleware.ts` — `updateSession` do `@supabase/ssr`; redirecionar `/` e `/(app)/*` para `/login` se não autenticado
- [ ] `app/(auth)/actions.ts` — Server Actions: `signIn`, `signUp` (cria user + workspace + membro admin), `signOut`
- [ ] Conectar `LoginForm` e `RegisterForm` às Server Actions (substituir handlers mock)
- [ ] `WorkspaceSwitcher` carregando workspaces reais via Server Component
- [ ] Onboarding: pós-cadastro redirecionar para `/dashboard` (workspace criado automaticamente)
- [ ] Testar: cadastro → login → logout → sessão persistida

**Commit final:** `feat: wire up Supabase Auth, workspace creation, and RLS policies`

---

## M8 — Backend: Leads + Atividades

**Branch:** `feat/backend-leads`

**Objetivo:** Leads e atividades com dados reais do Supabase.

### Entregas

- [ ] `supabase/migrations/002_leads_activities.sql` — tabelas `leads`, `activities`; RLS policies por `workspace_id`
- [ ] `app/(app)/leads/actions.ts` — Server Actions: `createLead`, `updateLead`, `deleteLead`, `createActivity`
- [ ] `app/(app)/leads/page.tsx` — query real: `supabase.from('leads').select()` filtrado por workspace + searchParams (busca, status, responsável)
- [ ] `app/(app)/leads/[id]/page.tsx` — query `leads` por ID + `activities` vinculadas, ordenadas por `created_at DESC`
- [ ] Conectar `LeadForm` (criar/editar) a Server Actions
- [ ] Conectar `AddActivityForm` a `createActivity` Server Action
- [ ] Remover dependência de `lib/mock-data.ts` para leads e activities
- [ ] Substituir mock data por dados reais no seed inicial (opcional: `supabase/seed.sql`)

**Commit final:** `feat: connect leads and activities to Supabase with real data`

---

## M9 — Backend: Pipeline

**Branch:** `feat/backend-pipeline`

**Objetivo:** Deals com persistência real; drag-and-drop salva no banco.

### Entregas

- [ ] `supabase/migrations/003_deals.sql` — tabela `deals` com coluna `position` (integer) para ordenação intra-coluna; RLS policies por `workspace_id`
- [ ] `app/(app)/pipeline/actions.ts` — Server Actions: `createDeal`, `updateDeal`, `deleteDeal`, `moveDeal(dealId, newStage, newPosition)`
- [ ] `app/(app)/pipeline/page.tsx` — query `deals` agrupados por `stage`, ordenados por `position`
- [ ] `KanbanBoard` — `onDragEnd` chama `moveDeal` com optimistic update (estado local atualizado imediatamente, Server Action em background)
- [ ] `DealForm` conectado a Server Actions
- [ ] Vinculação deal → lead: select de leads reais no `DealForm`

**Commit final:** `feat: connect pipeline Kanban to Supabase with real deal persistence`

---

## M10 — Backend: Dashboard

**Branch:** `feat/backend-dashboard`

**Objetivo:** Métricas do dashboard vindas de queries reais.

### Entregas

- [ ] `app/(app)/dashboard/page.tsx` — queries paralelas via `Promise.all`:
  - `COUNT(*)` de leads ativos no workspace
  - `COUNT(*)` de deals abertos (stage != `fechado-ganho` e != `fechado-perdido`)
  - `SUM(value)` de deals abertos (valor do pipeline)
  - Taxa de conversão: `fechado-ganho / (fechado-ganho + fechado-perdido)` × 100
- [ ] `FunnelChart` alimentado com `COUNT(*)` GROUP BY `stage`
- [ ] `UpcomingDeals` com query: `deals WHERE due_date BETWEEN now() AND now()+7days AND owner_id = user.id ORDER BY due_date ASC LIMIT 5`
- [ ] Remover todos os dados mock do dashboard

**Commit final:** `feat: replace dashboard mock data with real Supabase metric queries`

---

## M11 — Colaboração Multi-workspace

**Branch:** `feat/collaboration`

**Objetivo:** Convites por e-mail, papéis Admin/Membro e enforcement de limites do plano Free.

### Entregas

- [ ] `supabase/migrations/004_invitations.sql` — tabela `invitations` (token UUID, email, workspace_id, role, expires_at, accepted_at); RLS: insert por admin do workspace
- [ ] `app/(app)/settings/members/actions.ts` — `inviteMember(email, role)`: cria invitation + envia e-mail via Resend com link `{APP_URL}/invite/{token}`
- [ ] Template de e-mail: HTML simples com logo, "Você foi convidado para [Workspace]", botão de aceite
- [ ] `app/(auth)/invite/[token]/page.tsx` — valida token (não expirado, não aceito); se autenticado: aceita e redireciona; se não: redireciona para register com token na URL
- [ ] Pós-register com token: aceitar convite automaticamente
- [ ] Middleware de role: Server Actions de settings verificam `role = admin`
- [ ] Enforcement Free: `inviteMember` retorna erro se `workspace_members.count >= 2` e `plan = free`

**Commit final:** `feat: add email invitations, workspace roles, and Free plan member limit`

---

## M12 — Monetização (Stripe)

**Branch:** `feat/monetization`

**Objetivo:** Planos Free/Pro com Stripe Checkout, webhooks e Customer Portal.

### Entregas

- [ ] `lib/stripe/client.ts` — instância do Stripe SDK com `STRIPE_SECRET_KEY`
- [ ] `app/(app)/settings/billing/actions.ts`:
  - `createCheckoutSession()` — cria Stripe Checkout Session para plano Pro, redireciona para Stripe
  - `createPortalSession()` — cria Customer Portal Session, redireciona para Stripe
- [ ] `app/api/webhooks/stripe/route.ts` — verifica assinatura com `stripe.webhooks.constructEvent`; handlers:
  - `checkout.session.completed` → `UPDATE workspaces SET plan='pro', stripe_customer_id=...`
  - `customer.subscription.deleted` → `UPDATE workspaces SET plan='free'`
- [ ] `supabase/migrations/005_workspace_billing.sql` — adicionar coluna `stripe_customer_id` em `workspaces`
- [ ] Conectar botões de billing na `BillingPage` às Server Actions
- [ ] Enforcement de leads: `createLead` retorna erro se `plan = free` e `leads.count >= 50`
- [ ] Configurar produto e preço no Stripe Dashboard; registrar Price ID em `.env.local`

**Commit final:** `feat: integrate Stripe checkout, webhooks, and plan enforcement`

---

## M13 — Deploy de Produção

**Branch:** `chore/deploy`

**Objetivo:** Deploy completo em Vercel + Supabase com configuração de produção.

### Entregas

- [ ] Criar projeto Supabase (produção); rodar todas as migrações (`supabase db push`)
- [ ] Verificar RLS policies em produção (`supabase inspect db`)
- [ ] Criar repositório GitHub; push de `main`
- [ ] Criar projeto Vercel; linkar ao repositório GitHub (auto-deploy on push)
- [ ] Configurar variáveis de ambiente no Vercel Dashboard (todas as variáveis do `.env.local` com valores de produção)
- [ ] Configurar domínio customizado no Vercel
- [ ] Adicionar URL de produção em:
  - Supabase → Authentication → URL Configuration (Site URL + Redirect URLs)
  - Stripe → Webhooks (endpoint: `https://seudominio.com/api/webhooks/stripe`)
- [ ] Trocar chaves Stripe de test para live
- [ ] Smoke test de produção:
  - [ ] Cadastro de nova conta
  - [ ] Criar workspace
  - [ ] Cadastrar lead
  - [ ] Mover deal no Kanban
  - [ ] Convidar membro por e-mail
  - [ ] Fazer upgrade para Pro via Stripe Checkout
  - [ ] Acessar Customer Portal

**Commit final:** `chore: production deployment on Vercel + Supabase`

---

## Resumo dos Milestones

| # | Branch | Fase | Descrição |
|---|--------|------|-----------|
| M0 | `setup/foundation` | Setup | Bootstrap do projeto |
| M1 | `feat/app-shell-auth-ui` | UI | Shell + páginas de auth |
| M2 | `feat/leads-ui` | UI | Gestão de leads |
| M3 | `feat/pipeline-ui` | UI | Kanban de pipeline |
| M4 | `feat/dashboard-ui` | UI | Dashboard de métricas |
| M5 | `feat/landing-page` | UI | Landing page pública |
| M6 | `feat/settings-ui` | UI | Configurações do workspace |
| M7 | `feat/backend-auth-workspace` | Backend | Auth + Workspaces + RLS |
| M8 | `feat/backend-leads` | Backend | Leads + Atividades |
| M9 | `feat/backend-pipeline` | Backend | Pipeline + Deals |
| M10 | `feat/backend-dashboard` | Backend | Métricas reais |
| M11 | `feat/collaboration` | Backend | Convites + Papéis |
| M12 | `feat/monetization` | Backend | Stripe + Planos |
| M13 | `chore/deploy` | Deploy | Produção |
