"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "College Administration", href: "/about/management" },
      { label: "Chairman's Desk", href: "/about/chairman" },
      { label: "Principal's Desk", href: "/about/principal" },
    ],
  },
  {
    label: "Departments",
    href: "/academics",
    children: [
      { label: "Computer Science & Engg.", href: "/academics/cse", badge: "NBA" },
      { label: "Information Technology", href: "/academics/it" },
      { label: "Electronics & Communication", href: "/academics/ece" },
      { label: "Electrical Engineering", href: "/academics/ee", badge: "NBA" },
      { label: "Mechanical Engineering", href: "/academics/me", badge: "NBA" },
      { label: "Civil Engineering", href: "/academics/civil" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  {
    label: "Campus",
    href: "/campus",
    children: [
      { label: "Campus Facilities", href: "/campus" },
      { label: "Student Clubs", href: "/campus/clubs" },
      { label: "Photo Gallery", href: "/campus/galleries" },
      { label: "Video Gallery", href: "/campus/video-gallery" },
      { label: "Virtual Tour", href: "/campus/virtual-tour" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  config: SiteConfig;
}

export function Header({ config }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const scrollY = useRef(0);

  // Track scroll position for header background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open (proper method)
  useEffect(() => {
    if (mobileOpen) {
      scrollY.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY.current);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setExpandedItem(null);
  }, []);

  const toggleExpand = useCallback((label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  }, []);

  return (
    <>
      {/* Fixed header - glass/translucent */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#00274C]/90 backdrop-blur-lg shadow-lg"
            : "bg-black/30 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
          {/* Logo + Text */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            onClick={closeMobile}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="MBSCET"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold text-white tracking-tight leading-tight">
                MBSCET
              </span>
              <span className="text-[10px] md:text-xs text-white/50 leading-tight">
                Est. 1999
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setDesktopDropdown(item.label)
                }
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <FaChevronDown className="text-[8px] text-white/40" />
                  )}
                </Link>
                {item.children && desktopDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-white/95 backdrop-blur-md shadow-xl border border-white/20 py-1 min-w-[260px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:text-[#00274C] hover:bg-gray-50 transition-colors"
                        >
                          <span>{child.label}</span>
                          {child.badge && (
                            <span className="text-[9px] font-bold bg-[#FFCB05] text-[#00274C] px-1.5 py-0.5 rounded-sm">
                              {child.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold text-[#00274C] bg-[#FFCB05] hover:bg-[#FFC107] transition-colors rounded-sm"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu - fullscreen slide-in */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
        />

        {/* Menu panel - slides from right */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 bg-[#00274C]">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.png"
                  alt="MBSCET"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white">MBSCET</div>
                <div className="text-[10px] text-white/50">Est. 1999</div>
              </div>
            </div>
            <button
              onClick={closeMobile}
              className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Scrollable nav content */}
          <div className="overflow-y-auto h-[calc(100vh-64px)] pb-20">
            <nav className="py-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className="flex w-full items-center justify-between px-5 py-4 text-[15px] font-semibold text-[#00274C] hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[48px]"
                      >
                        <span>{item.label}</span>
                        <FaChevronRight
                          className={`text-xs text-gray-400 transition-transform duration-200 ${
                            expandedItem === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {/* Submenu with smooth height animation */}
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          expandedItem === item.label
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-5 border-l-2 border-[#FFCB05]/30 ml-5 mb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMobile}
                              className="flex items-center justify-between py-3 px-4 text-sm text-gray-600 hover:text-[#00274C] hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[44px] rounded-lg"
                            >
                              <span>{child.label}</span>
                              {child.badge && (
                                <span className="text-[9px] font-bold bg-[#FFCB05] text-[#00274C] px-2 py-0.5 rounded-sm">
                                  {child.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className="flex items-center px-5 py-4 text-[15px] font-semibold text-[#00274C] hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[48px]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact section at bottom */}
            <div className="mx-5 mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Contact
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${config.phone.landline}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#00274C] transition-colors min-h-[44px]"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#00274C]/10 rounded-lg shrink-0">
                    <FaPhone className="text-xs text-[#00274C]" />
                  </div>
                  <span>{config.phone.landline}</span>
                </a>
                <a
                  href={`mailto:${config.email.principal}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#00274C] transition-colors min-h-[44px]"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#00274C]/10 rounded-lg shrink-0">
                    <FaEnvelope className="text-xs text-[#00274C]" />
                  </div>
                  <span className="truncate">{config.email.principal}</span>
                </a>
              </div>
            </div>

            {/* External links */}
            <div className="mx-5 mt-3">
              <a
                href="https://www.mbscet.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#00274C] bg-[#FFCB05] hover:bg-[#FFC107] active:bg-[#FFC107] transition-colors rounded-lg min-h-[48px]"
              >
                Visit Official Website
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
