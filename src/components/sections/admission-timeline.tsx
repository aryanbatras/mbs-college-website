"use client";

import { motion } from "motion/react";
import { FileText, CheckCircle, Calendar, GraduationCap, ArrowRight } from "lucide-react";

const TIMELINE_STEPS = [
  {
    icon: FileText,
    title: "Register for JEE Main",
    description: "Complete registration for JEE Main examination through the official NTA website.",
    date: "November - December",
    status: "upcoming",
  },
  {
    icon: CheckCircle,
    title: "Appear for JEE Main",
    description: "Take the JEE Main examination in January/April session.",
    date: "January / April",
    status: "upcoming",
  },
  {
    icon: Calendar,
    title: "JKBOPEE Counseling",
    description: "Register for J&K Board of Professional Entrance Examinations counseling.",
    date: "June - July",
    status: "upcoming",
  },
  {
    icon: GraduationCap,
    title: "Seat Allocation",
    description: "Based on JEE Main rank and counseling choices, seats are allocated.",
    date: "July - August",
    status: "upcoming",
  },
  {
    icon: CheckCircle,
    title: "Document Verification",
    description: "Visit the college with required documents for verification and fee payment.",
    date: "August",
    status: "upcoming",
  },
  {
    icon: GraduationCap,
    title: "Classes Begin",
    description: "Induction program and commencement of academic sessions.",
    date: "August - September",
    status: "upcoming",
  },
];

export function AdmissionTimeline() {
  return (
    <section className="bg-white" aria-label="Admission timeline">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Admission Process
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            How to Apply
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Follow these steps to join MBSCET and start your engineering journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-ink/10 -translate-x-1/2" />

          {TIMELINE_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bg-ink/[0.02] p-5">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="text-[10px] font-medium tracking-wider uppercase text-accent">{step.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Center marker */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-12 flex items-center justify-center bg-white border-2 border-accent z-10">
                <step.icon className="size-5 text-accent" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/admissions"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-accent text-paper hover:bg-accent-strong transition-colors"
          >
            Start Your Application
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
