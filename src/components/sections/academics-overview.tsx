"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Program } from "@/lib/content";
import { ArrowRight } from "lucide-react";

interface AcademicsOverviewProps {
  programs: Program[];
}

export function AcademicsOverview({ programs }: AcademicsOverviewProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          ACADEMICS
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Programs Offered
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          MBSCET offers 8 undergraduate B.E. programs and 4 postgraduate M.E.
          programs across core and emerging engineering disciplines.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-col gap-0">
        {programs.map((program, i) => (
          <motion.div
            key={program.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
          >
            <Link
              href={`/academics/${program.slug}`}
              className="group flex items-center justify-between border-b border-line py-5 transition-colors hover:bg-accent-soft/30 px-3"
            >
              <div className="flex items-center gap-6">
                <span className="font-heading text-2xl font-bold text-accent w-16">{program.intake}</span>
                <div>
                  <div className="font-heading text-base font-semibold text-ink">{program.title}</div>
                  <div className="text-xs text-ink-faint">{program.degree} · {program.duration}</div>
                </div>
              </div>
              <ArrowRight className="size-4 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
