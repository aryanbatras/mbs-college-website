"use client";

import { motion } from "motion/react";
import { Shield, Award, Star, CheckCircle, GraduationCap, Users } from "lucide-react";

const PROOF_ITEMS = [
  {
    icon: Shield,
    title: "AICTE Approved",
    description: "All India Council for Technical Education",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: GraduationCap,
    title: "University of Jammu",
    description: "Affiliated since 1999",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Award,
    title: "UGC Recognized",
    description: "University Grants Commission",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Star,
    title: "Sikh Minority",
    description: "Minority Institution under Article 30",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: CheckCircle,
    title: "NAAC Accredited",
    description: "National Assessment and Accreditation Council",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Users,
    title: "10,000+ Alumni",
    description: "Strong global alumni network",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

export function SocialProof() {
  return (
    <section className="bg-white py-12 md:py-16 border-y border-ink/5" aria-label="Accreditations and recognition">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Recognized & Accredited
          </p>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink">
            Trusted By Students & Industry
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PROOF_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`size-14 flex items-center justify-center ${item.bg} mb-3 group-hover:scale-110 transition-transform`}>
                <item.icon className={`size-7 ${item.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="text-xs text-ink-muted mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
