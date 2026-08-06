# Department Pages

## Overview

Each department has its own dedicated page with comprehensive information, embedded PDFs, and interactive tabs. This documentation covers the structure, content, and management of department pages.

---

## Department Pages

| Department | URL | Intake | NBA |
|------------|-----|--------|-----|
| CSE | `/academics/cse` | 120 | ✅ |
| EE | `/academics/ee` | 30 | ✅ |
| ECE | `/academics/ece` | 30 | ❌ |
| ME | `/academics/me` | 30 | ✅ |
| Civil | `/academics/civil` | 60 | ❌ |
| IT | `/academics/it` | 60 | ❌ |
| MCA | `/academics/mca` | 60 | ❌ |

---

## Page Structure

### Hero Section
- Full-width department image
- Gradient overlay
- Department title and degree
- Intake seats display

### Quick Stats Bar
- Seats count
- Faculty count
- Labs count
- Established year

### Tabbed Navigation
10 tabs for different content sections:

| Tab | Content |
|-----|---------|
| Overview | Description, program details, highlights, quick links |
| Vision & Mission | Department vision and mission statements |
| PEOs | Program Educational Objectives |
| Faculty | Faculty member table |
| Labs | Lab images and list |
| Alumni | Alumni photo grid |
| Syllabus | Embedded PDF viewer with download |
| Notices | Embedded PDF viewer with download |
| Innovation | Video lectures and demonstrations |
| Contact | HOD contact information |

---

## Content Management

### Updating Department Data

**File:** `src/content/departments/{department}.json`

```json
{
  "slug": "cse",
  "title": "Computer Science & Engineering",
  "description": "Updated description...",
  "hod": {
    "name": "New HOD Name",
    "email": "hod.cse@mbscet.edu.in"
  }
}
```

### Adding Faculty

**File:** `src/content/faculty/{department}.json`

```json
[
  {
    "name": "New Faculty Member",
    "designation": "Assistant Professor",
    "qualification": "Ph.D.",
    "specialization": "Machine Learning"
  }
]
```

### Adding Lab Photos

1. Place images in `public/media/departments/{department}/labs/`
2. Update JSON:
```json
{
  "images": {
    "labs": [
      "/media/departments/cse/labs/lab1.jpg",
      "/media/departments/cse/labs/lab2.jpg"
    ]
  }
}
```

### Adding Alumni Photos

1. Place images in `public/media/departments/{department}/alumni/`
2. Update JSON:
```json
{
  "images": {
    "alumni": [
      "/media/departments/cse/alumni/al1.jpg",
      "/media/departments/cse/alumni/al2.jpg"
    ]
  }
}
```

### Adding Syllabus PDFs

1. Place PDFs in `public/docs/{department}/syllabus/`
2. Update JSON:
```json
{
  "syllabus": [
    { "title": "3rd Semester", "file": "/docs/cse/syllabus/3rd.pdf" },
    { "title": "4th Semester", "file": "/docs/cse/syllabus/4th.pdf" }
  ]
}
```

### Adding Notices

1. Place PDFs in `public/docs/{department}/notices/`
2. Update JSON:
```json
{
  "notices": [
    { "title": "Exam Schedule", "file": "/docs/cse/notices/exam.pdf" }
  ]
}
```

### Adding Videos

1. Place videos in `public/media/departments/{department}/innovative/`
2. Update JSON:
```json
{
  "videos": [
    { "title": "FCFS Algorithm", "src": "/media/departments/cse/innovative/fcfs.mp4" }
  ]
}
```

---

## Page Components

### CSE Department (Custom)

**File:** `src/components/sections/cse-department.tsx`

CSE has a custom component with additional features:
- Detailed lab list
- Alumni photo grid
- Video lectures
- Research papers

### Generic Department (Shared)

**File:** `src/components/sections/generic-department.tsx`

Used by all other departments:
- Configurable via props
- Same tabbed interface
- Responsive design

---

## Props Interface

```typescript
interface GenericDepartmentProps {
  program: Program;           // From content/programs/*.md
  faculty: FacultyMember[];   // From content/faculty/*.json
  heroImage: string;          // Hero section image
  labs: string[];             // Lab names list
  labImages: string[];        // Lab photo URLs
  alumniImages: string[];     // Alumni photo URLs
  videos: { title: string; src: string }[];
  syllabus: { title: string; file: string }[];
  notices: { title: string; file: string }[];
  contactHod: {
    name: string;
    email: string;
    phone: string;
  };
}
```

---

## PDF Integration

### Embedded PDF Viewer

Using `@embedpdf/react-pdf-viewer`:

```tsx
import { PdfEmbed } from "@/components/ui/pdf-viewer";

<PdfEmbed 
  src="/docs/cse/syllabus/3rd.pdf"
  title="3rd Semester Syllabus"
  height="600px"
/>
```

### Features

- Built-in toolbar
- Page navigation
- Zoom controls
- Print support
- Download option
- Mobile responsive

---

## Responsive Design

### Mobile (< 768px)

- Full-width hero
- Stacked stats
- Horizontal scroll tabs
- Single column content

### Tablet (768px - 1024px)

- Full-width hero
- 2-column stats
- Scrollable tabs
- 2-column content

### Desktop (> 1024px)

- Full-width hero
- 4-column stats
- All tabs visible
- Full layout

---

## SEO Optimization

### Meta Tags

```tsx
export const metadata = {
  title: "CSE Department - MBSCET",
  description: "Department of Computer Science & Engineering at MBSCET",
  openGraph: {
    title: "CSE Department",
    description: "NBA Accredited Department",
    images: ["/media/departments/cse/hero.jpg"],
  },
};
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "MBSCET",
  "department": {
    "@type": "Department",
    "name": "Computer Science & Engineering"
  }
}
```

---

## Performance Optimization

### Image Loading

```tsx
// Lazy loading
<img src="/media/departments/cse/labs/lab1.jpg" loading="lazy" />

// Priority loading (hero)
<img src="/media/departments/cse/hero.jpg" loading="eager" />
```

### PDF Loading

```tsx
// Dynamic import (code splitting)
const PdfEmbed = dynamic(
  () => import("@/components/ui/pdf-viewer"),
  { ssr: false }
);
```

---

## Troubleshooting

### Common Issues

**Issue:** Images not loading
**Solution:** Check file path in JSON, ensure file exists in public/

**Issue:** PDF not displaying
**Solution:** Verify PDF path, check file size (< 10MB)

**Issue:** Tab content not showing
**Solution:** Check data exists in JSON, verify array is not empty

**Issue:** Faculty table empty
**Solution:** Verify faculty JSON file exists and has data

---

## Adding a New Department

1. Create content file: `src/content/departments/new-dept.json`
2. Create faculty file: `src/content/faculty/new-dept.json`
3. Create page: `src/app/academics/new-dept/page.tsx`
4. Add media folders: `public/media/departments/new-dept/`
5. Add PDF folders: `public/docs/new-dept/`
6. Update navigation menus
7. Test all tabs and features