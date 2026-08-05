"use client";

import { DotPattern } from "@/components/design-system/DotPattern";

export function SiteBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <DotPattern
        width={20}
        height={20}
        cr={1}
        className="text-[#00274C]/[0.03]"
      />
    </div>
  );
}
