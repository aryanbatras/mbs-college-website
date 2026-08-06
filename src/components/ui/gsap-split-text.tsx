"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

interface GsapSplitTextProps {
  text: string;
  className?: string;
  animateBy?: "chars" | "words" | "lines";
  delay?: number;
  duration?: number;
  stagger?: number;
  from?: {
    opacity?: number;
    y?: number;
    rotateX?: number;
    filter?: string;
  };
  ease?: string;
  onComplete?: () => void;
}

export function GsapSplitText({
  text,
  className = "",
  animateBy = "chars",
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
  from = { opacity: 0, y: 50, rotateX: -90, filter: "blur(10px)" },
  ease = "back.out(1.7)",
  onComplete,
}: GsapSplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx: gsap.Context | null = null;

    // Wait for fonts to load before splitting
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        // Create SplitText instance
        splitRef.current = new SplitText(containerRef.current, {
          type: animateBy,
          charsClass: "split-char",
          wordsClass: "split-word",
          linesClass: "split-line",
        });

        // Get the elements to animate
        const elements =
          animateBy === "chars"
            ? splitRef.current.chars
            : animateBy === "words"
            ? splitRef.current.words
            : splitRef.current.lines;

        // Animate
        gsap.from(elements, {
          ...from,
          duration,
          stagger,
          delay,
          ease,
          onComplete,
        });
      });
    });

    // Cleanup
    return () => {
      ctx?.revert();
      splitRef.current?.revert();
    };
  }, [text, animateBy, delay, duration, stagger, from, ease, onComplete]);

  return (
    <div ref={containerRef} className={className}>
      {text}
    </div>
  );
}

export default GsapSplitText;
