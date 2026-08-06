# Design System & Components

## Overview

The MBSCET Website uses a consistent design system built with Tailwind CSS and reusable React components. This documentation covers the design principles, color palette, typography, and component library.

---

## Design Principles

### 1. Simplicity

- Clean, uncluttered layouts
- Minimal visual noise
- Focus on content

### 2. Professionalism

- Academic, trustworthy appearance
- Conservative color palette
- Clear hierarchy

### 3. Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support

### 4. Mobile-First

- Designed for mobile first
- Scales up to desktop
- Touch-friendly interactions

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **MBSCET Blue** | `#00274C` | Headers, buttons, text |
| **MBSCET Yellow** | `#FFCB05` | Accents, highlights |

### Neutral Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **White** | `#FFFFFF` | Backgrounds |
| **Gray 50** | `#F9FAFB` | Card backgrounds |
| **Gray 100** | `#F3F4F6` | Borders |
| **Gray 200** | `#E5E7EB` | Dividers |
| **Gray 500** | `#6B7280` | Secondary text |
| **Gray 700** | `#374151` | Body text |
| **Gray 900** | `#111827` | Headings |

### Color Usage

```css
/* Primary Background */
bg-[#00274C]

/* Accent Background */
bg-[#FFCB05]

/* Text Colors */
text-[#00274C]  /* Primary text */
text-[#5C6370]  /* Secondary text */
text-white       /* On dark backgrounds */

/* Border Colors */
border-[#00274C]
border-[#FFCB05]
border-gray-200
```

---

## Typography

### Font Family

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Sizes

| Class | Size | Usage |
|-------|------|-------|
| `text-xs` | 12px | Labels, captions |
| `text-sm` | 14px | Secondary text |
| `text-base` | 16px | Body text |
| `text-lg` | 18px | Large body |
| `text-xl` | 20px | Subheadings |
| `text-2xl` | 24px | Section titles |
| `text-3xl` | 30px | Page titles |
| `text-4xl` | 36px | Hero titles |
| `text-5xl` | 48px | Display titles |

### Font Weights

| Class | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasis |
| `font-semibold` | 600 | Headings |
| `font-bold` | 700 | Strong emphasis |

### Typography Examples

```tsx
/* Page Title */
<h1 className="text-4xl md:text-5xl font-bold text-[#00274C]">
  Department Name
</h1>

/* Section Title */
<h2 className="text-2xl font-bold text-[#00274C] mb-6">
  Section Title
</h2>

/* Body Text */
<p className="text-gray-600 leading-relaxed">
  Body text content...
</p>

/* Caption */
<span className="text-xs text-gray-500">
  Caption text
</span>
```

---

## Spacing

### Spacing Scale

| Class | Size | Usage |
|-------|------|-------|
| `p-1` | 4px | Tight padding |
| `p-2` | 8px | Small padding |
| `p-4` | 16px | Default padding |
| `p-6` | 24px | Card padding |
| `p-8` | 32px | Section padding |
| `p-12` | 48px | Large section |
| `p-16` | 64px | Hero section |

### Common Patterns

```tsx
/* Card */
<div className="p-6 bg-gray-50 border border-gray-100">

/* Section */
<section className="py-16 px-6">

/* Page Container */
<div className="max-w-7xl mx-auto px-6">
```

---

## Layout

### Container Widths

| Class | Max Width | Usage |
|-------|-----------|-------|
| `max-w-sm` | 640px | Small content |
| `max-w-md` | 768px | Medium content |
| `max-w-lg` | 1024px | Large content |
| `max-w-xl` | 1280px | Extra large |
| `max-w-7xl` | 1280px | Page container |

### Grid System

```tsx
/* 2 Column Grid */
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

/* 3 Column Grid */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

/* 4 Column Grid */
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
```

---

## Components

### Button

```tsx
/* Primary Button */
<button className="px-6 py-2 bg-[#00274C] text-white font-medium hover:bg-[#001a33] transition-colors">
  Button Text
</button>

/* Secondary Button */
<button className="px-6 py-2 border border-[#00274C] text-[#00274C] font-medium hover:bg-[#00274C] hover:text-white transition-colors">
  Button Text
</button>

/* Accent Button */
<button className="px-6 py-2 bg-[#FFCB05] text-[#00274C] font-bold hover:bg-yellow-400 transition-colors">
  Button Text
</button>
```

