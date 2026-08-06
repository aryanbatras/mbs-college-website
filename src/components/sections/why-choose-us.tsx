"use client";

import { motion } from "motion/react";

const REASONS = [
  {
    title: "NBA Accredited Programs",
    description: "CSE, EE, and ME departments are accredited by the National Board of Accreditation, ensuring quality education standards.",
  },
  {
    title: "Industry-Ready Curriculum",
    description: "Curriculum designed in consultation with industry experts, with regular updates to match current industry requirements.",
  },
  {
    title: "Experienced Faculty",
    description: "Faculty members with PhDs and industry experience, committed to mentoring the next generation of engineers.",
  },
  {
    title: "Placement Support",
    description: "Dedicated Training & Placement cell with connections to top companies like TCS, Infosys, Wipro, and HCL.",
  },
  {
    title: "AICTE Approved",
    description: "Fully approved by the All India Council for Technical Education and affiliated to the University of Jammu since 1999.",
  },
  {
    title: "Minority Institution",
    description: "Established by Sant Manjit Singh Trust, providing quality technical education to students from all backgrounds.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#00274C]" aria-label="Why choose MBSCET">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
            Why MBSCET
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Why Choose Us
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-4 max-w-xl mx-auto">
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
            >
              <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
