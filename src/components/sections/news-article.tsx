"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { NewsArticle } from "@/lib/content";

interface NewsArticleProps {
  article: NewsArticle;
}

export function NewsArticlePage({ article }: NewsArticleProps) {
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/news" className="text-xs font-medium text-ink-muted hover:text-accent">
          ← Back to News
        </Link>
        <div className="mt-4 flex items-center gap-3 text-xs text-ink-faint">
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.category}</span>
        </div>
        <h1 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl">
          {article.title}
        </h1>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 max-w-[65ch] text-base leading-relaxed text-ink-muted prose prose-ink"
      >
        {article.content.split("\n\n").map((para, i) => (
          <p key={i} className="mb-4">{para}</p>
        ))}
      </motion.article>
    </div>
  );
}
