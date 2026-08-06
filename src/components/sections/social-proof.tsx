"use client";

import { motion } from "motion/react";

const PROOF_ITEMS = [
  {
    title: "AICTE Approved",
    description: "All India Council for Technical Education",
  },
  {
    title: "University of Jammu",
    description: "Affiliated since 1999",
  },
  {
    title: "Sikh Minority",
    description: "Minority Institution under Article 30",
  },
  {
    title: "NBA Accredited",
    description: "CSE, EE & ME Departments",
  },
];

export function SocialProof() {
  return (
    <section className="bg-white py-12 md:py-16 border-y border-gray-100" aria-label="Accreditations and recognition">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-3">
            Recognized & Accredited
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-[#00274C] tracking-tight">
            Trusted By Students & Industry
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROOF_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-sm font-bold text-[#00274C]">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
