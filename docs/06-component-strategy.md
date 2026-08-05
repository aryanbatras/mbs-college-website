# 06 — Component Strategy

## 6.1 Principle

Use **copy-paste component libraries** (React Bits, Magic UI, 21st.dev) as *reference implementations*, and shadcn/ui as the *installed primitive base*. Copy-paste keeps the bundle lean and the code ours (maintainable, reviewable, no runtime dependency risk). Everything is then restyled to the MBSCET design system — never used in default state.

## 6.2 Installed (via npm / shadcn CLI)

| Package | Purpose |
|---------|---------|
| `next`, `react`, `react-dom` | Framework |
| `tailwindcss`, `@tailwindcss/postcss` | Tailwind v4 (CSS-first) |
| shadcn/ui CLI components | `button, sheet, accordion, tabs, breadcrumb, badge, separator, dialog, skeleton, input, textarea, label, aspect-ratio, pagination, table` |
| `motion` | Micro-interactions, layout animation, page fade |
| `gsap` + `@gsap/react` | ScrollTrigger (About choreography only) |
| `lucide-react` | UI icons |
| `react-icons` | Social brand icons (Facebook, Instagram, YouTube, LinkedIn) |
| `gray-matter` | Markdown frontmatter parsing |

## 6.3 Component → section mapping

| Section | Implementation | Source |
|---------|---------------|--------|
| Notice ticker bar | Marquee (paused, 1 cycle) or simple CSS animation | React Bits `Marquee` pattern / Magic UI `Marquee` |
| Hero | Custom asymmetric hero (no library), Motion fade-up on load | Custom |
| Statistics band | Custom rows; optional `NumberTicker` (React Bits) for count-up on scroll | React Bits `NumberTicker` (restyled, tabular) |
| Programs bento | Custom asymmetric grid; `BentoGrid` as structural reference | Magic UI `BentoGrid` / React Bits |
| News list | Custom vertical rows (date-stamped) | Custom |
| Admissions timeline | Numbered steps with hairline spine | Magic UI `Timeline` as reference |
| FAQ | shadcn `Accordion` + Motion layout | shadcn |
| Tabs (programs) | shadcn `Tabs` | shadcn |
| Faculty table | shadcn `Table` | shadcn |
| Mobile nav | shadcn `Sheet` (right full-height panel) | shadcn |
| Mega-menu (desktop) | Custom hover menu + shadcn primitives, focus-managed | Custom |
| Galleries | Lightbox: shadcn `Dialog` + image grid (custom) | shadcn + custom |
| Pagination (news) | shadcn `Pagination` | shadcn |
| Contact form | shadcn inputs + free form endpoint (Formspree/Web3Forms) | shadcn |
| Breadcrumbs | shadcn `Breadcrumb` | shadcn |
| Section reveals | Motion `whileInView` (fade+rise, expo) | Motion |
| About scroll moment | GSAP ScrollTrigger (pin + scrub) — the one GSAP usage | GSAP |

## 6.4 Restyle rules (apply to every borrowed component)

1. Replace all default colors/radii with design tokens (`--color-*`, `rounded-md`, hairline borders, no shadows).
2. Remove any gradient, glow, or animated background from borrowed components (e.g., React Bits `AuroraBackground`/`Beams` are NOT used — they are gradient blobs).
3. `prefers-reduced-motion` guard on every animated component.
4. Every animated component is a `'use client'` leaf; parents stay server components.
5. Borrowed code is formatted to project conventions and commented as "adapted from <source> (MIT)".

## 6.5 Explicitly rejected components (and why)

| Component | Reason |
|-----------|--------|
| Aurora/Beams/Grid-pattern backgrounds | Gradient blobs = AI slop |
| Spotlight cards | Hover glow conflicts with no-shadow rule |
| Shimmer/glow buttons | Glow banned |
| Tilt/parallax cards | Unnecessary motion |
| Dock (macOS-style) | Wrong metaphor for a college |
| Particle/confetti effects | Gimmick |
| Auto-rotating hero carousels | Dated pattern (research finding) |

## 6.6 Custom components to build (unique to MBSCET)

- `NoticeTicker` (utility bar)
- `ProgramBento` (asymmetric programs grid)
- `NewsList` / `NewsRow` (date-stamped rows)
- `NoticesList` (with PDF badge)
- `StatBand` (hairline statistics)
- `AdmissionTimeline`
- `CampusGallery` + `LightboxDialog`
- `ContactForm` (endpoint-backed)
- `SocialLinks` (react-icons brands)
- `Footer` / `Header` / `MegaMenu` / `MobileNav`

Each is a server component shell + isolated client islands where interaction is needed.
