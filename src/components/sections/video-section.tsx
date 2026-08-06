"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { Portal } from "@/components/ui/portal";

const VIDEOS = [
  {
    title: "Campus Tour",
    thumbnail: "/media/general/DSC_0123-1024x683.jpg",
    duration: "3:45",
    category: "Campus",
  },
  {
    title: "Placement Drive 2024",
    thumbnail: "/media/general/DSC_0128-1024x683.jpg",
    duration: "5:20",
    category: "Placements",
  },
  {
    title: "Tech Fest Highlights",
    thumbnail: "/media/general/1-1024x579.jpg",
    duration: "4:15",
    category: "Events",
  },
  {
    title: "Student Life at MBSCET",
    thumbnail: "/media/general/2-1024x768.jpeg",
    duration: "6:30",
    category: "Campus",
  },
];

const CATEGORIES = ["All", "Campus", "Placements", "Events"];

export function VideoSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null);

  const filtered = activeCategory === "All"
    ? VIDEOS
    : VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <section className="bg-paper" aria-label="Video gallery">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Watch
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            Video Gallery
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Explore campus life, events, and achievements through our video collection.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-accent text-paper"
                  : "bg-ink/[0.03] text-ink-muted hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden bg-ink/5 mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors flex items-center justify-center">
                  <div className="size-12 flex items-center justify-center bg-paper/90 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="size-5 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-ink/80 text-paper text-[10px] font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-medium tracking-wider uppercase text-accent">{video.category}</span>
              </div>
              <h3 className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Video modal - portaled to body to escape ScrollSmoother transform */}
        {activeVideo && (
          <Portal>
          <div
            className="fixed inset-0 z-[200] bg-ink/95 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-ink">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-paper">
                    <Play className="size-16 mx-auto mb-4 opacity-80" />
                    <p className="text-sm text-paper/60">Video player would load here</p>
                    <p className="text-xs text-paper/40 mt-1">Connect YouTube channel for actual videos</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-paper">{activeVideo.title}</h3>
                  <p className="text-sm text-paper/60">{activeVideo.category} &middot; {activeVideo.duration}</p>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-paper/60 hover:text-paper text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
          </Portal>
        )}
      </div>
    </section>
  );
}
