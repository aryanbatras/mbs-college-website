"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock, Users } from "lucide-react";
import type { Program } from "@/lib/content";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";

interface ProgramsProps {
  programs: Program[];
}

const PROGRAM_IMAGES: Record<string, string> = {
  "computer-science": "/media/general/1-1024x579.jpg",
  "information-technology": "/media/general/2-1024x768.jpeg",
  "electronics-communication": "/media/general/1-1-1024x579.jpeg",
  "electrical": "/media/general/10-1024x768.jpeg",
  "mechanical": "/media/general/11-1024x768.jpg",
  "civil": "/media/general/2-1-1024x576.jpg",
  "mca": "/media/general/3-1024x576.jpeg",
};

export function ProgramsSection({ programs }: ProgramsProps) {
  const featured = programs[0];
  const rest = programs.slice(1);

  return (
    <section className="bg-white" aria-label="Academic programs">
      <div className="page-container section-spacing">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-18"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Academics
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            Programs Offered
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-lg leading-relaxed">
            Seven undergraduate programs and one postgraduate program, each designed
            to prepare students for the demands of modern industry.
          </p>
        </motion.div>

        {/* Featured program — large with hover effect */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href={`/academics/${featured.slug}`}
              className="group block mb-10"
            >
              <div className="relative aspect-[16/7] overflow-hidden bg-ink/5">
                <img
                  src={PROGRAM_IMAGES[featured.slug] || "/media/general/DSC_0123-1024x683.jpg"}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3 block">
                    Featured Program
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-paper tracking-tight mb-3">
                    {featured.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-paper/70">
                    <span className="flex items-center gap-1.5">
                      <Users className="size-4" />
                      {featured.intake} seats
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-4" />
                      {featured.duration}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Program grid — mobile horizontal scroll, desktop grid */}
        <div className="md:hidden">
          <HorizontalScroll snap={false}>
            {rest.map((program) => (
              <Link
                key={program.slug}
                href={`/academics/${program.slug}`}
                className="group min-w-[280px] max-w-[280px] snap-start"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 mb-4">
                  <img
                    src={PROGRAM_IMAGES[program.slug] || "/media/general/DSC_0123-1024x683.jpg"}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                  {program.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-ink-muted mt-1.5">
                  <span className="flex items-center gap-1">
                    <Users className="size-3.5" />
                    {program.intake} seats
                  </span>
                  <span>&middot;</span>
                  <span>{program.degree}</span>
                </div>
              </Link>
            ))}
          </HorizontalScroll>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((program, i) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <Link
                href={`/academics/${program.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 mb-4">
                  <img
                    src={PROGRAM_IMAGES[program.slug] || "/media/general/DSC_0123-1024x683.jpg"}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-ink-muted mt-1.5">
                      <span className="flex items-center gap-1">
                        <Users className="size-3.5" />
                        {program.intake} seats
                      </span>
                      <span>&middot;</span>
                      <span>{program.degree}</span>
                    </div>
                  </div>
                  <ArrowRight className="size-5 mt-1 text-ink-faint group-hover:text-accent transition-all group-hover:translate-x-1 shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
