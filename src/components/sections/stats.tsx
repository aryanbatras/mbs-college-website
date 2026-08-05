"use client";

import { motion } from "motion/react";

const STATS = [
  { value: "8", label: "B.E. Programs" },
  { value: "30+", label: "Faculty" },
  { value: "165", label: "Minority Seats" },
  { value: "25+", label: "Years of Excellence" },
];

export function StatBand() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center gap-1 px-4 py-8 md:py-10"
          >
            <span className="font-heading text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-wider text-ink-faint">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
