"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "What are the eligibility criteria for B.E. programs?",
    answer: "Candidates must have passed 10+2 examination with Physics, Mathematics, and Chemistry/Biology/Biotechnology/Technical Vocational subject with minimum 45% marks in aggregate. Admission is through JEE Main/JKBOPEE counseling.",
  },
  {
    question: "Does MBSCET have hostel facilities?",
    answer: "Yes, MBSCET provides separate hostel accommodations for both boys and girls coming from outstation areas. The hostels are equipped with all necessary amenities including mess, Wi-Fi, and recreational facilities.",
  },
  {
    question: "What is the placement record of MBSCET?",
    answer: "MBSCET has an excellent placement record with over 85% placement rate. The highest package offered is ₹7.2 LPA and average package is ₹4.5 LPA. Top recruiters include Infosys, Wipro, TCS, HCL Technologies, and Tech Mahindra.",
  },
  {
    question: "Is MBSCET approved by AICTE?",
    answer: "Yes, MBSCET is approved by the All India Council for Technical Education (AICTE) and affiliated to the University of Jammu. It is also recognized by the University Grants Commission (UGC).",
  },
  {
    question: "What scholarships are available for students?",
    answer: "MBSCET offers various scholarships including merit-based scholarships, minority scholarships, and government scholarships for eligible students. Contact the admission office for detailed information on available scholarships.",
  },
  {
    question: "How can I apply for admission?",
    answer: "Admissions are conducted through JEE Main/JKBOPEE counseling. Candidates need to register on the official counseling portal, fill their choices, and participate in the counseling process. For management quota seats, contact the admission office directly.",
  },
  {
    question: "What extracurricular activities are available?",
    answer: "MBSCET offers various extracurricular activities including technical clubs, cultural events, sports facilities, drone club, and annual tech fest. Students can participate in inter-college competitions and cultural programs.",
  },
  {
    question: "Does MBSCET offer MCA program?",
    answer: "Yes, MBSCET offers Master of Computer Applications (MCA) program with 60 seats. The program is designed to prepare students for careers in software development and IT industry.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-paper" aria-label="Frequently asked questions">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Support
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Find answers to common questions about admissions, placements, and campus life.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border-b border-ink/10 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-start justify-between gap-4 w-full py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="size-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-ink">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`size-5 text-ink-faint shrink-0 mt-0.5 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pl-8 text-sm text-ink-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
