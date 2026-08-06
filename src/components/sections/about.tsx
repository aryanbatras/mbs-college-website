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
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start mb-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
              About the College
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-6">
              Mahant Bachittar Singh College of Engineering & Technology
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-4">
              {config.about}
            </p>
            <p className="text-base text-white/70 leading-relaxed mb-8">
              {config.aboutExtended}
            </p>
            <blockquote className="text-lg md:text-xl font-medium text-white/90 leading-relaxed mb-10 border-l-2 border-[#FFCB05] pl-6">
              &ldquo;{config.vision}&rdquo;
            </blockquote>

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

          {/* Accreditations sidebar */}
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

            {/* Quick stats */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-white">1999</p>
                  <p className="text-xs text-white/50">Established</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">330</p>
                  <p className="text-xs text-white/50">Total Intake</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">25+</p>
                  <p className="text-xs text-white/50">Acres Campus</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-xs text-white/50">Faculty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chairman & Principal Messages */}
        <div className="space-y-8">
          {/* Chairman */}
          {config.chairman && (
            <div className="bg-[#1E406B] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              {config.chairman.photo && (
                <div className="w-full md:w-48 shrink-0">
                  <div className="aspect-[3/4] overflow-hidden bg-[#0a1929]">
                    <img
                      src={config.chairman.photo}
                      alt={config.chairman.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
                  Chairman&apos;s Message
                </p>
                {config.chairman.message && (
                  <blockquote className="text-base text-white/80 leading-relaxed mb-6">
                    &ldquo;{config.chairman.message}&rdquo;
                  </blockquote>
                )}
                <div>
                  <p className="text-base font-bold text-white">{config.chairman.name}</p>
                  <p className="text-sm text-white/50">{config.chairman.title}, {config.chairman.organization}</p>
                </div>
              </div>
            </div>
          )}

          {/* Principal */}
          {config.principal && (
            <div className="bg-[#1E406B] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              {config.principal.photo && (
                <div className="w-full md:w-48 shrink-0">
                  <div className="aspect-[3/4] overflow-hidden bg-[#0a1929]">
                    <img
                      src={config.principal.photo}
                      alt={config.principal.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
                  Principal&apos;s Message
                </p>
                {config.principal.message && (
                  <blockquote className="text-base text-white/80 leading-relaxed mb-6">
                    &ldquo;{config.principal.message}&rdquo;
                  </blockquote>
                )}
                <div>
                  <p className="text-base font-bold text-white">{config.principal.name}</p>
                  <p className="text-sm text-white/50">{config.principal.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
