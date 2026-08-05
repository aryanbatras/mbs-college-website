"use client";

import { motion } from "motion/react";
import type { SiteConfig } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { InquiryForm } from "@/components/sections/inquiry-form";
import { AdmissionTimeline } from "@/components/sections/admission-timeline";

interface AdmissionsContentProps {
  config: SiteConfig;
}

const FEE_STRUCTURE = [
  { program: "B.E. (CSE/IT/ECE/EE/ME/Civil)", tuition: "₹45,000", total: "₹49,000" },
  { program: "B.E. (AI&ML)", tuition: "₹45,000", total: "₹49,000" },
  { program: "MCA", tuition: "₹50,000", total: "₹55,000" },
];

export function AdmissionsContent({ config }: AdmissionsContentProps) {
  return (
    <div>
      {/* Hero */}
      <div className="bg-navy text-paper py-16 md:py-20">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb items={[{ label: "Admissions" }]} />
            <h1 className="mt-4 font-heading text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Admissions 2026-27
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-paper/70">
              Join MBSCET for B.E. programs in CSE, IT, ECE, EE, ME, Civil, AI&ML, and
              MCA. Admissions are conducted through JEE Main/JKBOPEE and Minority Quota.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Admission Timeline */}
      <AdmissionTimeline />

      {/* Fee Structure */}
      <section className="bg-paper">
        <div className="page-container section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-8">
              Fee Structure
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink/10">
                    <th className="pb-4 pr-6 text-left font-medium text-ink">Program</th>
                    <th className="pb-4 pr-6 text-left font-medium text-ink">Tuition Fee</th>
                    <th className="pb-4 text-left font-medium text-ink">Total (incl. other fees)</th>
                  </tr>
                </thead>
                <tbody>
                  {FEE_STRUCTURE.map((item) => (
                    <tr key={item.program} className="border-b border-ink/5 last:border-b-0">
                      <td className="py-4 pr-6 text-ink font-medium">{item.program}</td>
                      <td className="py-4 pr-6 text-ink-muted">{item.tuition}/year</td>
                      <td className="py-4 text-ink-muted">{item.total}/year</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-ink-faint">
              Fee is regulated by the J&K Fee Fixation Committee. Total fee for 4-year B.E. is approximately ₹1.80-1.96 Lakh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-white">
        <div className="page-container section-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-4">
                Quick Inquiry
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                Have questions about admissions? Fill out this quick form and our admissions
                team will get back to you within 24 hours.
              </p>
              <div className="space-y-4 text-sm text-ink-muted">
                <div className="flex items-start gap-3">
                  <div className="size-2 bg-accent rounded-full mt-2" />
                  <span>Personalized counseling session</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-2 bg-accent rounded-full mt-2" />
                  <span>Campus tour安排</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-2 bg-accent rounded-full mt-2" />
                  <span>Scholarship information</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-2 bg-accent rounded-full mt-2" />
                  <span>Hostel facility details</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-ink/[0.02] p-6 md:p-8">
                <InquiryForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
