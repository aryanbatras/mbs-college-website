"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ChevronDown,
  Menu,
  Megaphone,
  GraduationCap,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  return (
    <header className="sticky top-0 z-50 w-full" role="banner">
      {/* Utility bar */}
      <div className="bg-ink text-paper" role="complementary" aria-label="College information bar">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-ink-faint">
              {config.affiliations.slice(0, 2).join("  ·  ")}
            </span>
            <div className="flex items-center gap-1 text-ink-faint">
              <Megaphone className="size-3" aria-hidden="true" />
              <span className="truncate max-w-[200px] md:max-w-none" role="status" aria-live="polite">
                {config.noticeBar}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${config.phone.principal}`} className="flex items-center gap-1 text-ink-faint hover:text-paper transition-colors" aria-label={`Call principal at ${config.phone.principal}`}>
              <Phone className="size-3" aria-hidden="true" />
              <span className="hidden sm:inline">{config.phone.principal}</span>
            </a>
            <span className="text-ink-faint" aria-hidden="true">·</span>
            <nav aria-label="Social media links">
              <div className="flex items-center gap-2">
                {config.social.facebook && (
                  <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-paper transition-colors" aria-label="Facebook">
                    <FaFacebookF className="size-3" aria-hidden="true" />
                  </a>
                )}
                {config.social.instagram && (
                  <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-paper transition-colors" aria-label="Instagram">
                    <FaInstagram className="size-3" aria-hidden="true" />
                  </a>
                )}
                {config.social.youtube && (
                  <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-paper transition-colors" aria-label="YouTube">
                    <FaYoutube className="size-3" aria-hidden="true" />
                  </a>
                )}
                {config.social.linkedin && (
                  <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-paper transition-colors" aria-label="LinkedIn">
                    <FaLinkedinIn className="size-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="border-b border-line bg-paper/95 backdrop-blur-sm" aria-label="Main navigation">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="MBSCET - Home">
            <div className="flex size-10 items-center justify-center border-2 border-ink text-ink" aria-hidden="true">
              <GraduationCap className="size-5" />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading text-sm font-bold leading-tight tracking-tight text-ink">
                {config.shortName}
              </div>
              <div className="text-[10px] leading-tight text-ink-muted">
                Est. {config.established} · {config.accreditation.split(" ").slice(0, 3).join(" ")}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
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
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3" aria-hidden="true" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 z-50 min-w-[240px] border border-line bg-surface p-3" role="menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="block px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-accent-soft hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA + mobile trigger */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button variant="default" className="bg-accent text-paper hover:bg-accent-strong rounded-sm" aria-label="Contact us">
                Contact
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" aria-label="Open navigation menu" className="lg:hidden" />}
              >
                <Menu className="size-5" aria-hidden="true" />
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-paper border-line">
                <SheetHeader>
                  <SheetTitle className="font-heading text-lg text-ink">Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="ml-3 flex flex-col gap-0.5 border-l border-line pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2 text-xs text-ink-muted transition-colors hover:text-ink"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="mt-4 border-t border-line pt-4">
                    <Link href="/contact" className="block">
                      <Button className="w-full bg-accent text-paper hover:bg-accent-strong rounded-sm" aria-label="Contact us">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
