# 04 — Information Architecture

## 4.1 New sitemap

```
/                          Home
/about                     About the college (history, trust, vision/mission, accreditations)
/about/chairman            Chairman's desk
/about/principal           Principal's desk
/about/management          Management committee
/academics                 Academics overview (programs, academic calendar, magazine)
/academics/computer-science
/academics/information-technology
/academics/electronics-communication
/academics/electrical
/academics/mechanical
/academics/civil
/academics/mca
/admissions                Eligibility, procedure, JKCET, minority quota, fees, FAQ
/admissions/prospectus     Prospectus + downloads
/placements                T&P cell, statistics, recruiters, brochure, testimonials
/campus                    Facilities overview
/campus/galleries          Photo galleries
/campus/video-gallery      Video gallery (YouTube embeds)
/campus/clubs              Student clubs (Drone Club etc.)
/news                      News archive (paginated)
/news/[slug]               Article detail
/notices                   Notices archive
/notices/[slug]            Notice detail
/contact                   Address, map, phones, emails, contact form
```

Legacy URLs (e.g., `/computer-science/`, `/news/`) are 301-redirected to the new routes so bookmarks and search engines survive the migration.

## 4.2 Navigation model

**Top utility bar** (thin, always visible): AICTE approved • University of Jammu affiliated | Admissions open (seasonal) | Contact | Facebook/Instagram/YouTube icons | Notice ticker (latest 3 notices, scrolls once per 8 s).

**Primary nav** (sticky, collapses on scroll): About ▾ | Academics ▾ | Admissions ▾ | Placements | Campus ▾ | News | Notices | **Contact** (button, accent).

- Dropdowns are mega-menu-lite: 2-column layouts (e.g., Academics → Departments list + "College Magazine & Syllabus" links).
- Mobile: full-screen sheet with grouped sections and a prominent "Apply / Contact" action.

**Breadcrumbs** on all interior pages.

## 4.3 Homepage layout (decided)

1. **Notice bar** (utility bar ticker).
2. **Hero** — asymmetric: left = institution name, one-line positioning ("AICTE approved · Affiliated to University of Jammu"), two CTAs (Explore Programs, Admission 2026). Right = real campus photo, tall 4:5 crop, subtle archival tone. A thin accent rule and a small "Est. 1999 · Sikh Minority Institution" caption. **No slider.**
3. **Statistics band** — real numbers, hairline-divided row: 8 programs · 30+ faculty · 165 minority seats · 25+ years (est. 1999). Tabular numerals.
4. **Programs** — asymmetric bento: featured program card (CSE, largest) + list-style entries for the rest; each links to department page.
5. **About strip** — one editorial paragraph (vision), link to full About; a quote-style pull line.
6. **News & Notices** — two-column: latest news (date-stamped list) + notices (compact list with PDF badges). Both link to archives.
7. **Placements highlight** — real stats + recruiter names row + link to brochure.
8. **Campus life** — image-led row (gallery, clubs, facilities) with 1 image + 2 text tiles.
9. **Contact CTA band** — address + phones + form link on a flat accent-tinted band (no gradient).

## 4.4 Interior page templates

- **Department page**: sticky local sub-nav (Overview · Vision & Mission · Faculty · Labs & Facilities · Syllabus/Downloads) → hero band (dept name, intake) → editorial content → faculty table → labs list. Single-column with right rail.
- **Admissions page**: numbered process (Eligibility → Apply JKCET → Minority quota → Documents → Fees) as a timeline, FAQ accordion, fee table, prospectus download.
- **News list**: date-stamped vertical list (not cards), category filter chips, pagination.
- **Article page**: title, date, category, body prose, back link. Share buttons (copy link, WhatsApp).

## 4.5 SEO & metadata

- Per-page title + description via Next Metadata API; Open Graph images auto-generated per page type.
- Semantic headings (single h1 per page, ordered h2/h3).
- Structured data: `EducationalOrganization`, `CollegeOrUniversity` JSON-LD on home; `Article` on news.
- XML sitemap + robots.txt at build.
