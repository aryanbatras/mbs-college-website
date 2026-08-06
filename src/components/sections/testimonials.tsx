"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
  {
    quote: "MBSCET gave me the foundation I needed. The faculty genuinely cares about every student's growth, both academically and personally. The placement cell prepared us thoroughly for the industry.",
    author: "Mannat Abrol",
    role: "Placed at PlanetSpark",
    company: "Campus Recruitment 2024",
  },
  {
    quote: "The training and placement cell organized regular mock interviews, coding bootcamps, and industry visits. This hands-on approach made the transition from college to corporate seamless.",
    author: "Priya Sharma",
    role: "CSE Graduate, 2022",
    company: "Currently at Infosys",
  },
  {
    quote: "As a parent, I felt reassured knowing my child was in safe hands. The college maintains excellent discipline and provides real opportunities for career growth.",
    author: "Sunita Devi",
    role: "Parent of ECE Student",
    company: "Jammu",
  },
  {
    quote: "The labs and facilities here are comparable to any top institution. We had hands-on experience with the latest technology from day one. The NBA accreditation speaks for the quality.",
    author: "Amit Singh",
    role: "EE Graduate, 2021",
    company: "Currently at NHPC",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Label
      tl.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      // Title
      tl.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3");

      // Quote
      tl.from(quoteRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");

      // Controls
      tl.from(controlsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section ref={sectionRef} className="bg-[#00274C]" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div>
          <p ref={labelRef} className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            What People Say
          </p>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-16">
            Voices From Our Community
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div ref={quoteRef}>
              <div key={current}>
                <FaQuoteLeft className="text-[#FFCB05] text-3xl mb-6 opacity-60" />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-base font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    {testimonial.role} &middot; {testimonial.company}
                  </div>
                </div>
              </div>
            </div>

            <div ref={controlsRef} className="flex items-center gap-4">
              <button
                onClick={prev}
                className="size-12 flex items-center justify-center border-2 border-[#FFCB05]/30 text-[#FFCB05]/60 hover:text-[#FFCB05] hover:border-[#FFCB05] transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-0.5 transition-all duration-300 ${
                      i === current ? "w-8 bg-[#FFCB05]" : "w-4 bg-white/20"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="size-12 flex items-center justify-center border-2 border-[#FFCB05]/30 text-[#FFCB05]/60 hover:text-[#FFCB05] hover:border-[#FFCB05] transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
