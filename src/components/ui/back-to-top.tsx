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
      className="fixed bottom-20 right-5 z-40 size-11 flex items-center justify-center bg-[#FFCB05] text-[#00274C] hover:bg-[#00274C] hover:text-[#FFCB05] transition-colors shadow-lg"
      aria-label="Back to top"
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}
