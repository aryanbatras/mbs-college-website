"use client";

import { motion } from "motion/react";

const STATS = [
  { value: "1999", label: "Established", description: "Over 25 years of technical education" },
  { value: "6", label: "Departments", description: "B.Tech programs" },
  { value: "330", label: "Annual Intake", description: "Students per year" },
  { value: "3", label: "NBA Accredited", description: "CSE, EE, ME departments" },
];

export function StatBand() {
  return (
    <section className="bg-[#00274C]" aria-label="Key statistics">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
            Key Facts
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            MBSCET at a Glance
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-white/50">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
