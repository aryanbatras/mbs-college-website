"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "@/components/ui/blur-text";
import { HeroSubtitle } from "@/components/ui/hero-subtitle";
import { DotPattern } from "@/components/design-system/DotPattern";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_IMAGES = [
  "/media/homepage/admin-block.jpg",
  "/media/homepage/auditorium.jpg",
  "/media/homepage/canteen.jpg",
  "/media/homepage/computer-lab.jpg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    if (!sectionRef.current || !imagesRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Images parallax - moves slower than scroll
      gsap.to(imagesRef.current, {
        yPercent: 20, // Images move down 20% as you scroll
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true, // Smooth scrubbing
        },
      });

      // Content parallax - moves faster than scroll
      gsap.to(contentRef.current, {
        yPercent: -30, // Content moves up 30% as you scroll
        opacity: 0, // Fade out as you scroll
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "center top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
      aria-label="Welcome"
    >
      {/* Background images with crossfade and parallax */}
      <div ref={imagesRef} className="absolute inset-0 scale-110">
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
      </div>

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

      {/* Content - full width, no margins, with parallax */}
      <div ref={contentRef} className="relative z-10 w-full text-center px-4 sm:px-8">
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

        {/* Subtitle - GSAP SplitText with character animation and highlights */}
        <div className="mb-8">
          <HeroSubtitle
            text="College of Engineering & Technology"
            delay={1.2}
            highlights={[
              {
                word: "Engineering",
                action: "circle",
                color: "#FFFFFF",
              },
              {
                word: "Technology",
                action: "box",
                color: "#FFFFFF",
              },
            ]}
            className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-bold text-[#FFCB05] uppercase tracking-tight"
          />
        </div>

        {/* Affiliations - clean text */}
        <p className="text-xs sm:text-sm text-white/60 font-medium tracking-widest uppercase px-4">
          AICTE Approved &middot; Affiliated to University of Jammu &middot; Est. 1999
        </p>
      </div>
    </section>
  );
}
