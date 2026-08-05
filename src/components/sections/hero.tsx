"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-end" aria-label="Welcome">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/media/general/DSC_0123-1024x683.jpg"
          alt="MBSCET Campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay — clean, not heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 page-container pb-16 md:pb-24 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4 md:mb-6">
            Mahant Bachittar Singh College of Engineering & Technology
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-paper leading-[1.05] tracking-tight mb-6 md:mb-8">
            Shaping Tomorrow&apos;s Engineers in the Heart of Jammu
          </h1>
          <p className="text-base md:text-lg text-paper/70 max-w-xl leading-relaxed mb-8 md:mb-10">
            AICTE approved, UGC recognized, and affiliated to the University of Jammu.
            Offering B.E. programs across seven disciplines since 1994.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-accent text-paper hover:bg-accent-strong transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium text-paper border border-paper/20 hover:border-paper/40 hover:bg-paper/5 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
