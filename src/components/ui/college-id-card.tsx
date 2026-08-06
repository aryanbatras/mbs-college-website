"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  FaIdBadge,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

interface CollegeIdCardProps {
  className?: string;
}

export function CollegeIdCard({ className = "" }: CollegeIdCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -8,
      y: (x - 0.5) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className={`perspective-[1000px] ${className}`}>
      <div className="relative w-full max-w-[280px] mx-auto">
        {/* Lanyard strap */}
        <div className="flex justify-center mb-0 origin-top">
          <div
            className="w-[3px] h-16 bg-gradient-to-b from-white/20 to-white/40 rounded-full origin-top"
            style={{
              animation: "lanyard-swing 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* Flip hint */}
        <div className="text-center mb-2">
          <span className="text-[10px] text-white/30 flex items-center justify-center gap-1">
            <FaArrowRight className="text-[8px]" />
            Click to flip
          </span>
        </div>

        {/* Card container with flip */}
        <div
          ref={cardRef}
          className="relative w-full cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped
              ? "rotateY(180deg)"
              : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isFlipped
              ? "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
              : isHovered
              ? "transform 0.1s ease-out"
              : "transform 0.5s ease-out",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={handleFlip}
          role="button"
          aria-label={isFlipped ? "Flip to front" : "Flip to back"}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleFlip();
            }
          }}
        >
          {/* Front Face */}
          <div
            className="w-full rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(255,203,5,0.25)] transition-shadow duration-500 border border-white/10"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative bg-gradient-to-br from-[#00274C] via-[#00274C] to-[#1E406B] rounded-xl overflow-hidden">
              {/* Yellow top accent */}
              <div className="h-1.5 bg-gradient-to-r from-[#FFCB05] via-[#FFC107] to-[#FFCB05]" />

              {/* Card content */}
              <div className="p-5 text-center relative z-10">
                {/* Logo */}
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

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#FFCB05]/40 to-transparent mb-3" />

                {/* Details */}
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center gap-2">
                    <FaIdBadge className="text-[10px] text-[#FFCB05]/60 shrink-0" />
                    <div>
                      <p className="text-[8px] text-white/40 uppercase tracking-wider">
                        Est.
                      </p>
                      <p className="text-[11px] text-white font-semibold">
                        1999
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] text-[#FFCB05]/60">📍</div>
                    <div>
                      <p className="text-[8px] text-white/40 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-[10px] text-white/80 font-medium">
                        Babliana, Jammu
                      </p>
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
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 w-full rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] border border-white/10"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="relative bg-gradient-to-br from-[#1E406B] via-[#00274C] to-[#00274C] rounded-xl overflow-hidden h-full">
              {/* Yellow top accent */}
              <div className="h-1.5 bg-gradient-to-r from-[#FFCB05] via-[#FFC107] to-[#FFCB05]" />

              {/* Back content */}
              <div className="p-5 text-left">
                <h4 className="text-[10px] font-bold text-[#FFCB05] tracking-[0.15em] uppercase mb-4">
                  Contact Information
                </h4>

                <div className="space-y-3">
                  <a
                    href="tel:01912970136"
                    className="flex items-center gap-2 text-white/70 hover:text-[#FFCB05] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded shrink-0">
                      <FaPhone className="text-[8px] text-[#FFCB05]" />
                    </div>
                    <span className="text-[10px]">0191-2970136</span>
                  </a>

                  <a
                    href="tel:9419130136"
                    className="flex items-center gap-2 text-white/70 hover:text-[#FFCB05] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded shrink-0">
                      <FaPhone className="text-[8px] text-[#FFCB05]" />
                    </div>
                    <span className="text-[10px]">9419130136 (Principal)</span>
                  </a>

                  <a
                    href="mailto:info@mbscet.edu.in"
                    className="flex items-center gap-2 text-white/70 hover:text-[#FFCB05] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded shrink-0">
                      <FaEnvelope className="text-[8px] text-[#FFCB05]" />
                    </div>
                    <span className="text-[10px] truncate">info@mbscet.edu.in</span>
                  </a>

                  <a
                    href="https://www.mbscet.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-[#FFCB05] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded shrink-0">
                      <FaGlobe className="text-[8px] text-[#FFCB05]" />
                    </div>
                    <span className="text-[10px]">www.mbscet.edu.in</span>
                  </a>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[#FFCB05]/30 to-transparent my-4" />

                {/* Programs */}
                <h4 className="text-[9px] font-bold text-white/50 uppercase tracking-wider mb-2">
                  Programs Offered
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["CSE", "IT", "ECE", "EE", "ME", "Civil", "MCA"].map(
                    (prog) => (
                      <span
                        key={prog}
                        className="text-[7px] font-bold bg-white/10 text-white/70 px-1.5 py-0.5 rounded-sm"
                      >
                        {prog}
                      </span>
                    )
                  )}
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[#FFCB05]/30 to-transparent my-4" />

                {/* Address */}
                <div className="text-[9px] text-white/40 leading-relaxed">
                  <p>Babliana, Jammu</p>
                  <p>Jammu & Kashmir — 180015</p>
                  <p>India</p>
                </div>
              </div>

              {/* Yellow bottom accent */}
              <div className="h-1 bg-gradient-to-r from-[#FFCB05] via-[#FFC107] to-[#FFCB05] absolute bottom-0 left-0 right-0" />
            </div>
          </div>
        </div>

        {/* Ambient glow effect */}
        <div
          className="absolute -inset-6 rounded-2xl pointer-events-none transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,203,5,0.08) 0%, transparent 70%)",
            opacity: isHovered ? 1 : 0,
            filter: "blur(20px)",
          }}
        />

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes lanyard-swing {
            0%,
            100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(0.5deg);
            }
            75% {
              transform: rotate(-0.5deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default CollegeIdCard;
