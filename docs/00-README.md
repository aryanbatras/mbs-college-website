# MBSCET Website - Project Documentation

## Mahant Bachittar Singh College of Engineering & Technology

### A Modern, Content-Driven College Website

---

## What is This Project?

The MBSCET Website is a **complete rebuild** of the official website for Mahant Bachittar Singh College of Engineering & Technology, Jammu. It transforms a legacy WordPress-based site into a **modern, fast, and maintainable** static website built with cutting-edge web technologies.

### Key Highlights

| Feature | Original Website | New Website |
|---------|------------------|-------------|
| **Technology** | WordPress + PHP | Next.js + React |
| **Performance** | Slow (server-rendered) | Instant (static generation) |
| **Content Management** | WordPress Dashboard | Pages CMS (free, open-source) |
| **Mobile Experience** | Basic responsive | Mobile-first, optimized |
| **PDF Viewing** | External links | Embedded inline viewer |
| **Hosting Cost** | Server required | Free static hosting |
| **Security** | Vulnerable to attacks | Static, no attack surface |
| **Maintenance** | Requires developer | Non-technical staff can manage |

---

## Why This Project Exists

The original MBSCET website (mbscet.edu.in) suffers from:

1. **Slow Performance** - WordPress with heavy plugins
2. **Poor Mobile Experience** - Not optimized for phones
3. **Difficult Content Updates** - Requires technical knowledge
4. **Security Risks** - PHP vulnerabilities, plugin exploits
5. **High Hosting Costs** - Requires dedicated server
6. **Broken Links** - Many pages redirect to old URLs

This project solves all these problems with a **static-first architecture** that is:

- **10x Faster** - Pages load instantly
- **Free to Host** - Deploy to Vercel/Netlify at no cost
- **Easier to Update** - Edit via Pages CMS web interface
- **More Secure** - No server, no database, no vulnerabilities
- **Better SEO** - Static pages rank higher in Google

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Development URL:** http://localhost:3000

---

## Project Structure

```
mbs-college-website/
├── content/                      # ALL CONTENT (separate from code)
│   ├── site.json                 # Site configuration
│   ├── departments/              # Department data (JSON)
│   ├── programs/                 # Program descriptions (Markdown)
│   ├── news/                     # News articles (Markdown)
│   ├── notices/                  # Official notices (Markdown)
│   ├── faculty/                  # Faculty data (JSON)
│   └── placements/               # Placement records (JSON)
├── media/                        # ALL MEDIA (images, PDFs, videos)
│   ├── departments/              # Department-specific media
│   ├── homepage/                 # Homepage media
│   ├── management/               # Leadership photos
│   └── docs/                     # PDF documents
├── src/                          # SOURCE CODE ONLY
│   ├── app/                      # Next.js pages (routing)
│   ├── components/               # React components
│   └── lib/                      # Utilities and helpers
├── public/                       # Build output (auto-generated)
├── scripts/                      # Build scripts
├── docs/                         # This documentation
├── .pages.yml                    # Pages CMS configuration
└── package.json                  # Dependencies
```

**Key Design Decision:** Content and media are stored **outside** the source code, making it easy for non-technical staff to manage without touching code.

---

## Content Management with Pages CMS

### What is Pages CMS?

Pages CMS is a **free, open-source CMS** that works directly with GitHub repositories. It provides a clean web interface for editing content without touching code or learning Git.

### How It Works

```
┌─────────────────────────────────────────────────────────┐
│                    Pages CMS UI                          │
│  (Non-technical staff edits content here)               │
└─────────────────────┬───────────────────────────────────┘
                      │ Saves changes
                      ▼
┌─────────────────────────────────────────────────────────┐
│                 GitHub Repository                        │
│  .pages.yml          ← Configuration                    │
│  content/news/       ← Markdown files                   │
│  media/              ← Images, PDFs, videos             │
└─────────────────────┬───────────────────────────────────┘
                      │ Triggers build
                      ▼
┌─────────────────────────────────────────────────────────┐
│                    Vercel                                 │
│  (Auto-deploys on every push)                           │
└─────────────────────────────────────────────────────────┘
```

### Getting Started

1. Go to [pagescms.org](https://pagescms.org)
2. Sign in with GitHub
3. Connect repository: `aryanbatras/mbs-college-website`
4. Start editing content!

### Content Types

| Type | Location | Format |
|------|----------|--------|
| News Articles | `content/news/` | Markdown |
| Notices | `content/notices/` | Markdown |
| Programs | `content/programs/` | Markdown |
| Departments | `content/departments/` | JSON |
| Faculty | `content/faculty/` | JSON |
| Placements | `content/placements/` | JSON |
| Site Settings | `content/site.json` | JSON |

---

## Documentation Index

| Document | Description |
|----------|-------------|
| [01-architecture.md](./01-architecture.md) | System architecture and design decisions |
| [02-technology-stack.md](./02-technology-stack.md) | Technologies used and why |
| [03-content-management.md](./03-content-management.md) | How to manage website content with Pages CMS |
| [04-storage-structure.md](./04-storage-structure.md) | File organization and storage |
| [05-department-pages.md](./05-department-pages.md) | Department page structure |
| [06-admin-dashboard.md](./06-admin-dashboard.md) | Pages CMS setup and usage guide |
| [07-deployment.md](./07-deployment.md) | How to deploy the website |
| [08-comparison.md](./08-comparison.md) | Comparison with original site |
| [09-components.md](./09-components.md) | Design system and components |

---

## For Presentations

This documentation is designed to be used for:

1. **Project Presentations** - Show stakeholders the new system
2. **Training Materials** - Teach staff how to manage content
3. **Technical Documentation** - Guide developers on the codebase
4. **Comparison Analysis** - Demonstrate improvements over legacy

### Key Talking Points

- **Static Generation** = Faster, cheaper, more secure
- **Pages CMS** = Free, open-source content management
- **JSON/Markdown Content** = Easy to update, no coding required
- **Component Architecture** = Reusable, maintainable code
- **Mobile-First Design** = Better user experience
- **SEO Optimized** = Higher search rankings

---

## Support

For questions or issues, contact the development team or refer to the detailed documentation in each section.

- **Pages CMS Docs:** [pagescms.org/docs](https://pagescms.org/docs)
- **Repository:** [github.com/aryanbatras/mbs-college-website](https://github.com/aryanbatras/mbs-college-website)
- **Website:** [mbscet.vercel.app](https://mbscet.vercel.app)
