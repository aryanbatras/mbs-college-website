# Storage & File Structure

## Overview

The MBSCET Website uses a hierarchical file structure for organizing all content, media, and documents. This structure is designed for clarity, maintainability, and scalability.

---

## Project Structure

```
mbs-college-website/
├── content/                    # ALL CONTENT (separate from code)
│   ├── site.json               # Site configuration
│   ├── departments/            # Department data (JSON)
│   │   ├── cse.json
│   │   ├── ee.json
│   │   ├── ece.json
│   │   ├── me.json
│   │   ├── civil.json
│   │   ├── it.json
│   │   └── mca.json
│   ├── programs/               # Program descriptions (Markdown)
│   │   ├── cse.md
│   │   ├── ee.md
│   │   └── ...
│   ├── news/                   # News articles (Markdown)
│   ├── notices/                # Official notices (Markdown)
│   └── faculty/                # Faculty data (JSON)
├── media/                      # ALL MEDIA (images, PDFs, videos)
│   ├── departments/            # Department-specific media
│   │   ├── cse/
│   │   │   ├── faculty/       # Faculty photos
│   │   │   ├── alumni/        # Alumni photos
│   │   │   ├── labs/          # Lab photos
│   │   │   └── innovative/    # Teaching videos
│   │   ├── ee/
│   │   └── ...
│   ├── homepage/               # Homepage media
│   ├── management/             # Leadership photos
│   └── docs/                   # PDF documents
├── src/                        # SOURCE CODE ONLY
├── public/                     # Build output (auto-generated)
├── scripts/                    # Build scripts
└── docs/                       # Documentation
```

**Key Design:** Content (`content/`) and media (`media/`) are stored at the root level, completely separate from source code (`src/`). This makes it easy for non-technical staff to manage content without touching code.

---

## File Naming Conventions

### Images

```
{category}-{type}-{description}.{ext}

Examples:
cse-lab-main.jpg
ee-alumni-student.png
homepage-campus-admin.jpg
management-chairman.jpg
```

### PDFs

```
{department}-{type}-{details}.pdf

Examples:
cse-syllabus-3rd-4th.pdf
ee-placement-2024.pdf
placement-cse-record.pdf
```

### Markdown Articles

```
{YYYY-MM-DD}-{slug}.md

Examples:
2024-01-15-workshop-on-ai.md
2024-01-20-placement-drive.md
```

### JSON Data Files

```
{identifier}.json

Examples:
cse.json
site.json
cse.json (faculty)
```

---

## Content File Formats

### Department JSON Schema

```json
{
  "slug": "cse",
  "title": "Computer Science & Engineering",
  "degree": "B.Tech",
  "intake": 120,
  "duration": "4 years",
  "eligibility": "10+2 (PCM)",
  "established": 1999,
  "nba": true,
  "hod": {
    "name": "Dr. Amrik Singh",
    "email": "hod.cse@mbscet.edu.in",
    "phone": "+91-9419130161"
  },
  "description": "...",
  "vision": "...",
  "mission": ["...", "..."],
  "peos": ["...", "..."],
  "labs": ["Programming Lab", "..."],
  "images": {
    "hero": "/media/departments/cse/hero.jpg",
    "labs": ["/media/departments/cse/labs/lab1.jpg"],
    "alumni": ["/media/departments/cse/alumni/al1.jpg"]
  },
  "videos": [{"title": "...", "src": "..."}],
  "syllabus": [{"title": "...", "file": "..."}],
  "notices": [{"title": "...", "file": "..."}],
  "highlights": ["...", "..."],
  "relatedTabs": [{"label": "...", "url": "..."}]
}
```

### News Markdown Schema

```markdown
---
title: "Article Title"
date: "2024-01-15"
category: "Event"
image: "/media/news/event.jpg"
---

Article content in Markdown format...

## Subheading

More content...
```

### Faculty JSON Schema

```json
[
  {
    "name": "Dr. Amrik Singh",
    "designation": "Professor & HOD",
    "qualification": "Ph.D.",
    "specialization": "Computer Networks",
    "photo": "/media/management/principal-new.jpeg"
  }
]
```

---

## Storage Limits

### Current Usage

| Category | Files | Size |
|----------|-------|------|
| Images | ~600 | ~150MB |
| PDFs | ~15 | ~50MB |
| Videos | ~10 | ~200MB |
| Markdown | ~50 | ~1MB |
| JSON | ~15 | ~100KB |
| **Total** | **~690** | **~400MB** |

### Recommended Limits

| Category | Max Files | Max Size |
|----------|-----------|----------|
| Images | 10,000 | 2GB |
| PDFs | 100 | 500MB |
| Videos | 50 | 1GB |
| Markdown | 1,000 | 50MB |
| JSON | 50 | 10MB |

### GitHub Limits

- **Repository size:** 1GB recommended
- **File size:** 100MB per file
- **Large File Storage (LFS):** For files > 100MB

---

## Media Organization Tips

### Do's

✅ Use descriptive folder names
✅ Organize by department/type
✅ Use consistent naming conventions
✅ Compress images before uploading
✅ Use WebP format when possible

### Don'ts

❌ Don't mix departments in same folder
❌ Don't use spaces in filenames
❌ Don't upload files > 10MB without compression
❌ Don't store temporary files in public/

---

## Backup Strategy

### Automatic (Git)

```bash
# All content is version-controlled
git add .
git commit -m "Update CSE department"
git push
```

### Manual Backup

```bash
# Backup content folder
tar -czf backup-$(date +%Y%m%d).tar.gz content/

# Backup media folder
tar -czf media-backup-$(date +%Y%m%d).tar.gz media/
```

---

## Migration Guide

### From Old Structure

```
Old: public/images/cse/photo1.jpg
New: public/media/departments/cse/labs/photo1.jpg

Old: public/documents/syllabus.pdf
New: public/docs/cse/syllabus/syllabus-3rd-4th.pdf
```

### Step-by-Step

1. Create new folder structure
2. Move files to appropriate folders
3. Update content references
4. Test locally
5. Deploy

---

## Future Considerations

1. **Cloud Storage** - Migrate large media to S3/Cloudinary
2. **CDN Integration** - Serve media via CDN
3. **Image Optimization** - Automatic WebP conversion
4. **Video Hosting** - YouTube/Vimeo for videos
5. **Document Viewer** - Embedded PDF viewer