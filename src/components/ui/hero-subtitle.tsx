"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";

// Register SplitText
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

interface HeroSubtitleProps {
  text: string;
  highlights?: Array<{
    word: string;
    action: "highlight" | "underline" | "box" | "circle" | "bracket";
    color?: string;
  }>;
  className?: string;
  delay?: number;
}

export function HeroSubtitle({
  text,
  highlights = [],
  className = "",
  delay = 0,
}: HeroSubtitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const annotationsRef = useRef<RoughAnnotation[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx: gsap.Context | null = null;
    let splitInstance: SplitText | null = null;

    // Wait for fonts to load
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        // Split text into characters and words
        splitInstance = new SplitText(containerRef.current, {
          type: "chars, words",
          charsClass: "hero-char",
          wordsClass: "hero-word",
        });

        // Animate characters
        gsap.from(splitInstance.chars, {
          duration: 0.6,
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
          stagger: 0.02,
          delay: delay,
          ease: "power3.out",
          onComplete: () => {
            // After animation, add highlights to specific words
            if (!containerRef.current) return;

            const words = containerRef.current.querySelectorAll(".hero-word");
            words.forEach((wordEl) => {
              const wordText = wordEl.textContent?.trim().toLowerCase();
              const highlight = highlights.find(
                (h) => h.word.toLowerCase() === wordText
              );

              if (highlight) {
                const annotation = annotate(wordEl as HTMLElement, {
                  type: highlight.action,
                  color: highlight.color || "#FFFFFF",
                  strokeWidth: 2,
                  animationDuration: 800,
                  iterations: 1,
                  padding: 4,
                });
                annotation.show();
                annotationsRef.current.push(annotation);
              }
            });
          },
        });
      });
    });

    // Cleanup
    return () => {
      ctx?.revert();
      splitInstance?.revert();
      annotationsRef.current.forEach((a) => a.remove());
      annotationsRef.current = [];
    };
  }, [text, highlights, delay]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-label={text}
    >
      {text}
    </div>
  );
}

export default HeroSubtitle;
