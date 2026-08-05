# 09 — Decision Records (ADRs)

## ADR-001: Next.js 15 (App Router) over WordPress / plain HTML
- **Context:** Legacy WordPress/PHP site; owner wants modern, deterministic, maintainable.
- **Decision:** Next.js 15 + React 19 + TypeScript, App Router, static generation.
- **Alternatives:** Keep WordPress (rejected: plugin rot, hosting cost, admin burden); plain HTML/CSS (rejected: no component reuse, harder to keep consistent); Astro (viable; Next chosen for the owner's stated stack preference and ecosystem).
- **Consequence:** All pages are static HTML; interactive islands only where needed.

## ADR-002: No database; content-as-code in the repo
- **Context:** Content is static but changes occasionally (news, notices, programs). No auth, no users.
- **Decision:** Markdown + JSON in `src/content/`, parsed at build time with `gray-matter`. Change = commit = redeploy.
- **Alternatives:** Postgres/Supabase (rejected: overkill, no auth need, adds cost and failure modes); headless CMS (rejected: monthly cost, another login for staff); ISR revalidation (rejected: "define when it changes" model makes rebuilds the atomic unit).
- **Consequence:** Zero runtime dependencies, full git history, instant rollback.

## ADR-003: GitHub as primary media storage; lean build + R2 for bulk
- **Context:** Vercel Hobby limits deployments to 100 MB. College has years of galleries/photos.
- **Decision:** Compressed images ship in `public/` (target ≤ 30 MB total); originals and large files live in the repo's media area / Cloudflare R2 (free, no egress fees) and are referenced by URL; videos embed from YouTube.
- **Alternatives:** Everything in `public/` (rejected: blows the 100 MB cap); Cloudinary only (fine, but R2 keeps everything inside the college's own GitHub + free tier).
- **Consequence:** Build stays small; bulk media is served from a CDN; staff still manage files from GitHub.

## ADR-004: Vercel Hobby as host
- **Context:** Zero budget; need auto-deploy from GitHub, custom domain, CDN, free.
- **Decision:** Vercel Hobby tier.
- **Alternatives:** GitHub Pages (no auto-rebuild convenience, limited), Cloudflare Pages (viable; Vercel chosen for Next-native ISR-free static workflow and owner familiarity).
- **Consequence:** 100 GB/mo bandwidth, preview URLs, instant rollback.

## ADR-005: Tailwind v4 CSS-first tokens
- **Context:** Need a consistent design system without config-file ceremony.
- **Decision:** Tailwind v4 with `@theme` tokens in `globals.css` (`--color-*`, `--font-*`).
- **Alternatives:** Tailwind v3 config (works but legacy), CSS modules everywhere (no token system).
- **Consequence:** Single source of truth for colors/fonts; design changes are token edits.

## ADR-006: Design direction — warm paper + charcoal + kesari accent, serif display
- **Context:** Owner delegated the visual direction; college is a Sikh minority institution (Dera Sant Pura Nangali Sahib heritage) needing institutional trust.
- **Decision:** Restrained strategy: warm ivory paper, charcoal ink, single desaturated saffron (kesari) accent ≤10%. Source Serif 4 display + Figtree body. Flat surfaces, hairlines, no shadows/gradients/emoji.
- **Alternatives considered:** Classic navy+amber (rejected: generic "college template"); full saffron "committed" strategy (rejected: too loud for official pages; kept as an option for the notice bar/CTAs only); dark editorial (rejected: wrong scene sentence).
- **Consequence:** Distinctive, respectful of identity, unmistakably institutional; any accent overuse is caught in review.

## ADR-007: Motion (library) + GSAP, isolated, reduced-motion-first
- **Context:** Owner requested GSAP + Motion; anti-slop rules ban gimmick motion.
- **Decision:** Motion for micro-interactions/layout/page fade; GSAP ScrollTrigger for exactly one choreographed section (About). Both client-isolated, `prefers-reduced-motion` respected; no perpetual animation.
- **Alternatives:** One library only (fine, but GSAP shines for the one scroll moment); heavy scroll-telling everywhere (rejected: perf + slop).
- **Consequence:** Fast, calm, purposeful motion.

## ADR-008: Copy-paste components (React Bits / Magic UI / 21st.dev) + shadcn primitives
- **Context:** Owner wants modern component libraries, researched, but code must remain maintainable and lean.
- **Decision:** shadcn/ui CLI for primitives; React Bits / Magic UI patterns copied and restyled to the design system (with attribution); gradient/glow components (Aurora, Beams, Spotlight) explicitly rejected.
- **Alternatives:** Install every library as npm deps (rejected: bundle bloat, version churn); build everything from scratch (rejected: slower, reinvents wheels).
- **Consequence:** Owned code, small bundle, full design control.

## ADR-009: Contact form via free endpoint (Formspree/Web3Forms), no server
- **Context:** Legacy contact-form plugin; new site is static with no backend.
- **Decision:** Static form posts to a free form-to-email service; submissions land in the college's inbox; honeypot spam guard; success/error states.
- **Alternatives:** Server action on Vercel (possible but requires secrets/env and a paid-ish path for reliability); mailto (bad UX).
- **Consequence:** Zero server code; works on static export if ever needed.

## ADR-010: Light theme only (no dark mode default)
- **Context:** Scene sentence is daylight, institutional, printed-document-like.
- **Decision:** Warm light theme as the single theme; dark mode deferred/not planned.
- **Alternatives:** Auto dark mode (rejected: maintenance cost for staff concept, wrong register).
- **Consequence:** One well-tuned theme instead of two mediocre ones.

## ADR-011: Real data only (no invented stats)
- **Context:** Anti-slop + trust; third-party placement/fee figures are approximate.
- **Decision:** Only publish numbers confirmed by the college (T&P cell, accounts); figures not confirmed stay out or are labeled "per J&K Fee Fixation Committee" with source.
- **Consequence:** Open questions in 02.10 must be answered before Phase 2 publishing.
