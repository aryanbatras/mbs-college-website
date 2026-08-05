"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GraduationCap, Users, Building, Award, TrendingUp, BookOpen } from "lucide-react";

const STATS = [
  { icon: GraduationCap, value: 8, suffix: "+", label: "Programs", description: "B.E. & MCA" },
  { icon: Users, value: 30, suffix: "+", label: "Faculty", description: "PhD qualified" },
  { icon: Building, value: 490, suffix: "", label: "Total Seats", description: "Across all programs" },
  { icon: Award, value: 25, suffix: "+", label: "Years", description: "Of excellence" },
  { icon: TrendingUp, value: 85, suffix: "%", label: "Placement Rate", description: "Annual average" },
  { icon: BookOpen, value: 50, suffix: "+", label: "Labs", description: "Modern equipment" },
];

export function StatBand() {
  return (
    <section className="bg-navy text-paper" aria-label="Key statistics">
      <div className="page-container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            By The Numbers
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">
            MBSCET at a Glance
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center size-12 bg-accent/20 mb-4">
                <stat.icon className="size-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-paper/80 mt-1">{stat.label}</div>
              <div className="text-xs text-paper/50 mt-0.5">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
