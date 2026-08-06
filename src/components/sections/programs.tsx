import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getPrograms } from "@/lib/content";

export async function ProgramsSection() {
  const programs = getPrograms();

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
            AICTE approved B.Tech programs across 7 departments. NBA accreditation in CSE, EE, and ME.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.code}
              href={`/academics/${program.slug}`}
              className="group block p-8 bg-gray-50 hover:bg-[#00274C] transition-colors"
            >
              <div className="mb-5">
                <span className="text-xs font-bold text-[#00274C] group-hover:text-[#FFCB05] transition-colors tracking-wider">
                  {program.code}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#00274C] group-hover:text-white leading-tight mb-3 transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-[#5C6370] group-hover:text-white/60 mb-4 transition-colors leading-relaxed line-clamp-3">
                {program.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 group-hover:border-white/10 transition-colors">
                <span className="text-xs text-[#9CA3AF] group-hover:text-white/40 transition-colors">
                  {program.duration} &middot; {program.intake} Seats
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-[#00274C] group-hover:text-[#FFCB05] transition-colors">
                  Details
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[#5C6370]">
            M.Tech programs approved by AICTE in CSE, EE, ME, and ECE
          </p>
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
