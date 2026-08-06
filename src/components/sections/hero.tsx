"use client";

import { useState, useEffect } from "react";

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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content - full width, no margins */}
      <div className="relative z-10 w-full text-center px-0">
        {/* Title - Line 1 - HUGE */}
        <div className="mb-2">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-black text-white uppercase leading-[0.9] tracking-tighter">
            MAHANT BACHITTAR SINGH
          </h1>
        </div>

        {/* Title - Line 2 - Centered */}
        <div className="mb-8">
          <p className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-bold text-white/90 uppercase tracking-tight">
            College of Engineering & Technology
          </p>
        </div>

        {/* Affiliations */}
        <p className="text-xs sm:text-sm text-white/50 font-medium tracking-widest uppercase px-4">
          AICTE Approved &middot; Affiliated to University of Jammu &middot; Est. 1999
        </p>
      </div>
    </section>
  );
}
