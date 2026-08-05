import Link from "next/link";
import { FaArrowRight, FaBuilding, FaGraduationCap, FaLaptop, FaUsers } from "react-icons/fa";

const STATS = [
  { icon: FaBuilding, value: "20+", label: "Companies Visited" },
  { icon: FaGraduationCap, value: "80%", label: "Placement Rate" },
  { icon: FaLaptop, value: "7.2L", label: "Highest Package" },
  { icon: FaUsers, value: "490+", label: "Students Placed" },
];

const TOP_RECRUITERS = [
  "Infosys",
  "Wipro",
  "L&T",
  "Kandhari Beverages",
  "Ceasefire Industries",
  "Indian Army",
  "Indian Air Force",
  "PlanetSpark",
  "RVS iGlobal",
  "Avi Software",
];

export function PlacementSection() {
  return (
    <section className="bg-[#00274C]" aria-label="Placements">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Stats */}
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
                <div key={stat.label} className="border-t border-[#FFCB05]/30 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="text-[#FFCB05] text-lg" />
                    <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/placements"
              className="group inline-flex items-center gap-3 bg-[#FFCB05] text-[#00274C] px-8 py-4 text-sm font-bold hover:bg-white transition-colors"
            >
              View Placement Details
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right - Recruiters */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Top Recruiters</h3>
            <div className="grid grid-cols-2 gap-4">
              {TOP_RECRUITERS.map((company) => (
                <div
                  key={company}
                  className="bg-[#1E406B] p-4 flex items-center justify-center text-center"
                >
                  <span className="text-sm font-bold text-white/80">{company}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#FFCB05]/10 border border-[#FFCB05]/30">
              <h4 className="text-base font-bold text-[#FFCB05] mb-2">Placement Highlights</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Highest Package: 7.2 LPA</li>
                <li>Average Package: 3.5 LPA</li>
                <li>Companies: Infosys, Wipro, L&T, and more</li>
                <li>Sectors: IT, Core Engineering, Defense</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