---

### Card

```tsx
<div className="bg-white border border-gray-100 p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-lg font-bold text-[#00274C] mb-2">Card Title</h3>
  <p className="text-gray-600">Card content...</p>
</div>
```

---

### Badge

```tsx
<span className="px-2 py-1 text-xs font-medium bg-[#FFCB05] text-[#00274C]">
  Badge Text
</span>
```

---

### Table

```tsx
<table className="w-full text-sm">
  <thead>
    <tr className="border-b-2 border-[#00274C]">
      <th className="py-4 text-left font-bold text-[#00274C]">Header</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-100">
      <td className="py-4 text-gray-600">Cell</td>
    </tr>
  </tbody>
</table>
```

---

### Form Input

```tsx
<input
  type="text"
  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#00274C]"
  placeholder="Enter text..."
/>
```

---

### Tab Navigation

```tsx
<div className="flex border-b border-gray-200">
  <button className="px-6 py-4 text-sm font-medium border-b-2 border-[#FFCB05] text-[#00274C]">
    Active Tab
  </button>
  <button className="px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500">
    Inactive Tab
  </button>
</div>
```

---

## Section Components

### Hero Section

Full-width banner with gradient overlay:

```tsx
<section className="relative h-[60vh] min-h-[400px] overflow-hidden">
  <img src="/hero.jpg" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#00274C] to-transparent" />
  <div className="absolute bottom-0 p-8">
    <h1 className="text-4xl font-bold text-white">Title</h1>
  </div>
</section>
```

---

### Stats Section

Number highlights:

```tsx
<section className="bg-[#00274C] py-12">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div className="text-center">
      <div className="text-4xl font-bold text-[#FFCB05]">120</div>
      <div className="text-white">Seats</div>
    </div>
  </div>
</section>
```

---

### Program Card

Department listing:

```tsx
<Link href="/academics/cse" className="group block p-8 bg-gray-50 hover:bg-[#00274C] transition-colors">
  <span className="text-xs font-bold text-[#00274C] group-hover:text-[#FFCB05]">
    CSE
  </span>
  <h3 className="text-lg font-bold text-[#00274C] group-hover:text-white mt-2">
    Computer Science & Engineering
  </h3>
  <p className="text-sm text-gray-600 group-hover:text-white/60 mt-2">
    Description...
  </p>
</Link>
```

---

### PDF Viewer

Embedded PDF:

```tsx
import { PdfEmbed } from "@/components/ui/pdf-viewer";

<PdfEmbed 
  src="/docs/syllabus.pdf"
  title="Syllabus"
  height="600px"
/>
```

---

## Responsive Breakpoints

| Breakpoint | Class | Width |
|------------|-------|-------|
| Mobile | Default | < 768px |
| Tablet | `md:` | 768px - 1024px |
| Desktop | `lg:` | > 1024px |

### Responsive Examples

```tsx
/* Mobile: 1 column, Desktop: 3 columns */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

/* Mobile: hidden, Desktop: visible */
<div className="hidden md:block">

/* Mobile: visible, Desktop: hidden */
<div className="md:hidden">
```

---

## Animations

### Hover Effects

```tsx
/* Scale on hover */
<div className="hover:scale-105 transition-transform">

/* Shadow on hover */
<div className="hover:shadow-lg transition-shadow">

/* Color change */
<button className="hover:bg-[#001a33] transition-colors">
```

### Page Transitions

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

## Accessibility

### Color Contrast

- Primary text on white: 12.5:1 ratio ✅
- Secondary text on white: 7:1 ratio ✅
- White text on blue: 12.5:1 ratio ✅

### Keyboard Navigation

All interactive elements are focusable:

```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-[#FFCB05]">
```

### Screen Reader

```tsx
<img src="photo.jpg" alt="Descriptive alt text" />
<a href="/page">Link text</a>
```

---



## Best Practices

### Do's

✅ Use consistent spacing
✅ Maintain color palette
✅ Follow typography scale
✅ Test on mobile
✅ Ensure accessibility

### Don'ts

❌ Don't use random colors
❌ Don't mix font sizes
❌ Don't skip responsive design
❌ Don't ignore accessibility
❌ Don't hardcode values

---

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)