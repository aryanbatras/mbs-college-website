# 02 — Research Summary (scraped content inventory)

Source: live scraping of mbscet.edu.in (home, news, notices, activity, galleries, video gallery, prospectus, contact, all department pages, sitemap attempt) + third-party listings (Careers360, Shiksha, Collegedunia, Notopedia) + college social presence. Research performed in 5 parallel bursts (14 agents) in this session.

## 2.1 Institution facts

| Fact | Value |
|------|-------|
| Full name | Mahant Bachittar Singh College of Engineering and Technology (MBSCET) |
| Also known as | MBS College of Engineering & Technology |
| Address | Babliana, Jeevan Nagar Road, P.O. Miran Sahib, Jammu — 181101, J&K, India |
| Established | 1999 (under Sant Manjit Singh Trust, aegis of Dera Sant Pura Nangali Sahib) |
| Minority status | Recognized Sikh Minority Institution; ~165 minority-quota seats |
| University | Affiliated to University of Jammu |
| Approvals | AICTE (New Delhi); Dept. of Higher Education, J&K; UGC |
| Leadership (scraped) | Chairman (Prof. Amar Singh Sudan per management records), Principal & Vice-Principal offices active |
| Phone | +91-8082848658 / 0191-2970136 (principal); 0191-4050971 (vice-principal); +91-8825034047, +91-9419288486 (inquiries) |
| Emails | principal@mbscet.edu.in, vice.principal@mbscet.edu.in, dean.academics@mbscet.edu.in, head.cse@mbscet.edu.in, tpcell@mbscet.edu.in |
| Facebook | facebook.com/mbscet |

## 2.2 Programs and intake (third-party verified)

| Program | Intake (approx) |
|---------|-----------------|
| B.E. Computer Science & Engineering | 108 |
| B.E. Information Technology | 54 |
| B.E. Civil Engineering | 54 |
| B.E. Artificial Intelligence & Machine Learning | 54 |
| B.E. Mechanical Engineering | 30 |
| B.E. Electronics & Communication Engineering | 30 |
| B.E. Electrical Engineering | 30 |
| MCA (since 2004) | PG |
| M.E. programs | CSE, ECE, ME, EE (≈30 each) |

Admission: **JKCET** (BOPEE) + management/minority quota (MBS Minority Seats Entrance Test). Eligibility: 10+2 PCM. Fees: ≈ ₹45,000–49,000/yr (≈ ₹1.80–1.84 L total for B.E.), per J&K Fee Fixation Committee.

## 2.3 Placements (third-party; verify with college before publishing)

- Highest package: ₹6.0–7.2 LPA historically (some drives reported higher).
- Average: ₹2.5–3.5 LPA; ~20–30% of eligible students placed on campus.
- Recruiters seen: Kandhari Beverages (Coca-Cola bottler), Cloud Analogy, Vision India Services, regional IT firms. T&P cell runs 45-hour technical crash courses (Python, ML, Power BI) and 6th-semester industrial training.

## 2.4 Vision & Mission (verbatim, to migrate)

**Vision:** "To be a globally acclaimed technical institution for providing contemporary education and fostering research, innovation and professional ethics to serve the society."

**Mission:**
- Providing contemporary and advanced knowledge of engineering & sciences among students in a coordinated and integrated manner.
- Inculcating problem-solving, research and innovation skills among students to meet the dynamic industrial and societal needs.
- Fostering professional ethics, leadership qualities and human values among students for sustainable development.

## 2.5 Current site structure (what exists, to be reorganized)

