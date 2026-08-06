"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Search, Filter, Building, BookOpen, Users, Car } from "react-icons/fa";

const BUILDINGS = [
  { name: "Main Block", type: "academic", x: 45, y: 40, description: "Administrative offices and classrooms" },
  { name: "Computer Lab", type: "lab", x: 30, y: 55, description: "300+ workstations with latest technology" },
  { name: "Library", type: "library", x: 60, y: 35, description: "Central library with 50,000+ volumes" },
  { name: "Workshop", type: "lab", x: 25, y: 30, description: "Mechanical and civil engineering workshops" },
  { name: "Seminar Hall", type: "academic", x: 55, y: 60, description: "500-seat auditorium for events" },
  { name: "Hostel Boys", type: "hostel", x: 70, y: 45, description: "Separate accommodation for male students" },
  { name: "Hostel Girls", type: "hostel", x: 75, y: 55, description: "Separate accommodation for female students" },
  { name: "Canteen", type: "facility", x: 40, y: 70, description: "Two campus canteens" },
  { name: "Sports Ground", type: "facility", x: 20, y: 65, description: "Cricket, football, and athletics" },
  { name: "Parking", type: "parking", x: 80, y: 30, description: "Visitor and student parking" },
];

const FILTER_TYPES = [
  { id: "all", label: "All", icon: Building },
  { id: "academic", label: "Academic", icon: BookOpen },
  { id: "lab", label: "Labs", icon: Filter },
  { id: "hostel", label: "Hostels", icon: Users },
  { id: "facility", label: "Facilities", icon: Building },
  { id: "parking", label: "Parking", icon: Car },
];

export function CampusMap() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedBuilding, setSelectedBuilding] = useState<typeof BUILDINGS[0] | null>(null);
  const [search, setSearch] = useState("");

  const filtered = BUILDINGS.filter((b) => {
    const matchesFilter = activeFilter === "all" || b.type === activeFilter;
    const matchesSearch = !search || b.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="bg-paper" aria-label="Campus map">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Navigate
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            Campus Map
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Explore our campus facilities and find your way around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-faint" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search buildings..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {FILTER_TYPES.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeFilter === filter.id
                      ? "bg-accent text-paper"
                      : "bg-ink/[0.03] text-ink-muted hover:text-ink"
                  }`}
                >
                  <filter.icon className="size-3" />
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Building list */}
            <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
              {filtered.map((building) => (
                <button
                  key={building.name}
                  onClick={() => setSelectedBuilding(building)}
                  className={`flex items-start gap-3 p-3 text-left transition-colors ${
                    selectedBuilding?.name === building.name
                      ? "bg-accent/10"
                      : "hover:bg-ink/[0.02]"
                  }`}
                >
                  <MapPin className="size-4 mt-0.5 text-accent shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">{building.name}</div>
                    <div className="text-xs text-ink-muted mt-0.5">{building.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] bg-ink/5 overflow-hidden">
              {/* Simplified map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100">
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Building markers */}
                {filtered.map((building) => (
                  <motion.button
                    key={building.name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedBuilding(building)}
                    className={`absolute size-6 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-colors ${
                      selectedBuilding?.name === building.name
                        ? "bg-accent text-paper"
                        : "bg-white text-ink shadow-md hover:bg-accent hover:text-paper"
                    }`}
                    style={{ left: `${building.x}%`, top: `${building.y}%` }}
                    title={building.name}
                  >
                    <MapPin className="size-3" />
                  </motion.button>
                ))}

                {/* Roads */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 10% 50% Q 30% 45% 50% 50% T 90% 45%" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="3" strokeDasharray="5,5"/>
                  <path d="M 50% 10% Q 45% 30% 50% 50% T 45% 90%" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="3" strokeDasharray="5,5"/>
                </svg>
              </div>

              {/* Selected building info */}
              {selectedBuilding && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 bg-white p-4 shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-ink">{selectedBuilding.name}</h3>
                      <p className="text-sm text-ink-muted mt-1">{selectedBuilding.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedBuilding(null)}
                      className="text-ink-faint hover:text-ink"
                    >
                      ×
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
