import Link from "next/link";
import { FaArrowRight, FaRocket, FaCode, FaMusic, FaPlane, FaStar } from "react-icons/fa";

const CLUBS = [
  {
    name: "Astronomy Club",
    description: "Explore the cosmos through telescopes, star-gazing sessions, and space science workshops.",
    icon: FaStar,
    color: "#FFCB05",
  },
  {
    name: "Coding & Language Club",
    description: "Enhance programming skills through coding competitions, hackathons, and tech talks.",
    icon: FaCode,
    color: "#FFCB05",
  },
  {
    name: "Drone Club",
    description: "Learn drone technology, aerial photography, and participate in drone racing events.",
    icon: FaPlane,
    color: "#FFCB05",
  },
  {
    name: "Automobile Club",
    description: "Hands-on experience with automotive engineering, car maintenance, and motorsport events.",
    icon: FaRocket,
    color: "#FFCB05",
  },
  {
    name: "Music Club",
    description: "Express creativity through music performances, band practice, and cultural events.",
    icon: FaMusic,
    color: "#FFCB05",
  },
];

export function ClubsSection() {
  return (
    <section className="bg-white" aria-label="Student Clubs">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            Student Life
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight">
            Student Clubs & Activities
          </h2>
          <p className="text-lg text-[#5C6370] mt-4 max-w-2xl">
            Beyond academics, our student clubs foster creativity, leadership, and holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CLUBS.map((club) => (
            <div
              key={club.name}
              className="group border border-[#E5E7EB] hover:border-[#FFCB05] p-6 transition-colors"
            >
              <div
                className="size-12 flex items-center justify-center mb-4"
                style={{ backgroundColor: `${club.color}20` }}
              >
                <club.icon className="text-[#FFCB05] text-xl" />
              </div>
              <h3 className="text-base font-bold text-[#00274C] mb-2">{club.name}</h3>
              <p className="text-sm text-[#5C6370] leading-relaxed">{club.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/campus/clubs"
            className="inline-flex items-center gap-2 text-base font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors group"
          >
            Explore all clubs
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
