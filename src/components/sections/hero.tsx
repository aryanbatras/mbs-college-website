"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

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
      ref={ref}
      className="relative min-h-[100vh] flex items-end overflow-hidden"
      aria-label="Welcome"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images with parallax */}
      {HERO_SLIDES.map((s, i) => (
        <motion.div
          key={i}
          style={{ y, scale }}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-2 h-2 bg-accent/40 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[25%] w-1.5 h-1.5 bg-paper/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-[10%] w-1 h-1 bg-accent/30 hidden lg:block"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 page-container pb-20 md:pb-28 w-full"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 md:mb-6"
          >
            {slide.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-paper leading-[1.05] tracking-tight mb-6 md:mb-8"
          >
            {slide.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-paper/70 max-w-xl leading-relaxed mb-10 md:mb-12"
          >
            {slide.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-accent text-paper hover:bg-accent-strong transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-paper border border-paper/30 hover:border-paper/60 hover:bg-paper/10 transition-all duration-300"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-8 md:left-12 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase text-paper/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-paper/40 to-transparent"
          />
        </motion.div>

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
      </motion.div>
    </section>
  );
}
