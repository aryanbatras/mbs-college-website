import Link from "next/link";
import { FaArrowRight, FaAward } from "react-icons/fa";
import type { Program } from "@/lib/content";

const PROGRAMS_DATA = [
  { code: "CSE", title: "Computer Science & Engineering", intake: 180, duration: "4 Years", nba: true },
  { code: "IT", title: "Information Technology", intake: 60, duration: "4 Years", nba: false },
  { code: "ECE", title: "Electronics & Communication", intake: 60, duration: "4 Years", nba: false },
  { code: "EE", title: "Electrical Engineering", intake: 60, duration: "4 Years", nba: true },
  { code: "ME", title: "Mechanical Engineering", intake: 60, duration: "4 Years", nba: true },
  { code: "CE", title: "Civil Engineering", intake: 60, duration: "4 Years", nba: false },
  { code: "CSE (AI&ML)", title: "CSE with AI & ML", intake: 60, duration: "4 Years", nba: false },
];

interface ProgramsSectionProps {
  programs: Program[];
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section className="bg-white" aria-label="Programs">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            Academic Programs
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight">
            Departments & Programs
          </h2>
          <p className="text-lg text-[#5C6370] mt-4 max-w-2xl">
            AICTE approved B.Tech programs across 7 departments, with NBA accreditation in CSE, EE, and ME.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS_DATA.map((program) => (
            <div
              key={program.code}
              className="group border border-[#E5E7EB] hover:border-[#FFCB05] transition-colors p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-bold text-[#FFCB05] bg-[#FFCB05]/10 px-2 py-1">
                  {program.code}
                </div>
                {program.nba && (
                  <div className="flex items-center gap-1 text-[9px] font-bold text-[#00274C] bg-[#FFCB05] px-1.5 py-0.5">
                    <FaAward className="text-[8px]" />
                    NBA
                  </div>
                )}
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#00274C] leading-tight mb-3">
                {program.title}
              </h3>
              <p className="text-sm text-[#5C6370] mb-4">
                {program.duration} &middot; {program.intake} Seats
              </p>
              <Link
                href={`/academics/${program.code.toLowerCase().replace(/[^a-z]/g, '')}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors group/link"
              >
                Learn More
                <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-base font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors group"
          >
            View all departments
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
