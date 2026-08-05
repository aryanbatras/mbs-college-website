"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    program: "B.E. Computer Science, 2023",
    quote: "MBSCET provided me with the foundation I needed to start my career at Infosys. The faculty support and hands-on lab experience were invaluable.",
    currentRole: "Software Engineer at Infosys",
  },
  {
    name: "Rohit Kumar",
    program: "B.E. Electronics & Communication, 2022",
    quote: "The placement cell at MBSCET is exceptional. They prepared us for interviews and connected us with top companies. I landed my dream job right after graduation.",
    currentRole: "Hardware Engineer at Wipro",
  },
  {
    name: "Amanpreet Singh",
    program: "B.E. Mechanical Engineering, 2023",
    quote: "The workshops and industrial visits gave me practical exposure that textbooks cannot provide. MBSCET truly bridges the gap between theory and practice.",
    currentRole: "Design Engineer at TCS",
  },
  {
    name: "Sneha Gupta",
    program: "MCA, 2022",
    quote: "The MCA program at MBSCET is comprehensive and industry-relevant. The Python and ML workshops helped me transition into data science successfully.",
    currentRole: "Data Analyst at HCL",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="bg-paper" aria-label="Student testimonials">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Student Voices
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink mb-12">
            What Our Students Say
          </h2>

          <div className="relative min-h-[280px] md:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Quote className="size-8 text-accent/30 mx-auto mb-6" />
                <blockquote className="font-heading text-lg md:text-xl lg:text-2xl text-ink leading-relaxed mb-8 max-w-2xl mx-auto">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-base font-semibold text-ink">{testimonial.name}</div>
                  <div className="text-sm text-ink-muted mt-1">{testimonial.program}</div>
                  <div className="text-sm text-accent mt-1">{testimonial.currentRole}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="size-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all duration-300 ${i === current ? "w-8 bg-accent" : "w-4 bg-ink/20"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="size-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
