"use client";

import { motion } from "motion/react";
import { TrendingUp, Users, Building2, BookOpen } from "lucide-react";

const RECRUITERS = [
  "Kandhari Beverages Pvt. Ltd.",
  "Cloud Analogy",
  "Vision India Services",
  "Pentagon Space (Bangalore)",
  "RVS iGlobal (Jammu)",
  "Various IT/Core Firms",
];

const TRAINING = [
  { title: "Python & Machine Learning", hours: "45 hours" },
  { title: "Power BI for Data Analytics", hours: "45 hours" },
  { title: "Digital Marketing (SOFCON)", hours: "45 hours" },
  { title: "Industrial Training (6th Sem)", hours: "Semester-long" },
];

export function PlacementsContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          TRAINING & PLACEMENT CELL
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Placements
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          The Training & Placement Cell at MBSCET provides comprehensive career
          guidance, technical training, and connects students with industry
          opportunities through campus recruitment drives.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        <div className="border border-line p-6">
          <TrendingUp className="mb-3 size-5 text-accent" />
          <div className="font-heading text-3xl font-bold text-ink">₹6–7.2 LPA</div>
          <div className="mt-1 text-sm text-ink-faint">Highest Package (historical)</div>
        </div>
        <div className="border border-line p-6">
          <Users className="mb-3 size-5 text-accent" />
          <div className="font-heading text-3xl font-bold text-ink">₹2.5–3.5 LPA</div>
          <div className="mt-1 text-sm text-ink-faint">Average Package</div>
        </div>
        <div className="border border-line p-6">
          <Building2 className="mb-3 size-5 text-accent" />
          <div className="font-heading text-3xl font-bold text-ink">10+</div>
          <div className="mt-1 text-sm text-ink-faint">Recruiters</div>
        </div>
      </motion.div>

      <p className="mt-4 text-xs text-ink-faint italic">
        Figures per third-party listings (Careers360, Shiksha). Subject to verification by T&P cell.
      </p>

      {/* Recruiters */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Recruiters</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {RECRUITERS.map((name) => (
            <div key={name} className="border border-line px-4 py-2 text-sm text-ink">
              {name}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Training Programs */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Training Programs</h2>
        <div className="mt-4 flex flex-col gap-0">
          {TRAINING.map((t) => (
            <div key={t.title} className="flex items-center justify-between border-b border-line py-3 last:border-b-0">
              <div className="flex items-center gap-3">
                <BookOpen className="size-4 text-accent" />
                <span className="text-sm font-medium text-ink">{t.title}</span>
              </div>
              <span className="text-xs text-ink-faint">{t.hours}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
