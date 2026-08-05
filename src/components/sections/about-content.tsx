"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { SiteConfig } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Calendar, Users, Award, BookOpen, Building, ChevronRight, ChevronDown } from "lucide-react";

interface AboutContentProps {
  config: SiteConfig;
}

const TIMELINE = [
  { year: "1999", title: "College Established", description: "MBSCET was founded under the Sant Manjit Singh Trust, aegis of Dera Sant Pura Nangali Sahib, to provide quality engineering education in Jammu & Kashmir." },
  { year: "2000", title: "First Batch Graduates", description: "The inaugural batch of B.E. students graduated, marking the beginning of a legacy in engineering education." },
  { year: "2005", title: "AICTE Approval", description: "Received full approval from the All India Council for Technical Education, validating our commitment to quality education." },
  { year: "2010", title: "Campus Expansion", description: "Expanded campus infrastructure with new laboratories, library, and seminar halls to accommodate growing student body." },
  { year: "2015", title: "Industry Partnerships", description: "Established partnerships with leading companies including Infosys, Wipro, and TCS for placements and internships." },
  { year: "2020", title: "Digital Transformation", description: "Implemented modern digital infrastructure and online learning capabilities during the global pandemic." },
  { year: "2023", title: "New Programs Launched", description: "Introduced B.E. in Artificial Intelligence & Machine Learning to meet industry demand for emerging technologies." },
  { year: "2024", title: "NAAC Accreditation", description: "Received NAAC accreditation, recognizing our commitment to quality education and institutional excellence." },
];

const LEADERSHIP = [
  { name: "Chairman", role: "Chairman, MBSCET", description: "Leading the institution with a vision for excellence in engineering education." },
  { name: "Principal", role: "Principal, MBSCET", description: "Academic head with extensive experience in engineering education and research." },
  { name: "Dean Academics", role: "Dean Academics", description: "Overseeing academic programs and curriculum development across all departments." },
  { name: "Dean Students", role: "Dean Students Welfare", description: "Managing student activities, welfare, and holistic development programs." },
];

const KEY_FACTS = [
  { icon: Calendar, label: "Established", value: "1999" },
  { icon: Award, label: "AICTE Approved", value: "Yes" },
  { icon: Users, label: "Minority Quota", value: "165 seats" },
  { icon: BookOpen, label: "Programs", value: "8" },
  { icon: Building, label: "Campus Area", value: "25 acres" },
  { icon: Users, label: "Faculty", value: "30+" },
];

export function AboutContent({ config }: AboutContentProps) {
  const [expandedTimeline, setExpandedTimeline] = useState<string | null>(null);

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

      {/* Key facts — clean grid with icons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8"
      >
        {KEY_FACTS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4 p-4 bg-ink/[0.02] hover:bg-ink/[0.04] transition-colors"
          >
            <div className="size-10 flex items-center justify-center bg-accent/10 shrink-0">
              <item.icon className="size-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">{item.value}</div>
              <div className="text-sm text-ink-muted mt-1">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vision & Mission — editorial style */}
      <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Vision</h2>
          <div className="relative">
            <div className="absolute -top-4 -left-2 text-5xl text-accent/20 font-serif select-none">&ldquo;</div>
            <blockquote className="font-heading text-lg md:text-xl leading-relaxed text-ink relative z-10">
              {config.vision}
            </blockquote>
            <div className="absolute -bottom-4 -right-2 text-5xl text-accent/20 font-serif select-none">&rdquo;</div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Mission</h2>
          <ul className="flex flex-col gap-4">
            {config.mission.map((m, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                <span className="mt-2 size-1.5 shrink-0 bg-accent rounded-full" />
                {m}
              </li>
            ))}
          </ul>
        </motion.section>
      </div>

      {/* History Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 md:mt-24"
      >
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-8">
          Our Journey
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line" />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative flex items-start gap-6 md:gap-8 mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full z-10" />

              {/* Content */}
              <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <div className="inline-block px-3 py-1 bg-navy text-paper text-xs font-medium tracking-wider mb-2">
                  {item.year}
                </div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="text-sm text-ink-muted mt-1 leading-relaxed max-w-md">{item.description}</p>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Leadership */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 md:mt-24"
      >
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-8">
          Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 bg-ink/[0.02] hover:bg-ink/[0.04] transition-colors group"
            >
              <div className="size-16 bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Users className="size-7 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-ink">{person.role}</h3>
              <p className="text-sm text-ink-muted mt-2 leading-relaxed">{person.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Affiliations */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 md:mt-24"
      >
        <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">
          Affiliations & Approvals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...config.affiliations, config.accreditation].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-ink/[0.02]">
              <Award className="size-5 text-accent shrink-0" />
              <span className="text-sm text-ink">{item}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
