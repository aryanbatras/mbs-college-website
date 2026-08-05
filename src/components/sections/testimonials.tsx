"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa";

const TESTIMONIALS = [
  {
    quote: "MBSCET gave me the foundation I needed. The faculty genuinely cares about every student's growth, both academically and personally.",
    author: "Priya Sharma",
    role: "CSE Graduate, 2022",
    company: "Currently at Infosys",
  },
  {
    quote: "The placement cell prepared us thoroughly. From mock interviews to industry visits, everything was designed to make us industry-ready.",
    author: "Rahul Kumar",
    role: "IT Graduate, 2023",
    company: "Currently at Wipro",
  },
  {
    quote: "As a parent, I felt reassured knowing my child was in safe hands. The college maintains excellent discipline and provides real opportunities.",
    author: "Sunita Devi",
    role: "Parent of ECE Student",
    company: "Jammu",
  },
  {
    quote: "The labs and facilities here are comparable to any top institution. We had hands-on experience with the latest technology from day one.",
    author: "Amit Singh",
    role: "EE Graduate, 2021",
    company: "Currently at NHPC",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="bg-[#00274C]" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            What People Say
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-16">
            Voices From Our Community
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <div key={current}>
                <FaQuoteLeft className="text-[#FFCB05] text-3xl mb-6 opacity-60" />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#FFCB05] text-xs" />
                    ))}
                  </div>
                  <div className="text-base font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    {testimonial.role} &middot; {testimonial.company}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
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
