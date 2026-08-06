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

      {/* Content - full width, no margins */}
      <div className="relative z-10 w-full text-center px-4 sm:px-8">
        {/* Main title - word by word blur */}
        <div className="mb-4">
          <BlurText
            text="MAHANT BACHITTAR SINGH"
            delay={80}
            animateBy="words"
            direction="top"
            className="text-[10vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] font-black text-white uppercase leading-[0.9] tracking-tighter justify-center"
          />
        </div>

        {/* Subtitle - character by character blur with highlighted words */}
        <div className="mb-8">
          <BlurText
            text="College of "
            delay={30}
            animateBy="letters"
            direction="bottom"
            className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-bold text-[#FFCB05] uppercase tracking-tight inline"
          />
          <Highlighter action="circle" color="#FFCB05" strokeWidth={2} animationDuration={800} isView={true}>
            <span className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-bold text-[#FFCB05] uppercase tracking-tight">
              Engineering
            </span>
          </Highlighter>
          <BlurText
            text=" & "
            delay={30}
            animateBy="letters"
            direction="bottom"
            className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-bold text-[#FFCB05] uppercase tracking-tight inline"
          />
          <Highlighter action="box" color="#FFCB05" strokeWidth={2} animationDuration={800} isView={true}>
            <span className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-bold text-[#FFCB05] uppercase tracking-tight">
              Technology
            </span>
          </Highlighter>
        </div>

        {/* Affiliations - clean text, no highlighter */}
        <p className="text-xs sm:text-sm text-white/60 font-medium tracking-widest uppercase px-4">
          AICTE Approved &middot; Affiliated to University of Jammu &middot; Est. 1999
        </p>
      </div>
    </section>
  );
}
