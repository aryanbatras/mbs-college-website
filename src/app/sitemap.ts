import type { MetadataRoute } from "next";
import { getPrograms, getNews, getNotices } from "@/lib/content";

const BASE_URL = "https://www.mbscet.edu.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const programs = getPrograms();
  const news = getNews();
  const notices = getNotices();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about/chairman`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/about/principal`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/about/management`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/academics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/admissions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/placements`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/campus`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/campus/galleries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/campus/video-gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/campus/clubs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/news`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/notices`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];

  const programPages: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${BASE_URL}/academics/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const newsPages: MetadataRoute.Sitemap = news.map((a) => ({
    url: `${BASE_URL}/news/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...programPages, ...newsPages];
}
