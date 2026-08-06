"use client";

import type { SiteConfig } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { InquiryForm } from "@/components/sections/inquiry-form";
import { AdmissionTimeline } from "@/components/sections/admission-timeline";
import { FaCheckCircle } from "react-icons/fa";

interface AdmissionsContentProps {
  config: SiteConfig;
}

const FEE_STRUCTURE = [
  { program: "B.Tech (CSE/IT/ECE/EE/ME/Civil)", tuition: "₹45,000", total: "₹49,000" },
  { program: "B.Tech (CSE with AI&ML)", tuition: "₹45,000", total: "₹49,000" },
  { program: "MCA", tuition: "₹50,000", total: "₹55,000" },
];

const BENEFITS = [
  "Personalized counseling session",
  "Campus tour arrangement",
  "Scholarship information",
  "Hostel facility details",
];

export function AdmissionsContent({ config }: AdmissionsContentProps) {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[#00274C] py-16 md:py-20">
        <div className="page-container">
          <Breadcrumb items={[{ label: "Admissions" }]} />
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Admissions 2026-27
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-white/70">
            Join MBSCET for B.Tech programs in CSE, IT, ECE, EE, ME, Civil, AI&ML, and
            MCA. Admissions are conducted through JEE Main/JKBOPEE and Minority Quota.
          </p>
        </div>
      </div>

      {/* Admission Timeline */}
      <AdmissionTimeline />

      {/* Fee Structure */}
      <section className="bg-white">
        <div className="page-container section-spacing">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00274C] mb-8">
            Fee Structure
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="pb-4 pr-6 text-left font-bold text-[#00274C]">Program</th>
                  <th className="pb-4 pr-6 text-left font-bold text-[#00274C]">Tuition Fee</th>
                  <th className="pb-4 text-left font-bold text-[#00274C]">Total (incl. other fees)</th>
                </tr>
              </thead>
              <tbody>
                {FEE_STRUCTURE.map((item) => (
                  <tr key={item.program} className="border-b border-[#E5E7EB] last:border-b-0">
                    <td className="py-4 pr-6 text-[#00274C] font-medium">{item.program}</td>
                    <td className="py-4 pr-6 text-[#5C6370]">{item.tuition}/year</td>
                    <td className="py-4 text-[#5C6370]">{item.total}/year</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#9CA3AF]">
            Fee is regulated by the J&K Fee Fixation Committee. Total fee for 4-year B.Tech is approximately ₹1.80-1.96 Lakh.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-gray-100/5">
        <div className="page-container section-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#00274C] mb-4">
                Quick Inquiry
              </h2>
              <p className="text-[#5C6370] leading-relaxed mb-6">
                Have questions about admissions? Fill out this quick form and our admissions
                team will get back to you within 24 hours.
              </p>
              <div className="space-y-4 text-sm text-[#5C6370]">
                {BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <FaCheckCircle className="text-gray-400 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 shadow-sm">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
