"use client";

import { DotPattern } from "@/components/design-system/DotPattern";

export function SiteBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Blue dot pattern */}
      <DotPattern
        width={20}
        height={20}
        cr={1}
        className="text-[#00274C]/[0.04]"
      />
      {/* Yellow accent dots */}
      <DotPattern
        width={80}
        height={80}
        cr={2}
        className="text-[#FFCB05]/[0.06]"
      />
    </div>
  );
}
