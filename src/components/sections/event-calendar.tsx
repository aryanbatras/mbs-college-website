"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowRight } from "react-icons/fa";

const EVENTS = [
  {
    id: 1,
    title: "Independence Day Celebration",
    date: "2026-08-15",
    time: "9:00 AM",
    location: "College Auditorium",
    category: "Cultural",
    attendees: 150,
    description: "Annual Independence Day celebration with flag hoisting, cultural performances, and patriotic songs.",
  },
  {
    id: 2,
    title: "Technical Symposium 2026",
    date: "2026-08-20",
    time: "10:00 AM",
    location: "Seminar Hall",
    category: "Technical",
    attendees: 200,
    description: "Annual technical symposium featuring paper presentations, project exhibitions, and guest lectures.",
  },
  {
    id: 3,
    title: "Campus Placement Drive",
    date: "2026-08-25",
    time: "9:30 AM",
    location: "Computer Lab 1",
    category: "Placement",
    attendees: 100,
    description: "Campus recruitment drive by leading IT companies for final year students.",
  },
  {
    id: 4,
    title: "Faculty Development Program",
    date: "2026-09-01",
    time: "11:00 AM",
    location: "Conference Room",
    category: "Academic",
    attendees: 50,
    description: "One-week FDP on Emerging Technologies in Engineering Education.",
  },
  {
    id: 5,
    title: "Freshers Welcome Party",
    date: "2026-09-05",
    time: "4:00 PM",
    location: "College Ground",
    category: "Cultural",
    attendees: 300,
    description: "Welcome party for the new batch of students with performances and activities.",
  },
  {
    id: 6,
    title: "Industry Visit to SIDCO",
    date: "2026-09-10",
    time: "8:00 AM",
    location: "Off Campus",
    category: "Industrial",
    attendees: 40,
    description: "Industrial visit to SIDCO Industrial Estate for practical exposure.",
  },
];

const CATEGORIES = ["All", "Cultural", "Technical", "Placement", "Academic", "Industrial"];

export function EventCalendar() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [rsvpd, setRsvpd] = useState<number[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null);

  const filtered = activeCategory === "All"
    ? EVENTS
    : EVENTS.filter((e) => e.category === activeCategory);

  const handleRSVP = (eventId: number) => {
    setRsvpd((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  };

  return (
    <section className="bg-white" aria-label="Event calendar">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Events
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            Event Calendar
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Stay updated with upcoming events, workshops, and activities at MBSCET.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
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

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group"
              >
                <div className="bg-ink/[0.02] p-5 h-full flex flex-col">
                  {/* Date badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="size-12 flex flex-col items-center justify-center bg-navy text-paper">
                        <span className="text-lg font-semibold leading-none">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="text-[8px] font-medium uppercase">
                          {new Date(event.date).toLocaleString("en-IN", { month: "short" })}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-medium tracking-wider uppercase text-accent">
                          {event.category}
                        </span>
                        <div className="text-xs text-ink-faint mt-0.5">{formatDate(event.date)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Event details */}
                  <h3 className="text-base font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-ink-faint mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="size-3" />
                      {event.attendees + (rsvpd.includes(event.id) ? 1 : 0)}
                    </span>
                  </div>

                  {/* RSVP button */}
                  <button
                    onClick={() => handleRSVP(event.id)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                      rsvpd.includes(event.id)
                        ? "bg-accent/10 text-accent"
                        : "bg-ink text-paper hover:bg-ink/90"
                    }`}
                  >
                    {rsvpd.includes(event.id) ? (
                      <>
                        <CheckCircle className="size-4" />
                        Registered
                      </>
                    ) : (
                      <>
                        RSVP Now
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="size-12 text-ink-faint mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-ink mb-2">No events found</h3>
            <p className="text-sm text-ink-muted">Check back later for upcoming events</p>
          </div>
        )}
      </div>
    </section>
  );
}
