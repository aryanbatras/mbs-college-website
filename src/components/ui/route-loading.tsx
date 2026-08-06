"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export function RouteLoadingIndicator() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Detect route changes
  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [pathname]);

  // Complete loading
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 200);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-[#FFCB05] via-[#FFC107] to-[#FFCB05] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px rgba(255, 203, 5, 0.5)",
        }}
      />
    </div>
  );
}

export default RouteLoadingIndicator;
