"use client";

import { motion } from "motion/react";
import { Cpu, Palette, Wrench } from "react-icons/fa";

const CLUBS = [
  {
    name: "Drone Club",
    icon: Cpu,
    description: "The MBSCET Drone Club focuses on unmanned aerial vehicle technology, drone programming, and aerial surveying. Members learn to build, program, and operate drones for various applications including mapping, agriculture, and surveillance.",
    activities: ["Drone building workshops", "Aerial photography projects", "Drone racing competitions", "Guest lectures from UAV industry experts"],
  },
  {
    name: "Technical Club",
    icon: Wrench,
    description: "The Technical Club organizes coding competitions, hackathons, and technical workshops throughout the academic year. It serves as a platform for students to enhance their technical skills beyond the curriculum.",
    activities: ["Coding competitions", "Hackathons", "Technical paper presentations", "Workshop on emerging technologies"],
  },
  {
    name: "Cultural Club",
    icon: Palette,
    description: "The Cultural Club promotes arts, music, dance, and drama among students. It organizes cultural events, annual day celebrations, and inter-college cultural festivals.",
    activities: ["Annual day celebration", "Cultural festivals", "Music and dance competitions", "Drama and theater workshops"],
  },
];

export function ClubsContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          CAMPUS
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Student Clubs
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          MBSCET hosts several student clubs that provide platforms for technical, cultural,
          and extracurricular development beyond the classroom.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8">
        {CLUBS.map((club, i) => (
          <motion.div
            key={club.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="border border-line p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <club.icon className="size-6 text-accent" />
              <h2 className="font-heading text-xl font-bold text-ink">{club.name}</h2>
            </div>
            <p className="max-w-[65ch] text-sm leading-relaxed text-ink-muted">
              {club.description}
            </p>
            <div className="mt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint mb-2">Activities</h3>
              <ul className="flex flex-wrap gap-2">
                {club.activities.map((activity) => (
                  <li key={activity} className="border border-line px-3 py-1.5 text-xs text-ink-muted">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
