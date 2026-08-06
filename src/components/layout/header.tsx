"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope } from "react-icons/fa";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setExpandedItem(null);
  }, []);

  const toggleExpand = useCallback((label: string) => {
    setExpandedItem(prev => prev === label ? null : label);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="bg-[#00274C] text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${config.phone.landline}`} className="flex items-center gap-1.5 hover:text-[#FFCB05] transition-colors">
              <FaPhone className="text-[10px]" />
              <span>{config.phone.landline}</span>
            </a>
            <a href={`mailto:${config.email.principal}`} className="flex items-center gap-1.5 hover:text-[#FFCB05] transition-colors">
              <FaEnvelope className="text-[10px]" />
              <span>{config.email.principal}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">AICTE Approved &middot; NBA Accredited</span>
          </div>
        </div>
      </div>

      {/* Fixed header bar */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={closeMobile}>
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="MBSCET" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-[#00274C] tracking-tight">MBSCET</div>
              <div className="text-[10px] text-gray-500">Est. 1999</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setDesktopDropdown(item.label)}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-[#00274C] transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <FaChevronDown className="text-[8px] text-gray-400" />
                  )}
                </Link>
                {item.children && desktopDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-white shadow-lg border border-gray-100 py-1 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 hover:text-[#00274C] hover:bg-gray-50 transition-colors"
                        >
                          <span>{child.label}</span>
                          {child.badge && (
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

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold text-[#00274C] bg-[#FFCB05] hover:bg-[#FFC107] transition-colors"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#00274C]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20" onClick={closeMobile} />
          
          {/* Menu panel */}
          <div className="absolute top-[calc(1.5rem+4rem)] left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <div className="p-4">
              {/* Logo in mobile menu */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="relative w-10 h-10">
                  <Image src="/logo.png" alt="MBSCET" fill className="object-contain" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#00274C]">MBSCET</div>
                  <div className="text-[10px] text-gray-500">Est. 1999 &middot; Jammu</div>
                </div>
              </div>

              {/* Nav items */}
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleExpand(item.label)}
                          className="flex w-full items-center justify-between py-3 text-[15px] font-semibold text-[#00274C] border-b border-gray-100"
                        >
                          {item.label}
                          <FaChevronDown
                            className={`text-[10px] text-gray-400 transition-transform ${
                              expandedItem === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {expandedItem === item.label && (
                          <div className="pl-4 pb-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={closeMobile}
                                className="flex items-center justify-between py-2.5 text-sm text-gray-600 hover:text-[#00274C]"
                              >
                                <span>{child.label}</span>
                                {child.badge && (
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
                        onClick={closeMobile}
                        className="block py-3 text-[15px] font-semibold text-[#00274C] border-b border-gray-100"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact info */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 mb-2">Contact</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Landline: {config.phone.landline}</p>
                  <p>Principal: {config.phone.principal}</p>
                  <p>Email: {config.email.principal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
