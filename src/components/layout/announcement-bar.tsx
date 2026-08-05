"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaBullhorn } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

interface AnnouncementBarProps {
  config: SiteConfig;
}

export function AnnouncementBar({ config }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNotice, setCurrentNotice] = useState(0);

  const notices = [
    config.noticeBar,
    "Campus visits welcome Monday to Saturday, 9:00 AM — 4:00 PM",
    "For admission inquiries, call: " + config.phone.inquiry[0],
  ];

  useEffect(() => {
    if (notices.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentNotice((prev) => (prev + 1) % notices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [notices.length]);

  if (!isVisible) return null;

  return (
    <div className="bg-[#FFCB05] text-[#00274C] relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-2">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <FaBullhorn className="text-[#00274C] text-xs shrink-0" />
          <span className="text-xs font-bold text-[#00274C] truncate">
            {notices[currentNotice]}
          </span>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-[#00274C]/50 hover:text-[#00274C] transition-colors ml-4 shrink-0"
          aria-label="Dismiss announcement"
        >
          <FaTimes className="text-xs" />
        </button>
      </div>
    </div>
  );
}
