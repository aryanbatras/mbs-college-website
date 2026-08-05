import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

interface FooterProps {
  config: SiteConfig;
}

export function Footer({ config }: FooterProps) {
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

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div className="lg:col-span-1">
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
            <p className="text-sm leading-relaxed text-paper/50 max-w-[280px]">
              {config.name}. AICTE approved and affiliated to the University of Jammu.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="text-paper/30 hover:text-paper transition-colors" aria-label="Facebook">
                  <FaFacebookF className="size-4" />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="text-paper/30 hover:text-paper transition-colors" aria-label="Instagram">
                  <FaInstagram className="size-4" />
                </a>
              )}
              {config.social.youtube && (
                <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="text-paper/30 hover:text-paper transition-colors" aria-label="YouTube">
                  <FaYoutube className="size-4" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper/30 hover:text-paper transition-colors" aria-label="LinkedIn">
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
                  <Link href={link.href} className="text-sm text-paper/60 transition-colors hover:text-paper">
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
                  <Link href={p.href} className="text-sm text-paper/60 transition-colors hover:text-paper">
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
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 flex flex-col items-center justify-between gap-3 text-xs text-paper/30 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {config.shortName}. All rights reserved.</span>
          <span>AICTE approved &middot; University of Jammu affiliated &middot; UGC recognized</span>
        </div>
      </div>
    </footer>
  );
}
