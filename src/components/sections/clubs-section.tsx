import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getSiteConfig } from "@/lib/content";

export function ClubsSection() {
  const config = getSiteConfig();
  const clubs = config.clubs || [];

  if (clubs.length === 0) return null;

  return (
    <section className="bg-gray-50" aria-label="Student Clubs">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Student Life
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight">
              Student Clubs
            </h2>
            <p className="text-lg text-[#5C6370] mt-4 max-w-xl">
              {clubs.length} active student clubs offering opportunities in technical, cultural, and co-curricular activities
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
          {clubs.map((club) => (
            <Link
              key={club}
              href="/campus/clubs"
              className="group p-6 bg-white"
            >
              <h3 className="text-sm font-bold text-[#00274C] mb-2">
                {club}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
