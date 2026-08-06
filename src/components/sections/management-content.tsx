import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getSiteConfig } from "@/lib/content";

export function ManagementContent() {
  const config = getSiteConfig();
  const management = config.management || [];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#00274C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            College Administration
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 leading-relaxed">
            MBSCET is managed by the Sant Manjit Singh Trust, operating under the aegis of
            Dera Sant Pura Nangali Sahib. The college administration is led by a dedicated
            team of educators and administrators.
          </p>
        </div>
      </div>

      {/* Trust Info */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="bg-[#F9FAFB] p-8 md:p-10 mb-16">
          <h2 className="text-xl font-bold text-[#00274C] mb-3">Sant Manjit Singh Trust</h2>
          <p className="text-xs text-[#9CA3AF] mb-3">Dera Sant Pura Nangali Sahib</p>
          <p className="text-sm text-[#5C6370] leading-relaxed max-w-3xl">
            The trust was established to promote technical and professional education in the Jammu
            region, with a focus on serving the Sikh minority community and the broader society.
          </p>
        </div>

        {/* Management Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {management.map((person) => (
            <div key={person.name} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[#F9FAFB] mb-4">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-bold text-[#00274C]">{person.name}</h3>
              <p className="text-sm text-[#5C6370]">{person.title}</p>
              <p className="text-xs text-[#9CA3AF] mt-1">{person.organization}</p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB]">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-sm font-bold text-[#00274C] hover:text-gray-400 transition-colors"
          >
            <FaArrowRight className="text-xs rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to About
          </Link>
        </div>
      </div>
    </div>
  );
}
