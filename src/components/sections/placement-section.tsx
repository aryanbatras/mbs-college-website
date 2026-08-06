import Link from "next/link";
import { FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";

const TOP_RECRUITERS = [
  "Kandhari Beverages",
  "Cloud Analogy",
  "Vision India Services",
  "Pentagon Space",
  "RVS iGlobal",
  "PlanetSpark",
  "Avi Software",
  "NHPC",
  "Indian Army",
  "Indian Air Force",
];

export function PlacementSection() {
  return (
    <section className="bg-[#00274C]" aria-label="Placements">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Training & Placement
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Training & Placement Cell
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              Our Training & Placement Cell bridges academia and industry, preparing students for successful careers through internships, workshops, and campus recruitment drives.
            </p>

            <div className="p-6 bg-white/5 mb-8">
              <h4 className="text-base font-bold text-white mb-4">Contact T&P Cell</h4>
              <div className="space-y-3 text-sm text-white/70">
                <p className="font-medium text-white/90">Prof. Dr. Sanjeev Singh (Incharge)</p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-gray-400 text-xs" />
                  <a href="tel:+91-9419130161" className="hover:text-white transition-colors">+91-9419130161</a>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-400 text-xs" />
                  <a href="mailto:tpcell@mbscet.edu.in" className="hover:text-white transition-colors">tpcell@mbscet.edu.in</a>
                </p>
              </div>
            </div>

            <Link
              href="/placements"
              className="group inline-flex items-center gap-3 bg-white text-[#00274C] px-8 py-4 text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              View Placement Records
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-8">Recruiters</h3>
            <div className="grid grid-cols-2 gap-4">
              {TOP_RECRUITERS.map((company) => (
                <div
                  key={company}
                  className="bg-white/5 p-4 flex items-center justify-center text-center"
                >
                  <span className="text-sm font-medium text-white/80">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
