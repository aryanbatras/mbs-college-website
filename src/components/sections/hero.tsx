"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import BlurText from "@/components/design-system/BlurText";

const HERO_IMAGES = [
  "/media/homepage/admin-block.jpg",
  "/media/homepage/auditorium.jpg",
  "/media/homepage/central-park.jpg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      aria-label="Welcome"
    >
      {/* Background images */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* NBA Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFCB05] text-[#00274C] px-4 py-1.5 text-xs font-bold mb-8 uppercase tracking-wider">
          NBA Accredited &middot; CSE, EE, ME
        </div>

        {/* Title - Line 1 */}
        <div className="mb-2">
          <BlurText
            text="MAHANT BACHITTAR SINGH"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight"
          />
        </div>

        {/* Title - Line 2 */}
        <div className="mb-8">
          <BlurText
            text="COLLEGE OF ENGINEERING & TECHNOLOGY"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFCB05] uppercase tracking-tight"
          />
        </div>

        {/* Affiliations */}
        <p className="text-sm sm:text-base text-white/60 font-medium tracking-widest uppercase mb-10">
          AICTE Approved &middot; Affiliated to University of Jammu &middot; Est. 1999
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-3 bg-[#FFCB05] text-[#00274C] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
          >
            Apply Now
            <FaArrowRight className="text-xs" />
          </Link>
          <Link
            href="/academics"
            className="inline-flex items-center gap-3 border-2 border-white/40 text-white px-8 py-4 text-sm font-bold hover:border-white hover:bg-white/10 transition-all"
          >
            Our Departments
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <div
            key={i}
            className={`h-0.5 transition-all duration-700 ${
              i === current ? "w-8 bg-[#FFCB05]" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
