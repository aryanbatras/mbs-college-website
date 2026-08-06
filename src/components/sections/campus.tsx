"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAMPUS_FEATURES = [
  { label: "Central Library", description: "Well-stocked library with digital resources" },
  { label: "Modern Laboratories", description: "State-of-the-art labs for all departments" },
  { label: "Seminar Halls", description: "Fully equipped seminar and conference halls" },
  { label: "Sports Facilities", description: "Playgrounds and indoor sports amenities" },
  { label: "Wi-Fi Campus", description: "High-speed internet connectivity throughout" },
  { label: "Auditorium", description: "Air-conditioned auditorium for events" },
];

export function CampusSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

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

      // Features stagger
      if (featuresRef.current) {
        tl.from(featuresRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        }, "-=0.3");
      }

      // Buttons
      tl.from(buttonsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.2");

      // Images - slide in from right
      if (imagesRef.current) {
        tl.from(imagesRef.current.children, {
          opacity: 0,
          x: 40,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }, "-=0.5");
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50" aria-label="Campus">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p ref={labelRef} className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
              Our Campus
            </p>
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#00274C] leading-[1.05] tracking-tight mb-6">
              A Place to Grow, Learn & Thrive
            </h2>
            <p ref={descRef} className="text-lg text-[#5C6370] leading-relaxed mb-8 max-w-lg">
              Spread across 25 acres in Babliana, Jammu, our campus provides a serene environment for learning with modern infrastructure, green spaces, and all the facilities needed for holistic development.
            </p>

            <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {CAMPUS_FEATURES.map((feature) => (
                <div key={feature.label} className="bg-white p-4 border border-gray-100">
                  <p className="text-sm font-bold text-[#00274C]">{feature.label}</p>
                  <p className="text-xs text-[#5C6370] mt-1">{feature.description}</p>
                </div>
              ))}
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/campus"
                className="group inline-flex items-center gap-3 bg-[#00274C] text-white px-8 py-4 text-sm font-bold hover:bg-[#1E406B] transition-colors"
              >
                Explore Campus
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/campus/galleries"
                className="group inline-flex items-center gap-3 border-2 border-[#FFCB05] text-[#00274C] px-8 py-4 text-sm font-bold hover:bg-[#FFCB05] hover:text-[#00274C] transition-colors"
              >
                Photo Gallery
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div ref={imagesRef} className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/media/homepage/central-park.jpg"
                alt="Campus central park"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden mt-8">
              <img
                src="/media/homepage/admin-block.jpg"
                alt="Administrative block"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden -mt-8">
              <img
                src="/media/homepage/library.jpg"
                alt="College library"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/media/homepage/auditorium.jpg"
                alt="College auditorium"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
