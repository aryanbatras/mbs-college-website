"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { GalleryGrid } from "@/components/ui/lightbox";

const CAMPUS_IMAGES = [
  { src: "/media/general/DSC_0123-1024x683.jpg", alt: "MBSCET Campus View" },
  { src: "/media/general/DSC_0128-1024x683.jpg", alt: "College Building" },
  { src: "/media/general/DSC_0131-1024x683.jpg", alt: "Campus Grounds" },
  { src: "/media/general/1-1024x579.jpg", alt: "Computer Lab" },
  { src: "/media/general/2-1024x768.jpeg", alt: "Library" },
  { src: "/media/general/10-1024x768.jpeg", alt: "Seminar Hall" },
  { src: "/media/general/11-1024x768.jpg", alt: "Workshop" },
  { src: "/media/general/1-1-1024x579.jpeg", alt: "Electronics Lab" },
  { src: "/media/general/2-1-1024x576.jpg", alt: "Campus Activity" },
  { src: "/media/general/3-1024x576.jpeg", alt: "Student Event" },
  { src: "/media/general/4-1024x461.jpeg", alt: "College Entrance" },
  { src: "/media/general/1-1024x683.jpg", alt: "Campus Aerial" },
];

const EVENT_IMAGES = [
  { src: "/media/general/1371258432764.jpg", alt: "Event" },
  { src: "/media/general/1a.jpeg", alt: "Campus Event" },
  { src: "/media/general/2-819x1024.jpg", alt: "Student Activity" },
  { src: "/media/general/1-768x1024.png", alt: "Technical Event" },
];

export function GalleriesContent() {
  const [activeTab, setActiveTab] = useState<"campus" | "events">("campus");

  return (
    <div className="page-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Breadcrumb items={[{ label: "Campus" }, { label: "Galleries" }]} />
        <h1 className="mt-4 font-heading text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
          Photo Galleries
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
          Capturing moments from campus life, events, celebrations, and academic activities
          at MBSCET.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="mt-10 flex gap-1 bg-ink/[0.03] p-1 w-fit">
        <button
          onClick={() => setActiveTab("campus")}
          className={`px-5 py-2 text-sm font-medium transition-colors ${
            activeTab === "campus" ? "bg-white text-ink shadow-sm" : "text-ink-muted hover:text-ink"
          }`}
        >
          Campus
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`px-5 py-2 text-sm font-medium transition-colors ${
            activeTab === "events" ? "bg-white text-ink shadow-sm" : "text-ink-muted hover:text-ink"
          }`}
        >
          Events
        </button>
      </div>

      {/* Gallery grid */}
      <div className="mt-8">
        {activeTab === "campus" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <GalleryGrid images={CAMPUS_IMAGES} />
          </motion.div>
        )}
        {activeTab === "events" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <GalleryGrid images={EVENT_IMAGES} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
