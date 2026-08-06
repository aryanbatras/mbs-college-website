"use client";

import { motion } from "motion/react";
import { BookOpen, Award, Users, TrendingUp, ExternalLink } from "react-icons/fa";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const RESEARCH_METRICS = [
  { icon: BookOpen, value: 150, suffix: "+", label: "Publications" },
  { icon: Award, value: 25, suffix: "+", label: "Patents Filed" },
  { icon: Users, value: 40, suffix: "+", label: "Research Guides" },
  { icon: TrendingUp, value: 5, suffix: "M+", label: "Research Funding" },
];

const RESEARCH_AREAS = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Deep learning, natural language processing, computer vision, and AI applications in healthcare and agriculture.",
    papers: 45,
  },
  {
    title: "Renewable Energy Systems",
    description: "Solar photovoltaics, wind energy, energy storage, and smart grid technologies.",
    papers: 32,
  },
  {
    title: "Structural Engineering",
    description: "Seismic analysis, sustainable materials, green building design, and infrastructure resilience.",
    papers: 28,
  },
  {
    title: "VLSI & Embedded Systems",
    description: "Low-power design, IoT architectures, FPGA implementations, and hardware security.",
    papers: 22,
  },
];

const RECENT_PUBLICATIONS = [
  {
    title: "Deep Learning-Based Crop Disease Detection Using Transfer Learning",
    authors: "Dr. Amrik Singh, et al.",
    journal: "IEEE Access",
    year: "2024",
    doi: "#",
  },
  {
    title: "Optimal Sizing of Hybrid Solar-Wind-Battery System for Remote Areas",
    authors: "Dr. Nitin Langer, et al.",
    journal: "Renewable Energy",
    year: "2024",
    doi: "#",
  },
  {
    title: "Seismic Performance Assessment of RC Buildings with Base Isolation",
    authors: "Mr. Ishpal Singh, et al.",
    journal: "Engineering Structures",
    year: "2023",
    doi: "#",
  },
];

export function ResearchSection() {
  return (
    <section className="bg-white" aria-label="Research and publications">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Research
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            Research & Publications
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Advancing knowledge through cutting-edge research and innovation.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {RESEARCH_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center size-12 bg-accent/10 mb-4">
                <metric.icon className="size-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm text-ink-muted mt-1">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Research areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {RESEARCH_AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-ink/[0.02] hover:bg-ink/[0.04] transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors mb-2">{area.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{area.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-semibold text-accent">{area.papers}</div>
                  <div className="text-[10px] text-ink-muted uppercase tracking-wider">papers</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent publications */}
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">
            Recent Publications
          </h3>
          <div className="flex flex-col gap-4">
            {RECENT_PUBLICATIONS.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 hover:bg-ink/[0.02] transition-colors"
              >
                <BookOpen className="size-5 text-accent shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-ink leading-snug">{pub.title}</h4>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-ink-muted">
                    <span>{pub.authors}</span>
                    <span>&middot;</span>
                    <span className="italic">{pub.journal}</span>
                    <span>&middot;</span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-faint hover:text-accent transition-colors shrink-0"
                  aria-label="View publication"
                >
                  <ExternalLink className="size-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
