"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { SiteConfig } from "@/lib/content";

interface AboutStripProps {
  config: SiteConfig;
}

export function AboutStrip({ config }: AboutStripProps) {
  return (
    <section className="bg-paper" aria-label="About the college">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Our Vision
          </p>
          <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-ink leading-relaxed tracking-tight">
            &ldquo;{config.vision}&rdquo;
          </blockquote>
          <div className="mt-10 md:mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors group"
            >
              Learn more about us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
