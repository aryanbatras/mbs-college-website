"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ScrollVelocityProps {
  items: string[];
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function ScrollVelocity({
  items,
  speed = 30,
  className = "",
  pauseOnHover = true,
}: ScrollVelocityProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate items for seamless loop
    const original = track.innerHTML;
    track.innerHTML = original + original;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: string | number) => {
          const val = typeof x === 'string' ? parseFloat(x) : x;
          return val % totalWidth;
        }),
      },
    });

    const handleMouseEnter = () => {
      if (pauseOnHover) {
        isPaused.current = true;
        tween.pause();
      }
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) {
        isPaused.current = false;
        tween.resume();
      }
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [items, speed, pauseOnHover]);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="inline-flex items-center gap-8 will-change-transform"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-gray-300"
          >
            <span className="w-2 h-2 bg-[#FFCB05] rounded-full shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ScrollVelocity;
