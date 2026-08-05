"use client";

import { motion } from "motion/react";
import { BookOpen, Wifi, Building, Users, Utensils, Heart, Dumbbell, TreePine } from "lucide-react";

const FACILITIES = [
  { icon: BookOpen, title: "Central Library", desc: "Well-stocked central library with technical textbooks, reference materials, national/international journals, and digital e-resource terminals." },
  { icon: Wifi, title: "Wi-Fi Campus", desc: "High-speed internet connectivity throughout the campus for academic and research purposes." },
  { icon: Building, title: "Laboratories", desc: "Fully equipped departmental labs including Electrical Machines, CAD/CAM, Fluid Mechanics, Analog/Digital Electronics, and Computer Centers." },
  { icon: Users, title: "Hostels", desc: "Separate hostel accommodations for both boys and girls coming from outstation areas." },
  { icon: Utensils, title: "Canteens", desc: "Two campus canteens providing hygienic refreshments and rest areas for students and staff." },
  { icon: Heart, title: "Medical Unit", desc: "On-campus health care facility for students and staff." },
  { icon: Dumbbell, title: "Sports Grounds", desc: "Sports complex and grounds for outdoor and indoor activities." },
  { icon: TreePine, title: "Plant Nursery", desc: "College-operated plant nursery contributing to campus greenery." },
];

export function CampusContent() {
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
          Campus Facilities
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          MBSCET provides comprehensive infrastructure to support academic
          excellence and holistic development of students.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {FACILITIES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            className="border border-line p-5"
          >
            <f.icon className="mb-3 size-5 text-accent" />
            <h3 className="font-heading text-sm font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Student clubs */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Student Clubs</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {["Drone Club", "Technical Club", "Cultural Club"].map((club) => (
            <div key={club} className="border border-line px-4 py-2 text-sm text-ink">
              {club}
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
