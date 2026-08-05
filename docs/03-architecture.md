# 03 — Architecture

## 3.1 The core idea: "Content is code, changes are deploys"

The college has no database today, needs no login, and wants deterministic publishing ("we decide when something changes; we make the change; the site reflects it"). The cleanest architecture for that is:

> **Everything is a file in a GitHub repository. A change is a commit. A commit triggers a rebuild. The rebuild publishes the new site. Nothing else exists.**

No database. No admin panel to secure. No server to patch. No monthly bill.

```
College staff → edit files in GitHub web UI (or add photos via drag-drop)
     → commit → Vercel webhook → build (Next.js SSG) → deploy (mbscet.edu.in)
```

## 3.2 Stack (decided)

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router, React 19, TypeScript, `src/` dir) | Industry standard; SSG-first; `next/image` optimization built-in |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) | Zero-config tokens; no `tailwind.config.js` ceremony |
| Primitives | shadcn/ui (CLI, MIT) | Accessible, unopinionated, owned by us (copy-paste) |
| Animation | Motion (`motion/react`) + GSAP (`@gsap/react`) | Motion for micro-interactions/layout; GSAP ScrollTrigger for 1-2 choreographed sections. Both client-only, isolated, cleanup-safe |
| Icons | lucide-react (+ react-icons for social brands) | Consistent 1.5px stroke, professional |
| Fonts | next/font/google — Source Serif 4 (display) + Figtree (body) | Self-hosted at build, zero CLS |
| Content | Markdown + JSON in repo, read at build time with `gray-matter` | Zero-dependency, versioned, diffable |
| Hosting | Vercel (Hobby, free) | 100 GB bandwidth/mo, auto-deploy from GitHub, custom domain, CDN edge |
| Media CDN | Cloudflare R2 (free tier, 10 GB, no egress fees) for large galleries/PDFs; YouTube for video | Keeps build < 100 MB/deployment limit |
| Forms | Free form endpoint (Formspree / Web3Forms) for the contact form | No server code needed; email to college inbox |

## 3.3 Repository layout

```
mbs-college-website/
├─ src/
│  ├─ app/                  # Next.js App Router pages
│  ├─ components/           # ui/ (shadcn), layout/, sections/, blocks/
│  ├─ content/              # ALL editable content lives here (markdown + JSON)
│  │  ├─ site.json          # college-wide info: name, address, phones, emails, social
│  │  ├─ nav.json           # navigation structure
│  │  ├─ programs/          # one .md per program (CSE, IT, ECE, ...)
│  │  ├─ news/              # one .md per article, named YYYY-MM-DD-slug.md
│  │  ├─ notices/           # one .md per notice
│  │  ├─ pages/             # long-form pages (about, admissions, placements, campus)
│  │  └─ faculty/           # JSON per department
│  └─ lib/                  # content loader + helpers
├─ public/
│  ├─ media/                # compressed images that ship in the build (kept lean)
│  └─ docs/                 # prospectus.pdf, forms, newsletters (small, static)
└─ docs/                    # these specifications
```

**Rule:** `src/content/` and `public/` are the *only* places staff ever touch. Everything else is code.

## 3.4 Why GitHub is the storage (and why it is safe)

- **Free and unlimited-ish** (repo recommended ≤ 1-2 GB; individual file ≤ 100 MB). The college's image/news volume for years fits comfortably.
- **Versioned**: every edit is a commit; nothing is ever lost; rollback is one click.
- **No login for readers, simple login for editors** (a GitHub account is free; staff are taught a 3-step recipe).
- **Build-time attachment** (the user's own requirement): at build time the site reads these files and statically bakes them into HTML. No runtime fetch, no API key, no rate limits.

### 3.4.1 The 100 MB Vercel deployment limit (explicit answer)

Vercel Hobby caps each *deployment* at 100 MB of build output. Consequences and mitigation:

1. Only **compressed WebP/AVIF** images used on pages ship in `public/media/`. Target: the whole `public/` folder stays under ~25-30 MB (compressed, resized to 1600px max).
2. **News/gallery originals** do NOT ship in the build. They live in a second area of the repo (e.g., `media-library/` at repo root, excluded from the build via `.vercelignore`/`next.config`), and are referenced through Cloudflare R2 public URLs at runtime (or copied to R2 on demand). Simple and free.
3. **Videos** are never self-hosted; embedded from the college's YouTube channel.
4. **PDFs** (prospectus, forms, newsletters) are small; they ship in `public/docs/` (each ≤ ~10 MB; the whole set stays lean) or via R2 if they grow.

> Simpler alternative if volume stays low: keep *everything* in the repo and under 100 MB total. The architecture supports both; we default to "lean build + R2 for bulk".

## 3.5 Data model (content types)

| Type | Format | Example | Edited by |
|------|--------|---------|-----------|
| Site config | `site.json` | name, address, phones, emails, social URLs, notice-bar text | Staff (rarely) |
| Program | `programs/*.md` (frontmatter: code, intake, duration, eligibility) | `computer-science.md` | HODs (rarely) |
| News article | `news/YYYY-MM-DD-slug.md` (frontmatter: title, date, category, image) | `2026-04-09-power-bi-workshop.md` | Staff (often) |
| Notice | `notices/YYYY-MM-DD-slug.md` (frontmatter: title, date, pdf link optional) | `2026-08-01-sessional-exam-datesheet.md` | Staff (often) |
| Static page | `pages/about.md`, `pages/admissions.md`, ... | | Staff (rarely) |
| Faculty | `faculty/cse.json`, ... (array of {name, role, qualification}) | | HODs (rarely) |
| Gallery | `galleries/<event>.json` (list of image paths) | | Staff |

All Markdown uses `gray-matter` frontmatter. Sorting is by date in the filename (zero ambiguity for non-technical users).

## 3.6 Rendering model

- **All pages are statically generated** at build time (SSG). Server components read `src/content/` via `fs`; there is no API route, no server action, no `revalidate` needed.
- **ISR is intentionally off** — the college's model is "commit → rebuild". A rebuild takes ~1 minute and makes the update atomic (no stale-cache surprises).
- Newsletter/sitemap/robots generated at build.
- `next/image` optimizes every local image (AVIF/WebP, correct sizes, lazy loading).

## 3.7 Deployment pipeline

1. Push to `main` (GitHub web UI counts as a push).
2. Vercel detects push → installs → builds → deploys to edge CDN.
3. Custom domain `mbscet.edu.in` serves the static output.
4. Rollback: Vercel dashboard "Instant Rollback" to any previous deployment.

## 3.8 Security & ownership

- Public site: no secrets, no env vars, no cookies needed.
- GitHub repo: private by default; staff get "write" access to the content folders only (via GitHub's protected branches / CODEOWNERS if desired).
- All content is versioned: accidental bad edit → revert in 1 click.

## 3.9 Performance budget

- First Contentful Paint < 1.2 s on 3G mobile (static HTML, font subsetting, no render-blocking JS).
- Total JS < 150 KB initial (interactive islands only).
- Zero images above the fold larger than 200 KB.
