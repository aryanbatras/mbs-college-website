"use client";

import { motion } from "motion/react";
import { Camera, Calendar, ExternalLink } from "lucide-react";

const GALLERIES = [
  { title: "Campus Infrastructure", description: "Classrooms, laboratories, library, and campus buildings", count: 24 },
  { title: "Placement Drives", description: "Campus recruitment events and placement celebrations", count: 18 },
  { title: "Fresher Fiesta 2025", description: "Welcome party for the new batch of students", count: 32 },
  { title: "Engineers Day 2024", description: "Technical celebrations and competitions", count: 15 },
  { title: "Tech Fest & Workshops", description: "Technical festivals, workshops, and seminars", count: 28 },
  { title: "Sports & Cultural Events", description: "Annual sports meet, cultural programs, and activities", count: 20 },
  { title: "Blood Donation Camp", description: "Community service and blood donation drives", count: 12 },
  { title: "Plantation Drive", description: "Campus greening and environmental initiatives", count: 10 },
];

export function GalleriesContent() {
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
          Photo Galleries
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Capturing moments from campus life, events, celebrations, and academic activities
          at MBSCET.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERIES.map((gallery, i) => (
          <motion.div
            key={gallery.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            className="group border border-line p-5 transition-colors hover:bg-accent-soft/30 cursor-pointer"
          >
            {/* Placeholder image area */}
            <div className="mb-4 aspect-video border border-line bg-surface flex items-center justify-center">
              <Camera className="size-8 text-ink-faint" />
            </div>
            <h3 className="font-heading text-sm font-semibold text-ink">{gallery.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">{gallery.description}</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-ink-faint">
              <Calendar className="size-3" />
              {gallery.count} photos
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-8 text-sm text-ink-faint"
      >
        Gallery images are being migrated from the old site. Full galleries will be available soon.
      </motion.div>
    </div>
  );
}
