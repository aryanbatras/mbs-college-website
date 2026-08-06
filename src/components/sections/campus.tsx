"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CAMPUS_FEATURES = [
  { label: "Central Library", description: "Well-stocked library with digital resources" },
  { label: "Modern Laboratories", description: "State-of-the-art labs for all departments" },
  { label: "Seminar Halls", description: "Fully equipped seminar and conference halls" },
  { label: "Sports Facilities", description: "Playgrounds and indoor sports amenities" },
  { label: "Wi-Fi Campus", description: "High-speed internet connectivity throughout" },
  { label: "Auditorium", description: "Air-conditioned auditorium for events" },
];

export function CampusSection() {
  return (
    <section className="bg-gray-50" aria-label="Campus">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
              Our Campus
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#00274C] leading-[1.05] tracking-tight mb-6">
              A Place to Grow, Learn & Thrive
            </h2>
            <p className="text-lg text-[#5C6370] leading-relaxed mb-8 max-w-lg">
              Spread across 25 acres in Babliana, Jammu, our campus provides a serene environment for learning with modern infrastructure, green spaces, and all the facilities needed for holistic development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {CAMPUS_FEATURES.map((feature) => (
                <div key={feature.label} className="bg-white p-4 border border-gray-100">
                  <p className="text-sm font-bold text-[#00274C]">{feature.label}</p>
                  <p className="text-xs text-[#5C6370] mt-1">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/campus"
                className="group inline-flex items-center gap-3 bg-[#00274C] text-white px-8 py-4 text-sm font-bold hover:bg-[#1E406B] transition-colors"
              >
                Explore Campus
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/campus/galleries"
                className="group inline-flex items-center gap-3 border-2 border-[#FFCB05] text-[#00274C] px-8 py-4 text-sm font-bold hover:bg-[#FFCB05] hover:text-[#00274C] transition-colors"
              >
                Photo Gallery
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
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
                src="/media/homepage/auditorium.jpg"
                alt="College auditorium"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
