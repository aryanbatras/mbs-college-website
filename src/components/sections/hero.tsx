"use client";

import { useState, useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "@/components/ui/shiny-text";
import { HeroSubtitle } from "@/components/ui/hero-subtitle";
import { DotPattern } from "@/components/design-system/DotPattern";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

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

const MARQUEE_ITEMS = [
  "NBA Accredited — CSE, EE, ME",
  "AICTE Approved",
  "Affiliated to University of Jammu",
  "Est. 1999",
  "B.Tech in CSE, IT, ECE, EE, ME, Civil",
  "Sikh Minority Institution",
  "Jammu & Kashmir",
];

// Image carousel - isolated from text to prevent re-animation
function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 scale-110">
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
  );
}

// Text content - memoized to prevent re-animation
const HeroContent = memo(function HeroContent() {
  return (
    <div className="relative z-10 w-full text-center">
      {/* Main title with ShinyText */}
      <div className="mb-4 px-4">
        <ShinyText
          text="MAHANT BACHITTAR SINGH"
          speed={4}
          color="#FFCB05"
          shineColor="#FFFFFF"
          spread={100}
          className="text-[10vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.9] tracking-tighter block"
        />
      </div>

      {/* Subtitle - simple GSAP SplitText, no highlighter */}
      <div className="mb-8 px-4">
        <HeroSubtitle
          text="College of Engineering & Technology"
          delay={1.2}
          className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[2.8vw] font-bold text-[#FFCB05] uppercase tracking-tight"
        />
      </div>

      {/* Affiliations - clean text */}
      <p className="text-xs sm:text-sm text-white/60 font-medium tracking-widest uppercase px-4">
        AICTE Approved &middot; Affiliated to University of Jammu &middot; Est. 1999
      </p>
    </div>
  );
});

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    if (!sectionRef.current || !imagesRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imagesRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        yPercent: -30,
        opacity: 0,
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
      className="relative h-[100dvh] flex flex-col overflow-hidden"
      aria-label="Welcome"
    >
      {/* Background images with crossfade and parallax */}
      <div ref={imagesRef} className="absolute inset-0 scale-110">
        <HeroCarousel />
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

      {/* Content - full width, centered vertically, with parallax */}
      <div
        ref={contentRef}
        className="relative z-10 flex-1 flex items-center justify-center"
      >
        <HeroContent />
      </div>

      {/* ScrollVelocity marquee at bottom */}
      <div className="relative z-10 pb-8">
        <ScrollVelocity
          items={MARQUEE_ITEMS}
          speed={25}
          className="py-4 border-t border-b border-white/10"
        />
      </div>
    </section>
  );
}
