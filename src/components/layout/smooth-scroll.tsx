"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Only mount on client to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !wrapperRef.current || !contentRef.current) return;

    let smoother: any = null;

    // Dynamic import to avoid SSR issues
    const initScrollSmoother = async () => {
      try {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const { ScrollSmoother } = await import("gsap/ScrollSmoother");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

        // Small delay to ensure DOM is ready
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (!wrapperRef.current || !contentRef.current) return;

        smoother = ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 1.5,
          effects: true,
          smoothTouch: 0.1,
          ignoreMobileResize: true,
        });
      } catch (error) {
        console.warn("ScrollSmoother initialization failed:", error);
      }
    };

    initScrollSmoother();

    return () => {
      if (smoother) {
        try {
          smoother.kill();
        } catch {
          // Ignore cleanup errors
        }
      }
    };
  }, [isMounted]);

  // Server-side render: just render children normally
  // Client-side: wrap in ScrollSmoother structure
  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}

export default SmoothScroll;
