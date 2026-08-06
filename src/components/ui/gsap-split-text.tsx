"use client";

import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  animateBy?: "chars" | "words" | "lines";
  animation?: "fadeUp" | "fadeIn" | "splitReveal" | "rotateIn";
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.02,
  duration = 0.8,
  animateBy = "chars",
  animation = "fadeUp",
  tag: Tag = "span",
  once = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated.current)) {
          setIsVisible(true);
          hasAnimated.current = true;
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [once]);

  // GSAP animation
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    let ctx: any = null;

    const animate = async () => {
      try {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const { SplitText } = await import("gsap/SplitText");

        gsap.registerPlugin(SplitText);

        if (!containerRef.current) return;

        ctx = gsap.context(() => {
          const splitType = animateBy === "lines" ? "lines" : animateBy;
          const split = new SplitText(containerRef.current, {
            type: splitType,
            charsClass: "split-char",
            wordsClass: "split-word",
            linesClass: "split-line",
          });

          const elements =
            animateBy === "chars"
              ? split.chars
              : animateBy === "words"
              ? split.words
              : split.lines;

          // Set initial styles based on animation type
          const fromStyles: Record<string, any> = {};
          const toStyles: Record<string, any> = {};

          switch (animation) {
            case "fadeUp":
              fromStyles.opacity = 0;
              fromStyles.y = 40;
              fromStyles.filter = "blur(4px)";
              toStyles.opacity = 1;
              toStyles.y = 0;
              toStyles.filter = "blur(0px)";
              break;
            case "fadeIn":
              fromStyles.opacity = 0;
              toStyles.opacity = 1;
              break;
            case "splitReveal":
              fromStyles.opacity = 0;
              fromStyles.y = 100;
              fromStyles.rotationX = -90;
              toStyles.opacity = 1;
              toStyles.y = 0;
              toStyles.rotationX = 0;
              break;
            case "rotateIn":
              fromStyles.opacity = 0;
              fromStyles.rotationY = 90;
              fromStyles.transformOrigin = "left center";
              toStyles.opacity = 1;
              toStyles.rotationY = 0;
              break;
          }

          gsap.fromTo(elements, fromStyles, {
            ...toStyles,
            duration,
            stagger,
            delay,
            ease: "power3.out",
          });
        }, containerRef.current);
      } catch (error) {
        console.warn("SplitText animation failed:", error);
      }
    };

    animate();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [isVisible, text, delay, stagger, duration, animateBy, animation]);

  return (
    <Tag
      ref={containerRef as any}
      className={className}
      aria-label={text}
    >
      {text}
    </Tag>
  );
}

export default SplitText;
