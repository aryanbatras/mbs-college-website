import Link from "next/link";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { getSiteConfig } from "@/lib/content";

export function ChairmanContent() {
  const config = getSiteConfig();
  const chairman = config.chairman;

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#00274C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Chairman&apos;s Desk
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          {/* Photo */}
          <div>
            {chairman?.photo && (
              <div className="aspect-[3/4] overflow-hidden bg-[#F9FAFB]">
                <img
                  src={chairman.photo}
                  alt={chairman.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
            <div className="mt-4">
              <h2 className="text-xl font-bold text-[#00274C]">{chairman?.name}</h2>
              <p className="text-sm text-[#5C6370]">{chairman?.title}</p>
              <p className="text-xs text-[#9CA3AF] mt-1">{chairman?.organization}</p>
            </div>
          </div>

          {/* Message */}
          <div>
            <FaQuoteLeft className="text-[#FFCB05] text-2xl mb-4 opacity-60" />
            
            {chairman?.message && (
              <blockquote className="text-lg md:text-xl text-[#00274C] leading-relaxed mb-8 border-l-2 border-[#FFCB05] pl-6">
                {chairman.message}
              </blockquote>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-[#5C6370] leading-relaxed mb-4">
                It gives me immense pleasure to welcome you to Mahant Bachittar Singh College of
                Engineering and Technology, Jammu. Our institution, established in 1999 under the
                aegis of Dera Sant Pura Nangali Sahib, has been committed to providing quality
                technical education to the youth of Jammu &amp; Kashmir.
              </p>
              <p className="text-[#5C6370] leading-relaxed mb-4">
                Since its inception, MBSCET has grown into a reputable institution affiliated with
                the University of Jammu and approved by AICTE. We offer B.Tech programs across
                multiple engineering disciplines and postgraduate programs, nurturing students to become
                competent professionals ready to serve industry and society.
              </p>
              <p className="text-[#5C6370] leading-relaxed mb-4">
                Under the guidance of the Sant Manjit Singh Trust, our college continues to uphold
                the values of academic excellence, ethical conduct, and holistic development. I
                encourage our students to pursue knowledge with dedication and contribute positively
                to the nation.
              </p>
              <p className="text-[#5C6370] leading-relaxed">
                I extend my best wishes to all students, faculty, and staff for a successful
                academic year ahead.
              </p>
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
              >
                <FaArrowRight className="text-xs rotate-180 transition-transform group-hover:-translate-x-1" />
                Back to About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
