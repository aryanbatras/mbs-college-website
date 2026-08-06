import Link from "next/link";
import { FaArrowRight, FaAward, FaCheckCircle } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";

interface AboutContentProps {
  config: SiteConfig;
}

const KEY_FACTS = [
  { label: "Established", value: "1999" },
  { label: "NBA Accredited", value: "CSE, EE, ME" },
  { label: "Departments", value: "7" },
  { label: "Programs", value: "B.Tech + MCA" },
  { label: "Campus Area", value: "25 acres" },
  { label: "Faculty", value: "50+" },
];

export function AboutContent({ config }: AboutContentProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#00274C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <Breadcrumb items={[{ label: "About" }]} />
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About the College
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/70">
            Mahant Bachittar Singh College of Engineering & Technology (MBSCET) is a
            recognized Sikh minority institution established in 1999 under the Sant
            Manjit Singh Trust, aegis of Dera Sant Pura Nangali Sahib.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Key facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          {KEY_FACTS.map((item) => (
            <div
              key={item.label}
              className="p-6 bg-[#F9FAFB] border border-[#E5E7EB]"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#00274C] tracking-tight">{item.value}</div>
              <div className="text-sm text-[#5C6370] mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-6">Vision</h2>
            <blockquote className="text-lg leading-relaxed text-[#5C6370] border-l-2 border-[#FFCB05] pl-6">
              {config.vision}
            </blockquote>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-6">Mission</h2>
            <ul className="flex flex-col gap-4">
              {config.mission.map((m, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[#5C6370]">
                  <FaCheckCircle className="text-[#FFCB05] text-sm mt-1 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* About text */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-6">History</h2>
          <div className="max-w-3xl space-y-4 text-[#5C6370] leading-relaxed">
            <p>
              {config.about}
            </p>
            {config.aboutExtended && (
              <p>{config.aboutExtended}</p>
            )}
          </div>
        </section>

        {/* Chairman & Principal Messages */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-8">Leadership Messages</h2>
          <div className="space-y-8">
            {/* Chairman */}
            {config.chairman && (
              <div className="bg-[#F9FAFB] p-8 flex flex-col md:flex-row gap-8 items-start">
                {config.chairman.photo && (
                  <div className="w-full md:w-40 shrink-0">
                    <div className="aspect-[3/4] overflow-hidden bg-white">
                      <img
                        src={config.chairman.photo}
                        alt={config.chairman.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-3">
                    Chairman&apos;s Message
                  </p>
                  {config.chairman.message && (
                    <blockquote className="text-base text-[#5C6370] leading-relaxed mb-4 border-l-2 border-[#FFCB05] pl-4">
                      {config.chairman.message}
                    </blockquote>
                  )}
                  <div>
                    <p className="text-base font-bold text-[#00274C]">{config.chairman.name}</p>
                    <p className="text-sm text-[#9CA3AF]">{config.chairman.title}, {config.chairman.organization}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Principal */}
            {config.principal && (
              <div className="bg-[#F9FAFB] p-8 flex flex-col md:flex-row gap-8 items-start">
                {config.principal.photo && (
                  <div className="w-full md:w-40 shrink-0">
                    <div className="aspect-[3/4] overflow-hidden bg-white">
                      <img
                        src={config.principal.photo}
                        alt={config.principal.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-3">
                    Principal&apos;s Message
                  </p>
                  {config.principal.message && (
                    <blockquote className="text-base text-[#5C6370] leading-relaxed mb-4 border-l-2 border-[#FFCB05] pl-4">
                      {config.principal.message}
                    </blockquote>
                  )}
                  <div>
                    <p className="text-base font-bold text-[#00274C]">{config.principal.name}</p>
                    <p className="text-sm text-[#9CA3AF]">{config.principal.title}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Accreditations */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-6">
            Affiliations & Approvals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...config.affiliations, config.accreditation].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#F9FAFB] border border-[#E5E7EB]">
                <FaAward className="text-[#FFCB05] shrink-0" />
                <span className="text-sm text-[#00274C]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Back to home */}
        <div className="pt-8 border-t border-[#E5E7EB]">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
          >
            <FaArrowRight className="text-xs rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
