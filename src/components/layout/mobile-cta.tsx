"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-ink/10 px-4 py-3 safe-area-inset-bottom">
      <div className="flex gap-3">
        <Link
          href="/admissions"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-accent text-white hover:bg-accent-strong transition-colors"
        >
          Apply Now
          <ArrowRight className="size-4" />
        </Link>
        <a
          href="tel:+911912476227"
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-navy text-white hover:bg-navy-light transition-colors"
        >
          <Phone className="size-4" />
          Call
        </a>
      </div>
    </div>
  );
}
