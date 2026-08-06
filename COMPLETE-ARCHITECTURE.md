# MBSCET Website — Complete Architecture & Working

**Mahant Bachittar Singh College of Engineering & Technology, Jammu**

> This document explains — top to bottom — how this website is built, how it works,
> how it is managed for free, and why its architecture (Git + static files + a free CMS)
> is fundamentally better than a traditional database + server + object storage setup.
>
> It is written to be reusable: for project explanations, stakeholder presentations,
> training non-technical staff, and as the single reference for how the system operates.

---

## 1. One-Sentence Summary

The website is a **static site** — every page is a pre-built HTML file generated at build
time — with **all content and media stored as plain files inside a Git repository**, edited
through a **free, open-source web CMS** (Pages CMS) that commits changes straight back to
GitHub, and auto-deployed to a **free global CDN** (Vercel). No database. No server.
No hosting bill. No security patches. No vendor lock-in.

---

## 2. What We Replaced and Why

### The old website (legacy WordPress)

| Problem | Impact |
|---------|--------|
| WordPress + PHP + MySQL | Requires a paid server, constant updates, plugin maintenance |
| Slow server-side rendering | Pages take seconds to load |
| Poor mobile experience | Legacy theme, unoptimized images |
| Content edits require the WP admin | Technical, confusing, and a security target |
| No content versioning | Changes can't be reviewed, reverted, or audited |
| Vulnerable surface | WordPress is one of the most-attacked platforms on the web |
| ~₹15,000–50,000 / year in hosting | Ongoing cost for marginal reliability |

### The new website

| Capability | How |
|-----------|-----|
| Instant page loads | Static HTML pre-rendered at build time, served from a CDN |
| Free hosting | Vercel free tier — no server to rent or maintain |
| Anyone can edit content | Pages CMS web UI — no Git, no code, no technical skill needed |
| Every change is versioned | Git history on every news article, photo, and PDF |
| Built-in review & rollback | One-click revert of any content change |
| Zero attack surface | No server, no database, no admin panel to hack |
| PDFs viewed inline | Embedded lightweight PDF viewer, no downloads required |

---

## 3. The Architecture at a Glance

```
                         ┌────────────────────────────────────────────────┐
                         │              EDITORS (non-technical)            │
                         │          open pagescms.org → web UI             │
                         └──────────────────────┬─────────────────────────┘
                                                │  clicks "Save"
                                                ▼
                         ┌────────────────────────────────────────────────┐
                         │              PAGES CMS (free, OSS)              │
                         │      edits content/ + media/ in the repo        │
                         │      commits directly to GitHub                 │
                         └──────────────────────┬─────────────────────────┘
                                                │  push to main
                                                ▼
                         ┌────────────────────────────────────────────────┐
                         │               GITHUB REPOSITORY                 │
                         │  code/  src/  · content/  · media/  · .pages.yml│
                         └──────────────────────┬─────────────────────────┘
                                                │  webhook triggers build
                                                ▼
                         ┌────────────────────────────────────────────────┐
                         │                 VERCEL (free)                   │
                         │  1. prebuild:  media/ → public/                │
                         │  2. next build:  content/ → static HTML pages   │
                         │  3. deploy to global CDN                        │
                         └──────────────────────┬─────────────────────────┘
                                                │  HTTPS, edge-cached
                                                ▼
                                              USERS 🌍
```

**Three layers, zero moving parts to operate:**

1. **Content layer** — plain files in `content/` (JSON + Markdown) and `media/` (images, PDFs, videos).
2. **Build layer** — Next.js statically generates every page at deploy time.
3. **Delivery layer** — Vercel's CDN serves the pre-built files worldwide.

---

## 4. Repository Layout

