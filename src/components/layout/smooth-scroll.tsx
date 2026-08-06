"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for DOM to be fully ready
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady || !wrapperRef.current || !contentRef.current) return;

    let smoother: any = null;
    let gsapInstance: any = null;

    const initScrollSmoother = async () => {
      try {
        // Dynamic imports to avoid SSR issues
        const gsapModule = await import("gsap");
        gsapInstance = gsapModule.default;
        const { ScrollSmoother } = await import("gsap/ScrollSmoother");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        // Register plugins
        gsapInstance.registerPlugin(ScrollSmoother, ScrollTrigger);

        // Wait for next frame to ensure DOM is painted
        await new Promise((resolve) => requestAnimationFrame(resolve));

        if (!wrapperRef.current || !contentRef.current) return;

        // Create ScrollSmoother
        smoother = ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 1.2,
          effects: true,
          smoothTouch: 0.1,
          ignoreMobileResize: true,
        });

        console.log("ScrollSmoother initialized successfully");
      } catch (error) {
        console.warn("ScrollSmoother initialization failed:", error);
        // If ScrollSmoother fails, at least make the page scrollable
        if (wrapperRef.current) {
          wrapperRef.current.style.position = "relative";
          wrapperRef.current.style.height = "auto";
          wrapperRef.current.style.overflow = "visible";
        }
        if (contentRef.current) {
          contentRef.current.style.position = "relative";
          contentRef.current.style.height = "auto";
          contentRef.current.style.overflow = "visible";
        }
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
  }, [isReady]);

  return (
    <div
      ref={wrapperRef}
      id="smooth-wrapper"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        ref={contentRef}
        id="smooth-content"
        style={{
          width: "100%",
          overflow: "visible",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default SmoothScroll;
