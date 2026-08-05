# 01 — Goals & Principles

## 1.1 Why we are rebuilding

The current site (WordPress + PHP, ~2015-2019 era) has three problems:

1. **Dated design and plugins.** Carousel heroes, intro pop-ups, "Smart Pop-up Blaster", contact-form plugins, slideshow widgets. This is legacy-era tooling that hurts trust and speed.
2. **Fragile maintenance.** It depends on a WordPress admin panel, plugin updates, and hosting the college no longer wants to manage. Plugin rot is a security and reliability liability.
3. **No modern workflow.** The college wants changes to be *deterministic*: define the change, publish the change. No database, no auth, no server to patch.

The content is NOT the problem. The site's text, images, news history and documents are real and useful. We preserve and redesign around them.

## 1.2 Goals

1. **Exact content parity, redesigned presentation.** All meaningful content from the old site migrates. The design is new.
2. **Zero ongoing cost.** Free tiers only: GitHub, Vercel, Cloudflare R2 (or equivalent).
3. **Maintainable by non-technical staff.** A clerk with no coding knowledge can add a news item or a notice in under two minutes from a phone or laptop browser.
4. **Fast and trustworthy.** Static site, near-instant loads, strong SEO, accessible (WCAG AA), mobile-first.
5. **Professional institutional identity.** The site must look like a serious, respected engineering college — not a template, not an AI demo.

## 1.3 Non-negotiables (the rulebook)

These are hard rules for every page, every component, every asset. Any design that violates them is rejected.

**Design**
- No emojis anywhere (markup, text, alt text). Icons only (lucide-react).
- No gradients (including gradient text). Flat color only.
- No glow / neon / drop-shadow effects. Hairline 1px borders and flat surfaces. Elevation, where needed, comes from layout and borders, not shadows.
- No excessive border radius ("pill everything", "rounded blob" look). Small radii only (0-8px).
- No stock-photo clichés or generic avatars. Real campus imagery or nothing.
- No "AI slop" copy: no "Elevate", "Unleash", "Next-Gen", "Seamless". Concrete, plain, institutional language.
- No meaningless motion. Motion must serve comprehension (reveal on scroll, state change feedback) and must respect `prefers-reduced-motion`.
- Max 1 accent color, used sparingly (accent ≤ ~10% of any screen).

**Content**
- Every number shown must be real and sourced (from scraped data or provided by the college). No invented statistics.
- No broken links. Every link resolves at build time or is validated.
- Alt text on every meaningful image. Real text, not "image".

**Architecture**
- No database, no user auth, no server-side secrets on the public site.
- Everything version-controlled in git (content included) — full history of every change.
- The site must rebuild from a clean clone with one command (`npm install && npm run build`).
- No dependency that requires a paid plan for the site to function.

## 1.4 Success criteria

- A reviewer can find admissions information (eligibility, procedure, fees, prospectus) in ≤ 2 clicks from the homepage.
- A staff member can publish a news item in < 2 minutes without touching code.
- Lighthouse: ≥ 90 performance / accessibility / best practices on desktop and mobile.
- The site works without JavaScript for reading content (progressive enhancement; JS only for interactions).

## 1.5 Anti-AI-slop checklist (used in every review)

- [ ] Would someone say "a machine generated this" at a glance? If yes, rework.
- [ ] Is the layout an "identical 3-card grid" anywhere? If yes, break the rhythm (asymmetric grid, zig-zag, list).
- [ ] Is the hero a centered headline over a stock image with a purple gradient? Banned.
- [ ] Does any copy repeat the heading? (e.g., heading "About Us" followed by a paragraph that starts "About us..."). Cut it.
- [ ] Are there fake numbers, generic names, or placeholder avatars? Replace with real data or omit.
