# 08 — Roadmap

## Phase 0 — Review (you are here)
- [x] Research & scrape (5 bursts, this session)
- [x] Specifications written (docs/)
- [ ] **Owner review of docs (01, 03, 05, 08 first)**
- [ ] Owner answers open questions in 02.10 (fees, placements, photos, principal name, YouTube)

## Phase 1 — Foundation (this session, in progress)
- [x] Scaffold Next.js 15 + Tailwind v4 + shadcn/ui
- [ ] Design tokens, fonts, global styles
- [ ] Layout: header (utility bar + nav + mega-menu + mobile sheet), footer
- [ ] Content layer: `lib/content.ts`, `site.json`, sample news/notices
- [ ] Homepage (hero, stats, programs, about strip, news+notices, placements, campus, contact CTA)
- [ ] Build passes, Lighthouse ≥ 90

## Phase 2 — Core pages
- About (history, trust, vision/mission, chairman/principal/management)
- Academics overview + 7 department pages (content migrated from old site)
- Admissions (eligibility, procedure, JKCET, minority quota, fees, FAQ, prospectus)
- Placements (stats, recruiters, brochure)
- Contact (details, map, form wired to free endpoint)

## Phase 3 — Content systems
- News archive + article pages + pagination (seeded with ~15 scraped articles)
- Notices archive
- Galleries (lightbox) + video gallery (YouTube embeds)
- 301 redirects from legacy URLs
- XML sitemap, robots, JSON-LD, OG images

## Phase 4 — Maintainer enablement
- Media pipeline: compress + move originals to R2; set up `.vercelignore`
- A4 recipe guide + 5-min video
- One training session with the website coordinator
- (Optional) Decap CMS / TinaCMS layer for a Word-like editor

## Phase 5 — Polish & launch
- Full content pass with the college (fill gaps, correct facts)
- Accessibility audit (axe), performance audit (Lighthouse)
- Cross-browser + mobile test (browser automation)
- DNS switch (mbscet.edu.in → Vercel), legacy site archived with 301s
- Post-launch: watch logs, no-code hotfix workflow, handover doc

## Definition of done
A clean clone builds with `npm install && npm run build`. Content updates are a GitHub commit. Every old URL redirects. Lighthouse ≥ 90 across the board. Staff can publish news without assistance.
