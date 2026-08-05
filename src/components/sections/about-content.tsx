"use client";

import { motion } from "motion/react";
import type { SiteConfig } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";

interface AboutContentProps {
  config: SiteConfig;
}

export function AboutContent({ config }: AboutContentProps) {
  return (
    <div className="page-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Breadcrumb items={[{ label: "About" }]} />
        <h1 className="mt-4 font-heading text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
          About the College
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
          Mahant Bachittar Singh College of Engineering & Technology (MBSCET) is a
          recognized Sikh minority institution established in 1999 under the Sant
          Manjit Singh Trust, aegis of Dera Sant Pura Nangali Sahib.
        </p>
      </motion.div>

      {/* Key facts — clean, no borders */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4"
      >
        {[
          { label: "Established", value: "1999" },
          { label: "AICTE Approved", value: "Yes" },
          { label: "Minority Quota", value: "165 seats" },
          { label: "Programs", value: "8" },
        ].map((item) => (
          <div key={item.label}>
            <div className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">{item.value}</div>
            <div className="text-sm text-ink-muted mt-1">{item.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Vision */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20 md:mt-24"
      >
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Vision</h2>
        <blockquote className="font-heading text-lg md:text-xl leading-relaxed text-ink max-w-2xl">
          &ldquo;{config.vision}&rdquo;
        </blockquote>
      </motion.section>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 md:mt-20"
      >
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Mission</h2>
        <ul className="flex flex-col gap-4 max-w-2xl">
          {config.mission.map((m, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
              <span className="mt-2 size-1 shrink-0 bg-accent rounded-full" />
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
        className="mt-16 md:mt-20"
      >
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Affiliations & Approvals</h2>
        <ul className="flex flex-col gap-3">
          {config.affiliations.map((a, i) => (
            <li key={i} className="flex gap-3 text-[15px] text-ink-muted">
              <span className="mt-2 size-1 shrink-0 bg-accent rounded-full" />
              {a}
            </li>
          ))}
          <li className="flex gap-3 text-[15px] text-ink-muted">
            <span className="mt-2 size-1 shrink-0 bg-accent rounded-full" />
            {config.accreditation}
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
