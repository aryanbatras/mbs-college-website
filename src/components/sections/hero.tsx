"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/media/general/DSC_0123-1024x683.jpg",
    tagline: "Excellence in Engineering Education",
    title: "Shaping Tomorrow's Engineers in the Heart of Jammu",
    description: "AICTE approved, UGC recognized, and affiliated to the University of Jammu. Offering B.E. programs across seven disciplines since 1994.",
  },
  {
    image: "/media/general/DSC_0128-1024x683.jpg",
    tagline: "World-Class Infrastructure",
    title: "State-of-the-Art Labs & Facilities",
    description: "From advanced computer centers to electrical machines labs, our infrastructure supports hands-on learning across all disciplines.",
  },
  {
    image: "/media/general/DSC_0131-1024x683.jpg",
    tagline: "Industry-Ready Graduates",
    title: "Connecting Students with Top Employers",
    description: "Our Training & Placement cell ensures students are prepared for careers at Infosys, Wipro, TCS, and leading corporations.",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative min-h-[90vh] md:min-h-[95vh] flex items-end"
      aria-label="Welcome"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      {/* Content */}
      <div className="relative z-10 page-container pb-20 md:pb-28 w-full">
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 md:mb-6">
            {slide.tagline}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-paper leading-[1.05] tracking-tight mb-6 md:mb-8">
            {slide.title}
          </h1>
          <p className="text-base md:text-lg text-paper/70 max-w-xl leading-relaxed mb-10 md:mb-12">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-accent text-paper hover:bg-accent-strong transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-paper border border-paper/30 hover:border-paper/60 hover:bg-paper/10 transition-all duration-300"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        {/* Slide navigation */}
        <div className="absolute bottom-8 right-8 md:right-12 flex items-center gap-4">
          <button
            onClick={prev}
            className="size-10 flex items-center justify-center text-paper/60 hover:text-paper transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-300 ${i === current ? "w-8 bg-accent" : "w-4 bg-paper/30"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="size-10 flex items-center justify-center text-paper/60 hover:text-paper transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
