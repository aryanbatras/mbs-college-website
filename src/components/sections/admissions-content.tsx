"use client";

import { motion } from "motion/react";
import type { SiteConfig } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AdmissionsContentProps {
  config: SiteConfig;
}

const STEPS = [
  { step: 1, title: "Eligibility", desc: "10+2 with Physics, Chemistry & Mathematics (PCM) from a recognized board." },
  { step: 2, title: "Apply via JKCET", desc: "Register and appear for Jammu & Kashmir Common Entrance Test (JKCET) conducted by BOPEE." },
  { step: 3, title: "Minority Quota", desc: "Alternatively, apply through the MBS Minority Seats Entrance Test for management/minority quota." },
  { step: 4, title: "Document Verification", desc: "Submit required documents: 10+2 marksheet, JKCET scorecard, domicile, category certificate." },
  { step: 5, title: "Fee Payment", desc: "Pay tuition fee as per J&K Fee Fixation Committee guidelines (~₹45,000–49,000/year)." },
];

const FAQ = [
  { q: "What is the admission process?", a: "Admissions are conducted through JKCET (BOPEE) for government quota seats. For minority quota, candidates apply directly through the college entrance test." },
  { q: "What is the fee structure?", a: "The tuition fee is approximately ₹45,000–49,000 per annum for B.E. programs, as regulated by the J&K Fee Fixation Committee." },
  { q: "Are hostel facilities available?", a: "Yes, separate hostel accommodations are available for both boys and girls coming from outstation areas." },
  { q: "Is there a minority quota?", a: "Yes, MBSCET is a recognized Sikh minority institution with approximately 165 seats reserved under the minority quota." },
  { q: "What documents are required?", a: "10+2 marksheet, JKCET/entrance test scorecard, domicile certificate, category certificate (if applicable), passport-size photographs, and migration certificate." },
];

export function AdmissionsContent({ config }: AdmissionsContentProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          ADMISSIONS
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Admissions 2025-26
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Join MBSCET for B.E. programs in CSE, IT, ECE, EE, ME, Civil, AI&ML, and
          MCA. Admissions are conducted through JKCET and Minority Quota.
        </p>
      </motion.div>

      {/* Process timeline */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Admission Process</h2>
        <div className="mt-6 flex flex-col gap-0">
          {STEPS.map((step) => (
            <div key={step.step} className="flex gap-4 border-b border-line py-5 last:border-b-0">
              <div className="flex size-8 shrink-0 items-center justify-center border border-accent text-sm font-bold text-accent">
                {step.step}
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Fee structure */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Fee Structure</h2>
        <div className="mt-4 border border-line p-6">
          <div className="font-heading text-3xl font-bold text-ink">₹45,000–49,000</div>
          <div className="mt-1 text-sm text-ink-faint">per annum (tuition fee, B.E. programs)</div>
          <p className="mt-3 text-xs text-ink-faint">
            Fee is regulated by the J&K Fee Fixation Committee / BOPEE guidelines. Total fee for 4-year B.E. is approximately ₹1.80–1.84 Lakh.
          </p>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Frequently Asked Questions</h2>
        <Accordion className="mt-4">
          {FAQ.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium text-ink py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-ink-muted pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>
    </div>
  );
}
