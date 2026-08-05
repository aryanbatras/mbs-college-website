"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    program: "B.E. Computer Science, 2023",
    image: "/media/general/1-1024x579.jpg",
    quote: "MBSCET provided me with the foundation I needed to start my career at Infosys. The faculty support and hands-on lab experience were invaluable.",
    currentRole: "Software Engineer at Infosys",
    rating: 5,
  },
  {
    name: "Rohit Kumar",
    program: "B.E. Electronics & Communication, 2022",
    image: "/media/general/2-1024x768.jpeg",
    quote: "The placement cell at MBSCET is exceptional. They prepared us for interviews and connected us with top companies. I landed my dream job right after graduation.",
    currentRole: "Hardware Engineer at Wipro",
    rating: 5,
  },
  {
    name: "Amanpreet Singh",
    program: "B.E. Mechanical Engineering, 2023",
    image: "/media/general/10-1024x768.jpeg",
    quote: "The workshops and industrial visits gave me practical exposure that textbooks cannot provide. MBSCET truly bridges the gap between theory and practice.",
    currentRole: "Design Engineer at TCS",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    program: "MCA, 2022",
    image: "/media/general/11-1024x768.jpg",
    quote: "The MCA program at MBSCET is comprehensive and industry-relevant. The Python and ML workshops helped me transition into data science successfully.",
    currentRole: "Data Analyst at HCL",
    rating: 5,
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
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Student Voices
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            What Our Students Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] overflow-hidden bg-ink/5"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="size-10 text-accent/30 mb-6" />
                <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-ink leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mb-8">
                  <div className="text-lg font-semibold text-ink">{testimonial.name}</div>
                  <div className="text-sm text-ink-muted mt-1">{testimonial.program}</div>
                  <div className="text-sm text-accent mt-1">{testimonial.currentRole}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="size-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors border border-ink/10 hover:border-ink/20"
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
                className="size-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors border border-ink/10 hover:border-ink/20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
