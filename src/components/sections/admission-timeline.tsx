"use client";

import { FaFileAlt, FaCheckCircle, FaCalendar, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const TIMELINE_STEPS = [
  {
    icon: FaFileAlt,
    title: "Register for JEE Main",
    description: "Complete registration for JEE Main examination through the official NTA website.",
    date: "November - December",
  },
  {
    icon: FaCheckCircle,
    title: "Appear for JEE Main",
    description: "Take the JEE Main examination in January/April session.",
    date: "January / April",
  },
  {
    icon: FaCalendar,
    title: "JKBOPEE Counseling",
    description: "Register for J&K Board of Professional Entrance Examinations counseling.",
    date: "June - July",
  },
  {
    icon: FaGraduationCap,
    title: "Seat Allocation",
    description: "Based on JEE Main rank and counseling choices, seats are allocated.",
    date: "July - August",
  },
  {
    icon: FaCheckCircle,
    title: "Document Verification",
    description: "Visit the college with required documents for verification and fee payment.",
    date: "August",
  },
  {
    icon: FaGraduationCap,
    title: "Classes Begin",
    description: "Induction program and commencement of academic sessions.",
    date: "August - September",
  },
];

export function AdmissionTimeline() {
  return (
    <section className="bg-white" aria-label="Admission timeline">
      <div className="page-container section-spacing">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-3">
            Admission Process
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00274C] tracking-tight">
            How to Apply
          </h2>
          <p className="text-base md:text-lg text-[#5C6370] mt-4 max-w-xl mx-auto">
            Follow these steps to join MBSCET and start your engineering journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E5E7EB] -translate-x-1/2" />

          {TIMELINE_STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bg-[#FFCB05]/5 p-5">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#FFCB05]">{step.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#00274C] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#5C6370] leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-12 flex items-center justify-center bg-white border-2 border-[#FFCB05] z-10">
                <step.icon className="text-[#FFCB05] text-lg" />
              </div>

              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.mbscet.edu.in/eligiblity-admission-procedure-v1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold bg-[#FFCB05] text-[#00274C] hover:bg-[#00274C] hover:text-[#FFCB05] transition-colors"
          >
            Start Your Application
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}
