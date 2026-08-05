# 05 — Design System

## 5.1 Visual direction (DECIDED — owner delegated the choice)

**Register:** Brand / institutional editorial (the design is part of the institution's credibility).

**Scene sentence (from impeccable):** "A parent in Jammu opens the site on a phone in daylight during admission season, looking for trust and clear answers — programs, fees, how to apply. The same site is opened by the principal's office to publish a notice." → **Light, warm, calm, institutional.** Dark mode is deliberately NOT default; a dark theme reads "SaaS tool", not "college".

**Color strategy: Restrained.** Warm paper neutrals + charcoal ink + ONE accent: **kesari (saffron)**, honoring the college's Sikh minority identity and Dera heritage. Accent is used sparingly (≤ ~10% of any screen): key CTAs, active states, small markers, the thin rule. Never gradient, never glowing.

## 5.2 Palette (OKLCH-based, tuned toward warmth)

| Token | OKLCH | Hex (approx) | Use |
|-------|-------|--------------|-----|
| `--color-paper` | oklch(0.975 0.008 85) | `#FAF7F1` | Page background (warm ivory) |
| `--color-surface` | oklch(1 0 0) tinted | `#FFFFFF` | Cards / raised surfaces |
| `--color-ink` | oklch(0.21 0.012 60) | `#23201C` | Headings / primary text (never pure black) |
| `--color-ink-muted` | oklch(0.46 0.012 60) | `#6E6861` | Body text |
| `--color-ink-faint` | oklch(0.60 0.012 60) | `#98928A` | Metadata, captions |
| `--color-line` | oklch(0.90 0.01 80) | `#E7E0D4` | 1px hairlines, dividers |
| `--color-accent` | oklch(0.52 0.11 55) | `#B45309` | Kesari accent (amber-700 family, desaturated) |
| `--color-accent-strong` | oklch(0.45 0.10 55) | `#96460A` | Hover / pressed accent |
| `--color-accent-soft` | oklch(0.95 0.02 70) | `#F6EBDD` | Accent tint surfaces (flat, no gradient) |

**Contrast:** ink on paper = ~14:1; ink-muted on paper = ~7:1; accent on paper = ~4.8:1 (used for large text / buttons / icons only, never small body copy).

## 5.3 Typography

| Role | Font | Spec |
|------|------|------|
| Display / headings | **Source Serif 4** (600/700) | `text-3xl md:text-5xl`, `tracking-tight`, `leading-[1.05]`. Editorial gravitas; distinct from every AI-template sans. |
| Body / UI | **Figtree** (400/500/600) | `text-base`, `leading-relaxed`, `max-w-[65ch]` for prose |
| Data / numerals | Figtree (500) with `tabular-nums` | Stats, fees, dates |

Rationale: serif display + clean sans body is the signature of respected institutions (MIT, Stanford, Imperial). Source Serif 4 is free, self-hosted via `next/font`, timeless rather than trendy. No Inter, no Space Grotesk (AI-template clichés).

**Hierarchy:** scale contrast ≥ 1.25× between steps; control hierarchy with weight + size + color, not just size.

## 5.4 Layout & surfaces

- Max content width `max-w-6xl` (1152px); page gutter `px-4 sm:px-6 lg:px-8`.
- Generous section rhythm: `py-16 md:py-24`; vary spacing (not uniform padding everywhere).
- **Surfaces are flat.** Hairline 1px `--color-line` borders; `rounded-md` (6px) max on interactive elements; `rounded-none` for editorial blocks. **No drop shadows.** Where a card needs presence, it gets a border and flat tint — never elevation.
- No nested cards. Cards only when they genuinely organize information (program list, news rows, faculty table); prefer dividers and whitespace elsewhere.
- Grid over flex-math: CSS Grid always for multi-column layouts.
- Full-height sections: `min-h-[100dvh]` (never `h-screen`).

## 5.5 Imagery

- Real campus photography only (from the college's galleries / Facebook / provided assets). No stock-photo students.
- Consistent treatment: slight warm tonal grade; thin hairline frame (2px border, not shadow) around featured photos; 4:5 for hero, 16:9 for news.
- `next/image` with explicit sizes, AVIF/WebP, lazy below fold; meaningful alt text (e.g., "Electrical machines laboratory, MBSCET Jammu", not "image").
- No emojis, no clip-art, no illustration doodles. Icons: lucide-react, 1.5px stroke, `size-4/5`.

## 5.6 Motion (restrained, purposeful)

- **Respect `prefers-reduced-motion`** globally (Motion `useReducedMotion` + GSAP `gsap.matchMedia`).
- Reveal-on-scroll for sections: single fade+rise (12px), 400-600 ms, expo-out, staggered ≤ 80 ms between items. Nothing perpetual, no bounces, no parallax-by-default.
- Micro-interactions: button `:active` press (translate-y 0.5px); nav hover underline slide; accordion/tabs via Motion layout animation.
- **GSAP ScrollTrigger:** one choreographed moment only — the About section's editorial scroll (pin the pull-quote, scrub the campus photo reveal). Everything else uses Motion or CSS.
- Page transitions: lightweight fade of main content via `template.tsx` (Motion), skipped on reduced motion.

## 5.7 Components inventory (design-level)

| Component | Design notes |
|-----------|--------------|
| Button | Flat, `bg-ink text-paper` primary; `border border-ink` secondary; accent only for the single "Apply/Contact" CTA. `rounded-sm`, 44px min height. |
| Badge | Flat tint chip (`--color-accent-soft`, ink text), 1px hairline; used for category labels, AICTE/minority markers. |
| Notice bar | Ink background, paper text, lucide megaphone icon, ticker. |
| Statistics band | Hairline-divided rows; serif numerals `text-4xl`, tabular; small caps labels. |
| Program row | Editorial list: serif name + intake + arrow link on hover; no card boxes. |
| News list | Vertical rows: date (mono/small), title, category badge; hairline separators. |
| Timeline (admissions) | Numbered steps, hairline spine, no icons-in-circles cliché. |
| FAQ accordion | shadcn accordion, flat, plus icon rotates on open. |
| Faculty table | Real table (name, designation, qualification), hairline rows. |
| Footer | Ink background, paper text: identity block, quick links, contact, socials, "Est. 1999" mark. |

## 5.8 Accessibility

- WCAG AA contrast throughout (checked per palette above).
- Keyboard navigable mega-menu (focus trap, Esc close), skip-to-content link, focus-visible rings (2px ink, not glow).
- Landmarks: header/nav/main/footer; single h1 per page; labels above inputs in the contact form; error messages linked to inputs.
- Touch targets ≥ 44px.

## 5.9 What we will NOT do (AI-slop guardrails, repeated from 01)

No gradients, no emoji, no glow, no pill-everything, no auto-sliders, no glassmorphism, no gradient text, no 3-card-cliché rows, no fake stats, no "Next-Gen" copy, no purple, no Inter.
