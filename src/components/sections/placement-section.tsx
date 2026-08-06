"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TOP_RECRUITERS = [
  "Kandhari Beverages",
  "Cloud Analogy",
  "Vision India Services",
  "Pentagon Space",
  "RVS iGlobal",
  "PlanetSpark",
  "Avi Software",
  "NHPC",
  "Indian Army",
  "Indian Air Force",
];

export function PlacementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const recruitersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Label
      tl.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      // Title
      tl.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3");

      // Description
      tl.from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.4");

      // Contact box
      tl.from(contactRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.3");

      // Button
      tl.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.2");

      // Recruiters - stagger in
      if (recruitersRef.current) {
        tl.from(recruitersRef.current.children, {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          stagger: 0.05,
          ease: "power3.out",
        }, "-=0.3");
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#00274C]" aria-label="Placements">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p ref={labelRef} className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
              Training & Placement
            </p>
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Training & Placement Cell
            </h2>
            <p ref={descRef} className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              Our Training & Placement Cell bridges academia and industry, preparing students for successful careers through internships, workshops, and campus recruitment drives.
            </p>

            <div ref={contactRef} className="p-6 bg-white/5 mb-8">
              <h4 className="text-base font-bold text-white mb-4">Contact T&P Cell</h4>
              <div className="space-y-3 text-sm text-white/70">
                <p className="font-medium text-white/90">Prof. Dr. Sanjeev Singh (Incharge)</p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-[#FFCB05] text-xs" />
                  <a href="tel:+91-9419130161" className="hover:text-white transition-colors">+91-9419130161</a>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-[#FFCB05] text-xs" />
                  <a href="mailto:tpcell@mbscet.edu.in" className="hover:text-white transition-colors">tpcell@mbscet.edu.in</a>
                </p>
              </div>
            </div>

            <Link
              ref={buttonRef}
              href="/placements"
              className="group inline-flex items-center gap-3 bg-[#FFCB05] text-[#00274C] px-8 py-4 text-sm font-bold hover:bg-[#FFC107] transition-colors"
            >
              View Placement Records
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-8">Recruiters</h3>
            <div ref={recruitersRef} className="grid grid-cols-2 gap-4">
              {TOP_RECRUITERS.map((company) => (
                <div
                  key={company}
                  className="bg-white/5 p-4 flex items-center justify-center text-center"
                >
                  <span className="text-sm font-medium text-white/80">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
