"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

interface FooterProps {
  config: SiteConfig;
}

export function Footer({ config }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Placements", href: "/placements" },
    { label: "Campus", href: "/campus" },
    { label: "News", href: "/news" },
    { label: "Notices", href: "/notices" },
    { label: "Contact", href: "/contact" },
  ];

  const programs = [
    { label: "Computer Science", href: "/academics/computer-science" },
    { label: "Information Technology", href: "/academics/information-technology" },
    { label: "Electronics & Comm.", href: "/academics/electronics-communication" },
    { label: "Electrical Engineering", href: "/academics/electrical" },
    { label: "Mechanical Engineering", href: "/academics/mechanical" },
    { label: "Civil Engineering", href: "/academics/civil" },
    { label: "MCA", href: "/academics/mca" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-ink text-paper">
      {/* Quick action bar */}
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium">
            <Link href="/admissions" className="flex items-center gap-2 text-paper hover:text-paper/80 transition-colors">
              <ArrowUpRight className="size-4" />
              Apply Now
            </Link>
            <a href={`tel:${config.phone.principal}`} className="flex items-center gap-2 text-paper hover:text-paper/80 transition-colors">
              <Phone className="size-4" />
              Call Us
            </a>
            <Link href="/campus" className="flex items-center gap-2 text-paper hover:text-paper/80 transition-colors">
              <MapPin className="size-4" />
              Campus Map
            </Link>
            <Link href="/placements" className="flex items-center gap-2 text-paper hover:text-paper/80 transition-colors">
              <ArrowUpRight className="size-4" />
              Placements
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="border-b border-paper/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight mb-2">Stay Updated</h3>
              <p className="text-sm text-paper/50">Get the latest news, events, and updates from MBSCET.</p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle className="size-5" />
                <span className="text-sm font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 md:w-64 px-4 py-2.5 text-sm bg-paper/10 text-paper placeholder:text-paper/30 border border-paper/10 focus:border-accent focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-accent text-paper hover:bg-accent-strong transition-colors"
                >
                  <Send className="size-4" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Identity — wider column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative size-11 overflow-hidden">
                <Image
                  src="/media/logos/mbscetlogo5.png"
                  alt="MBSCET Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <div className="text-base font-semibold tracking-tight">MBSCET</div>
                <div className="text-[11px] text-paper/40 mt-0.5">Est. {config.established}</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-paper/50 max-w-[320px] mb-6">
              {config.name}. AICTE approved and affiliated to the University of Jammu.
              Committed to excellence in engineering education since 1999.
            </p>
            <div className="flex items-center gap-3">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-paper/5 hover:bg-accent/20 text-paper/40 hover:text-accent transition-colors" aria-label="Facebook">
                  <FaFacebookF className="size-4" />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-paper/5 hover:bg-accent/20 text-paper/40 hover:text-accent transition-colors" aria-label="Instagram">
                  <FaInstagram className="size-4" />
                </a>
              )}
              {config.social.youtube && (
                <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-paper/5 hover:bg-accent/20 text-paper/40 hover:text-accent transition-colors" aria-label="YouTube">
                  <FaYoutube className="size-4" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-paper/5 hover:bg-accent/20 text-paper/40 hover:text-accent transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn className="size-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-paper/30 mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/60 transition-colors hover:text-paper hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-paper/30 mb-5">Programs</h3>
            <ul className="flex flex-col gap-2.5">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-paper/60 transition-colors hover:text-paper hover:translate-x-1 inline-block">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-paper/30 mb-5">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-sm text-paper/60">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="leading-relaxed">
                  {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
                </span>
              </div>
              <div className="flex gap-3 text-sm text-paper/60">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <div className="leading-relaxed">
                  <div>Principal: {config.phone.principal}</div>
                  <div>Inquiry: {config.phone.inquiry.join(" / ")}</div>
                </div>
              </div>
              <div className="flex gap-3 text-sm text-paper/60">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <div className="leading-relaxed">
                  <div>{config.email.principal}</div>
                  <div>{config.email.deanAcademics}</div>
                </div>
              </div>
              <div className="flex gap-3 text-sm text-paper/60">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                <div className="leading-relaxed">
                  <div>Mon - Sat: 9:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-paper/10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-paper/40">
              <span>&copy; {new Date().getFullYear()} {config.shortName}. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <Link href="/privacy" className="hover:text-paper transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-paper transition-colors">Terms</Link>
              <Link href="/sitemap.xml" className="hover:text-paper transition-colors">Sitemap</Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-paper/30">
              <span>AICTE Approved</span>
              <span>&middot;</span>
              <span>University of Jammu</span>
              <span>&middot;</span>
              <span>UGC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
