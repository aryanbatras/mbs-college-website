"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
      { label: "Advisor's Desk", href: "/about/chairman" },
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
      { label: "Applied Science & Humanities", href: "/academics" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Placement",
    href: "/placements",
    children: [
      { label: "Placement Cell", href: "/placements" },
      { label: "Placement Record", href: "/placements#records" },
      { label: "Training Activities", href: "/placements#training" },
    ],
  },
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
  transparent?: boolean;
}

export function Header({ config, transparent = false }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For non-transparent pages, always show white background
  const isScrolled = transparent ? scrolled : true;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      role="banner"
    >
      <nav aria-label="Main navigation">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="MBSCET - Home">
            <div className="relative size-11 overflow-hidden">
              <Image
                src="/logo.png"
                alt="MBSCET Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="sm:block">
              <div className="text-sm font-bold tracking-tight leading-tight text-[#00274C]">
                MBSCET
              </div>
              <div className="text-[10px] leading-tight mt-0.5 text-[#5C6370]">
                Est. {config.established} &middot; Jammu
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5" role="menubar">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                role="none"
              >
                <Link
                  href={item.href}
                  role="menuitem"
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={item.children ? openDropdown === item.label : undefined}
                  className="flex items-center gap-1 px-3 py-2.5 text-[13px] font-medium text-[#5C6370] hover:text-[#00274C] transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <FaChevronDown
                      className={`text-[8px] text-[#9CA3AF] transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50" role="menu">
                    <div className="min-w-[240px] bg-white shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          role="menuitem"
                          className="flex items-center justify-between px-5 py-2.5 text-[13px] text-[#5C6370] hover:text-[#00274C] hover:bg-gray-50 transition-colors"
                        >
                          <span>{child.label}</span>
                          {"badge" in child && child.badge && (
                            <span className="text-[9px] font-bold bg-[#00274C] text-white px-1.5 py-0.5">
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

          {/* Desktop CTA + mobile trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-[13px] font-bold bg-[#00274C] text-white hover:bg-[#1E406B] transition-all"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center size-10 text-[#00274C]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 z-40 bg-white overflow-y-auto">
          <div className="px-5 py-6">
            {/* Mobile header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                <div className="relative size-10 overflow-hidden">
                  <Image src="/logo.png" alt="MBSCET Logo" fill className="object-contain" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#00274C]">MBSCET</span>
                  <span className="block text-[10px] text-[#5C6370]">Est. {config.established} &middot; Jammu</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="size-10 flex items-center justify-center text-[#00274C]"
                aria-label="Close menu"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between py-4 text-[15px] font-bold text-[#00274C] border-b border-[#E5E7EB]"
                      >
                        {item.label}
                        <FaChevronDown
                          className={`text-[10px] text-[#9CA3AF] transition-transform ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="pl-4 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center justify-between py-3 text-[14px] text-[#5C6370] hover:text-[#00274C]"
                            >
                              <span>{child.label}</span>
                              {"badge" in child && child.badge && (
                                <span className="text-[9px] font-bold bg-[#00274C] text-white px-1.5 py-0.5">
                                  {child.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-[15px] font-bold text-[#00274C] border-b border-[#E5E7EB]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact info */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
              <p className="text-xs font-bold text-[#00274C] mb-3">Contact</p>
              <div className="space-y-2 text-sm text-[#5C6370]">
                <p>Landline: {config.phone.landline}</p>
                <p>Principal: {config.phone.principal}</p>
                <p>Email: {config.email.principal}</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[#5C6370] hover:text-[#00274C] transition-colors" aria-label="Facebook">
                  <FaFacebookF className="text-lg" />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[#5C6370] hover:text-[#00274C] transition-colors" aria-label="Instagram">
                  <FaInstagram className="text-lg" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#5C6370] hover:text-[#00274C] transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn className="text-lg" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
