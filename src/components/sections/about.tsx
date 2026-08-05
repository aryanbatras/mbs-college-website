import Link from "next/link";
import { FaArrowRight, FaAward, FaCheckCircle } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

interface AboutStripProps {
  config: SiteConfig;
}

export function AboutStrip({ config }: AboutStripProps) {
  return (
    <section className="bg-[#00274C]" aria-label="About the college">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">
          {/* Vision */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-6">
              Our Vision
            </p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.2] tracking-tight mb-10">
              &ldquo;{config.vision}&rdquo;
            </blockquote>

            {/* Mission */}
            <div className="mb-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
                Our Mission
              </p>
              <ul className="space-y-3">
                {config.mission.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#FFCB05] text-sm mt-1 shrink-0" />
                    <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-base font-bold text-[#FFCB05] hover:text-white transition-colors"
            >
              Learn more about us
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Accreditation sidebar */}
          <div className="bg-[#1E406B] p-8 lg:p-10 min-w-[280px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 flex items-center justify-center bg-[#FFCB05]">
                <FaAward className="text-[#00274C] text-lg" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Accreditations</h3>
                <p className="text-xs text-white/50">Recognized bodies</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-[#FFCB05] mb-1">NBA Accredited</p>
                <p className="text-xs text-white/70">CSE, EE, ME Departments</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-[#FFCB05] mb-1">AICTE Approved</p>
                <p className="text-xs text-white/70">All India Council for Technical Education</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-[#FFCB05] mb-1">University of Jammu</p>
                <p className="text-xs text-white/70">Affiliated institution</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-[#FFCB05] mb-1">Sikh Minority Institution</p>
                <p className="text-xs text-white/70">Under Sant Manjit Singh Trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
