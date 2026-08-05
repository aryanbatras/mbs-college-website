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
  BookOpen,
  Users,
  Building,
  Newspaper,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";
import { SearchModal } from "@/components/ui/search-modal";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ShortcutsPanel } from "@/components/ui/shortcuts-panel";

const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the College", href: "/about", icon: Building },
      { label: "Chairman's Desk", href: "/about/chairman", icon: Users },
      { label: "Principal's Desk", href: "/about/principal", icon: Users },
      { label: "Management", href: "/about/management", icon: Users },
    ],
    featured: {
      title: "Our Heritage",
      description: "Established in 1999 under the Sant Manjit Singh Trust, MBSCET has a legacy of excellence in engineering education.",
      href: "/about",
    },
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Overview", href: "/academics", icon: BookOpen },
      { label: "Computer Science", href: "/academics/computer-science", icon: BookOpen },
      { label: "Information Technology", href: "/academics/information-technology", icon: BookOpen },
      { label: "Electronics & Communication", href: "/academics/electronics-communication", icon: BookOpen },
      { label: "Electrical Engineering", href: "/academics/electrical", icon: BookOpen },
      { label: "Mechanical Engineering", href: "/academics/mechanical", icon: BookOpen },
      { label: "Civil Engineering", href: "/academics/civil", icon: BookOpen },
      { label: "MCA", href: "/academics/mca", icon: BookOpen },
    ],
    featured: {
      title: "8 Programs",
      description: "From Computer Science to Mechanical Engineering, we offer diverse programs to shape future engineers.",
      href: "/academics",
    },
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
      { label: "Facilities", href: "/campus", icon: Building },
      { label: "Galleries", href: "/campus/galleries", icon: Newspaper },
      { label: "Video Gallery", href: "/campus/video-gallery", icon: Newspaper },
      { label: "Student Clubs", href: "/campus/clubs", icon: Users },
    ],
    featured: {
      title: "Campus Life",
      description: "Explore our modern infrastructure, labs, library, and vibrant student community.",
      href: "/campus",
    },
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
      <div className="bg-navy text-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-2 text-xs">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-paper/60">
              {config.affiliations[0]}
            </span>
            <div className="flex items-center gap-1.5 text-paper/70">
              <Megaphone className="size-3" aria-hidden="true" />
              <span className="truncate max-w-[180px] md:max-w-none" role="status" aria-live="polite">
                {config.noticeBar}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${config.phone.principal}`} className="flex items-center gap-1.5 text-paper/60 hover:text-paper transition-colors">
              <Phone className="size-3" aria-hidden="true" />
              <span className="hidden sm:inline">{config.phone.principal}</span>
            </a>
            <div className="hidden sm:flex items-center gap-2.5">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="text-paper/50 hover:text-paper transition-colors" aria-label="Facebook">
                  <FaFacebookF className="size-3" />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="text-paper/50 hover:text-paper transition-colors" aria-label="Instagram">
                  <FaInstagram className="size-3" />
                </a>
              )}
              {config.social.youtube && (
                <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="text-paper/50 hover:text-paper transition-colors" aria-label="YouTube">
                  <FaYoutube className="size-3" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper/50 hover:text-paper transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn className="size-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Primary nav — clean with mega menu */}
      <nav className="bg-white/95 backdrop-blur-md" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="MBSCET - Home">
            <div className="relative size-12 overflow-hidden">
              <Image
                src="/media/logos/mbscetlogo5.png"
                alt="MBSCET Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-base font-semibold tracking-tight text-ink leading-tight">
                MBSCET
              </div>
              <div className="text-[11px] text-ink-muted leading-tight mt-0.5">
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
                  className="flex items-center gap-1 px-4 py-2.5 text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3 opacity-40" aria-hidden="true" />}
                </Link>

                {/* Mega menu */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50" role="menu">
                    <div className="min-w-[280px] bg-white shadow-xl shadow-black/8 py-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="flex items-center gap-3 px-5 py-2.5 text-[13px] text-ink-muted transition-colors hover:text-ink hover:bg-ink/[0.02]"
                        >
                          {child.icon && <child.icon className="size-4 text-ink-faint" />}
                          {child.label}
                        </Link>
                      ))}
                      {item.featured && (
                        <div className="mt-2 px-5 py-3 bg-ink/[0.02]">
                          <div className="text-xs font-medium text-ink mb-1">{item.featured.title}</div>
                          <p className="text-[11px] text-ink-muted leading-relaxed">{item.featured.description}</p>
                          <Link href={item.featured.href} className="text-[11px] font-medium text-accent mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                            Learn more <ChevronDown className="size-3 -rotate-90" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop actions + mobile trigger */}
          <div className="flex items-center gap-2">
            <SearchModal />
            <div className="hidden md:flex items-center gap-1">
              <ShortcutsPanel />
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-[13px] font-medium bg-navy text-paper hover:bg-navy-light transition-colors"
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
        <div className="lg:hidden fixed inset-0 top-[calc(theme(spacing.0)+48px)] z-40 bg-white overflow-y-auto">
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
                              className="flex items-center gap-2 py-2.5 text-[14px] text-ink-muted hover:text-ink"
                            >
                              {child.icon && <child.icon className="size-4" />}
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
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-[14px] font-medium bg-navy text-paper"
                >
                  Contact Us
                </Link>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
