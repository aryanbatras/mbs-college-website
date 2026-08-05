"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-12 md:py-24">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-4 flex items-center gap-2 text-xs text-ink-muted">
              <span className="inline-block size-1.5 bg-accent" />
              AICTE approved · Affiliated to University of Jammu
            </div>

            <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
              Mahant Bachittar Singh College of Engineering & Technology
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
              Established in 1999 under the Sant Manjit Singh Trust, MBSCET is a
              recognized Sikh minority institution offering B.E. and MCA programs in
              Jammu, Jammu & Kashmir.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/admissions">
                <Button className="bg-ink text-paper hover:bg-ink/90 rounded-sm px-5">
                  Admissions 2025-26
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
              <Link href="/academics">
                <Button variant="outline" className="rounded-sm px-5">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: image placeholder (campus photo) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative aspect-[4/5] border-2 border-line bg-surface">
            {/* Replace with real campus photo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="font-heading text-4xl font-bold text-ink/10 md:text-6xl">
                MBS
              </div>
              <div className="mt-3 text-xs text-ink-faint">
                Campus photograph — replace with actual image
              </div>
            </div>
            {/* Accent rule */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
