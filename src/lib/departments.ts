import fs from "fs";
import path from "path";

const DEPARTMENTS_DIR = path.join(process.cwd(), "content/departments");

export interface DepartmentData {
  slug: string;
  title: string;
  degree: string;
  intake: number;
  duration: string;
  eligibility: string;
  established: number;
  nba: boolean;
  hod: {
    name: string;
    email: string;
    phone: string;
  };
  description: string;
  vision: string;
  mission: string[];
  peos: string[];
  labs: string[];
  images: {
    hero: string;
    labs: string[];
    alumni: string[];
  };
  videos: { title: string; src: string }[];
  syllabus: { title: string; file: string }[];
  notices: { title: string; file: string }[];
  highlights: string[];
  relatedTabs: { label: string; url: string }[];
}

export function getAllDepartments(): DepartmentData[] {
  if (!fs.existsSync(DEPARTMENTS_DIR)) return [];
  
  const files = fs.readdirSync(DEPARTMENTS_DIR).filter(f => f.endsWith(".json"));
  
  return files.map(file => {
    const content = fs.readFileSync(path.join(DEPARTMENTS_DIR, file), "utf-8");
    return JSON.parse(content) as DepartmentData;
  });
}

export function getDepartmentBySlug(slug: string): DepartmentData | undefined {
  const filePath = path.join(DEPARTMENTS_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content) as DepartmentData;
}

export function getDepartmentSlugs(): string[] {
  if (!fs.existsSync(DEPARTMENTS_DIR)) return [];
  return fs.readdirSync(DEPARTMENTS_DIR)
    .filter(f => f.endsWith(".json"))
    .map(f => f.replace(".json", ""));
}