"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function ChairmanContent() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          ABOUT
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Chairman&apos;s Desk
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10"
      >
        {/* Placeholder for photo */}
        <div className="mb-6 flex items-center gap-4">
          <div className="size-20 border border-line bg-surface flex items-center justify-center">
            <span className="font-heading text-lg text-ink-faint">PS</span>
          </div>
          <div>
            <div className="font-heading text-lg font-bold text-ink">Prof. Amar Singh Sudan</div>
            <div className="text-sm text-ink-faint">Chairman, MBSCET</div>
            <div className="text-xs text-ink-faint">Sant Manjit Singh Trust</div>
          </div>
        </div>

        <div className="border-l-2 border-accent pl-6 mb-8">
          <Quote className="mb-2 size-4 text-accent" />
          <blockquote className="text-base leading-relaxed text-ink-muted italic">
            It gives me immense pleasure to welcome you to Mahant Bachittar Singh College of
            Engineering and Technology, Jammu. Our institution, established in 1999 under the
            aegis of Dera Sant Pura Nangali Sahib, has been committed to providing quality
            technical education to the youth of Jammu &amp; Kashmir.
          </blockquote>
        </div>

        <div className="flex flex-col gap-4 text-sm leading-relaxed text-ink-muted">
          <p>
            Since its inception, MBSCET has grown into a reputable institution affiliated with
            the University of Jammu and approved by AICTE. We offer eight undergraduate
            engineering programs and postgraduate programs, nurturing students to become
            competent professionals ready to serve industry and society.
          </p>
          <p>
            Under the guidance of the Sant Manjit Singh Trust, our college continues to uphold
            the values of academic excellence, ethical conduct, and holistic development. I
            encourage our students to pursue knowledge with dedication and contribute positively
            to the nation.
          </p>
          <p>
            I extend my best wishes to all students, faculty, and staff for a successful
            academic year ahead.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
