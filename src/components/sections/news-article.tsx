"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "react-icons/fa";
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
    <div>
      {/* Hero image */}
      {article.image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[16/7] md:aspect-[16/5] overflow-hidden bg-ink/5"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent" />
        </motion.div>
      )}

      <div className="page-container py-14 md:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              Back to News
            </Link>
            <div className="flex items-center gap-3 text-xs text-ink-faint mb-4">
              <span>{formatDate(article.date)}</span>
              <span>&middot;</span>
              <span className="text-accent font-medium">{article.category}</span>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-snug">
              {article.title}
            </h1>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 md:mt-12 max-w-[65ch] text-base md:text-[17px] leading-[1.8] text-ink-muted"
          >
            {article.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6">{para}</p>
            ))}
          </motion.article>
        </div>
      </div>
    </div>
  );
}
