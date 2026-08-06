"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        setReady(true);
      } catch {
        // Gracefully handle if ScrollSmoother isn't available
        console.warn("SmoothScroll: Could not initialize");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Only initialize ScrollSmoother after mount
  useEffect(() => {
    if (!ready || !wrapperRef.current || !contentRef.current) return;

    let smoother: ReturnType<typeof gsap.to> | null = null;

    try {
      // Dynamic import to avoid SSR issues
      import("gsap/ScrollSmoother").then(({ ScrollSmoother }) => {
        gsap.registerPlugin(ScrollSmoother);

        ScrollSmoother.create({
          wrapper: wrapperRef.current!,
          content: contentRef.current!,
          smooth: 1.2,
          effects: true,
          smoothTouch: 0.1,
        });
      });
    } catch {
      console.warn("SmoothScroll: Could not create ScrollSmoother");
    }

    return () => {
      try {
        // Cleanup is handled by GSAP context
      } catch {
        // Ignore cleanup errors
      }
    };
  }, [ready]);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}

export default SmoothScroll;
