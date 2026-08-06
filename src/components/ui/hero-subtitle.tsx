"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

// Register SplitText
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

interface HeroSubtitleProps {
  text: string;
  className?: string;
  delay?: number;
}

export function HeroSubtitle({
  text,
  className = "",
  delay = 0,
}: HeroSubtitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx: gsap.Context | null = null;
    let splitInstance: SplitText | null = null;

    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        splitInstance = new SplitText(containerRef.current, {
          type: "chars, words",
          charsClass: "hero-char",
          wordsClass: "hero-word",
        });

        gsap.from(splitInstance.chars, {
          duration: 0.6,
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
          stagger: 0.02,
          delay: delay,
          ease: "power3.out",
        });
      });
    });

    return () => {
      ctx?.revert();
      splitInstance?.revert();
    };
  }, [delay]); // Only depends on delay, not text/highlights

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
