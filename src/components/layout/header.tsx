"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  Megaphone,
  Phone,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the College", href: "/about" },
      { label: "Chairman's Desk", href: "/about/chairman" },
      { label: "Principal's Desk", href: "/about/principal" },
      { label: "Management", href: "/about/management" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Overview", href: "/academics" },
      { label: "Computer Science", href: "/academics/computer-science" },
      { label: "Information Technology", href: "/academics/information-technology" },
      { label: "Electronics & Communication", href: "/academics/electronics-communication" },
      { label: "Electrical Engineering", href: "/academics/electrical" },
      { label: "Mechanical Engineering", href: "/academics/mechanical" },
      { label: "Civil Engineering", href: "/academics/civil" },
      { label: "MCA", href: "/academics/mca" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Placements",
    href: "/placements",
  },
  {
    label: "Campus",
    href: "/campus",
    children: [
      { label: "Facilities", href: "/campus" },
      { label: "Galleries", href: "/campus/galleries" },
      { label: "Video Gallery", href: "/campus/video-gallery" },
      { label: "Student Clubs", href: "/campus/clubs" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Notices", href: "/notices" },
];

interface HeaderProps {
  config: SiteConfig;
}

export function Header({ config }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full" role="banner">
      {/* Utility bar — minimal */}
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-2 text-xs">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-paper/50">
              {config.affiliations[0]}
            </span>
            <div className="flex items-center gap-1.5 text-paper/60">
              <Megaphone className="size-3" aria-hidden="true" />
              <span className="truncate max-w-[180px] md:max-w-none" role="status" aria-live="polite">
                {config.noticeBar}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${config.phone.principal}`} className="flex items-center gap-1.5 text-paper/50 hover:text-paper transition-colors">
              <Phone className="size-3" aria-hidden="true" />
              <span className="hidden sm:inline">{config.phone.principal}</span>
            </a>
            <div className="hidden sm:flex items-center gap-2.5">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="text-paper/40 hover:text-paper transition-colors" aria-label="Facebook">
                  <FaFacebookF className="size-3" />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="text-paper/40 hover:text-paper transition-colors" aria-label="Instagram">
                  <FaInstagram className="size-3" />
                </a>
              )}
              {config.social.youtube && (
                <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="text-paper/40 hover:text-paper transition-colors" aria-label="YouTube">
                  <FaYoutube className="size-3" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper/40 hover:text-paper transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn className="size-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Primary nav — no borders, clean */}
      <nav className="bg-paper/95 backdrop-blur-md" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="MBSCET - Home">
            <div className="relative size-11 overflow-hidden">
              <Image
                src="/media/logos/mbscetlogo5.png"
                alt="MBSCET Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-tight text-ink leading-tight">
                MBSCET
              </div>
              <div className="text-[10px] text-ink-muted leading-tight mt-0.5">
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
                  className="flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3 opacity-40" aria-hidden="true" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50" role="menu">
                    <div className="min-w-[220px] bg-surface py-2 shadow-lg shadow-black/5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block px-5 py-2.5 text-[13px] text-ink-muted transition-colors hover:text-ink hover:bg-ink/[0.03]"
                        >
                          {child.label}
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
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-[13px] font-medium bg-ink text-paper hover:bg-ink/90 transition-colors"
            >
              Contact
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center size-10 text-ink"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(theme(spacing.0)+44px)] z-40 bg-paper overflow-y-auto">
          <div className="px-5 py-6">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between py-3.5 text-[15px] font-medium text-ink"
                      >
                        {item.label}
                        <ChevronDown className={`size-4 text-ink-muted transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="pl-4 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 text-[14px] text-ink-muted hover:text-ink"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3.5 text-[15px] font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-[14px] font-medium bg-ink text-paper"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
