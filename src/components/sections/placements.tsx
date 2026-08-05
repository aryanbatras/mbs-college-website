"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { TrendingUp, Users, Building2 } from "lucide-react";

const RECRUITERS = [
  "Kandhari Beverages",
  "Cloud Analogy",
  "Vision India Services",
  "Pentagon Space",
  "RVS iGlobal",
];

export function PlacementsSection() {
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
            TRAINING & PLACEMENT
          </div>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Placements
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-3">
              <TrendingUp className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <div className="font-heading text-2xl font-bold text-ink">₹6–7.2 LPA</div>
                <div className="text-xs text-ink-faint">Highest package (historical)</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <div className="font-heading text-2xl font-bold text-ink">₹2.5–3.5 LPA</div>
                <div className="text-xs text-ink-faint">Average package</div>
              </div>
            </div>
            <p className="text-xs text-ink-faint italic">
              Figures per third-party listings (Careers360, Shiksha). Subject to verification by T&amp;P cell.
            </p>
          </motion.div>

          {/* Recruiters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 text-xs text-ink-muted mb-3">
              <Building2 className="size-3.5" />
              Recruiters
            </div>
            <ul className="flex flex-col gap-1.5">
              {RECRUITERS.map((name) => (
                <li key={name} className="flex items-center gap-2 text-sm text-ink-muted">
                  <span className="size-1 bg-accent" />
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Training Programs</h3>
            <ul className="flex flex-col gap-2 text-sm text-ink-muted">
              <li>45-hour Python & Machine Learning crash course</li>
              <li>Power BI for Data Analytics workshop</li>
              <li>6th-semester industrial training</li>
              <li>Digital Marketing with SOFCON</li>
            </ul>
            <Link
              href="/placements"
              className="mt-auto text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              View placement details →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
