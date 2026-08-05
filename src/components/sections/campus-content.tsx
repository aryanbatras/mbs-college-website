"use client";

import { motion } from "motion/react";

const FACILITIES = [
  { title: "Central Library", desc: "Well-stocked central library with technical textbooks, reference materials, national/international journals, and digital e-resource terminals.", image: "/media/general/2-1024x768.jpeg" },
  { title: "Wi-Fi Campus", desc: "High-speed internet connectivity throughout the campus for academic and research purposes.", image: "/media/general/1-1024x579.jpg" },
  { title: "Laboratories", desc: "Fully equipped departmental labs including Electrical Machines, CAD/CAM, Fluid Mechanics, Analog/Digital Electronics, and Computer Centers.", image: "/media/general/10-1024x768.jpeg" },
  { title: "Hostels", desc: "Separate hostel accommodations for both boys and girls coming from outstation areas.", image: "/media/general/11-1024x768.jpg" },
  { title: "Canteens", desc: "Two campus canteens providing hygienic refreshments and rest areas for students and staff.", image: "/media/general/2-1-1024x576.jpg" },
  { title: "Medical Unit", desc: "On-campus health care facility for students and staff.", image: "/media/general/3-1024x576.jpeg" },
  { title: "Sports Grounds", desc: "Sports complex and grounds for outdoor and indoor activities.", image: "/media/general/1-1-1024x579.jpeg" },
  { title: "Plant Nursery", desc: "College-operated plant nursery contributing to campus greenery.", image: "/media/general/4-1024x461.jpeg" },
];

export function CampusContent() {
  return (
    <div className="page-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
          Campus
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink">
          Campus Facilities
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
          MBSCET provides comprehensive infrastructure to support academic
          excellence and holistic development of students.
        </p>
      </motion.div>

      {/* Facilities grid with images */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FACILITIES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-ink/5 mb-3">
              <img
                src={f.image}
                alt={f.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-base font-semibold text-ink">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Student clubs */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-14 md:mt-16"
      >
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-ink mb-5">Student Clubs</h2>
        <div className="flex flex-wrap gap-3">
          {["Drone Club", "Technical Club", "Cultural Club"].map((club) => (
            <div key={club} className="px-5 py-2.5 text-sm font-medium text-ink bg-ink/[0.03]">
              {club}
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
