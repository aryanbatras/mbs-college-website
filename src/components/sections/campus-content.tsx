import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { getSiteConfig } from "@/lib/content";

const FACILITIES = [
  { title: "Central Library", description: "Well-stocked library with technical textbooks, reference materials, national/international journals, and digital e-resource terminals." },
  { title: "Modern Laboratories", description: "Fully equipped departmental labs including Electrical Machines, CAD/CAM, Fluid Mechanics, Analog/Digital Electronics, and Computer Centers." },
  { title: "Seminar Halls", description: "Fully equipped seminar and conference halls for academic events, workshops, and guest lectures." },
  { title: "Sports Facilities", description: "Sports complex and grounds for outdoor and indoor activities including cricket, football, and basketball." },
  { title: "Wi-Fi Campus", description: "High-speed internet connectivity throughout the campus for academic and research purposes." },
  { title: "Auditorium", description: "Air-conditioned auditorium for cultural events, convocations, and major college functions." },
  { title: "Canteens", description: "Two campus canteens providing hygienic refreshments and rest areas for students and staff." },
  { title: "Hostels", description: "Separate hostel accommodations for both boys and girls coming from outstation areas." },
];

export function CampusContent() {
  const config = getSiteConfig();

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#00274C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            Campus
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Campus Facilities
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 leading-relaxed">
            MBSCET provides comprehensive infrastructure to support academic
            excellence and holistic development of students.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Quick links */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/campus/virtual-tour"
            className="inline-flex items-center gap-2 bg-[#00274C] text-[#FFCB05] px-6 py-3 text-sm font-bold hover:bg-[#1E406B] transition-colors"
          >
            Virtual Tour
            <FaExternalLinkAlt className="text-xs" />
          </Link>
          <Link
            href="/campus/galleries"
            className="inline-flex items-center gap-2 border-2 border-[#00274C]/30 text-[#00274C] px-6 py-3 text-sm font-bold hover:border-[#00274C] transition-colors"
          >
            Photo Gallery
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* Facilities grid */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl font-bold text-[#00274C] mb-8">Our Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((facility) => (
              <div
                key={facility.title}
                className="p-6 bg-[#F9FAFB] border border-[#E5E7EB]"
              >
                <h3 className="text-base font-bold text-[#00274C] mb-2">{facility.title}</h3>
                <p className="text-sm text-[#5C6370] leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Google Maps Embed */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl font-bold text-[#00274C] mb-6">Location</h2>
          <div className="w-full h-[400px] bg-[#F9FAFB] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.574154380378!2d74.84899717630721!3d32.67077458940674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9b3f8037351f%3A0xb9054afb3d23d080!2sMahant%20Bachittar%20Singh%20College%20Of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1785979773219!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MBSCET Campus Location"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#5C6370]">
              {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
            </p>
            <a
              href="https://www.google.com/maps/place/Mahant+Bachittar+Singh+College+Of+Engineering+And+Technology/@32.6707745,74.8489972,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </section>

        {/* Student Clubs */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl font-bold text-[#00274C] mb-6">Student Clubs</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {(config.clubs || []).map((club) => (
              <div
                key={club}
                className="p-4 bg-[#F9FAFB] border border-[#E5E7EB]"
              >
                <p className="text-sm font-bold text-[#00274C]">{club}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/campus/clubs"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
            >
              View all clubs
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </section>

        {/* Back to home */}
        <div className="pt-8 border-t border-[#E5E7EB]">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
          >
            <FaArrowRight className="text-xs rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
