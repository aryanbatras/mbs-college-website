import Link from "next/link";
import { FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";

const STATS = [
  { value: "20+", label: "Recruiting Companies" },
  { value: "7.2 LPA", label: "Highest Package" },
  { value: "3.5 LPA", label: "Average Package" },
  { value: "85%", label: "Placement Rate" },
];

const TOP_RECRUITERS = [
  "TCS",
  "Infosys",
  "Wipro",
  "HCL Technologies",
  "Tech Mahindra",
  "L&T",
  "Kandhari Beverages",
  "NHPC",
  "Indian Army",
  "Indian Air Force",
  "Ceasefire Industries",
  "PlanetSpark",
  "Avi Software",
  "Mphasis",
  "Byju's",
  "Unacademy",
];

export function PlacementSection() {
  return (
    <section className="bg-[#00274C]" aria-label="Placements">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
              Training & Placement
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Building Careers Since 1999
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              Our Training & Placement Cell bridges academia and industry, preparing students for successful careers through internships, workshops, and campus recruitment drives.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-t border-white/10 pt-4">
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/5 mb-8">
              <h4 className="text-base font-bold text-white mb-4">Contact T&P Cell</h4>
              <div className="space-y-3 text-sm text-white/70">
                <p className="font-medium text-white/90">Prof. Dr. Sanjeev Singh (Incharge)</p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-[#FFCB05] text-xs" />
                  <a href="tel:+91-9419130161" className="hover:text-[#FFCB05] transition-colors">+91-9419130161</a>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-[#FFCB05] text-xs" />
                  <a href="mailto:tpcell@mbscet.edu.in" className="hover:text-[#FFCB05] transition-colors">tpcell@mbscet.edu.in</a>
                </p>
              </div>
            </div>

            <Link
              href="/placements"
              className="group inline-flex items-center gap-3 bg-[#FFCB05] text-[#00274C] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
            >
              View Placement Details
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-8">Top Recruiters</h3>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {TOP_RECRUITERS.map((company) => (
                <div
                  key={company}
                  className="bg-white/5 p-4 flex items-center justify-center text-center"
                >
                  <span className="text-sm font-medium text-white/80">{company}</span>
                </div>
              ))}
            </div>

            {/* Placement highlights */}
            <div className="bg-white/5 p-6">
              <h4 className="text-base font-bold text-white mb-4">Recent Placements</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Mannat Abrol (CSE)</span>
                  <span className="text-[#FFCB05] font-medium">Avi Software</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Priya Sharma (CSE)</span>
                  <span className="text-[#FFCB05] font-medium">Infosys</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Amit Singh (EE)</span>
                  <span className="text-[#FFCB05] font-medium">NHPC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
