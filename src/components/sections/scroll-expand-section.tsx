"use client";

import ScrollExpand from "@/components/design-system/ScrollExpand";

export function ScrollExpandSection() {
  return (
    <section className="bg-white" aria-label="Campus showcase">
      <ScrollExpand
        src="/media/homepage/admin-block.jpg"
        alt="MBSCET Administrative Block"
        title="Where Futures Begin"
        scrollHint="Scroll to explore"
        useWindowScroll
        startWidth={45}
        startHeight={60}
        startRadius={32}
        endRadius={0}
        mediaZoom={1.2}
        scrollDistance={1.0}
        holdDistance={0.3}
        smoothing={0.08}
        overlayScrim={0.5}
        className="h-[100dvh]"
      >
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            Welcome to MBSCET
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-4">
            Engineering Excellence
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Established in 1999, MBSCET has been shaping tomorrow&apos;s engineers with world-class education and industry-ready skills.
          </p>
        </div>
      </ScrollExpand>
    </section>
  );
}
