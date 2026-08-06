"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Notice } from "@/lib/content";
import { FileText } from "lucide-react";

interface NoticesArchiveProps {
  notices: Notice[];
}

export function NoticesArchive({ notices }: NoticesArchiveProps) {
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          NOTICES
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Official Notices
        </h1>
      </motion.div>

      <div className="mt-10 flex flex-col gap-0">
        {notices.map((notice, i) => (
          <motion.div
            key={notice.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.03 }}
          >
            <div className="flex items-start gap-4 border-b border-line py-4 px-3">
              <span className="shrink-0 text-xs tabular-nums text-ink-faint w-20">
                {formatDate(notice.date)}
              </span>
              <div className="flex-1">
                <span className="text-sm font-medium text-ink">
                  {notice.title}
                </span>
                {notice.pdf && (
                  <a href={notice.pdf} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-1 text-xs text-accent hover:text-accent-strong">
                    <FileText className="size-3" />
                    PDF
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
