"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-5 z-40 size-11 flex items-center justify-center bg-[#00274C] text-white hover:bg-[#1E406B] transition-colors shadow-lg"
      aria-label="Back to top"
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}
