"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Megaphone, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const ANNOUNCEMENTS = [
  {
    text: "Admission 2026-27 Open — Apply before August 15, 2026",
    link: "/admissions",
    icon: Megaphone,
  },
  {
    text: "Campus Placement Drive — Infosys & Wipro visiting on Aug 10",
    link: "/placements",
    icon: Calendar,
  },
  {
    text: "Webinar on Cyber Ethics & Laws — Register Now",
    link: "/news",
    icon: Megaphone,
  },
];

interface AnnouncementBarProps {
  dismissable?: boolean;
}

export function AnnouncementBar({ dismissable = true }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate announcements
  useEffect(() => {
    if (ANNOUNCEMENTS.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const announcement = ANNOUNCEMENTS[currentIndex];

  return (
    <div className="bg-navy text-paper relative z-50">
      <div className="page-container py-2 flex items-center justify-between gap-4">
        {/* Left: Navigation arrows for multiple announcements */}
        {ANNOUNCEMENTS.length > 1 && (
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length)}
            className="text-paper/50 hover:text-paper transition-colors shrink-0"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="size-4" />
          </button>
        )}

        {/* Center: Announcement content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2.5 flex-1 justify-center min-w-0"
          >
            <announcement.icon className="size-3.5 text-accent shrink-0" />
            <p className="text-xs md:text-sm font-medium truncate">
              {announcement.text}
            </p>
            {announcement.link && (
              <a
                href={announcement.link}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-strong transition-colors shrink-0"
              >
                Learn More
                <ExternalLink className="size-3" />
              </a>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Right: Navigation and dismiss */}
        <div className="flex items-center gap-2 shrink-0">
          {ANNOUNCEMENTS.length > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length)}
                className="text-paper/50 hover:text-paper transition-colors"
                aria-label="Next announcement"
              >
                <ChevronRight className="size-4" />
              </button>
              <div className="w-px h-3 bg-paper/20" />
            </>
          )}

          {/* Dots */}
          {ANNOUNCEMENTS.length > 1 && (
            <div className="hidden sm:flex gap-1">
              {ANNOUNCEMENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`size-1 rounded-full transition-all ${
                    i === currentIndex ? "bg-accent w-3" : "bg-paper/30"
                  }`}
                  aria-label={`Announcement ${i + 1}`}
                />
              ))}
            </div>
          )}

          {dismissable && (
            <button
              onClick={() => setVisible(false)}
              className="text-paper/40 hover:text-paper transition-colors p-0.5"
              aria-label="Dismiss announcement"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
