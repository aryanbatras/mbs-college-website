"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { NewsArticle } from "@/lib/content";

interface NewsArchiveProps {
  news: NewsArticle[];
}

export function NewsArchive({ news }: NewsArchiveProps) {
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  const featured = news[0];
  const rest = news.slice(1);

  return (
    <div className="page-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
          Latest
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink">
          News &amp; Updates
        </h1>
      </motion.div>

      {/* Featured article */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <Link href={`/news/${featured.slug}`} className="group block">
            {featured.image && (
              <div className="relative aspect-[16/8] overflow-hidden bg-ink/5 mb-4">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <div className="flex items-center gap-2 text-xs text-ink-faint mb-2">
              <span>{formatDate(featured.date)}</span>
              <span>&middot;</span>
              <span className="text-accent">{featured.category}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
              {featured.title}
            </h2>
          </Link>
        </motion.div>
      )}

      {/* Article list with images */}
      <div className="mt-10 flex flex-col gap-0">
        {rest.map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.03 }}
          >
            <Link
              href={`/news/${article.slug}`}
              className="group flex gap-5 py-5 transition-colors hover:bg-ink/[0.02] px-4 -mx-4"
            >
              {article.image && (
                <div className="relative w-28 h-20 md:w-40 md:h-28 shrink-0 overflow-hidden bg-ink/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[11px] text-ink-faint mb-1.5">
                  <span>{formatDate(article.date)}</span>
                  <span>&middot;</span>
                  <span className="text-accent">{article.category}</span>
                </div>
                <h3 className="text-sm md:text-base font-medium text-ink group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
