"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { NewsArticle, Notice } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

interface NewsNoticesProps {
  news: NewsArticle[];
  notices: Notice[];
}

export function NewsNotices({ news, notices }: NewsNoticesProps) {
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* News */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span className="inline-block size-1.5 bg-accent" />
                    NEWS
                  </div>
                  <h2 className="mt-2 font-heading text-xl font-bold tracking-tight text-ink">
                    Latest Updates
                  </h2>
                </div>
                <Link href="/news" className="text-xs font-medium text-ink transition-colors hover:text-accent">
                  View all
                </Link>
              </div>
            </motion.div>

            <div className="mt-6">
              {news.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                >
                  <Link
                    href={`/news/${article.slug}`}
                    className="group flex items-start gap-3 border-b border-line py-3 transition-colors hover:bg-accent-soft/30 px-2"
                  >
                    <span className="shrink-0 text-xs tabular-nums text-ink-faint">
                      {formatDate(article.date)}
                    </span>
                    <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                      {article.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notices */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span className="inline-block size-1.5 bg-accent" />
                    NOTICES
                  </div>
                  <h2 className="mt-2 font-heading text-xl font-bold tracking-tight text-ink">
                    Official Notices
                  </h2>
                </div>
                <Link href="/notices" className="text-xs font-medium text-ink transition-colors hover:text-accent">
                  View all
                </Link>
              </div>
            </motion.div>

            <div className="mt-6">
              {notices.map((notice, i) => (
                <motion.div
                  key={notice.slug}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                >
                  <Link
                    href={`/notices/${notice.slug}`}
                    className="group flex items-start gap-3 border-b border-line py-3 transition-colors hover:bg-accent-soft/30 px-2"
                  >
                    <span className="shrink-0 text-xs tabular-nums text-ink-faint">
                      {formatDate(notice.date)}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                        {notice.title}
                      </span>
                      {notice.pdf && (
                        <Badge variant="secondary" className="ml-2 bg-accent-soft text-ink border border-line rounded-sm text-[10px]">
                          PDF
                        </Badge>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
