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

interface ProgramsClientProps {
  programs: Array<{
    code: string;
    slug: string;
    title: string;
    description?: string;
    duration: string;
    intake: number;
  }>;
}

export function ProgramsClient({ programs }: ProgramsClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

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

      // Label fade in
      tl.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      // Title slide up
      tl.from(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Description fade in
      tl.from(
        descRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Program cards stagger
      if (gridRef.current) {
        tl.from(
          gridRef.current.children,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }

      // Footer fade in
      tl.from(
        footerRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white" aria-label="Programs">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div ref={labelRef} className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            Academic Programs
          </p>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight"
          >
            Departments & Programs
          </h2>
          <p
            ref={descRef}
            className="text-lg text-[#5C6370] mt-4 max-w-2xl"
          >
            AICTE approved B.Tech programs across 7 departments. NBA
            accreditation in CSE, EE, and ME.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program) => (
            <Link
              key={program.code}
              href={`/academics/${program.slug}`}
              className="group block p-8 bg-gray-50 hover:bg-[#00274C] transition-colors"
            >
              <div className="mb-5">
                <span className="text-xs font-bold text-[#FFCB05] group-hover:text-gray-400 transition-colors tracking-wider">
                  {program.code}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#00274C] group-hover:text-white leading-tight mb-3 transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-[#5C6370] group-hover:text-white/60 mb-4 transition-colors leading-relaxed line-clamp-3">
                {program.description || ""}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 group-hover:border-white/10 transition-colors">
                <span className="text-xs text-[#9CA3AF] group-hover:text-white/40 transition-colors">
                  {program.duration} &middot; {program.intake} Seats
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-[#FFCB05] group-hover:text-gray-400 transition-colors">
                  Details
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div
          ref={footerRef}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-sm text-[#5C6370]">
            M.Tech programs approved by AICTE in CSE, EE, ME, and ECE
          </p>
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-base font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors group"
          >
            View all departments
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
