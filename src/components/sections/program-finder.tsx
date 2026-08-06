"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Search, Filter, ArrowRight, Users, Clock, BookOpen } from "react-icons/fa";
import type { Program } from "@/lib/content";

interface ProgramFinderProps {
  programs: Program[];
}

const PROGRAM_IMAGES: Record<string, string> = {
  "cse": "/media/general/1-1024x579.jpg",
  "it": "/media/general/2-1024x768.jpeg",
  "ece": "/media/general/1-1-1024x579.jpeg",
  "ee": "/media/general/10-1024x768.jpeg",
  "me": "/media/general/11-1024x768.jpg",
  "civil": "/media/general/2-1-1024x576.jpg",
  "mca": "/media/general/3-1024x576.jpeg",
};

const DEPARTMENT_ROUTES: Record<string, string> = {
  "cse": "/academics/cse",
  "ee": "/academics/ee",
  "ece": "/academics/ece",
  "me": "/academics/me",
  "civil": "/academics/civil",
  "it": "/academics/it",
  "mca": "/academics/mca",
};

const DEGREE_TYPES = ["All", "B.E.", "MCA"];
const INTAKE_RANGES = [
  { label: "All Sizes", min: 0, max: Infinity },
  { label: "Small (≤30)", min: 0, max: 30 },
  { label: "Medium (31-60)", min: 31, max: 60 },
  { label: "Large (60+)", min: 60, max: Infinity },
];

export function ProgramFinder({ programs }: ProgramFinderProps) {
  const [search, setSearch] = useState("");
  const [degreeType, setDegreeType] = useState("All");
  const [intakeRange, setIntakeRange] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    return programs.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase());
      const matchesDegree = degreeType === "All" || p.degree === degreeType;
      const range = INTAKE_RANGES[intakeRange];
      const matchesIntake = p.intake >= range.min && p.intake <= range.max;
      return matchesSearch && matchesDegree && matchesIntake;
    });
  }, [programs, search, degreeType, intakeRange]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-faint" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search programs..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        {/* Degree type filter */}
        <div className="flex gap-1 bg-ink/[0.03] p-1">
          {DEGREE_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setDegreeType(type)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                degreeType === type
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Intake filter */}
        <select
          value={intakeRange}
          onChange={(e) => setIntakeRange(Number(e.target.value))}
          className="px-4 py-2.5 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors text-ink"
        >
          {INTAKE_RANGES.map((range, i) => (
            <option key={i} value={i}>
              {range.label}
            </option>
          ))}
        </select>

        {/* View toggle */}
        <div className="flex gap-1 bg-ink/[0.03] p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-2 text-sm transition-colors ${
              viewMode === "grid" ? "bg-white text-ink shadow-sm" : "text-ink-muted hover:text-ink"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-2 text-sm transition-colors ${
              viewMode === "list" ? "bg-white text-ink shadow-sm" : "text-ink-muted hover:text-ink"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-ink-muted mb-6">
        Showing {filtered.length} of {programs.length} programs
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {viewMode === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((program, i) => (
              <motion.div
                key={program.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={DEPARTMENT_ROUTES[program.slug] || `/academics/${program.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 mb-4">
                    <img
                      src={PROGRAM_IMAGES[program.slug] || "/media/general/DSC_0123-1024x683.jpg"}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 text-[10px] font-medium bg-white/90 text-ink">
                        {program.degree}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-ink-muted">
                    <span className="flex items-center gap-1">
                      <Users className="size-3.5" />
                      {program.intake} seats
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {program.duration}
                    </span>
                  </div>
                  {program.description && (
                    <p className="mt-2 text-sm text-ink-muted line-clamp-2">{program.description}</p>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            {filtered.map((program, i) => (
              <motion.div
                key={program.slug}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <Link
                  href={DEPARTMENT_ROUTES[program.slug] || `/academics/${program.slug}`}
                  className="group flex items-center gap-5 py-4 border-b border-ink/5 hover:bg-ink/[0.02] px-4 -mx-4 transition-colors"
                >
                  <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-ink/5">
                    <img
                      src={PROGRAM_IMAGES[program.slug] || "/media/general/DSC_0123-1024x683.jpg"}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                        {program.title}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] font-medium bg-ink/[0.05] text-ink-muted">
                        {program.degree}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-ink-muted">
                      <span className="flex items-center gap-1">
                        <Users className="size-3.5" />
                        {program.intake} seats
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="size-3.5" />
                        {program.eligibility}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-ink-faint group-hover:text-accent transition-colors shrink-0" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <Filter className="size-12 text-ink-faint mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ink mb-2">No programs found</h3>
          <p className="text-sm text-ink-muted">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
