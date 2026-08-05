"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Program, FacultyMember } from "@/lib/content";
import { FlaskConical, ArrowLeft, Users } from "lucide-react";

interface DepartmentContentProps {
  program: Program;
  faculty?: FacultyMember[];
}

export function DepartmentContent({ program, faculty = [] }: DepartmentContentProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/academics" className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-accent mb-6">
          <ArrowLeft className="size-3" />
          All Programs
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-ink-muted">
              <span className="inline-block size-1.5 bg-accent" />
              {program.degree} PROGRAM
            </div>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
              {program.title}
            </h1>
          </div>
          <div className="text-right">
            <div className="font-heading text-3xl font-bold text-accent">{program.intake}</div>
            <div className="text-xs text-ink-faint">seats</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-xs text-ink-faint">
          <span>{program.degree}</span>
          <span>·</span>
          <span>{program.duration}</span>
          <span>·</span>
          <span>{program.eligibility}</span>
        </div>
      </motion.div>

      {/* Description */}
      {program.description && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <p className="max-w-[65ch] text-base leading-relaxed text-ink-muted">
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
          className="mt-10"
        >
          <h2 className="font-heading text-xl font-bold tracking-tight text-ink">Vision</h2>
          <div className="mt-3 border-l-2 border-accent pl-5">
            <blockquote className="text-sm leading-relaxed text-ink-muted">
              &ldquo;{program.vision}&rdquo;
            </blockquote>
          </div>
        </motion.section>
      )}

      {/* Faculty */}
      {faculty.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Users className="size-4 text-accent" />
            <h2 className="font-heading text-xl font-bold tracking-tight text-ink">Faculty</h2>
            <span className="text-xs text-ink-faint">({faculty.length} members)</span>
          </div>
          <div className="border border-line overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-accent-soft/30">
                  <th className="px-4 py-3 text-left font-medium text-ink">Name</th>
                  <th className="px-4 py-3 text-left font-medium text-ink">Designation</th>
                  <th className="px-4 py-3 text-left font-medium text-ink">Qualification</th>
                  <th className="px-4 py-3 text-left font-medium text-ink">Specialization</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((f, i) => (
                  <tr key={i} className="border-b border-line last:border-b-0">
                    <td className="px-4 py-3 text-ink font-medium">{f.name}</td>
                    <td className="px-4 py-3 text-ink-muted">{f.designation}</td>
                    <td className="px-4 py-3 text-ink-muted">{f.qualification}</td>
                    <td className="px-4 py-3 text-ink-muted">{f.specialization}</td>
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
          className="mt-10"
        >
          <h2 className="font-heading text-xl font-bold tracking-tight text-ink">Labs & Facilities</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {program.labs.map((lab) => (
              <div key={lab} className="flex items-center gap-2 border border-line px-3 py-2 text-sm text-ink-muted">
                <FlaskConical className="size-3.5 text-accent" />
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
          className="mt-10"
        >
          <h2 className="font-heading text-xl font-bold tracking-tight text-ink">Highlights</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {program.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-ink-muted">
                <span className="mt-1.5 size-1.5 shrink-0 bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </motion.section>
      )}
    </div>
  );
}