| Old URL slug | Content |
|--------------|---------|
| / | Home: sliders, achievements, admission links, AICTE approvals, contacts, recent updates |
| /news/ | News archive (paginated; ~2016→present) |
| /notices/ | Academic circulars, sessional date sheets, CBCS calendars, admission notices |
| /activity/ | Co-curricular activities, workshops, industrial visits, club events |
| /galleries/, /video-gallery/ | Photo galleries, video walkthroughs, event highlights |
| /college-prospectus/ | Prospectus + brochure downloads |
| /chairman/, /principal/, /college-management/ | Desk messages, management committee |
| /college-magazine/ | College magazine |
| /eligiblity-admission-procedure-v1/ | Eligibility & admission procedure |
| /computer-science/, /electrical-v1/, /electronic-and-communication-v1/, /mechanical-engineering-v1/, /civil-engineering-2/, /mca-v1/ | Department pages: overview, vision/mission, faculty, labs, syllabus |
| /placement-brochure/ | Placement cell / brochure |
| /drone-club/ | Student drone club |
| /press-release/ | Press releases |
| /contact/ | Addresses, phones, emails |

Notable news items (to seed the new news section): Power BI workshop (Apr 2026), Fresher party (Mar 2026), WordPress workshop (Nov 2024), tech advances program (Sep 2024), Barsi commemoration (Dec 2023), virtual labs webinar (Aug 2022), industrial visit to Cadila Pharmaceuticals Samba (May 2019), Infosys fresher drive (2017), minority quota admission notices (2016).

## 2.6 PDFs / downloads found (to re-host or link)

- College Prospectus 2019 (wp-content/uploads/2019/03/College-Prospectus-2019_Optimized.pdf)
- Newsletter 2024, Newsletter 2017 (uploads/2025/03 & 2021/11)
- Annual financial statements: audit 2022-23, budgets 2018-2021

## 2.7 Facilities (from site + listings)

Classrooms (~70 m², digital boards), departmental labs (electrical machines, CAD/CAM, fluid mechanics, surveying, analog/digital electronics, computer centers), central library (textbooks, journals, digital terminals), boys' & girls' hostels, two canteens, seminar hall, sports grounds, medical unit, guest house, alumni association, plant nursery, student clubs (drone club), Wi-Fi campus.

## 2.8 Design research (what strong academic sites do)

Completed research identified the following patterns in top-tier university sites (MIT, Stanford, Georgia Tech, TU Delft, IITs, VIT, IIIT-H, NIT Trichy):

**To adopt:** sticky utility top-bar + clean primary nav; asymmetric editorial heroes; real-numbers statistics bands; program pages with clear hierarchy (overview → curriculum → faculty → labs); date-stamped vertical news lists; admissions as a numbered process; generous whitespace; restrained single-accent palettes; strong typography over decorative effects.

**To avoid:** auto-rotating hero sliders, pop-ups, gradient heroes, clip-art icons, dense wall-of-text pages, generic 3-card rows repeated page after page, stock-photo students on every section.

## 2.9 Component libraries surveyed

- **React Bits** (reactbits.dev) — open-source, MIT, copy-paste animated components (Marquee, Bento Grid, Magnetic Button, Animated Content, Number Ticker, Spotlight Card, Beams, Text effects, Split Text, etc.).
- **Magic UI** (magicui.design) — open-source, MIT, copy-paste (Marquee, Bento Grid, Timeline, Number Ticker, Animated List, Dock, Shimmer Button, Grid Pattern, Hero Video Dialog).
- **Postelity** (postelity.dev) — component/animation library; verify current status before adoption.
- **21st.dev** — component registry/marketplace; free components are copy-paste; some paid.
- **shadcn/ui** — MIT, CLI-installed primitives (button, accordion, tabs, sheet, breadcrumb, badge, dialog, skeleton, etc.).
- **lucide-react** — MIT icon set (education, campus, contact icons).
- **react-icons** — for brand/social icons (Facebook, Instagram, YouTube, LinkedIn).

Decision: pull specific components from React Bits / Magic UI as copy-paste code (keeps bundle small, no runtime deps), install shadcn/ui via CLI, use GSAP + Motion selectively. Full mapping in [06-component-strategy.md](06-component-strategy.md).

## 2.10 Gaps to confirm with the college (open questions)

1. Exact current fee structure (2026-27) and scholarship details.
2. Latest placement statistics to publish (T&P cell to provide).
3. Which photos/videos from galleries we may republish (permissions).
4. Principal's name for the desk page.
5. Whether a YouTube channel exists for video hosting.
6. Final PDF set (prospectus, forms) to re-host.
