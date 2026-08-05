"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CountUp from "@/components/design-system/CountUp";

const STATS = [
  { value: 25, suffix: "+", label: "Acres Campus" },
  { value: 7, suffix: "", label: "Departments" },
  { value: 10, suffix: "+", label: "Modern Labs" },
  { value: 50, suffix: "+", label: "Faculty Members" },
];

export function CampusSection() {
  return (
    <section className="bg-[#FFCB05]" aria-label="Campus">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#00274C] mb-4">
              Our Campus
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#00274C] leading-[1.05] tracking-tight mb-6">
              A Place to Grow, Learn & Thrive
            </h2>
            <p className="text-lg text-[#00274C]/70 leading-relaxed mb-8 max-w-lg">
              Our 25-acre campus in Babliana, Jammu provides a serene environment for learning, with modern labs, a well-stocked library, seminar halls, and green spaces.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-[#00274C]/10 p-4">
                  <p className="text-2xl font-bold text-[#00274C]">
                    <CountUp
                      to={stat.value}
                      duration={2}
                      separator=","
                      className="text-2xl font-bold text-[#00274C]"
                    />
                    {stat.suffix}
                  </p>
                  <p className="text-xs text-[#00274C]/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/campus"
              className="group inline-flex items-center gap-3 bg-[#00274C] text-[#FFCB05] px-8 py-4 text-sm font-bold hover:bg-[#1E406B] transition-colors"
            >
              Explore Campus
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/media/homepage/central-park.jpg"
                alt="Campus central park"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden mt-8">
              <img
                src="/media/homepage/admin-block.jpg"
                alt="Administrative block"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden -mt-8">
              <img
                src="/media/homepage/library.jpg"
                alt="College library"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/media/homepage/seminar-hall.jpg"
                alt="Seminar hall"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
