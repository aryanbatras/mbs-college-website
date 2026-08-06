# Content Management System

## Overview

The MBSCET Website uses **Pages CMS** — a free, open-source CMS that works directly with GitHub repositories. Non-technical staff can edit content through a clean web interface without touching code or learning Git.

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

---

## Getting Started with Pages CMS

### Step 1: Connect Your Repository

1. Go to [pagescms.org](https://pagescms.org)
2. Sign in with your GitHub account
3. Click "Connect Repository"
4. Select `aryanbatras/mbs-college-website`
5. Select `main` branch

### Step 2: Start Editing

Pages CMS reads the `.pages.yml` configuration file automatically. You'll see:

```
┌──────────────────────────────────────────┐
│  Pages CMS — MBS College Website         │
├──────────────────────────────────────────┤
│  📰 News Articles          [+ New]       │
│  📋 Notices & Circulars    [+ New]       │
│  🎓 Academic Programs                     │
│  🏫 Departments                          │
│  👨‍🏫 Faculty                             │
│  📊 Placement Records                     │
│  ⚙️ Site Settings                       │
└──────────────────────────────────────────┘
```

---

## Content Types

### 1. News Articles

**Location:** `content/news/`
**Format:** Markdown with YAML frontmatter

**Creating a new article:**
1. Click "News Articles" → "+ New"
2. Fill in the form:
   - **Title** — Article headline (required)
   - **Date** — Publication date (required)
   - **Category** — Select from dropdown
   - **Image** — Upload or select from media library
   - **Content** — Write using the rich text editor
3. Click "Save"

**Example output:**
```markdown
---
title: "Workshop on Artificial Intelligence"
date: 2026-08-01
category: "Workshop"
image: "/media/general/ai-workshop.jpg"
---

The Department of CSE organized a workshop on AI...

## Highlights

- 50 students participated
- Hands-on coding sessions
```

---

### 2. Notices & Circulars

**Location:** `content/notices/`
**Format:** Markdown with YAML frontmatter

**Creating a new notice:**
1. Click "Notices & Circulars" → "+ New"
2. Fill in the form:
   - **Title** — Notice title (required)
   - **Date** — Issue date (required)
   - **PDF** — Upload PDF attachment (optional)
   - **Description** — Brief description
3. Click "Save"

---

### 3. Academic Programs

**Location:** `content/programs/`
**Format:** Markdown with YAML frontmatter

**Editing a program:**
1. Click "Academic Programs"
2. Select the program (CSE, EE, ECE, etc.)
3. Edit fields:
   - **Program Code** — e.g., "CSE"
   - **Degree** — e.g., "B.Tech"
   - **Intake** — Number of seats
   - **Description** — Program description
   - **Vision & Mission** — Department goals
   - **PEOs** — Program Educational Objectives
   - **Labs** — List of laboratories
4. Click "Save"

---

### 4. Departments

**Location:** `content/departments/`
**Format:** JSON

**Editing a department:**
1. Click "Departments"
2. Select the department
3. Edit fields:
   - **Basic Info** — Name, intake, duration
   - **HOD Details** — Name, email, phone
   - **Description** — Department overview
   - **Vision & Mission** — Department goals
   - **Images** — Hero, labs, alumni photos
   - **Syllabus** — Upload PDF documents
   - **Notices** — Upload PDF notices
   - **Videos** — Upload lecture videos
4. Click "Save"

---

### 5. Faculty

**Location:** `content/faculty/`
**Format:** JSON

**Editing faculty:**
1. Click "Faculty Members"
2. Select the department (CSE, EE, etc.)
3. Add or edit faculty members:
   - **Name** — Faculty member name
   - **Designation** — Professor, Asst. Professor, etc.
   - **Qualification** — Ph.D., M.Tech, etc.
   - **Specialization** — Area of expertise
   - **Photo** — Upload or select photo
4. Click "Save"

---

### 6. Placement Records

**Location:** `content/placements/`
**Format:** JSON

**Adding a placement record:**
1. Click "Placement Records" → "+ New"
2. Fill in the form:
   - **Title** — Record title
   - **Year** — Academic year
   - **Department** — Select department
   - **PDF** — Upload placement record
3. Click "Save"

---

### 7. Site Settings

**Location:** `content/site.json`
**Format:** JSON

**Editing site settings:**
1. Click "Site Settings"
2. Edit global configuration:
   - **College Name** — Full name
   - **Contact Info** — Phone, email, address
   - **Social Links** — Facebook, Instagram, etc.
   - **Vision & Mission** — Institution goals
   - **Statistics** — Departments, intake, alumni
   - **Top Recruiters** — Company names
3. Click "Save"

---

## Media Management

### Uploading Images

1. In any content editor, click the image field
2. Click "Upload" or drag and drop
3. Images are stored in `media/` folder
4. URL is automatically written to content

### Uploading Documents (PDFs)

1. In any content editor, click the file field
2. Click "Upload" or drag and drop
3. PDFs are stored in `media/docs/` folder
4. URL is automatically written to content

### Uploading Videos

1. In any content editor, click the video field
2. Click "Upload" or drag and drop
3. Videos are stored in `media/videos/` folder
4. URL is automatically written to content

---

## Content Structure

### File Organization

```
content/
├── site.json                 # Global settings
├── news/                     # News articles
│   ├── 2026-08-01-workshop.md
│   └── 2026-07-27-placement.md
├── notices/                  # Official notices
│   ├── 2026-08-01-exam-dates.md
│   └── 2026-07-15-admission.md
├── programs/                 # Academic programs
│   ├── cse.md
│   ├── ee.md
│   └── ece.md
├── departments/              # Department data
│   ├── cse.json
│   ├── ee.json
│   └── ece.json
├── faculty/                  # Faculty data
│   ├── cse.json
│   └── ee.json
└── placements/               # Placement records
    └── cse-2024.json
```

### Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| News | `{YYYY-MM-DD}-{slug}.md` | `2026-08-01-workshop.md` |
| Notices | `{YYYY-MM-DD}-{slug}.md` | `2026-08-01-exam-dates.md` |
| Programs | `{code}.md` | `cse.md` |
| Departments | `{slug}.json` | `cse.json` |
| Faculty | `{dept}.json` | `cse.json` |

---

## Configuration Reference

The `.pages.yml` file at the repository root defines all content types and media sources.

### Media Sources

```yaml
media:
  - name: images
    input: media
    output: /media
    categories: [image]

  - name: documents
    input: media/docs
    output: /media/docs
    categories: [document]

  - name: videos
    input: media/videos
    output: /media/videos
    categories: [video]
```

### Content Types

```yaml
content:
  - name: news
    label: News Articles
    type: collection
    path: content/news
    filename: "{year}-{month}-{day}-{primary}.md"
    format: yaml-frontmatter
    fields:
      - name: title
        type: string
        required: true
      - name: date
        type: date
        required: true
      - name: category
        type: select
        options: [Campus, Event, Workshop, Seminar]
      - name: image
        type: image
        options:
          media: images
      - name: body
        type: rich-text
```

---

## Workflow

### For Non-Technical Staff

```
1. Receive content (article, notice, update)
         │
         ▼
2. Go to pagescms.org
         │
         ▼
3. Sign in with GitHub
         │
         ▼
4. Navigate to content type
         │
         ▼
5. Click "+ New" or edit existing
         │
         ▼
6. Fill in form fields
         │
         ▼
7. Upload images/PDFs if needed
         │
         ▼
8. Click "Save"
         │
         ▼
9. Website auto-updates (Vercel deployment)
```

### For Technical Staff

```
1. Edit content files directly
         │
         ▼
2. Test locally (npm run dev)
         │
         ▼
3. Commit to Git
         │
         ▼
4. Push to repository
         │
         ▼
5. Pages CMS syncs automatically
         │
         ▼
6. Vercel deploys to production
```

---

## Best Practices

### Do's

✅ Use Pages CMS for all content editing
✅ Add descriptive titles to articles
✅ Upload high-quality images (1920x1080 recommended)
✅ Use consistent naming conventions
✅ Add alt text to images for accessibility
✅ Preview content before saving

### Don'ts

❌ Don't edit content files directly in GitHub (use Pages CMS)
❌ Don't upload files larger than 10MB
❌ Don't use special characters in filenames
❌ Don't delete media files that are referenced in content
❌ Don't commit large binary files to Git

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Content not appearing | Check if file was saved, wait for Vercel deployment |
| Image not loading | Verify image path in content, check media folder |
| PDF not downloading | Check file URL, ensure file exists in media/docs |
| Can't upload file | Check file size (max 10MB), verify extension |
| Changes not saving | Check network connection, try refreshing page |

### Getting Help

- **Pages CMS Docs:** [pagescms.org/docs](https://pagescms.org/docs)
- **GitHub Issues:** [github.com/hunvreus/pagescms/issues](https://github.com/hunvreus/pagescms/issues)
- **Development Team:** Contact via email or Slack

---

## Comparison: Before vs After

| Aspect | Before (Custom Admin) | After (Pages CMS) |
|--------|----------------------|-------------------|
| Setup | Custom code required | Config file only |
| Rich Text | Basic textarea | Full WYSIWYG editor |
| Media Upload | Manual implementation | Built-in drag & drop |
| Validation | Manual checks | Schema-based validation |
| Multi-user | Basic | Email invites |
| Mobile | Basic | Full responsive |
| Maintenance | We maintain | Community maintains |
| Cost | Free (self-hosted) | Free (hosted) |

---

## Future Enhancements

1. **Content Scheduling** — Publish at specific time (coming soon in Pages CMS)
2. **Role-based Access** — Different permissions for different users (coming soon)
3. **File Storage Integration** — Connect S3, R2 for large files (coming soon)
4. **Analytics Integration** — Track content performance
5. **Comments System** — Team feedback on content
