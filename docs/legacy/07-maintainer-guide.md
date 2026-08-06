# 07 — Maintainer Guide (for non-technical college staff)

## 7.1 The mental model

> **"The website is a folder of files on GitHub. To change the website, you change a file. GitHub shows it to you like a web page. You don't need to install anything or learn code — just edit text in your browser and press a green button."**

## 7.2 The 3-step recipe (any change)

1. **Open** github.com → the college's repository → the `src/content/` folder.
2. **Click** the file (or "Add file" for new content) → GitHub opens an editor in the browser → make the change.
3. **Press** the green "Commit changes" button → type a short note (e.g., "Added Power BI workshop news") → click "Commit changes".

**Done.** In ~1 minute the website updates itself. That's the whole system.

## 7.3 Common tasks (recipe cards)

### Add a news item
1. Go to `src/content/news/`.
2. Click **Add file → Create new file**.
3. Name it exactly: `2026-08-05-name-of-event.md` (date first, then a short name; dashes, no spaces).
4. Paste this template and edit the parts in [brackets]:
   ```
   ---
   title: "[Title of the news item]"
   date: 2026-08-05
   category: "[Workshop | Placement | Event | Notice | Campus]"
   image: "/media/news/[photo-file-name].webp"
   ---
   One or two sentences describing the event, in plain language.
   ```
5. Commit. (Optional: also drag the photo into `public/media/news/` the same way and use its name above.)

### Add a notice
Same as above, in `src/content/notices/`, with this frontmatter:
```
---
title: "[Notice title]"
date: 2026-08-05
pdf: "/docs/[file-name].pdf"   (optional; remove the line if none)
---
[One line describing the notice.]
```

### Change a phone number / address / social link
1. Open `src/content/site.json`.
2. Find the field (e.g., `"phone": "..."`), edit the text between the quotes.
3. Commit. (JSON is picky: keep the commas and quotes exactly; the guide teaches this once.)

### Upload a PDF (prospectus, datesheet)
1. `src/content` → `public/docs/` folder.
2. **Add file → Upload files** → choose the PDF → Commit.
3. Reference it from a notice or the Admissions page (the maintainer guide includes the exact line to add).

## 7.4 What staff should NOT touch

- Everything outside `src/content/` and `public/` is code. They are taught to ignore it ("if it's not in these two folders, leave it alone").

## 7.5 Safety nets

- **Nothing can break permanently**: every change is a commit; the History tab shows all versions; "Revert" restores any file with one click.
- **Preview before publish**: GitHub shows a Preview tab; optionally, Vercel provides a preview URL for every change before it goes live (staff can see it before committing to `main`).
- **Protected branch (optional)**: the college can require one approving review from the coordinator before changes go live — one person watches over all edits.
- **Suggested workflow**: one designated "website coordinator" (a lecturer or office assistant trained once) handles the first commits; others can be given access gradually.

## 7.6 If they really want a form to type into (optional, later phase)

If browser-file-editing still feels too technical, a **git-based CMS** can be layered on later (Decap CMS / TinaCMS: they render a Word-like editor over the same GitHub files, free). This is Phase 3+, not required for launch — the plain recipe above already satisfies "super easy".

## 7.7 Training material to produce (with the site)

- One-page A4 guide (PDF) with screenshots of the 3-step recipe.
- A 5-minute video walkthrough.
- Both stored in the repo's `docs/maintainers/` and linked from a private note.

## 7.8 Costs recap (all free tiers)

| Service | What | Limit that matters |
|---------|------|--------------------|
| GitHub | Repo + file storage + web editor | ~2 GB repo recommended; 100 MB/file |
| Vercel Hobby | Build + hosting + CDN + custom domain | 100 MB/deployment (we stay ~30 MB); 100 GB bandwidth/mo |
| Cloudflare R2 (optional) | Large media library | 10 GB storage, no egress fees |
| YouTube | Video hosting/embeds | Unlimited |
| Form service | Contact form → email | Free tier (50-100 submissions/mo) |
