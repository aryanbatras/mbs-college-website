"use client";

import { motion } from "motion/react";

const PARTNERS = [
  "Infosys",
  "Wipro",
  "TCS",
  "HCL Technologies",
  "Tech Mahindra",
  "Byju's",
  "Jaro Education",
  "Kandhari Beverages",
  "JKTDC",
  "Samsung",
  "IBM",
  "Oracle",
];

export function PartnersSection() {
  return (
    <section className="bg-white" aria-label="Our partners and recruiters">
      <div className="page-container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Trusted By
          </p>
          <h2 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-ink">
            Our Recruiters & Partners
          </h2>
        </motion.div>

        {/* Logo carousel - infinite scroll effect */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="shrink-0 flex items-center justify-center h-16 px-8 bg-ink/[0.03] text-sm font-medium text-ink-muted hover:bg-ink/[0.06] transition-colors min-w-[160px]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
