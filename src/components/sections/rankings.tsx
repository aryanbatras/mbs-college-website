"use client";

import { motion } from "motion/react";
import { Award, Shield, GraduationCap, Star } from "react-icons/fa";

const ACCREDITATIONS = [
  {
    icon: Shield,
    title: "AICTE Approved",
    description: "All India Council for Technical Education",
    year: "Since 1999",
  },
  {
    icon: GraduationCap,
    title: "University of Jammu",
    description: "Affiliated to the University of Jammu",
    year: "Since 1999",
  },
  {
    icon: Award,
    title: "UGC Recognized",
    description: "University Grants Commission",
    year: "Recognized",
  },
  {
    icon: Star,
    title: "Sikh Minority",
    description: "Minority Institution under Article 30",
    year: "Since 1999",
  },
];

export function RankingsSection() {
  return (
    <section className="bg-paper" aria-label="Accreditations and rankings">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Recognition
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            Accreditations & Approvals
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {ACCREDITATIONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="text-center group p-6 bg-white hover:bg-ink/[0.02] transition-colors"
            >
              <div className="inline-flex items-center justify-center size-14 bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="size-6 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">{item.description}</p>
              <p className="text-[10px] font-medium text-accent mt-3 tracking-wider uppercase">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
