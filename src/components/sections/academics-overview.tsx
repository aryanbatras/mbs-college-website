"use client";

import { motion } from "motion/react";
import type { Program } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProgramFinder } from "@/components/sections/program-finder";

interface AcademicsOverviewProps {
  programs: Program[];
}

export function AcademicsOverview({ programs }: AcademicsOverviewProps) {
  return (
    <div className="page-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Breadcrumb items={[{ label: "Academics" }]} />
        <h1 className="mt-4 font-heading text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
          Programs Offered
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
          MBSCET offers 8 undergraduate B.E. programs and 1 postgraduate MCA
          program across core and emerging engineering disciplines.
        </p>
      </motion.div>

      <div className="mt-12">
        <ProgramFinder programs={programs} />
      </div>
    </div>
  );
}
