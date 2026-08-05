"use client";

import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";

const VIDEOS = [
  { title: "Campus Tour - MBSCET Jammu", description: "Virtual walkthrough of the MBSCET campus facilities" },
  { title: "Annual Day Celebration", description: "Highlights from the annual day function" },
  { title: "Fresher Party 2025", description: "Welcome event for new students" },
  { title: "Tech Fest Highlights", description: "Technical festival competitions and events" },
  { title: "Placement Drive", description: "Campus recruitment drive with industry partners" },
];

export function VideoGalleryContent() {
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
          Video Gallery
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Watch videos from campus events, celebrations, and academic activities at MBSCET.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((video, i) => (
          <motion.div
            key={video.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
          >
            {/* Video placeholder */}
            <div className="group relative aspect-video border border-line bg-ink/5 flex items-center justify-center cursor-pointer">
              <div className="flex size-12 items-center justify-center border border-line bg-surface">
                <Play className="size-5 text-ink-faint" />
              </div>
            </div>
            <div className="mt-3">
              <h3 className="font-heading text-sm font-semibold text-ink">{video.title}</h3>
              <p className="mt-1 text-xs text-ink-muted">{video.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-8"
      >
        <a
          href="https://www.youtube.com/@mbscet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          Visit our YouTube channel
          <ExternalLink className="size-3.5" />
        </a>
      </motion.div>
    </div>
  );
}
