"use client";

import Image from "next/image";
import { FaIdBadge } from "react-icons/fa";

interface CollegeIdCardProps {
  className?: string;
}

export function CollegeIdCard({ className = "" }: CollegeIdCardProps) {
  return (
    <div className={`perspective-[1000px] ${className}`}>
      <div className="relative w-full max-w-[280px] mx-auto">
        {/* Lanyard strap */}
        <div className="flex justify-center mb-0">
          <div className="w-[3px] h-16 bg-gradient-to-b from-white/20 to-white/40 rounded-full" />
        </div>

        {/* ID Card */}
        <div className="relative bg-gradient-to-br from-[#00274C] via-[#00274C] to-[#1E406B] rounded-lg overflow-hidden shadow-2xl border border-white/10 hover:shadow-[0_20px_60px_-15px_rgba(255,203,5,0.3)] transition-shadow duration-500 group">
          {/* Yellow top accent */}
          <div className="h-1.5 bg-gradient-to-r from-[#FFCB05] via-[#FFC107] to-[#FFCB05]" />

          {/* Card content */}
          <div className="p-5 text-center">
            {/* Logo */}
            <div className="relative w-16 h-16 mx-auto mb-3">
              <Image
                src="/logo.png"
                alt="MBSCET Logo"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* College Name */}
            <h4 className="text-[10px] font-bold text-[#FFCB05] tracking-[0.15em] uppercase leading-tight mb-0.5">
              Mahant Bachittar Singh
            </h4>
            <h5 className="text-[9px] font-semibold text-white/80 tracking-[0.1em] uppercase leading-tight mb-3">
              College of Engineering & Technology
            </h5>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#FFCB05]/40 to-transparent mb-3" />

            {/* Details */}
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2">
                <FaIdBadge className="text-[10px] text-[#FFCB05]/60 shrink-0" />
                <div>
                  <p className="text-[8px] text-white/40 uppercase tracking-wider">Est.</p>
                  <p className="text-[11px] text-white font-semibold">1999</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[10px] text-[#FFCB05]/60">📍</div>
                <div>
                  <p className="text-[8px] text-white/40 uppercase tracking-wider">Location</p>
                  <p className="text-[10px] text-white/80 font-medium">Babliana, Jammu</p>
                </div>
              </div>
            </div>

            {/* Accreditations */}
            <div className="flex gap-1.5 mt-3 justify-center">
              <span className="text-[7px] font-bold bg-[#FFCB05] text-[#00274C] px-1.5 py-0.5 rounded-sm">
                NBA
              </span>
              <span className="text-[7px] font-bold bg-white/10 text-white/80 px-1.5 py-0.5 rounded-sm">
                AICTE
              </span>
              <span className="text-[7px] font-bold bg-white/10 text-white/80 px-1.5 py-0.5 rounded-sm">
                JU
              </span>
            </div>
          </div>

          {/* Yellow bottom accent */}
          <div className="h-1 bg-gradient-to-r from-[#FFCB05] via-[#FFC107] to-[#FFCB05]" />
        </div>

        {/* Subtle glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-b from-[#FFCB05]/5 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}

export default CollegeIdCard;
