"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen, Wifi, Building, Users } from "lucide-react";

const FACILITIES = [
  { icon: BookOpen, label: "Central Library", desc: "Textbooks, journals, digital terminals" },
  { icon: Wifi, label: "Wi-Fi Campus", desc: "High-speed internet throughout campus" },
  { icon: Building, label: "Modern Labs", desc: "Department-specific laboratories" },
  { icon: Users, label: "Hostels", desc: "Separate accommodation for boys and girls" },
];

export function CampusSection() {
  return (
    <section className="border-b border-line bg-accent-soft/20">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            <span className="inline-block size-1.5 bg-accent" />
            CAMPUS LIFE
          </div>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Our Campus
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((facility, i) => (
            <motion.div
              key={facility.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="border border-line p-5"
            >
              <facility.icon className="mb-3 size-5 text-accent" />
              <h3 className="font-heading text-sm font-semibold text-ink">{facility.label}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{facility.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link href="/campus/galleries" className="text-sm font-medium text-ink transition-colors hover:text-accent">
            View Galleries →
          </Link>
          <Link href="/campus/clubs" className="text-sm font-medium text-ink transition-colors hover:text-accent">
            Student Clubs →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
