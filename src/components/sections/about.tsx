"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { SiteConfig } from "@/lib/content";

interface AboutStripProps {
  config: SiteConfig;
}

export function AboutStrip({ config }: AboutStripProps) {
  return (
    <section className="border-b border-line bg-accent-soft/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <div className="border-l-2 border-accent pl-6">
              <blockquote className="font-heading text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
                &ldquo;{config.vision}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs uppercase tracking-wider text-ink-faint">
                — Vision of the Institute
              </div>
            </div>
          </motion.div>

          {/* Mission + link */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-faint">Our Mission</h3>
            <ul className="flex flex-col gap-2">
              {config.mission.slice(0, 2).map((m, i) => (
                <li key={i} className="text-sm leading-relaxed text-ink-muted">
                  {m}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-4 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              Read more about us →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
