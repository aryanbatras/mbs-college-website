import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

// --- Types ---

export interface SiteConfig {
  name: string;
  shortName: string;
  established: number;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  phone: {
    principal: string;
    vicePrincipal: string;
    inquiry: string[];
  };
  email: {
    principal: string;
    vicePrincipal: string;
    deanAcademics: string;
    tpCell: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
  };
  affiliations: string[];
  accreditation: string;
  programs: { undergraduate: number; postgraduate: number };
  totalSeats: { ug: number; minorityQuota: number };
  noticeBar: string;
  vision: string;
  mission: string[];
}

export interface Program {
  code: string;
  title: string;
  degree: string;
  intake: number;
  duration: string;
  eligibility: string;
  established?: number;
  description?: string;
  vision?: string;
  mission?: string[];
  labs?: string[];
  highlights?: string[];
  slug: string;
}

export interface NewsArticle {
  title: string;
  date: string;
  category: string;
  content: string;
  slug: string;
}

export interface Notice {
  title: string;
  date: string;
  pdf?: string;
  content: string;
  slug: string;
}

export interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
}

// --- Helpers ---

function readJsonFile<T>(relativePath: string): T {
  const fullPath = path.join(CONTENT_DIR, relativePath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(raw) as T;
}

function readMarkdownFiles<T>(
  subdir: string,
  transform: (data: Record<string, unknown>, content: string, slug: string) => T
): T[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return transform(data as Record<string, unknown>, content, slug);
  });
}

// --- Content loaders ---

export function getSiteConfig(): SiteConfig {
  return readJsonFile<SiteConfig>("site.json");
}

export function getPrograms(): Program[] {
  return readMarkdownFiles<Program>("programs", (data, content, slug) => ({
    code: (data.code as string) ?? slug,
    title: (data.title as string) ?? slug,
    degree: (data.degree as string) ?? "B.E.",
    intake: (data.intake as number) ?? 0,
    duration: (data.duration as string) ?? "4 years",
    eligibility: (data.eligibility as string) ?? "",
    established: data.established as number | undefined,
    description: data.description as string | undefined,
    vision: data.vision as string | undefined,
    mission: data.mission as string[] | undefined,
    labs: data.labs as string[] | undefined,
    highlights: data.highlights as string[] | undefined,
    slug,
  }));
}

export function getProgramBySlug(slug: string): Program | undefined {
  return getPrograms().find((p) => p.slug === slug);
}

export function getNews(): NewsArticle[] {
  const articles = readMarkdownFiles<NewsArticle>(
    "news",
    (data, content, slug) => ({
      title: (data.title as string) ?? slug,
      date: data.date
        ? new Date(data.date as string).toISOString().split("T")[0]
        : "",
      category: (data.category as string) ?? "General",
      content: content ?? "",
      slug,
    })
  );
  return articles.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getNotices(): Notice[] {
  const notices = readMarkdownFiles<Notice>(
    "notices",
    (data, content, slug) => ({
      title: (data.title as string) ?? slug,
      date: data.date
        ? new Date(data.date as string).toISOString().split("T")[0]
        : "",
      pdf: data.pdf as string | undefined,
      content: content ?? "",
      slug,
    })
  );
  return notices.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getLatestNews(count: number = 5): NewsArticle[] {
  return getNews().slice(0, count);
}

export function getLatestNotices(count: number = 5): Notice[] {
  return getNotices().slice(0, count);
}

// Faculty loader
export function getFaculty(deptCode: string): FacultyMember[] {
  try {
    const data = readJsonFile<FacultyMember[]>(`faculty/${deptCode}.json`);
    return data;
  } catch {
    return [];
  }
}

export function getAllFaculty(): Record<string, FacultyMember[]> {
  const depts = ["cse", "ee", "ece", "me", "ce", "mca"];
  const result: Record<string, FacultyMember[]> = {};
  for (const dept of depts) {
    result[dept] = getFaculty(dept);
  }
  return result;
}
