import Link from "next/link";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { getSiteConfig } from "@/lib/content";

export function PrincipalContent() {
  const config = getSiteConfig();
  const principal = config.principal;

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#00274C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Principal&apos;s Desk
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          {/* Photo */}
          <div>
            {principal?.photo && (
              <div className="aspect-[3/4] overflow-hidden bg-[#F9FAFB]">
                <img
                  src={principal.photo}
                  alt={principal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
            <div className="mt-4">
              <h2 className="text-xl font-bold text-[#00274C]">{principal?.name}</h2>
              <p className="text-sm text-[#5C6370]">{principal?.title}</p>
              <p className="text-xs text-[#9CA3AF] mt-1">{principal?.organization}</p>
            </div>
          </div>

          {/* Message */}
          <div>
            <FaQuoteLeft className="text-[#FFCB05] text-2xl mb-4 opacity-60" />
            
            {principal?.message && (
              <blockquote className="text-lg md:text-xl text-[#00274C] leading-relaxed mb-8 border-l-2 border-[#FFCB05] pl-6">
                {principal.message}
              </blockquote>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-[#5C6370] leading-relaxed mb-4">
                Welcome to Mahant Bachittar Singh College of Engineering and Technology. As the
                Principal, I am proud to lead an institution that has been shaping
                competent engineers since 1999.
              </p>
              <p className="text-[#5C6370] leading-relaxed mb-4">
                Our college offers B.Tech programs across multiple engineering disciplines including
                CSE, IT, ECE, EE, ME, and Civil, with a combined intake of over 330 students annually.
                We are committed to providing contemporary education while fostering research, innovation,
                and professional ethics.
              </p>
              <p className="text-[#5C6370] leading-relaxed mb-4">
                Our faculty includes PhD-qualified professors and experienced assistant professors
                who bring both academic rigor and industry relevance to the classroom. We regularly
                organize workshops, seminars, industrial visits, and training programs to bridge
                the gap between academia and industry.
              </p>
              <p className="text-[#5C6370] leading-relaxed mb-4">
                The Training and Placement Cell works actively to connect our students with
                industry opportunities, conducting campus recruitment drives and technical training
                programs.
              </p>
              <p className="text-[#5C6370] leading-relaxed">
                I invite prospective students and parents to visit our campus and experience the
                academic environment at MBSCET.
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
