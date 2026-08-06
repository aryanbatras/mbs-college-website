"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Reset animation on route change
    if (prevPathname.current !== pathname) {
      setIsVisible(false);
      prevPathname.current = pathname;

      // Small delay then animate in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      // Initial load
      setIsVisible(true);
    }
  }, [pathname]);

  return (
    <div
      className="transition-opacity duration-200 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {children}
    </div>
  );
}

// Scroll to top on route change
export function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: "instant" });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}

export default PageTransition;
