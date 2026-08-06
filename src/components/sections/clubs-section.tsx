import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CLUBS = [
  { name: "Astronomy Club", description: "Exploring the cosmos through telescopes and star-gazing sessions", href: "/campus/clubs" },
  { name: "Coding & Language Club", description: "Competitive programming and technical skill development", href: "/campus/clubs" },
  { name: "Virina Club", description: "Cultural activities and performing arts", href: "/campus/clubs" },
  { name: "Music Club", description: "Musical performances and instrumental practice sessions", href: "/campus/clubs" },
  { name: "Electrical & Electronics Hobby Club", description: "Hands-on electronics projects and circuit design", href: "/campus/clubs" },
  { name: "Automobile Club", description: "Automotive engineering and vehicle design workshops", href: "/campus/clubs" },
  { name: "Robotics Club", description: "Building and programming robots for competitions", href: "/campus/clubs" },
  { name: "Drone Club", description: "Drone building, programming, and aerial photography", href: "/campus/clubs" },
  { name: "E-Yantra Club", description: "Robotics competitions and embedded systems projects", href: "/campus/clubs" },
  { name: "Trishakti Club", description: "Physical fitness, sports, and outdoor activities", href: "/campus/clubs" },
];

export function ClubsSection() {
  return (
    <section className="bg-[#F9FAFB]" aria-label="Student Clubs">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
              Student Life
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight">
              Student Clubs
            </h2>
            <p className="text-lg text-[#5C6370] mt-4 max-w-xl">
              10 active student clubs offering opportunities in technical, cultural, and co-curricular activities
            </p>
          </div>
          <Link
            href="/campus/clubs"
            className="inline-flex items-center gap-2 text-base font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors group"
          >
            View all clubs
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CLUBS.map((club) => (
            <Link
              key={club.name}
              href={club.href}
              className="group p-6 bg-white hover:bg-[#00274C] transition-colors"
            >
              <h3 className="text-sm font-bold text-[#00274C] group-hover:text-white transition-colors mb-2">
                {club.name}
              </h3>
              <p className="text-xs text-[#9CA3AF] group-hover:text-white/50 transition-colors leading-relaxed">
                {club.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
