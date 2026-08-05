# MBSCET Website Redesign — Specifications

**Project:** Rebuild of [mbscet.edu.in](https://www.mbscet.edu.in) — Mahant Bachittar Singh College of Engineering and Technology, Babliana, Jeevan Nagar Road, P.O. Miran Sahib, Jammu 181101.

**Status:** DRAFT — pending review by project owner. Feedback collected, then implementation proceeds phase by phase.

## How to read these documents

| # | Document | What it covers |
|---|----------|----------------|
| 01 | [Goals & Principles](01-goals-and-principles.md) | Why we are rebuilding, non-negotiables, the "anti-AI-slop" rulebook |
| 02 | [Research Summary](02-research-summary.md) | Everything scraped and researched: current site inventory, college facts, third-party data |
| 03 | [Architecture](03-architecture.md) | Stack, hosting, content-as-code, media strategy, deployment. No database. |
| 04 | [Information Architecture](04-information-architecture.md) | New sitemap, routes, navigation model |
| 05 | [Design System](05-design-system.md) | Visual direction, palette, typography, spacing, component rules |
| 06 | [Component Strategy](06-component-strategy.md) | Which component libraries, which components, where each is used |
| 07 | [Maintainer Guide](07-maintainer-guide.md) | How non-technical college staff add news, notices, and files |
| 08 | [Roadmap](08-roadmap.md) | Phased implementation plan |
| 09 | [Decision Records (ADRs)](09-adrs.md) | Every significant decision with rationale and alternatives considered |

## Executive summary (for busy reviewers)

1. **The old site** is a dated WordPress + PHP site (carousel heroes, plugin clutter, pop-ups). Its *content* is valuable and will be migrated; its *design* is not.
2. **The new site** is a statically-generated Next.js site with **no database and no login**. Every piece of content (news, notices, programs, faculty, images) lives in a GitHub repository as plain files. When staff want a change, they edit a file in GitHub's web interface, click commit, and Vercel rebuilds the site automatically in ~1 minute.
3. **Media storage**: everything the college uploads stays on **GitHub** (their own storage, free, versioned). Only small, compressed images ship in the site build (kept well under Vercel's 100 MB/deployment limit); large galleries, videos and PDFs are linked or hosted on free CDN tiers (Cloudflare R2 / YouTube).
4. **Design**: professional, minimal, institutional. Warm paper + charcoal ink + a single kesari (saffron) accent. Editorial serif headings, clean sans body. No gradients, no emojis, no stock-photo slop, no gimmicks.
5. **Cost**: ₹0/month. GitHub, Vercel Hobby, and Cloudflare R2 free tiers cover everything.

**Please review 01, 03, 05, and 08 first — they carry the decisions that matter most.**
