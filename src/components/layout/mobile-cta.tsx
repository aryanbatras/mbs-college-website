"use client";

import Link from "next/link";
import { FaPhone, FaArrowRight } from "react-icons/fa";

export function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFCB05] border-t border-[#00274C]/20 px-4 py-3 safe-area-inset-bottom">
      <div className="flex gap-3">
        <Link
          href="/admissions"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold bg-[#00274C] text-[#FFCB05] hover:bg-[#1E406B] transition-colors"
        >
          Apply Now
          <FaArrowRight className="text-xs" />
        </Link>
        <a
          href="tel:+911912476227"
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold bg-[#00274C] text-[#FFCB05] hover:bg-[#1E406B] transition-colors"
        >
          <FaPhone className="text-xs" />
          Call
        </a>
      </div>
    </div>
  );
}
