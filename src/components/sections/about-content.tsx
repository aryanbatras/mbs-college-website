"use client";

import { useState } from "react";
import type { SiteConfig } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FaCalendar, FaUsers, FaAward, FaBook, FaBuilding, FaChevronDown } from "react-icons/fa";

interface AboutContentProps {
  config: SiteConfig;
}

const TIMELINE = [
  { year: "1999", title: "College Established", description: "MBSCET was founded under the Sant Manjit Singh Trust, aegis of Dera Sant Pura Nangali Sahib, to provide quality engineering education in Jammu & Kashmir." },
  { year: "2000", title: "First Batch Graduates", description: "The inaugural batch of B.E. students graduated, marking the beginning of a legacy in engineering education." },
  { year: "2005", title: "AICTE Approval", description: "Received full approval from the All India Council for Technical Education, validating our commitment to quality education." },
  { year: "2010", title: "Campus Expansion", description: "Expanded campus infrastructure with new laboratories, library, and seminar halls to accommodate growing student body." },
  { year: "2015", title: "Industry Partnerships", description: "Established partnerships with leading companies including Infosys, Wipro, and TCS for placements and internships." },
  { year: "2020", title: "Digital Transformation", description: "Implemented modern digital infrastructure and online learning capabilities during the global pandemic." },
  { year: "2023", title: "New Programs Launched", description: "Introduced B.Tech in Artificial Intelligence & Machine Learning to meet industry demand for emerging technologies." },
  { year: "2024", title: "NBA Accreditation", description: "CSE, EE, and ME departments received NBA accreditation, recognizing our commitment to quality education." },
];

const LEADERSHIP = [
  { name: "Chairman", role: "Chairman, MBSCET", description: "Leading the institution with a vision for excellence in engineering education." },
  { name: "Principal", role: "Principal, MBSCET", description: "Academic head with extensive experience in engineering education and research." },
  { name: "Dean Academics", role: "Dean Academics", description: "Overseeing academic programs and curriculum development across all departments." },
  { name: "Dean Students", role: "Dean Students Welfare", description: "Managing student activities, welfare, and holistic development programs." },
];

const KEY_FACTS = [
  { icon: FaCalendar, label: "Established", value: "1999" },
  { icon: FaAward, label: "NBA Accredited", value: "CSE, EE, ME" },
  { icon: FaUsers, label: "Departments", value: "7" },
  { icon: FaBook, label: "Programs", value: "B.Tech + MCA" },
  { icon: FaBuilding, label: "Campus Area", value: "25 acres" },
  { icon: FaUsers, label: "Faculty", value: "50+" },
];

export function AboutContent({ config }: AboutContentProps) {
  const [expandedTimeline, setExpandedTimeline] = useState<string | null>(null);

  return (
    <div className="page-container section-spacing">
      <div>
        <Breadcrumb items={[{ label: "About" }]} />
        <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-[#00274C] tracking-tight">
          About the College
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#5C6370]">
          Mahant Bachittar Singh College of Engineering & Technology (MBSCET) is a
          recognized Sikh minority institution established in 1999 under the Sant
          Manjit Singh Trust, aegis of Dera Sant Pura Nangali Sahib.
        </p>
      </div>

      {/* Key facts */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
        {KEY_FACTS.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-4 p-4 bg-[#FFCB05]/5 hover:bg-[#FFCB05]/10 transition-colors"
          >
            <div className="size-10 flex items-center justify-center bg-[#FFCB05]/20 shrink-0">
              <item.icon className="text-[#FFCB05] text-lg" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#00274C] tracking-tight">{item.value}</div>
              <div className="text-sm text-[#5C6370] mt-1">{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Vision & Mission */}
      <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-6">Vision</h2>
          <div className="relative">
            <div className="absolute -top-4 -left-2 text-5xl text-[#FFCB05]/30 font-serif select-none">&ldquo;</div>
            <blockquote className="text-lg md:text-xl leading-relaxed text-[#00274C] relative z-10">
              {config.vision}
            </blockquote>
            <div className="absolute -bottom-4 -right-2 text-5xl text-[#FFCB05]/30 font-serif select-none">&rdquo;</div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-6">Mission</h2>
          <ul className="flex flex-col gap-4">
            {config.mission.map((m, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[#5C6370]">
                <span className="mt-2 size-1.5 shrink-0 bg-[#FFCB05] rounded-full" />
                {m}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* History Timeline */}
      <section className="mt-20 md:mt-24">
        <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-8">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#E5E7EB]" />

          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`relative flex items-start gap-6 md:gap-8 mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FFCB05] rounded-full z-10" />

              <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <div className="inline-block px-3 py-1 bg-[#00274C] text-white text-xs font-bold tracking-wider mb-2">
                  {item.year}
                </div>
                <h3 className="text-base font-bold text-[#00274C]">{item.title}</h3>
                <p className="text-sm text-[#5C6370] mt-1 leading-relaxed max-w-md">{item.description}</p>
              </div>

              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="mt-20 md:mt-24">
        <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-8">
          Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP.map((person) => (
            <div
              key={person.name}
              className="p-6 bg-[#FFCB05]/5 hover:bg-[#FFCB05]/10 transition-colors group"
            >
              <div className="size-16 bg-[#FFCB05]/20 flex items-center justify-center mb-4 group-hover:bg-[#FFCB05]/30 transition-colors">
                <FaUsers className="text-[#FFCB05] text-2xl" />
              </div>
              <h3 className="text-base font-bold text-[#00274C]">{person.role}</h3>
              <p className="text-sm text-[#5C6370] mt-2 leading-relaxed">{person.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliations */}
      <section className="mt-20 md:mt-24">
        <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-6">
          Affiliations & Approvals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...config.affiliations, config.accreditation].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-[#FFCB05]/5">
              <FaAward className="text-[#FFCB05] shrink-0" />
              <span className="text-sm text-[#00274C]">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