```
mbs-college-website/
├── content/                    # 📄 ALL website content (editable via CMS)
│   ├── site.json               #   global settings, contacts, leadership, admissions
│   ├── news/                   #   news articles        (Markdown, date-prefixed)
│   ├── notices/                #   notices & circulars  (Markdown)
│   ├── programs/               #   academic programs    (Markdown)
│   ├── departments/            #   department data      (JSON)
│   ├── faculty/                #   faculty per dept     (JSON)
│   └── placements/             #   placement records    (JSON)
├── media/                      # 🖼️ ALL media (images, PDFs, videos, organized by purpose)
│   ├── homepage/  general/  management/  faculty/
│   ├── departments/            #   per-department: labs, alumni, innovative videos
│   ├── docs/                   #   PDFs: syllabi, notices, placement records
│   └── videos/                 #   testimonial videos
├── src/                        # 💻 CODE ONLY (never edited by content staff)
│   ├── app/                    #   Next.js routes (/, /about/*, /academics/*, /campus/*…)
│   ├── components/             #   layout, sections, ui, seo
│   └── lib/                    #   content loaders (content.ts, departments.ts)
├── scripts/copy-media.mjs      #   prebuild: copies media/ into public/
├── .pages.yml                  #   Pages CMS configuration (the "admin panel" definition)
├── public/                     #   build output (media + docs copies are gitignored)
├── next.config.ts              #   legacy WordPress URL → new route redirects
└── README.md                   #   quick-start overview
```

**The single most important design decision:** *content and media live completely outside
the source code.* A staff member who has never seen a line of code can manage the entire
website without ever opening `src/`.

---

## 5. How Content Becomes a Website (Build Pipeline)

```
content/*.json, *.md  ──►  src/lib/content.ts loaders  ──►  Next.js SSG pages
media/                ──►  scripts/copy-media.mjs      ──►  public/media/ + public/docs/
```

**Step by step, on every deploy (locally or on Vercel):**

1. **`npm run prebuild`** runs `scripts/copy-media.mjs`, which:
   - wipes the stale `public/media/` and `public/docs/`,
   - copies `media/` → `public/media/`,
   - copies `media/docs/` → `public/docs/` (so `/docs/…` PDF URLs work).
2. **`npm run build`** (`next build`) runs the content loaders in `src/lib/`:
   - `getSiteConfig()` reads `content/site.json`,
   - `getNews()` / `getNotices()` / `getPrograms()` parse the Markdown files (with `gray-matter`),
   - `getFaculty()` / `getPlacements()` / `getAllDepartments()` read the JSON files,
   - and statically generates **every page** (home, about, every department, every news article, every program…).
3. The output is a folder of **pure static HTML/CSS/JS** — no runtime server, no database connection.
4. Vercel pushes it to a **global CDN** with HTTPS.

Because pages are generated once at build time, the site is:
- **Fast** — first byte from a CDN edge near the visitor,
- **Reliable** — nothing to go down, nothing to scale manually,
- **Free** — no server hours, no bandwidth surprise bills on Vercel's free tier.

---

## 6. The Free CMS: Pages CMS

