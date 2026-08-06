"use client";

import { useState, useEffect } from "react";
import BlurText from "@/components/design-system/BlurText";

const HERO_IMAGES = [
  "/media/homepage/admin-block.jpg",
  "/media/homepage/auditorium.jpg",
  "/media/homepage/central-park.jpg",
  "/media/homepage/library.jpg",
  "/media/homepage/seminar-hall.jpg",
  "/media/homepage/campus-view-1.jpg",
  "/media/homepage/playground.jpg",
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
      {/* Background images with crossfade */}
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
            className="w-full h-full object-cover scale-105"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* NBA Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFCB05]/95 text-[#00274C] px-5 py-2 text-xs font-bold mb-8 uppercase tracking-widest">
          NBA Accredited &middot; CSE, EE &amp; ME
        </div>

        {/* Title - Line 1 */}
        <div className="mb-3">
          <BlurText
            text="MAHANT BACHITTAR SINGH"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white uppercase tracking-tight"
          />
        </div>

        {/* Title - Line 2 */}
        <div className="mb-10">
          <BlurText
            text="COLLEGE OF ENGINEERING & TECHNOLOGY"
            delay={80}
            animateBy="words"
            direction="top"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#FFCB05] uppercase tracking-tight"
          />
        </div>

        {/* Affiliations */}
        <p className="text-xs sm:text-sm text-white/60 font-medium tracking-widest uppercase">
          AICTE Approved &middot; Affiliated to University of Jammu &middot; Est. 1999
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
