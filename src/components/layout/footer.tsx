"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

interface FooterProps {
  config: SiteConfig;
}

const FOOTER_LINKS = {
  "About": [
    { label: "About Us", href: "/about" },
    { label: "Chairman's Desk", href: "/about/chairman" },
    { label: "Principal's Desk", href: "/about/principal" },
    { label: "Management", href: "/about/management" },
  ],
  Departments: [
    { label: "Computer Science", href: "/academics/cse" },
    { label: "Information Technology", href: "/academics/it" },
    { label: "Electronics & Comm.", href: "/academics/ece" },
    { label: "Electrical Engineering", href: "/academics/ee" },
    { label: "Mechanical Engineering", href: "/academics/me" },
    { label: "Civil Engineering", href: "/academics/civil" },
    { label: "MCA", href: "/academics/mca" },
  ],
  "Quick Links": [
    { label: "Admissions", href: "/admissions" },
    { label: "Placements", href: "/placements" },
    { label: "Campus Life", href: "/campus" },
    { label: "Student Clubs", href: "/campus/clubs" },
    { label: "Photo Gallery", href: "/campus/galleries" },
    { label: "Video Gallery", href: "/campus/video-gallery" },
    { label: "News & Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Important Links": [
    { label: "Mandatory Disclosure", href: "https://www.mbscet.edu.in/mandatory-disclosure/" },
    { label: "AICTE Approvals", href: "https://www.mbscet.edu.in/acite_approvals" },
    { label: "Anti Ragging", href: "https://www.mbscet.edu.in/anti-ragging/" },
    { label: "Grievance Cell", href: "https://www.mbscet.edu.in/grievances-redressal-cell/" },
    { label: "Alumni Registration", href: "https://www.mbscet.edu.in/alumni-registration/" },
    { label: "Virtual Tour", href: "https://www.mbscet.edu.in/campus-virtual-tour/" },
    { label: "College Calendar", href: "https://www.mbscet.edu.in/college-calendar/" },
    { label: "College Magazine", href: "https://www.mbscet.edu.in/college-magazine/" },
    { label: "College Newsletter", href: "https://www.mbscet.edu.in/college-newsletter/" },
    { label: "National Digital Library", href: "https://www.mbscet.edu.in/national-digital-library/" },
    { label: "JGate Journals", href: "https://www.mbscet.edu.in/jgate/" },
    { label: "AICTE Suggested Books", href: "https://www.mbscet.edu.in/ict-books/" },
  ],
};

export function Footer({ config }: FooterProps) {
  return (
    <footer className="bg-[#00274C] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-xl font-bold tracking-tight text-[#FFCB05]">MBSCET</div>
              <div className="text-sm text-white/60 mt-1 leading-relaxed">
                Mahant Bachittar Singh College of<br />
                Engineering & Technology
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-6">
              Established in 1999 under the Sant Manjit Singh Trust, MBSCET is an AICTE approved, NBA accredited institution affiliated to the University of Jammu.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[10px] font-bold bg-[#FFCB05] text-[#00274C] px-2 py-1">NBA Accredited</span>
              <span className="text-[10px] font-bold border border-[#FFCB05]/50 text-[#FFCB05] px-2 py-1">AICTE Approved</span>
            </div>

            <div className="space-y-3">
              <a href={`tel:${config.phone.landline}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FFCB05] transition-colors">
                <FaPhone className="text-xs text-[#FFCB05] shrink-0" />
                {config.phone.landline} / {config.phone.principal}
              </a>
              <a href={`mailto:${config.email.principal}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FFCB05] transition-colors">
                <FaEnvelope className="text-xs text-[#FFCB05] shrink-0" />
                {config.email.principal}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <FaMapMarkerAlt className="text-xs text-[#FFCB05] mt-1 shrink-0" />
                <span>
                  {config.address.line1}, {config.address.line2},
                  <br />
                  {config.address.city} — {config.address.pincode}
                </span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold text-[#FFCB05] mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FFCB05]/20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} MBSCET. All rights reserved. Affiliated to University of Jammu.
            </div>

            <div className="flex items-center gap-3">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-[#FFCB05] text-[#00274C] hover:bg-white transition-all" aria-label="Facebook">
                  <FaFacebookF className="text-xs" />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-[#FFCB05] text-[#00274C] hover:bg-white transition-all" aria-label="Instagram">
                  <FaInstagram className="text-xs" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-[#FFCB05] text-[#00274C] hover:bg-white transition-all" aria-label="LinkedIn">
                  <FaLinkedinIn className="text-xs" />
                </a>
              )}
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="size-9 flex items-center justify-center bg-[#FFCB05] text-[#00274C] hover:bg-white transition-all"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
