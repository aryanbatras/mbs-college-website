"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  showArrows?: boolean;
  snap?: boolean;
}

export function HorizontalScroll({
  children,
  className = "",
  showArrows = true,
  snap = true,
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto scrollbar-hide ${
          snap ? "snap-x snap-mandatory" : ""
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      {/* Navigation arrows — desktop only */}
      {showArrows && (
        <>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 size-10 flex items-center justify-center bg-white shadow-lg text-ink hover:bg-ink hover:text-paper transition-colors z-10 hidden md:flex"
              aria-label="Scroll left"
            >
              <ChevronLeft className="size-5" />
            </motion.button>
          )}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 size-10 flex items-center justify-center bg-white shadow-lg text-ink hover:bg-ink hover:text-paper transition-colors z-10 hidden md:flex"
              aria-label="Scroll right"
            >
              <ChevronRight className="size-5" />
            </motion.button>
          )}
        </>
      )}

      {/* Fade edges on mobile */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-paper to-transparent pointer-events-none md:hidden" />
      )}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-paper to-transparent pointer-events-none md:hidden" />
      )}
    </div>
  );
}
