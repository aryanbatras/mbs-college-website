# Content Management with Pages CMS

## Overview

The MBSCET Website uses **Pages CMS** — a free, open-source content management system that works directly with GitHub. Non-technical staff can edit content through a clean web interface without touching code or learning Git.

### Why Pages CMS?

| Feature | Benefit |
|---------|---------|
| **Free forever** | MIT licensed, no vendor lock-in |
| **No database** | Content stored as files in GitHub |
| **No backend** | Works directly with your repository |
| **Rich text editor** | WYSIWYG editing for articles |
| **Media manager** | Drag-and-drop image/PDF upload |
| **Mobile support** | Edit from phones and tablets |
| **Auto-deploy** | Changes trigger Vercel deployment |

---

## Getting Started

### Step 1: Connect Repository

1. Go to [pagescms.org](https://pagescms.org)
2. Click "Sign in" and authenticate with GitHub
3. Click "Connect Repository"
4. Select `aryanbatras/mbs-college-website`
5. Select `main` branch
6. Pages CMS reads `.pages.yml` automatically

### Step 2: Access the Dashboard

**URL:** [pagescms.org](https://pagescms.org)

After connecting, you'll see the content dashboard:

```
┌──────────────────────────────────────────┐
│  Pages CMS — MBS College Website         │
├──────────────────────────────────────────┤
│  📰 News Articles          [+ New]       │
│  ├─ Webinar on Cyber Ethics              │
│  ├─ Python Libraries Workshop            │
│  └─ Independence Day Celebration         │
│                                          │
│  📋 Notices & Circulars    [+ New]       │
│  ├─ Sessional Exam Datesheet             │
│  └─ Admission Notice                     │
│                                          │
│  🎓 Academic Programs                    │
│  ├─ CSE                                  │
│  ├─ EE                                   │
│  └─ ECE                                  │
│                                          │
│  🏫 Departments                          │
│  ├─ CSE                                  │
│  ├─ EE                                   │
│  └─ ECE                                  │
│                                          │
│  👨‍🏫 Faculty                             │
│  ├─ CSE Faculty                          │
│  └─ EE Faculty                           │
│                                          │
│  📊 Placement Records                    │
│  └─ [+ New]                              │
│                                          │
│  ⚙️ Site Settings                       │
└──────────────────────────────────────────┘
```

---

## Creating Content

### News Article

1. Click "News Articles" → "+ New"
2. Fill in the form:

| Field | Description | Required |
|-------|-------------|----------|
| Title | Article headline | Yes |
| Date | Publication date | Yes |
| Category | Content type (Event, Workshop, etc.) | Yes |
| Image | Featured image | No |
| Content | Article body (rich text) | Yes |

3. Click "Save"
4. Website auto-updates via Vercel

**Example:**
```
Title: "CSE Department Organizes Workshop on AI"
Date: "2026-08-01"
Category: "Workshop"
Image: [Upload workshop photo]
Content: "The Department of Computer Science organized..."
```

---

### Notice

1. Click "Notices & Circulars" → "+ New"
2. Fill in the form:

| Field | Description | Required |
|-------|-------------|----------|
| Title | Notice title | Yes |
| Date | Issue date | Yes |
| PDF | Attachment file | No |
| Description | Brief description | No |

3. Click "Save"

---

### Department Update

1. Click "Departments"
2. Select the department (CSE, EE, etc.)
3. Edit fields:

| Field | Description |
|-------|-------------|
| Title | Department name |
| Intake | Number of seats |
| NBA | Accredited (true/false) |
| HOD | Head of Department details |
| Description | Department overview |
| Vision | Department vision |
| Mission | Department mission statements |
| Labs | List of laboratories |
| Images | Hero, lab, alumni photos |
| Syllabus | PDF documents |
| Notices | PDF notices |
| Videos | Lecture videos |

4. Click "Save"

---

### Faculty Update

1. Click "Faculty Members"
2. Select the department
3. Add or edit members:

| Field | Description |
|-------|-------------|
| Name | Faculty member name |
| Designation | Professor, Asst. Professor, etc. |
| Qualification | Ph.D., M.Tech, etc. |
| Specialization | Area of expertise |
| Photo | Profile photo |

4. Click "Save"

---

## Media Management

### Uploading Images

1. In any content editor, click an image field
2. Click "Upload" or drag and drop
3. Supported formats: JPG, PNG, WebP
4. Maximum size: 10MB
5. Images stored in `media/` folder

**Best practices:**
- Use 1920x1080 for hero images
- Use 800x600 for content images
- Optimize before uploading (use TinyPNG)

### Uploading PDFs

1. In any content editor, click a file field
2. Click "Upload" or drag and drop
3. Maximum size: 10MB
4. PDFs stored in `media/docs/` folder

**Best practices:**
- Use descriptive filenames
- Keep file size under 5MB
- Use PDF/A format for longevity

### Uploading Videos

1. In any content editor, click a video field
2. Click "Upload" or drag and drop
3. Supported formats: MP4, WebM
4. Maximum size: 100MB
5. Videos stored in `media/videos/` folder

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

## Workflow

### Daily Content Updates

```
1. Receive content (article, notice, photo)
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
5. Click "+ New" or select existing
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
9. Website auto-updates (1-2 minutes)
```

### Bulk Content Updates

1. Prepare all content in advance
2. Log in to Pages CMS
3. Create/update multiple items
4. Save each item
5. All changes deploy together

---

## Permissions & Access

### Current Setup

- **GitHub Repository Access:** Required for Pages CMS
- **Role:** Editor (can create/edit content)
- **Branch:** main (direct commits)

### Recommended Setup

For production, consider:

1. **Branch Protection Rules**
   - Require pull requests for main branch
   - Add required reviewers

2. **GitHub Actions**
   - Auto-deploy on merge
   - Preview deployments for PRs

3. **Role-based Access**
   - Admin: Full access
   - Editor: Create/edit content
   - Viewer: Read-only access

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Can't sign in | Ensure GitHub account has repository access |
| Content not saving | Check network connection, try refreshing |
| Image not uploading | Check file size (max 10MB), verify format |
| Changes not appearing | Wait for Vercel deployment (1-2 minutes) |
| PDF not loading | Check file URL, verify file exists |

### Getting Help

- **Pages CMS Documentation:** [pagescms.org/docs](https://pagescms.org/docs)
- **GitHub Repository:** [github.com/hunvreus/pagescms](https://github.com/hunvreus/pagescms)
- **Issues:** [github.com/hunvreus/pagescms/issues](https://github.com/hunvreus/pagescms/issues)

---

## Comparison: Before vs After

| Aspect | Before (Custom Admin) | After (Pages CMS) |
|--------|----------------------|-------------------|
| **Setup** | Custom code | Config file only |
| **Rich Text** | Basic textarea | Full WYSIWYG editor |
| **Media Upload** | Manual | Built-in drag & drop |
| **Validation** | Manual | Schema-based |
| **Multi-user** | Basic | Email invites |
| **Mobile** | Basic | Full responsive |
| **Maintenance** | We maintain | Community maintains |
| **Cost** | Free (self-hosted) | Free (hosted) |
| **Security** | Custom auth | GitHub OAuth |
| **Deployment** | Manual | Auto-deploy |

---

## Future Enhancements

Pages CMS is actively developing:

1. **Content Scheduling** — Publish at specific time
2. **Role-based Access** — Granular permissions
3. **File Storage Integration** — S3, R2 support
4. **Analytics** — Track content performance
5. **Comments** — Team feedback on content
6. **Preview Mode** — See changes before publishing

---

## Quick Reference

### URLs

- **Pages CMS:** [pagescms.org](https://pagescms.org)
- **Repository:** [github.com/aryanbatras/mbs-college-website](https://github.com/aryanbatras/mbs-college-website)
- **Website:** [mbscet.vercel.app](https://mbscet.vercel.app)

### Key Files

| File | Purpose |
|------|---------|
| `.pages.yml` | Pages CMS configuration |
| `content/site.json` | Global settings |
| `content/news/` | News articles |
| `content/notices/` | Official notices |
| `content/departments/` | Department data |
| `content/faculty/` | Faculty data |

### Support

- **Development Team:** Contact via email
- **Pages CMS Support:** [pagescms.org/docs](https://pagescms.org/docs)
- **GitHub Issues:** [github.com/hunvreus/pagescms/issues](https://github.com/hunvreus/pagescms/issues)
