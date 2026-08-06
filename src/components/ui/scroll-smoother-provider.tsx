"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
}

interface ScrollSmootherProviderProps {
  children: React.ReactNode;
}

export function ScrollSmootherProvider({ children }: ScrollSmootherProviderProps) {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!contentRef.current || !wrapperRef.current) return;

      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5, // Smooth scroll duration in seconds
        effects: true, // Enable data-speed and data-lag attributes
        smoothTouch: 0.1, // Smooth scrolling on touch devices
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      smootherRef.current?.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}

export default ScrollSmootherProvider;
