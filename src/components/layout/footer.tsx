import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
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
    { label: "CSE (108)", href: "/academics/computer-science" },
    { label: "IT (54)", href: "/academics/information-technology" },
    { label: "ECE (30)", href: "/academics/electronics-communication" },
    { label: "EE (30)", href: "/academics/electrical" },
    { label: "ME (30)", href: "/academics/mechanical" },
    { label: "Civil (54)", href: "/academics/civil" },
    { label: "AI&ML (54)", href: "/academics/computer-science" },
    { label: "MCA (60)", href: "/academics/mca" },
  ];

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center border border-paper/30 text-paper">
                <GraduationCap className="size-4" />
              </div>
              <div>
                <div className="font-heading text-sm font-bold tracking-tight">{config.shortName}</div>
                <div className="text-[10px] text-paper/50">Est. {config.established}</div>
              </div>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-paper/60 max-w-[280px]">
              {config.name}. {config.accreditation}.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center border border-paper/20 text-paper/60 transition-colors hover:border-paper/40 hover:text-paper" aria-label="Facebook">
                  <FaFacebookF className="size-3" />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center border border-paper/20 text-paper/60 transition-colors hover:border-paper/40 hover:text-paper" aria-label="Instagram">
                  <FaInstagram className="size-3" />
                </a>
              )}
              {config.social.youtube && (
                <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center border border-paper/20 text-paper/60 transition-colors hover:border-paper/40 hover:text-paper" aria-label="YouTube">
                  <FaYoutube className="size-3" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center border border-paper/20 text-paper/60 transition-colors hover:border-paper/40 hover:text-paper" aria-label="LinkedIn">
                  <FaLinkedinIn className="size-3" />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-paper/40">Quick Links</h3>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/70 transition-colors hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-paper/40">Programs</h3>
            <ul className="flex flex-col gap-1.5">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-paper/70 transition-colors hover:text-paper">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-paper/40">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 text-sm text-paper/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>
                  {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
                </span>
              </div>
              <div className="flex gap-2 text-sm text-paper/70">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <div>
                  <div>Principal: {config.phone.principal}</div>
                  <div>Inquiry: {config.phone.inquiry.join(" / ")}</div>
                </div>
              </div>
              <div className="flex gap-2 text-sm text-paper/70">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <div>
                  <div>{config.email.principal}</div>
                  <div>{config.email.deanAcademics}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {config.shortName}. All rights reserved.</span>
          <span>AICTE approved · University of Jammu affiliated · UGC recognized</span>
        </div>
      </div>
    </footer>
  );
}