Pages CMS ([pagescms.org](https://pagescms.org)) is a free, open-source CMS that **edits
files in a GitHub repository directly** — there is no separate CMS database.

### What it gives non-technical staff

- A clean **web interface** at pagescms.org — sign in with GitHub, pick the repo, start editing.
- **Form-based editing** — no Markdown or code required. Every content type has a schema
  defined in `.pages.yml` (this file *is* the admin-panel definition).
- **Media manager** — drag-and-drop image / PDF / video uploads, with an in-app picker.
- **GitHub-backed saving** — every Save is a real commit (with the editor's name) to the repo.
- **Mobile-friendly** — content can be updated from a phone.

### What `.pages.yml` defines (7 content types + 4 media libraries)

| Content type | Files | Format | Used by |
|--------------|-------|--------|---------|
| Site Settings | `content/site.json` | JSON | global: contacts, leadership messages, admissions, stats, links |
| News Articles | `content/news/*.md` | Markdown + frontmatter | `/news` and `/news/[slug]` |
| Notices | `content/notices/*.md` | Markdown + frontmatter | `/notices`, PDF attachments |
| Academic Programs | `content/programs/*.md` | Markdown + frontmatter | `/academics` |
| Departments | `content/departments/*.json` | JSON | `/academics/cse`, `/academics/ee`, … |
| Faculty | `content/faculty/*.json` | JSON | department faculty tables |
| Placement Records | `content/placements/*.json` | JSON | `/placements` |

| Media library | Folder | Field category |
|---------------|--------|----------------|
| Images | `media/` | image |
| Documents (PDFs) | `media/docs/` | document |
| Videos | `media/videos/` | video |
| Department Videos | `media/departments/` | video |

**Why `.pages.yml` is trustworthy:** every construct in it was validated against the
official Pages CMS documentation (field types, `list: true` arrays, filename templates,
media sources, settings). It is the exact contract between the editor UI and the content files.

### The end-to-end editing flow

```
1. Staff member receives a new notice / photo / update
2. Opens pagescms.org → signs in with GitHub → opens "Notices"
3. Fills the form, uploads the PDF/photo, clicks Save
4. Pages CMS commits the change to GitHub (visible in the repo history)
5. Vercel detects the push → rebuilds → the site is live in ~1–2 minutes
6. Anyone can review the change in GitHub and revert it with one click
```

---

## 7. GitHub as the Content Host — Why It Wins

Everything — code, content, and media — lives in **one GitHub repository**. GitHub is not
just "hosting"; it is a full content-management substrate that costs nothing.

| Need | Git/GitHub provides |
|------|---------------------|
| Storage | Free public/private repos (1 GB recommended, ~100 MB per file) |
| Backup | Every commit is a backup; the repo can be cloned anywhere |
| Version history | Every news article and photo has a full edit history |
| Review & approval | Pull requests — a senior member can review before publish |
| Rollback | One click to revert any change |
| Audit trail | Exactly who changed what, when, and why |
| Access control | Repository permissions decide who can edit what |
| Disaster recovery | Clone → redeploy anywhere in minutes |
| Free tier | GitHub free plan is sufficient for this project's scale |

**This is versioning, backup, review, and audit — for free — that a database or S3 bucket
would need a team and custom code to replicate.**

---

## 8. Why This Is Better Than a Database

A database (MySQL/Postgres/MongoDB) solves "many users writing structured data with
complex queries." A college website does not need that. It needs *"a small team updating a
known set of pages, with trust and safety."* Compare honestly:

| Concern | Database + server | Git + files + Pages CMS |
|---------|-------------------|--------------------------|
| Setup | Install, configure, secure a DB + API + admin UI | Clone the repo, that's it |
| Hosting cost | Server + DB hosting, always on | Free (GitHub + Vercel) |
| Admin panel | Build & maintain custom UI or buy a CMS | Pages CMS is free and already built |
| Editing | Learn an admin system | Same — but simpler: a web form |
| Versioning | Usually none or bolt-on | **Built-in** — every change is a commit |
| Rollback | Manual DB restore | One click |
| Data loss | One bad migration can destroy data | Old versions always in Git |
| Security | DB creds, injection, patching, backups | Nothing to hack — static files |
| Content review | Custom workflow needed | GitHub pull requests |
| Hiring/findability | Developers must understand your custom backend | Plain files — anyone can read them |
| Vendor lock-in | Migration is an engineering project | Files are portable to any host |

**The database is not "better" — it is *heavier*. This project consciously chooses the
lightest tool that fully satisfies the requirements: content, not queries.**

---

## 9. Why This Is Better Than S3 / Object Storage

S3 (or Cloudflare R2, etc.) is *object storage* — it stores files, but it does **not**
generate pages, does not provide an editing interface, does not version content, and does
not deploy a website. Using S3 as the foundation would mean building:

- a content model + API + admin UI,
- an authentication system,
- a build/deploy pipeline,
- a preview/review system,
- backups and versioning —
**all from scratch, all to be maintained forever.**

| Concern | S3 + custom backend | GitHub repo + Pages CMS |
|---------|---------------------|--------------------------|
| Page generation | You build a server/renderer | Next.js build — done |
| Editing UI | You build it | Pages CMS — free, open source |
| Auth | You build it | GitHub login |
| Versioning | You build it | Git — native |
| Review | You build it | Pull requests — native |
| Cost | S3 + CloudFront + compute + engineering | Free |
| Maintenance | You own every bug | Community-maintained tools |

> "A bucket is where files live. A Git repository is where files live *and* where their
> entire story — who, when, why — is recorded, and where a whole ecosystem of tools
> already works for free." — the short version of this section.

---

## 10. Cost Comparison (per year, realistic)

| Component | Legacy (WP + server) | DB + backend approach | This project |
|-----------|----------------------|----------------------|--------------|
| Hosting | ₹15,000–50,000 | ₹20,000–1,20,000+ | **₹0** (Vercel free) |
| Database | MySQL (included) | ₹10,000–2,00,000 | **₹0** (files in Git) |
| CMS / admin | WP (free, but risky) | Custom build or SaaS | **₹0** (Pages CMS, OSS) |
| Storage | Server disk | S3 + egress | **₹0** (GitHub) |
| Backups | Manual | Add-on | **₹0** (Git history) |
| CDN | Extra | CloudFront extra | **₹0** (Vercel edge) |
| **Total** | **₹15k–50k+** | **₹30k–3 lakhs+** | **₹0** |

The only real cost is the **time to write content** — and that is now trivial, because
staff use a web form instead of code.

---

## 11. Security Model

Because the website is a set of static files with no server process:

- No SQL injection (no SQL).
- No PHP/WordPress exploits (no PHP).
- No admin panel to brute-force (editing happens via GitHub's secure OAuth login).
- No credentials or environment secrets required for builds or deploys.
- DDoS is absorbed by the CDN, not by a rented server.
- Content changes are commits — **accountable, reviewable, reversible**.

This is not "we patched it well" — it is "there is nothing to attack."

---

## 12. Performance

- Every page is pre-rendered static HTML served from a CDN edge (first byte in milliseconds).
- Images are served from the CDN; the site uses lazy loading and modern formats.
- No JavaScript framework pays the cost of server round-trips for content — content is already in the HTML.
- PDFs are viewed **inline** via a lightweight embedded viewer (`@embedpdf/react-pdf-viewer`), so visitors never have to download/leave the page.
- Legacy WordPress URLs are permanently redirected to the new routes (`next.config.ts`), so no bookmarks or search rankings are lost.

---

## 13. Tech Stack (what it is made of)

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 16** (App Router) | Static generation, file-based routing, best-in-class SEO |
| Language | **React 19 + TypeScript** | Type-safe, componentized, maintainable |
| Styling | **Tailwind CSS 4** | Fast, consistent design system, tiny CSS output |
| Animations | **GSAP + Motion** | Professional scroll animations and micro-interactions |
| PDF viewing | **@embedpdf/react-pdf-viewer** | Inline, lightweight, no downloads |
| CMS | **Pages CMS** (open source) | Free, GitHub-native, no database |
| Content parsing | **gray-matter** | Markdown + frontmatter |
| Hosting/CI | **Vercel** | Free static hosting, auto-deploy from Git, global CDN |

---

## 14. How to Work With This System

### For content staff (no technical skills)

1. Open **pagescms.org** and sign in with the college's GitHub account.
2. Pick the **mbs-college-website** repository.
3. Click the content type (News, Notices, Departments, Site Settings, …).
4. Edit / add content in the form; upload photos, PDFs, or videos where asked.
5. Press **Save** — the change is committed and the site updates automatically within ~2 minutes.

### For developers

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:3000
npm run build      # production build (runs prebuild → copies media)
npm start          # serve the production build locally
npm run lint       # lint
```

- Content lives in `content/`; media in `media/`; **never** edit the generated `public/media` / `public/docs` (they are rebuilt every deploy).
- To add a new editable content type, extend `.pages.yml` and add a loader in `src/lib/`.
- Legacy URL → new route mappings live in `next.config.ts`.

---

## 15. Frequently Asked Questions

**Q: What happens if GitHub is down?**
The website stays live — it is static files on a CDN. Only *editing* pauses temporarily.

**Q: How big can media be?**
GitHub recommends repos under 1 GB and files under ~100 MB. This project is well within
that; if it ever outgrows it, media can move to R2/S3 with URLs kept in the same content files
(the CMS and build pipeline don't change).

**Q: Do we need to buy anything?**
No. GitHub, Pages CMS, and Vercel free tiers cover the entire system.

**Q: What if the person maintaining it leaves?**
The repo is self-contained and portable. Anyone can clone it, read the plain files, and
redeploy — there is no proprietary backend holding the site hostage.

**Q: Is this just a phase, or is it the future?**
File-based + Git-native workflows are exactly where the industry is going (see the growth of
Git-based CMSs, static frameworks, and "content as code"). This architecture is not a
compromise — it is the destination.

---

## 16. Key Files Cheat-Sheet

| File | What it does |
|------|--------------|
| `.pages.yml` | Defines the entire CMS editing experience (schemas, media, settings) |
| `scripts/copy-media.mjs` | Prebuild step: media/ → public/ |
| `src/lib/content.ts` | Loads site config, news, notices, programs, faculty, placements |
| `src/lib/departments.ts` | Loads department JSON data |
| `next.config.ts` | Legacy WordPress URL redirects |
| `content/site.json` | Single source of truth for global site settings |
| `README.md` | Quick-start overview |
| **This file** | Complete architecture & working explanation |

---

*This document is part of the repository and may be used freely for explanations,
presentations, and training.*
