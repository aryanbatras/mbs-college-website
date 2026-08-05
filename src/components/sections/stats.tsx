"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const STATS = [
  { value: 8, suffix: "+", label: "Programs" },
  { value: 30, suffix: "+", label: "Faculty Members" },
  { value: 490, suffix: "", label: "Total Seats" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

export function StatBand() {
  return (
    <section className="bg-navy text-paper" aria-label="Key statistics">
      <div className="page-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-paper/60 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
