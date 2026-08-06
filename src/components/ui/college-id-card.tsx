"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaIdBadge } from "react-icons/fa";

interface CollegeIdCardProps {
  className?: string;
}

export function CollegeIdCard({ className = "" }: CollegeIdCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -8, // Subtle tilt up/down
      y: (x - 0.5) * 8,  // Subtle tilt left/right
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className={`perspective-[1000px] ${className}`}>
      <div className="relative w-full max-w-[280px] mx-auto">
        {/* Lanyard strap with subtle swing */}
        <div className="flex justify-center mb-0 origin-top">
          <div
            className="w-[3px] h-16 bg-gradient-to-b from-white/20 to-white/40 rounded-full origin-top"
            style={{
              animation: "lanyard-swing 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* ID Card with 3D tilt */}
        <div
          ref={cardRef}
          className="relative rounded-xl overflow-hidden cursor-pointer"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isHovered
              ? "transform 0.1s ease-out"
              : "transform 0.5s ease-out",
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Card background with gradient */}
          <div className="relative bg-gradient-to-br from-[#00274C] via-[#00274C] to-[#1E406B] rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(255,203,5,0.25)] transition-shadow duration-500 border border-white/10">
            {/* Shimmer effect on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: isHovered ? "shimmer 2s ease-in-out infinite" : "none",
              }}
            />

            {/* Yellow top accent */}
            <div className="h-1.5 bg-gradient-to-r from-[#FFCB05] via-[#FFC107] to-[#FFCB05]" />

            {/* Card content */}
            <div className="p-5 text-center relative z-10">
              {/* Logo with hover scale */}
              <div className="relative w-16 h-16 mx-auto mb-3 transition-transform duration-500 hover:scale-110">
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

              {/* Divider with animated width on hover */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#FFCB05]/40 to-transparent mb-3 transition-all duration-500 group-hover:via-[#FFCB05]/60" />

              {/* Details */}
              <div className="space-y-1.5 text-left">
                <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                  <FaIdBadge className="text-[10px] text-[#FFCB05]/60 shrink-0" />
                  <div>
                    <p className="text-[8px] text-white/40 uppercase tracking-wider">Est.</p>
                    <p className="text-[11px] text-white font-semibold">1999</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                  <div className="text-[10px] text-[#FFCB05]/60">📍</div>
                  <div>
                    <p className="text-[8px] text-white/40 uppercase tracking-wider">Location</p>
                    <p className="text-[10px] text-white/80 font-medium">Babliana, Jammu</p>
                  </div>
                </div>
              </div>

              {/* Accreditations with stagger animation */}
              <div className="flex gap-1.5 mt-3 justify-center">
                <span className="text-[7px] font-bold bg-[#FFCB05] text-[#00274C] px-1.5 py-0.5 rounded-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_8px_rgba(255,203,5,0.5)]">
                  NBA
                </span>
                <span className="text-[7px] font-bold bg-white/10 text-white/80 px-1.5 py-0.5 rounded-sm transition-all duration-300 hover:scale-110 hover:bg-white/20">
                  AICTE
                </span>
                <span className="text-[7px] font-bold bg-white/10 text-white/80 px-1.5 py-0.5 rounded-sm transition-all duration-300 hover:scale-110 hover:bg-white/20">
                  JU
                </span>
              </div>
            </div>

            {/* Yellow bottom accent */}
            <div className="h-1 bg-gradient-to-r from-[#FFCB05] via-[#FFC107] to-[#FFCB05]" />
          </div>
        </div>

        {/* Ambient glow effect */}
        <div
          className="absolute -inset-6 rounded-2xl pointer-events-none transition-opacity duration-700"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,203,5,0.08) 0%, transparent 70%)",
            opacity: isHovered ? 1 : 0,
            filter: "blur(20px)",
          }}
        />

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes lanyard-swing {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(0.5deg); }
            75% { transform: rotate(-0.5deg); }
          }
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    </div>
  );
}

export default CollegeIdCard;
