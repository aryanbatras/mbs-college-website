"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: any = null;

    const initParallax = async () => {
      try {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        ctx = gsap.context(() => {
          const getXY = () => {
            switch (direction) {
              case "up":
                return { y: -50 * speed };
              case "down":
                return { y: 50 * speed };
              case "left":
                return { x: -50 * speed };
              case "right":
                return { x: 50 * speed };
              default:
                return { y: -50 * speed };
            }
          };

          const xy = getXY();

          gsap.fromTo(
            sectionRef.current,
            {
              ...xy,
            },
            {
              y: 0,
              x: 0,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }, sectionRef.current);
      } catch (error) {
        console.warn("Parallax initialization failed:", error);
      }
    };

    initParallax();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

export default ParallaxSection;
