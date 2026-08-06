import Link from "next/link";
import { FaArrowRight, FaDownload, FaExternalLinkAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { getSiteConfig } from "@/lib/content";

const PLACEMENT_RECORDS = [
  { department: "CSE", title: "Computer Science & Engineering", year: "2022-2024", pdf: "/docs/placement/cse-placement-2024.pdf" },
  { department: "CSE", title: "CSE Placement Record", year: "2022", pdf: "/docs/placement/cse-placement.pdf" },
  { department: "ECE", title: "Electronics & Communication", year: "2022", pdf: "/docs/placement/ece-placement.pdf" },
  { department: "EE", title: "Electrical Engineering", year: "2022", pdf: "/docs/placement/ee-placement.pdf" },
  { department: "IT", title: "Information Technology", year: "2022", pdf: "/docs/placement/it-placement.pdf" },
  { department: "ME", title: "Mechanical Engineering", year: "2022", pdf: "/docs/placement/me-placement.pdf" },
];

const PLACEMENT_PHOTOS = [
  { src: "/media/general/Mannat-Abrol-CSE-Batch-2020-for-placement-in-Avi-Software.jpg", alt: "Mannat Abrol CSE Placement" },
  { src: "/media/general/Placement-of-final-year-students.jpg", alt: "Final Year Students Placement" },
  { src: "/media/general/Congtratulations-for-getting-placement-in-PLANETSPARK.jpg", alt: "PlanetSpark Placement" },
];

export function PlacementsContent() {
  const config = getSiteConfig();

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#00274C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Training & Placement Cell
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Placements
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 leading-relaxed">
            The Training & Placement Cell at MBSCET provides comprehensive career
            guidance, technical training, and connects students with industry
            opportunities through campus recruitment drives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Contact T&P Cell */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#F9FAFB] p-8 md:p-10">
            <h2 className="text-xl font-bold text-[#00274C] mb-6">Contact T&P Cell</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-base font-bold text-[#00274C] mb-2">Prof. Dr. Sanjeev Singh</p>
                <p className="text-sm text-[#5C6370] mb-4">Incharge, Training & Placement Cell</p>
                <div className="space-y-2 text-sm text-[#5C6370]">
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-gray-400 text-xs" />
                    <a href="tel:+91-9419130161" className="hover:text-gray-400 transition-colors">+91-9419130161</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-gray-400 text-xs" />
                    <a href="mailto:tpcell@mbscet.edu.in" className="hover:text-gray-400 transition-colors">tpcell@mbscet.edu.in</a>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#5C6370] leading-relaxed">
                  The Training & Placement Cell bridges academia and industry, preparing students
                  for successful careers through internships, workshops, and campus recruitment drives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Brochure */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl font-bold text-[#00274C] mb-6">Placement Brochure</h2>
          <div className="bg-[#00274C] p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Download Placement Brochure</h3>
                <p className="text-sm text-white/70 mb-4">
                  Get the complete placement brochure with details about our training programs,
                  recruiter network, and placement statistics.
                </p>
                <a
                  href="https://www.mbscet.edu.in/placement-brochure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-100 text-[#00274C] px-6 py-3 text-sm font-bold hover:bg-white transition-colors"
                >
                  View Brochure
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
              <div className="w-full md:w-48 aspect-[3/4] bg-white/10 flex items-center justify-center">
                <div className="text-center">
                  <FaDownload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-xs text-white/60">PDF Document</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Records */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl font-bold text-[#00274C] mb-6">Placement Records</h2>
          <p className="text-[#5C6370] mb-8 max-w-3xl">
            Download department-wise placement records showing the placement history
            of our students across various companies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLACEMENT_RECORDS.map((record) => (
              <a
                key={record.pdf}
                href={record.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#00274C] transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-gray-400 group-hover:text-gray-400 tracking-wider">
                    {record.department}
                  </span>
                  <FaDownload className="text-[#9CA3AF] group-hover:text-gray-400 text-xs" />
                </div>
                <h3 className="text-base font-bold text-[#00274C] group-hover:text-white transition-colors mb-1">
                  {record.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] group-hover:text-white/50 transition-colors">
                  Year: {record.year}
                </p>
              </a>
            ))}
          </div>

          {/* Link to original website */}
          <div className="mt-6">
            <a
              href="https://www.mbscet.edu.in/placement-record/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00274C] hover:text-gray-400 transition-colors"
            >
              View all records on official website
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </section>

        {/* Placement Photos */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl font-bold text-[#00274C] mb-6">Placement Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLACEMENT_PHOTOS.map((photo) => (
              <div key={photo.alt} className="aspect-[4/3] overflow-hidden bg-[#F9FAFB]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="pt-8 border-t border-[#E5E7EB]">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-bold text-[#00274C] hover:text-gray-400 transition-colors"
          >
            <FaArrowRight className="text-xs rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
