# Technology Stack

## Overview

The MBSCET Website is built with modern, industry-standard technologies chosen for performance, maintainability, and developer experience.

---

## Core Technologies

### Next.js 16

**What it is:** A React framework for building web applications

**Why we chose it:**
- Static Site Generation (SSG) for instant page loads
- File-based routing for simple navigation
- Built-in image optimization
- Server-side rendering when needed
- Excellent SEO support

**Key Features Used:**
- App Router (latest Next.js architecture)
- Static generation with `generateStaticParams`
- Server Components for data fetching
- Client Components for interactivity

```tsx
// Example: Static page generation
export async function generateStaticParams() {
  return getPrograms().map((p) => ({ slug: p.slug }));
}
```

---

### React 19

**What it is:** A JavaScript library for building user interfaces

**Why we chose it:**
- Component-based architecture
- Large ecosystem of libraries
- Excellent developer tools
- Strong TypeScript support

**Key Features Used:**
- Server Components (reduced bundle size)
- Client Components (interactive elements)
- Hooks for state management
- Context for shared state

---

### TypeScript

**What it is:** A typed superset of JavaScript

**Why we chose it:**
- Catch errors at compile time
- Better IDE support
- Self-documenting code
- Easier refactoring

**Example:**
```typescript
interface Department {
  slug: string;
  title: string;
  intake: number;
  labs: string[];
}

function getDepartment(slug: string): Department {
  // Type-safe access to department data
}
```

---

### Tailwind CSS

**What it is:** A utility-first CSS framework

**Why we chose it:**
- Rapid prototyping
- Consistent design system
- Small production bundle
- No custom CSS files needed

**Example:**
```tsx
<div className="bg-[#00274C] text-white p-6 rounded-lg">
  <h2 className="text-2xl font-bold">Department</h2>
</div>
```

---

## Content Management

### Markdown (via gray-matter)

**What it is:** Plain text formatting with frontmatter

**Why we chose it:**
- Non-technical users can edit
- Version controlled with Git
- Human-readable format
- Easy to parse

**Example:**
```markdown
---
title: "CSE Department"
date: "2024-01-15"
category: "News"
---

The Department of Computer Science & Engineering was established in 1999.
```

---

### JSON Files

**What it is:** Structured data format

**Why we chose it:**
- Easy to edit (any text editor)
- No database required
- Version controlled
- Fast to parse

**Example:**
```json
{
  "slug": "cse",
  "title": "Computer Science & Engineering",
  "intake": 120,
  "labs": ["Programming Lab", "Data Structures Lab"]
}
```

---

## UI Libraries

### React Icons

**What it is:** Icon library for React

**Why we chose it:**
- 30+ icon families
- Tree-shakeable
- Consistent API

**Usage:**
```tsx
import { FaArrowRight, FaPhone } from "react-icons/fa";

<FaArrowRight className="text-[#FFCB05]" />
```

---

### Motion (Framer Motion)

**What it is:** Animation library for React

**Why we chose it:**
- Simple API
- Performant animations
- Layout animations
- Scroll-triggered effects

**Usage:**
```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

### GSAP (GreenSock Animation Platform)

**What it is:** Professional-grade animation library

**Why we chose it:**
- ScrollTrigger for scroll animations
- High-performance animations
- Complex timeline control

**Usage:**
```tsx
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

---

### @embedpdf/react-pdf-viewer

**What it is:** Lightweight PDF viewer for React

**Why we chose it:**
- Small bundle size
- Built-in toolbar
- Mobile responsive
- No external dependencies

**Usage:**
```tsx
import { PDFViewer } from "@embedpdf/react-pdf-viewer";

<PDFViewer
  config={{
    src: "/docs/syllabus.pdf",
    theme: { preference: "light" },
  }}
/>
```

---

## Development Tools

### ESLint

**What it is:** JavaScript linter

**Purpose:** Code quality and consistency

---

### Prettier (via ESLint)

**What it is:** Code formatter

**Purpose:** Automatic code formatting

---

## Build & Deployment

### npm Scripts

```json
{
  "scripts": {
    "dev": "next dev",           // Development server
    "build": "next build",       // Production build
    "start": "next start",       // Start production server
    "lint": "eslint"            // Run linter
  }
}
```

---

## Package Dependencies

### Production Dependencies

| Package | Purpose | Size |
|---------|---------|------|
| next | React framework | ~2MB |
| react | UI library | ~40KB |
| react-dom | React DOM renderer | ~130KB |
| tailwindcss | CSS framework | ~3MB (dev) |
| @embedpdf/react-pdf-viewer | PDF viewer | ~200KB |
| motion | Animations | ~150KB |
| gsap | Advanced animations | ~100KB |
| react-icons | Icons | ~50KB |
| gray-matter | Markdown parser | ~10KB |

### Development Dependencies

| Package | Purpose |
|---------|---------|
| typescript | Type checking |
| eslint | Code linting |

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 12+ |
| Chrome Android | Last 2 versions |

---

## Performance Budget

| Metric | Budget |
|--------|--------|
| JavaScript | < 200KB |
| CSS | < 50KB |
| Total Page Weight | < 500KB |
| Time to Interactive | < 3s |

---

## Why Not WordPress?

| Aspect | WordPress | Next.js |
|--------|-----------|---------|
| **Performance** | Slow (PHP) | Fast (Static) |
| **Security** | Vulnerable | Secure |
| **Hosting** | $20-100/month | Free |
| **Maintenance** | Constant updates | Zero |
| **Scalability** | Limited | Unlimited |
| **SEO** | Good | Better |
| **Developer Experience** | Poor | Excellent |
| **Content Updates** | Dashboard | Text files |

---

## Why Not a Headless CMS?

| Aspect | Headless CMS | JSON/Markdown |
|--------|--------------|---------------|
| **Cost** | $20-500/month | Free |
| **Complexity** | High | Low |
| **Learning Curve** | Steep | Minimal |
| **Vendor Lock-in** | Yes | No |
| **Customization** | Limited | Unlimited |
| **Performance** | Good | Excellent |

**Recommendation:** Start with JSON/Markdown, migrate to headless CMS only if needed.