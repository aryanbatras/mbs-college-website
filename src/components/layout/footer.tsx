"use client";

import { Component, type ReactNode, useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaChevronDown,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBuilding,
  FaNewspaper,
  FaBookOpen,
  FaUsers,
  FaCog,
} from "react-icons/fa";
import { CollegeIdCard } from "@/components/ui/college-id-card";
import type { SiteConfig } from "@/lib/content";

// Error boundary for heavy 3D components
class LanyardErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

// Dynamically import Lanyard
const Lanyard = dynamic(() => import("@/components/ui/lanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] flex items-center justify-center text-white/20 text-sm">
      Loading 3D card...
    </div>
  ),
});

interface FooterProps {
  config: SiteConfig;
}

// Quick links for mobile (most important pages)
const MOBILE_QUICK_LINKS = [
  { label: "Admissions", href: "/admissions", icon: FaGraduationCap },
  { label: "Placements", href: "/placements", icon: FaBuilding },
  { label: "News", href: "/news", icon: FaNewspaper },
  { label: "Contact", href: "/contact", icon: FaPhone },
];

const FOOTER_SECTIONS = [
  {
    title: "About",
    icon: FaUsers,
    links: [
      { label: "About Us", href: "/about" },
      { label: "Chairman's Desk", href: "/about/chairman" },
      { label: "Principal's Desk", href: "/about/principal" },
      { label: "Management", href: "/about/management" },
    ],
  },
  {
    title: "Departments",
    icon: FaBookOpen,
    links: [
      { label: "Computer Science", href: "/academics/cse" },
      { label: "Information Technology", href: "/academics/it" },
      { label: "Electronics & Comm.", href: "/academics/ece" },
      { label: "Electrical Engineering", href: "/academics/ee" },
      { label: "Mechanical Engineering", href: "/academics/me" },
      { label: "Civil Engineering", href: "/academics/civil" },
      { label: "MCA", href: "/academics/mca" },
    ],
  },
  {
    title: "Quick Links",
    icon: FaExternalLinkAlt,
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Placements", href: "/placements" },
      { label: "Campus Life", href: "/campus" },
      { label: "Student Clubs", href: "/campus/clubs" },
      { label: "Photo Gallery", href: "/campus/galleries" },
      { label: "Video Gallery", href: "/campus/video-gallery" },
      { label: "News & Events", href: "/news" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Important Links",
    icon: FaCog,
    links: [
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
  },
];

// Collapsible section component
function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 px-5 text-left min-h-[52px] hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <Icon className="text-[#FFCB05] text-sm" />
          <span className="text-sm font-semibold text-white">{title}</span>
        </div>
        <FaChevronDown
          className={`text-xs text-white/40 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-4 px-5">{children}</div>
      </div>
    </div>
  );
}

export function Footer({ config }: FooterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const lanyardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (lanyardRef.current) {
      observer.observe(lanyardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[#00274C] text-white" role="contentinfo">
      {/* Mobile Quick Links Bar - visible only on mobile */}
      <div className="lg:hidden border-b border-white/10">
        <div className="grid grid-cols-4 gap-0">
          {MOBILE_QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center gap-2 py-4 px-2 text-center hover:bg-white/5 active:bg-white/10 transition-colors min-h-[64px]"
              >
                <Icon className="text-[#FFCB05] text-lg" />
                <span className="text-[10px] font-medium text-white/70 leading-tight">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Desktop: Grid layout / Mobile: Brand + ID card */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="text-xl font-bold tracking-tight text-[#FFCB05]">
                MBSCET
              </div>
              <div className="text-sm text-white/60 mt-1 leading-relaxed">
                Mahant Bachittar Singh College of
                <br />
                Engineering & Technology
              </div>
            </div>

            {/* Lanyard 3D Card - shown on all screen sizes */}
            <div ref={lanyardRef} className="mb-6">
              <LanyardErrorBoundary
                fallback={
                  <div className="mb-6">
                    <CollegeIdCard />
                  </div>
                }
              >
                <Lanyard
                  position={[0, 0, 24]}
                  gravity={[0, -40, 0]}
                  frontImage="/logo.png"
                  bandColor="#00274C"
                  animate={isVisible}
                />
              </LanyardErrorBoundary>
            </div>

            {/* Contact info - always visible */}
            <div className="space-y-3">
              <a
                href={`tel:${config.phone.landline}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FFCB05] transition-colors min-h-[44px]"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
                  <FaPhone className="text-xs text-[#FFCB05]" />
                </div>
                <span>{config.phone.landline} / {config.phone.principal}</span>
              </a>
              <a
                href={`mailto:${config.email.principal}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FFCB05] transition-colors min-h-[44px]"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
                  <FaEnvelope className="text-xs text-[#FFCB05]" />
                </div>
                <span className="truncate">{config.email.principal}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
                  <FaMapMarkerAlt className="text-xs text-[#FFCB05]" />
                </div>
                <span>
                  {config.address.line1}, {config.address.line2},
                  <br />
                  {config.address.city} — {config.address.pincode}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop: Link columns / Mobile: Collapsible sections */}
          <div className="lg:col-span-4">
            {/* Desktop view */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-8">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-bold text-[#FFCB05] mb-4 flex items-center gap-2">
                    <section.icon className="text-xs" />
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
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

            {/* Mobile view - collapsible accordion */}
            <div className="lg:hidden -mx-5">
              {FOOTER_SECTIONS.map((section, index) => (
                <CollapsibleSection
                  key={section.title}
                  title={section.title}
                  icon={section.icon}
                  defaultOpen={index === 2} // Quick Links open by default
                >
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center py-2.5 px-3 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors min-h-[44px]"
                        >
                          {link.label}
                          {link.href.startsWith("http") && (
                            <FaExternalLinkAlt className="ml-2 text-[8px] text-white/30" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-xs text-white/40 text-center sm:text-left">
              &copy; {new Date().getFullYear()} MBSCET. All rights reserved.
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> · </span>
              Affiliated to University of Jammu.
            </div>

            {/* Social + Back to top */}
            <div className="flex items-center gap-3">
              {/* Social icons */}
              <div className="flex items-center gap-2">
                {config.social.facebook && (
                  <a
                    href={config.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 flex items-center justify-center bg-[#FFCB05]/20 text-[#FFCB05] hover:bg-[#FFCB05]/30 transition-all rounded-lg"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                )}
                {config.social.instagram && (
                  <a
                    href={config.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 flex items-center justify-center bg-[#FFCB05]/20 text-[#FFCB05] hover:bg-[#FFCB05]/30 transition-all rounded-lg"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
                )}
                {config.social.linkedin && (
                  <a
                    href={config.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 flex items-center justify-center bg-[#FFCB05]/20 text-[#FFCB05] hover:bg-[#FFCB05]/30 transition-all rounded-lg"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                )}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-white/10" />

              {/* Back to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="size-10 flex items-center justify-center bg-[#FFCB05] text-[#00274C] hover:bg-[#FFC107] transition-all rounded-lg"
                aria-label="Back to top"
              >
                <FaArrowUp className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
