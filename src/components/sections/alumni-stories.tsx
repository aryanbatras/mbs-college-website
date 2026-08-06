"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Briefcase, MapPin } from "react-icons/fa";

const ALUMNI = [
  {
    name: "Rahul Sharma",
    year: "2018",
    program: "B.E. Computer Science",
    image: "/media/general/1-1024x579.jpg",
    currentRole: "Senior Software Engineer",
    company: "Google",
    location: "Bangalore",
    quote: "MBSCET gave me the foundation to pursue my dreams in tech. The faculty support and hands-on projects were invaluable.",
  },
  {
    name: "Priya Patel",
    year: "2019",
    program: "B.E. Electronics & Communication",
    image: "/media/general/2-1024x768.jpeg",
    currentRole: "Hardware Design Engineer",
    company: "Intel",
    location: "Hyderabad",
    quote: "The electronics labs at MBSCET are world-class. I was able to work on real projects that prepared me for my career.",
  },
  {
    name: "Amit Singh",
    year: "2020",
    program: "B.E. Mechanical Engineering",
    image: "/media/general/10-1024x768.jpeg",
    currentRole: "Design Engineer",
    company: "Tata Motors",
    location: "Pune",
    quote: "The workshops and industrial visits at MBSCET gave me practical exposure that textbooks cannot provide.",
  },
  {
    name: "Sneha Gupta",
    year: "2021",
    program: "MCA",
    image: "/media/general/11-1024x768.jpg",
    currentRole: "Data Scientist",
    company: "Microsoft",
    location: "Hyderabad",
    quote: "The MCA program at MBSCET is comprehensive and industry-relevant. The Python and ML workshops helped me transition into data science.",
  },
  {
    name: "Vikram Reddy",
    year: "2017",
    program: "B.E. Civil Engineering",
    image: "/media/general/2-1-1024x576.jpg",
    currentRole: "Project Manager",
    company: "L&T Construction",
    location: "Delhi",
    quote: "MBSCET's civil engineering program gave me the skills to manage large-scale infrastructure projects.",
  },
];

export function AlumniStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-paper" aria-label="Alumni success stories">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Alumni Network
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            Success Stories
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Our alumni are making an impact across industries worldwide.
          </p>
        </motion.div>

        {/* Featured story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 mb-6">
                  <img
                    src={ALUMNI[activeIndex].image}
                    alt={ALUMNI[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-muted">
                  <span className="flex items-center gap-1">
                    <Briefcase className="size-4 text-accent" />
                    {ALUMNI[activeIndex].currentRole} at {ALUMNI[activeIndex].company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-4 text-accent" />
                    {ALUMNI[activeIndex].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-ink leading-relaxed mb-8">
                  &ldquo;{ALUMNI[activeIndex].quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-lg font-semibold text-ink">{ALUMNI[activeIndex].name}</div>
                  <div className="text-sm text-ink-muted mt-1">
                    {ALUMNI[activeIndex].program}, Class of {ALUMNI[activeIndex].year}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Alumni list */}
            <div className="mt-10 flex flex-col gap-3">
              {ALUMNI.map((alumni, i) => (
                <button
                  key={alumni.name}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-4 p-3 text-left transition-colors ${
                    i === activeIndex ? "bg-ink/[0.03]" : "hover:bg-ink/[0.02]"
                  }`}
                >
                  <div className="size-10 rounded-full overflow-hidden bg-ink/5 shrink-0">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-ink">{alumni.name}</div>
                    <div className="text-xs text-ink-muted truncate">
                      {alumni.currentRole} at {alumni.company}
                    </div>
                  </div>
                  {i === activeIndex && (
                    <ArrowRight className="size-4 text-accent shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
