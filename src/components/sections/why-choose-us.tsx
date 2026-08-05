"use client";

import { motion } from "motion/react";
import { GraduationCap, Briefcase, Users, Building, Award, Heart } from "lucide-react";

const REASONS = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "8 specialized programs with curriculum designed in consultation with industry experts and academic leaders.",
  },
  {
    icon: Briefcase,
    title: "Industry Connections",
    description: "Strong ties with top companies like Infosys, Wipro, TCS for placements, internships, and live projects.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "30+ experienced faculty members with PhDs and industry experience guiding the next generation of engineers.",
  },
  {
    icon: Building,
    title: "Modern Infrastructure",
    description: "State-of-the-art labs, library, seminar halls, and sports facilities for holistic development.",
  },
  {
    icon: Award,
    title: "Accredited Programs",
    description: "AICTE approved, UGC recognized, and affiliated to the University of Jammu since 1999.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Technical clubs, cultural events, sports, and community service for well-rounded personality development.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink text-paper" aria-label="Why choose MBSCET">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Why MBSCET
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-paper">
            Why Choose Us
          </h2>
          <p className="text-base md:text-lg text-paper/60 mt-4 max-w-xl mx-auto">
            Discover what makes MBSCET the preferred choice for engineering education in Jammu & Kashmir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Subtle border top on hover */}
              <div className="absolute top-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
              <div className="pt-6">
                <div className="size-12 flex items-center justify-center bg-paper/5 mb-5 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="size-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-paper mb-3">{reason.title}</h3>
                <p className="text-sm text-paper/50 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
