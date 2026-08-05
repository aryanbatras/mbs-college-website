"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Program } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

interface ProgramsSectionProps {
  programs: Program[];
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  const featured = programs.find((p) => p.code === "CSE");
  const others = programs.filter((p) => p.code !== "CSE");

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            <span className="inline-block size-1.5 bg-accent" />
            ACADEMICS
          </div>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Programs Offered
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Featured: CSE */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 border border-line p-6 md:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="secondary" className="mb-3 bg-accent-soft text-ink border border-line rounded-sm text-[10px] uppercase tracking-wider">
                    Featured
                  </Badge>
                  <h3 className="font-heading text-xl font-bold text-ink md:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                    {featured.description}
                  </p>
                </div>
                <span className="font-heading text-2xl font-bold text-accent md:text-3xl">
                  {featured.intake}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-ink-faint">
                <span>{featured.degree} · {featured.duration}</span>
                <span>·</span>
                <span>{featured.eligibility}</span>
              </div>
              <Link
                href={`/academics/${featured.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                View department details
                <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>
          )}

          {/* Others: editorial list */}
          <div className="lg:col-span-2 flex flex-col">
            {others.map((program, i) => (
              <motion.div
                key={program.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
              >
                <Link
                  href={`/academics/${program.slug}`}
                  className="group flex items-center justify-between border-b border-line py-3 transition-colors hover:bg-accent-soft/50 px-2"
                >
                  <div>
                    <div className="font-heading text-sm font-semibold text-ink">
                      {program.title}
                    </div>
                    <div className="text-xs text-ink-faint">{program.degree} · {program.intake} seats</div>
                  </div>
                  <ArrowRight className="size-3.5 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
