# Content Management System

## Overview

The MBSCET Website uses a **file-based content management system** where all content is stored as simple text files (JSON and Markdown). This approach makes content management accessible to non-technical staff while maintaining version control and quality.

---

## Content Types

### 1. JSON Files (Structured Data)

Used for:
- Department information
- Site configuration
- Faculty data

**Location:** `src/content/`

**When to use:**
- Data with specific fields (name, email, phone)
- Lists of items (labs, highlights)
- Configuration data

---

### 2. Markdown Files (Article Content)

Used for:
- News articles
- Official notices
- Program descriptions

**Location:** `src/content/news/`, `src/content/notices/`, `src/content/programs/`

**When to use:**
- Long-form content
- Articles with text formatting
- Content with dates

---

## How to Edit Content

### Editing a Department

**File:** `src/content/departments/cse.json`

```json
{
  "slug": "cse",
  "title": "Computer Science & Engineering",
  "description": "Department description here...",
  "hod": {
    "name": "Dr. Amrik Singh",
    "email": "hod.cse@mbscet.edu.in",
    "phone": "+91-9419130161"
  },
  "labs": [
    "Programming Lab",
    "Data Structures Lab"
  ]
}
```

**Steps:**
1. Open the JSON file in any text editor
2. Modify the values
3. Save the file
4. The website updates automatically

---

### Creating a News Article

**File:** `src/content/news/YYYY-MM-DD-article-title.md`

```markdown
---
title: "New Workshop on AI"
date: "2024-01-15"
category: "Event"
---

The Department of Computer Science organized a workshop on Artificial Intelligence...

## Highlights

- 50 students participated
- Hands-on coding sessions
- Certificate distribution
```

**Steps:**
1. Create a new file with date prefix
2. Add frontmatter (title, date, category)
3. Write content in Markdown
4. Save the file

---

### Editing Faculty Data

**File:** `src/content/faculty/cse.json`

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

## Content Structure

### Site Configuration

**File:** `src/content/site.json`

Contains:
- College name and tagline
- Contact information
- Social media links
- Vision and mission
- Chairman/Principal messages
- Management team

---

### Department Data

**Files:** `src/content/departments/*.json`

Each department has:
- Basic info (name, intake, duration)
- Vision and mission
- Program objectives (PEOs)
- Lab list
- HOD contact
- Images (hero, labs, alumni)
- Syllabus and notices

---

### Program Data

**Files:** `src/content/programs/*.md`

Each program has:
- Frontmatter (code, title, intake)
- Description
- Vision and mission
- PEOs
- Labs
- Related links

---

## Content Workflow

### For Non-Technical Staff

```
1. Receive content (article, notice, update)
         │
         ▼
2. Open appropriate file
         │
         ▼
3. Edit content
         │
         ▼
4. Save file
         │
         ▼
5. Send to developer for deployment
```

### For Technical Staff

```
1. Edit content files
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
5. Auto-deploy to production
```

---

## Admin Dashboard

**URL:** `/admin`

The admin dashboard provides a simple interface for creating articles:

1. Navigate to `/admin`
2. Click "Create Article"
3. Enter title, date, category
4. Write content in Markdown
5. Click "Create Article"

**Output:** Creates a new markdown file in `src/content/news/`

---

## Image Management

### Adding Images

1. Place image in appropriate folder:
   - `public/media/departments/{dept}/labs/`
   - `public/media/departments/{dept}/alumni/`
   - `public/media/homepage/campus/`
   - `public/media/management/`

2. Reference in content:
   ```json
   {
     "images": {
       "hero": "/media/departments/cse/hero.jpg"
     }
   }
   ```

### Image Naming Convention

```
{department}-{type}-{description}.{ext}

Examples:
cse-lab-computer.jpg
ee-alumni-student.png
homepage-campus-main.jpg
```

---

## PDF Management

### Adding PDFs

1. Place PDF in appropriate folder:
   - `public/docs/{department}/syllabus/`
   - `public/docs/{department}/notices/`
   - `public/docs/placement/`

2. Reference in content:
   ```json
   {
     "syllabus": [
       { "title": "3rd Semester", "file": "/docs/cse/syllabus/3rd.pdf" }
     ]
   }
   ```

### PDF Naming Convention

```
{department}-{type}-{semester/year}.pdf

Examples:
cse-syllabus-3rd-4th.pdf
ee-placement-2024.pdf
placement-cse-record.pdf
```

---

## Content Validation

### Required Fields

**Department JSON:**
- `slug` (string, unique)
- `title` (string)
- `description` (string)
- `hod.name` (string)
- `hod.email` (string)

**News Markdown:**
- `title` (frontmatter)
- `date` (frontmatter, YYYY-MM-DD)
- Content (Markdown body)

---

## Best Practices

### Do's

✅ Use descriptive filenames
✅ Add dates to news/notice files
✅ Keep JSON valid (use linter)
✅ Test locally before deploying
✅ Use consistent naming conventions

### Don'ts

❌ Don't edit files while build is running
❌ Don't commit large files (>10MB)
❌ Don't use special characters in filenames
❌ Don't mix content types in same folder

---

## Backup & Recovery

### Automatic Backup

All content is version-controlled with Git:

```bash
# View history
git log --oneline src/content/

# Restore previous version
git checkout HEAD~1 -- src/content/news/article.md
```

### Manual Backup

```bash
# Backup content
cp -r src/content/ ~/backup/content/
```

---

## Limitations

| Limitation | Current | Recommended |
|------------|---------|-------------|
| Max file size | 1MB | 500KB |
| Max images per page | 20 | 10 |
| Max PDFs per department | 10 | 5 |
| Max news articles | 500 | 100/year |

---

## Future Enhancements

1. **WYSIWYG Editor** - Visual markdown editing
2. **Image Upload** - Direct upload via admin
3. **Content Scheduling** - Publish at specific time
4. **Draft Mode** - Preview before publishing
5. **Content Versioning** - Track changes over time