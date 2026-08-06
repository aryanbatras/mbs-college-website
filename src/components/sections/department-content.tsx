"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Program, FacultyMember } from "@/lib/content";
import { ArrowLeft, Users, ExternalLink } from "lucide-react";

interface DepartmentContentProps {
  program: Program;
  faculty?: FacultyMember[];
}

const DEPT_IMAGES: Record<string, string> = {
  "computer-science": "/media/general/1-1024x579.jpg",
  "information-technology": "/media/general/2-1024x768.jpeg",
  "electronics-communication": "/media/general/1-1-1024x579.jpeg",
  "electrical": "/media/general/10-1024x768.jpeg",
  "mechanical": "/media/general/11-1024x768.jpg",
  "civil": "/media/general/2-1-1024x576.jpg",
  "mca": "/media/general/3-1024x576.jpeg",
};

export function DepartmentContent({ program, faculty = [] }: DepartmentContentProps) {
  return (
    <div>
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[16/6] md:aspect-[16/4] overflow-hidden bg-ink/5"
      >
        <img
          src={DEPT_IMAGES[program.slug] || "/media/general/DSC_0123-1024x683.jpg"}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 page-container pb-10 md:pb-14">
          <Link href="/academics" className="inline-flex items-center gap-1 text-xs font-medium text-paper/60 hover:text-paper transition-colors mb-4">
            <ArrowLeft className="size-3" />
            All Programs
          </Link>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-2">
                {program.degree} Program
              </p>
              <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-paper leading-tight">
                {program.title}
              </h1>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl md:text-3xl font-semibold text-accent">{program.intake}</div>
              <div className="text-xs text-paper/50">seats</div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-paper/50">
            <span>{program.degree}</span>
            <span>&middot;</span>
            <span>{program.duration}</span>
            <span>&middot;</span>
            <span>{program.eligibility}</span>
          </div>
        </div>
      </motion.div>

      <div className="page-container section-spacing">
        {/* Description */}
        {program.description && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl"
          >
            <p className="text-base md:text-lg leading-relaxed text-ink-muted">
              {program.description}
            </p>
          </motion.section>
        )}

        {/* Vision */}
        {program.vision && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-12 md:mt-16"
          >
            <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-5">Vision</h2>
            <blockquote className="font-heading text-base md:text-lg leading-relaxed text-ink max-w-2xl">
              &ldquo;{program.vision}&rdquo;
            </blockquote>
          </motion.section>
        )}

        {/* Faculty — clean table, no borders */}
        {faculty.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 md:mt-16"
          >
            <div className="flex items-center gap-2 mb-8">
              <Users className="size-4 text-accent" />
              <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink">Faculty</h2>
              <span className="text-sm text-ink-faint">({faculty.length} members)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink/10">
                    <th className="pb-4 pr-6 text-left font-medium text-ink">Name</th>
                    <th className="pb-4 pr-6 text-left font-medium text-ink">Designation</th>
                    <th className="pb-4 pr-6 text-left font-medium text-ink">Qualification</th>
                    <th className="pb-4 text-left font-medium text-ink">Specialization</th>
                  </tr>
                </thead>
                <tbody>
                  {faculty.map((f, i) => (
                    <tr key={i} className="border-b border-ink/5 last:border-b-0">
                      <td className="py-4 pr-6 text-ink font-medium">{f.name}</td>
                      <td className="py-4 pr-6 text-ink-muted">{f.designation}</td>
                      <td className="py-4 pr-6 text-ink-muted">{f.qualification}</td>
                      <td className="py-4 text-ink-muted">{f.specialization}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        )}

        {/* Labs */}
        {program.labs && program.labs.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 md:mt-16"
          >
            <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Labs & Facilities</h2>
            <div className="flex flex-wrap gap-3">
              {program.labs.map((lab) => (
                <div key={lab} className="px-5 py-2.5 text-sm text-ink-muted bg-ink/[0.03]">
                  {lab}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Highlights */}
        {program.highlights && program.highlights.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 md:mt-16"
          >
            <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Highlights</h2>
            <ul className="flex flex-col gap-3">
              {program.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-ink-muted">
                  <span className="mt-2 size-1 shrink-0 bg-accent rounded-full" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* PEOs */}
        {program.peos && program.peos.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 md:mt-16"
          >
            <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Program Educational Objectives (PEOs)</h2>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              {program.peos.map((peo, i) => (
                <li key={i} className="text-[15px] text-ink-muted pl-2">
                  <span className="font-medium text-ink">PEO{i + 1}:</span> {peo}
                </li>
              ))}
            </ol>
          </motion.section>
        )}

        {/* Related Tabs / Resources */}
        {program.relatedTabs && program.relatedTabs.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {program.relatedTabs.map((tab, i) => (
                <a
                  key={i}
                  href={tab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-3 text-sm text-ink-muted bg-ink/[0.03] hover:bg-ink/[0.06] transition-colors"
                >
                  <ExternalLink className="size-3.5 shrink-0 text-ink-faint group-hover:text-accent transition-colors" />
                  <span>{tab.label}</span>
                </a>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
