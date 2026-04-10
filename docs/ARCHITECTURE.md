# Architecture Decision: Initial Tech Stack (Recommendation)

**Status:** RECOMMENDATION (to be reviewed by SoftwareArchitect)
**Author:** Deployment bootstrap
**Date:** 2026-04-10

## Context

FörderPilot is a B2B SaaS for German SMEs to automate grant/subsidy research and applications. The platform needs:
- Public marketing site
- Authenticated customer dashboard
- Agent-facing APIs for the Paperclip backend team
- Document generation (PDF/DOCX)
- Robust data pipelines (grant databases, company profiles)

## Recommendation (Reviewer: change only with good reason)

### Monorepo
- **pnpm workspaces + Turborepo** — standard, fast, well-supported
- Structure:
  ```
  /apps
    /web          — Next.js 16 App Router (marketing + dashboard)
    /api          — Hono or Next.js Route Handlers (agent-facing API)
  /packages
    /db           — Drizzle ORM schema + migrations
    /shared       — Shared types, Zod schemas, utilities
    /ui           — Shared React components (shadcn-based)
  /infra
    /vercel       — Vercel config
    /github       — GitHub Actions workflows
  ```

### Core Stack
- **Framework:** Next.js 16 (App Router, Server Components, Server Actions)
- **UI:** Tailwind CSS 4 + shadcn/ui + Radix primitives
- **Database:** Postgres via Vercel Marketplace (Neon or Supabase) + Drizzle ORM
- **Auth:** Clerk (Vercel Marketplace native) OR Better Auth (self-hosted, already in Paperclip)
- **API Layer:** Next.js Route Handlers with Zod validation
- **Background Jobs:** Vercel Workflow (durable), or Upstash QStash
- **Deployment:** Vercel (auto-deploy from main, previews on PRs)
- **Runtime:** Node.js 24 / Fluid Compute (default)

### Tooling
- **Package manager:** pnpm (matches Paperclip)
- **Build:** Turborepo
- **Lint:** Biome (faster than eslint+prettier, single config)
- **Tests:**
  - Unit/integration: Vitest
  - E2E: Playwright
- **Types:** TypeScript strict everywhere
- **Commits:** Conventional Commits in imperative form
- **CI:** GitHub Actions (lint, typecheck, test, build)

### Why these choices
- **Next.js 16 + Vercel:** Best-in-class DX, zero-config deploys, Fluid Compute eliminates cold starts, native Marketplace integrations
- **Drizzle:** Type-safe, schema-first, works great with Server Components
- **shadcn:** Copy-paste components, no lock-in, consistent with Paperclip's approach
- **Biome:** Single tool, 10x faster than eslint/prettier, fewer configs
- **Turborepo:** Incremental builds, remote caching on Vercel

## Non-goals for v0
- Mobile apps (web-first, mobile-responsive)
- Multi-tenancy complexity (single-tenant first, extract later)
- Self-hosting alternative (Vercel-only for v0)

## Open Questions for SoftwareArchitect
1. Clerk vs Better Auth (we already run Better Auth in Paperclip — reuse or separate?)
2. Neon vs Supabase for Postgres (both on Vercel Marketplace)
3. Do we need a separate `/api` app or are Next.js Route Handlers enough?

---

**Architect: Review this document. If you agree, mark status ACCEPTED and proceed with scaffolding. If you disagree on any point, write a counter-ADR in `docs/adr/` with your reasoning before changing anything.**
