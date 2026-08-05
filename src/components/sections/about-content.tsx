"use client";

import { motion } from "motion/react";
import type { SiteConfig } from "@/lib/content";
import { GraduationCap, Award, Users, Building } from "lucide-react";

interface AboutContentProps {
  config: SiteConfig;
}

export function AboutContent({ config }: AboutContentProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          ABOUT
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          About the College
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Mahant Bachittar Singh College of Engineering & Technology (MBSCET) is a
          recognized Sikh minority institution established in 1999 under the Sant
          Manjit Singh Trust, aegis of Dera Sant Pura Nangali Sahib.
        </p>
      </motion.div>

      {/* Key facts */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
      >
        {[
          { icon: GraduationCap, label: "Established", value: "1999" },
          { icon: Award, label: "AICTE Approved", value: "Yes" },
          { icon: Users, label: "Minority Quota", value: "165 seats" },
          { icon: Building, label: "Programs", value: "8 B.E. + 4 M.E." },
        ].map((item) => (
          <div key={item.label} className="border border-line p-4">
            <item.icon className="mb-2 size-5 text-accent" />
            <div className="font-heading text-lg font-bold text-ink">{item.value}</div>
            <div className="text-xs text-ink-faint">{item.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Vision */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Vision</h2>
        <div className="mt-4 border-l-2 border-accent pl-6">
          <blockquote className="font-heading text-lg leading-relaxed text-ink">
            &ldquo;{config.vision}&rdquo;
          </blockquote>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Mission</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {config.mission.map((m, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
              <span className="mt-1.5 size-1.5 shrink-0 bg-accent" />
              {m}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Affiliations */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Affiliations & Approvals</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {config.affiliations.map((a, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink-muted">
              <span className="mt-1.5 size-1.5 shrink-0 bg-accent" />
              {a}
            </li>
          ))}
          <li className="flex gap-3 text-sm text-ink-muted">
            <span className="mt-1.5 size-1.5 shrink-0 bg-accent" />
            {config.accreditation}
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
