# Admin Dashboard

## Overview

The MBSCET Website includes a simple admin dashboard for managing news articles and content. It provides a user-friendly interface for non-technical staff to create and publish content.

---

## Accessing the Dashboard

**URL:** `http://localhost:3000/admin` (development)
**URL:** `https://your-domain.com/admin` (production)

---

## Features

### 1. Article Management

- Create new articles
- Set publication date
- Categorize content
- Write in Markdown
- Auto-generate filenames

### 2. Content Preview

- Live preview of Markdown
- Formatting guide
- Category selection

### 3. File Management

- Automatic file creation
- Proper naming convention
- Date-based organization

---

## Creating an Article

### Step 1: Navigate to Admin

Go to `/admin` in your browser

### Step 2: Click "Create Article"

Click the "Create Article" tab

### Step 3: Fill in Details

| Field | Description | Required |
|-------|-------------|----------|
| Title | Article headline | Yes |
| Date | Publication date | Yes |
| Category | Content type | Yes |
| Content | Article body | Yes |

### Step 4: Write Content

Use Markdown syntax:

```markdown
## Heading

Paragraph text with **bold** and *italic*.

### Subheading

- List item 1
- List item 2

> Blockquote

[Link text](https://example.com)
```

### Step 5: Submit

Click "Create Article" button

### Step 6: Deploy

The article is saved as a markdown file. Deploy to make it live.

---

## Markdown Syntax Guide

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
```

### Lists

```markdown
- Unordered item
- Another item

1. Ordered item
2. Another item
```

### Links

```markdown
[Link text](https://example.com)
```

### Images

```markdown
![Alt text](/media/news/image.jpg)
```

### Code

```markdown
`Inline code`

```code block```
```

### Blockquotes

```markdown
> This is a blockquote
```

---

## Article Structure

### Frontmatter

```yaml
---
title: "Article Title"
date: "2024-01-15"
category: "Event"
---
```

### Content Body

```markdown
Article content goes here...

## Subheading

More content...
```

### Output File

**Location:** `src/content/news/2024-01-15-article-title.md`

---

## Categories

| Category | Description |
|----------|-------------|
| News | General news articles |
| Event | College events |
| Placement | Placement drives |
| Achievement | Student/faculty achievements |
| Workshop | Technical workshops |
| Seminar | Guest lectures/seminars |

---

## API Endpoint

### Create Article

**POST** `/api/admin/create-article`

**Request Body:**

```json
{
  "title": "New Workshop",
  "date": "2024-01-15",
  "category": "Workshop",
  "content": "Article content..."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Article created successfully",
  "filename": "2024-01-15-new-workshop.md"
}
```

---

## File Output

### Naming Convention

```
{YYYY-MM-DD}-{slug}.md

Examples:
2024-01-15-new-workshop.md
2024-01-20-placement-drive.md
```

### File Location

```
src/content/news/2024-01-15-new-workshop.md
```

---

## Security Considerations

### Current Implementation

- No authentication (for simplicity)
- Local file system access
- No user management

### Recommended Enhancements

1. **Add Authentication**
   - Username/password login
   - Session management
   - Role-based access

2. **Input Validation**
   - Sanitize Markdown
   - Prevent XSS attacks
   - File size limits

3. **Audit Logging**
   - Track who created what
   - Log content changes
   - Version history

---

## Limitations

| Limitation | Current | Recommended |
|------------|---------|-------------|
| Authentication | None | Required |
| User roles | Single | Multiple |
| File uploads | No | Yes |
| Image management | Manual | Integrated |
| Content scheduling | No | Yes |
| Draft mode | No | Yes |

---

## Usage Examples

### Example 1: News Article

**Title:** "CSE Department Organizes Workshop on AI"
**Date:** "2024-01-15"
**Category:** "Workshop"

**Content:**
```markdown
The Department of Computer Science & Engineering organized a one-day workshop on Artificial Intelligence...

## Highlights

- 50 students participated
- Hands-on sessions with Python
- Certificate distribution

## About the Workshop

The workshop covered basic concepts of machine learning...
```

### Example 2: Placement News

**Title:** "Campus Placement Drive by TCS"
**Date:** "2024-01-20"
**Category:** "Placement"

**Content:**
```markdown
TCS conducted a campus placement drive for final year students...

## Results

- 25 students selected
- Package: 3.5 LPA
- Roles: Software Developer

## Photo Gallery

![Placement Drive](/media/news/tcs-placement.jpg)
```

---

## Best Practices

### Content Writing

✅ Write clear, concise headlines
✅ Use proper Markdown formatting
✅ Add relevant categories
✅ Include images when possible
✅ Proofread before submitting

### File Management

✅ Use descriptive titles
✅ Include dates in filenames
✅ Organize by category
✅ Archive old content

---

## Troubleshooting

### Common Issues

**Issue:** Article not appearing
**Solution:** Check file was saved, rebuild site

**Issue:** Markdown not rendering
**Solution:** Verify syntax is correct

**Issue:** Images not loading
**Solution:** Check image path in Markdown

**Issue:** API error
**Solution:** Check server logs, verify request format

---

## Future Enhancements

1. **Rich Text Editor** - WYSIWYG editing
2. **Image Upload** - Direct upload interface
3. **Content Scheduling** - Publish at specific time
4. **Draft System** - Save drafts before publishing
5. **Version History** - Track changes over time
6. **User Management** - Multiple authors/editors
7. **Content Review** - Approval workflow