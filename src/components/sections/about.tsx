"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SiteConfig } from "@/lib/content";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutStripProps {
  config: SiteConfig;
}

export function AboutStrip({ config }: AboutStripProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const blockquoteRef = useRef<HTMLQuoteElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const chairmanRef = useRef<HTMLDivElement>(null);
  const principalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main content animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center center",
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

      // Paragraphs fade in
      if (paragraphsRef.current) {
        tl.from(
          paragraphsRef.current.children,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Blockquote slide in
      tl.from(
        blockquoteRef.current,
        {
          opacity: 0,
          x: -30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Mission items stagger
      if (missionRef.current) {
        tl.from(
          missionRef.current.querySelectorAll("li"),
          {
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Link fade in
      tl.from(
        linkRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Sidebar slide in from right
      gsap.from(sidebarRef.current, {
        scrollTrigger: {
          trigger: sidebarRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      // Sidebar stats counter animation
      if (sidebarRef.current) {
        const stats = sidebarRef.current.querySelectorAll(".stat-number");
        stats.forEach((stat) => {
          const endValue = parseInt(stat.textContent || "0", 10);
          const suffix = (stat.textContent || "").replace(/[0-9]/g, "");

          gsap.fromTo(
            stat,
            { textContent: "0" },
            {
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              textContent: endValue,
              duration: 1.5,
              ease: "power2.out",
              snap: { textContent: 1 },
              onUpdate: function () {
                const current = Math.round(
                  parseFloat(stat.textContent || "0")
                );
                stat.textContent = current + suffix;
              },
            }
          );
        });
      }

      // Chairman card fade in
      if (chairmanRef.current) {
        gsap.from(chairmanRef.current, {
          scrollTrigger: {
            trigger: chairmanRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Principal card fade in
      if (principalRef.current) {
        gsap.from(principalRef.current, {
          scrollTrigger: {
            trigger: principalRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#00274C]" aria-label="About the college">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start mb-20">
          <div>
            <p
              ref={labelRef}
              className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4"
            >
              About the College
            </p>
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-6"
            >
              Mahant Bachittar Singh College of Engineering & Technology
            </h2>
            <div ref={paragraphsRef}>
              <p className="text-base text-white/70 leading-relaxed mb-4">
                {config.about}
              </p>
              <p className="text-base text-white/70 leading-relaxed mb-8">
                {config.aboutExtended}
              </p>
            </div>
            <blockquote
              ref={blockquoteRef}
              className="text-lg md:text-xl font-medium text-white/90 leading-relaxed mb-10 border-l-2 border-[#FFCB05] pl-6"
            >
              &ldquo;{config.vision}&rdquo;
            </blockquote>

            <div ref={missionRef} className="mb-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
                Our Mission
              </p>
              <ul className="space-y-3">
                {config.mission.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#FFCB05] mt-1">—</span>
                    <span className="text-sm text-white/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              ref={linkRef}
              href="/about"
              className="group inline-flex items-center gap-3 text-base font-bold text-[#FFCB05] hover:text-white transition-colors"
            >
              Learn more about us
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Accreditations sidebar */}
          <div
            ref={sidebarRef}
            className="bg-[#1E406B] p-8 lg:p-10 min-w-[280px]"
          >
            <div className="mb-6">
              <h3 className="text-base font-bold text-white">Accreditations</h3>
              <p className="text-xs text-white/50">Recognized bodies</p>
            </div>

            <div className="space-y-4">
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-[#FFCB05] mb-1">
                  NBA Accredited
                </p>
                <p className="text-xs text-white/70">
                  CSE, EE, ME Departments
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-[#FFCB05] mb-1">
                  AICTE Approved
                </p>
                <p className="text-xs text-white/70">
                  All India Council for Technical Education
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-[#FFCB05] mb-1">
                  University of Jammu
                </p>
                <p className="text-xs text-white/70">
                  Affiliated institution
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-[#FFCB05] mb-1">
                  Sikh Minority Institution
                </p>
                <p className="text-xs text-white/70">
                  Under Sant Manjit Singh Trust
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-[#FFCB05] stat-number">
                    1999
                  </p>
                  <p className="text-xs text-white/50">Established</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FFCB05] stat-number">
                    330
                  </p>
                  <p className="text-xs text-white/50">Total Intake</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FFCB05] stat-number">
                    25+
                  </p>
                  <p className="text-xs text-white/50">Acres Campus</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FFCB05] stat-number">
                    50+
                  </p>
                  <p className="text-xs text-white/50">Faculty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chairman & Principal Messages */}
        <div className="space-y-8">
          {/* Chairman */}
          {config.chairman && (
            <div
              ref={chairmanRef}
              className="bg-[#1E406B] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
            >
              {config.chairman.photo && (
                <div className="w-full md:w-48 shrink-0">
                  <div className="aspect-[3/4] overflow-hidden bg-[#0a1929]">
                    <img
                      src={config.chairman.photo}
                      alt={config.chairman.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
                  Chairman&apos;s Message
                </p>
                {config.chairman.message && (
                  <blockquote className="text-base text-white/80 leading-relaxed mb-6">
                    &ldquo;{config.chairman.message}&rdquo;
                  </blockquote>
                )}
                <div>
                  <p className="text-base font-bold text-white">
                    {config.chairman.name}
                  </p>
                  <p className="text-sm text-white/50">
                    {config.chairman.title}, {config.chairman.organization}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Principal */}
          {config.principal && (
            <div
              ref={principalRef}
              className="bg-[#1E406B] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
            >
              {config.principal.photo && (
                <div className="w-full md:w-48 shrink-0">
                  <div className="aspect-[3/4] overflow-hidden bg-[#0a1929]">
                    <img
                      src={config.principal.photo}
                      alt={config.principal.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
                  Principal&apos;s Message
                </p>
                {config.principal.message && (
                  <blockquote className="text-base text-white/80 leading-relaxed mb-6">
                    &ldquo;{config.principal.message}&rdquo;
                  </blockquote>
                )}
                <div>
                  <p className="text-base font-bold text-white">
                    {config.principal.name}
                  </p>
                  <p className="text-sm text-white/50">
                    {config.principal.title}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
