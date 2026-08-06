"use client";

import { useState, useEffect } from "react";
import BlurText from "@/components/ui/blur-text";
import { Highlighter } from "@/components/ui/highlighter";
import { DotPattern } from "@/components/design-system/DotPattern";

const HERO_IMAGES = [
  "/media/homepage/admin-block.jpg",
  "/media/homepage/auditorium.jpg",
  "/media/homepage/canteen.jpg",
  "/media/homepage/computer-lab.jpg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
      aria-label="Welcome"
    >
      {/* Background images with crossfade */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
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

      {/* Dark overlay with blue tint */}
      <div className="absolute inset-0 bg-[#00274C]/70" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 z-[1]">
        <DotPattern
          width={24}
          height={24}
          cr={1}
          className="text-[#FFCB05]/20"
        />
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 z-[2]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00274C]/40 via-transparent to-[#00274C]/60" />
      </div>

      {/* Content - full width, no margins */}
      <div className="relative z-10 w-full text-center px-4 sm:px-8">
        {/* Main title with BlurText animation */}
        <div className="mb-4">
          <BlurText
            text="MAHANT BACHITTAR SINGH"
            delay={80}
            animateBy="words"
            direction="top"
            className="text-[10vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] font-black text-white uppercase leading-[0.9] tracking-tighter justify-center"
          />
        </div>

        {/* Subtitle with Highlighter */}
        <div className="mb-8">
          <BlurText
            text="College of Engineering & Technology"
            delay={100}
            animateBy="words"
            direction="bottom"
            className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-bold text-[#FFCB05] uppercase tracking-tight justify-center"
          />
        </div>

        {/* Affiliations with highlighter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <Highlighter action="highlight" color="#FFCB05" isView={true}>
            <span className="text-xs sm:text-sm text-white/90 font-medium tracking-widest uppercase">
              AICTE Approved
            </span>
          </Highlighter>
          <span className="text-white/40">·</span>
          <Highlighter action="highlight" color="#FFCB05" isView={true}>
            <span className="text-xs sm:text-sm text-white/90 font-medium tracking-widest uppercase">
              Affiliated to University of Jammu
            </span>
          </Highlighter>
          <span className="text-white/40">·</span>
          <Highlighter action="highlight" color="#FFCB05" isView={true}>
            <span className="text-xs sm:text-sm text-white/90 font-medium tracking-widest uppercase">
              Est. 1999
            </span>
          </Highlighter>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[3]" />
    </section>
  );
}
