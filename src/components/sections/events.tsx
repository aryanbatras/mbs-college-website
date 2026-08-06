"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Clock, ArrowRight } from "react-icons/fa";

const EVENTS = [
  {
    date: "15 Aug 2026",
    day: "15",
    month: "AUG",
    title: "Independence Day Celebration",
    time: "9:00 AM",
    location: "College Auditorium",
    category: "Cultural",
  },
  {
    date: "20 Aug 2026",
    day: "20",
    month: "AUG",
    title: "Technical Symposium 2026",
    time: "10:00 AM",
    location: "Seminar Hall",
    category: "Technical",
  },
  {
    date: "25 Aug 2026",
    day: "25",
    month: "AUG",
    title: "Campus Placement Drive",
    time: "9:30 AM",
    location: "Computer Lab 1",
    category: "Placement",
  },
  {
    date: "1 Sep 2026",
    day: "01",
    month: "SEP",
    title: "Faculty Development Program",
    time: "11:00 AM",
    location: "Conference Room",
    category: "Academic",
  },
];

export function EventsSection() {
  return (
    <section className="bg-white" aria-label="Upcoming events">
      <div className="page-container section-spacing">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
              Calendar
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              Upcoming Events
            </h2>
          </motion.div>
          <motion.a
            href="/news"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors group"
          >
            View all events
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group"
            >
              <div className="flex gap-4 p-4 bg-ink/[0.02] group-hover:bg-ink/[0.04] transition-colors">
                {/* Date badge */}
                <div className="shrink-0 w-16 h-16 flex flex-col items-center justify-center bg-navy text-paper group-hover:bg-accent transition-colors">
                  <span className="text-xl font-semibold leading-none">{event.day}</span>
                  <span className="text-[10px] font-medium tracking-wider uppercase mt-0.5">{event.month}</span>
                </div>

                {/* Event details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-accent">{event.category}</span>
                  <h3 className="text-sm font-semibold text-ink mt-1 leading-snug group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-ink-faint">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
