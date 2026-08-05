import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import type { SiteConfig } from "@/lib/content";

interface ContactCTAProps {
  config: SiteConfig;
}

export function ContactCTA({ config }: ContactCTAProps) {
  return (
    <section className="bg-navy text-paper" aria-label="Contact information">
      <div className="page-container section-spacing">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Get in Touch
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-paper mb-5">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base md:text-lg text-paper/60 leading-relaxed mb-10">
            Reach out to us for admissions, inquiries, or campus visits. We are here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-accent text-paper hover:bg-accent-strong transition-colors"
          >
            Contact Us
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 pt-12 border-t border-paper/10">
          <div className="flex items-start gap-3 text-left">
            <MapPin className="size-4 mt-1 text-accent shrink-0" />
            <div className="text-sm text-paper/60 leading-relaxed">
              {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
            </div>
          </div>
          <div className="flex items-start gap-3 text-left">
            <Phone className="size-4 mt-1 text-accent shrink-0" />
            <div className="text-sm text-paper/60 leading-relaxed">
              <div>Principal: {config.phone.principal}</div>
              <div>Inquiry: {config.phone.inquiry.join(" / ")}</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-left">
            <Mail className="size-4 mt-1 text-accent shrink-0" />
            <div className="text-sm text-paper/60 leading-relaxed">
              <div>{config.email.principal}</div>
              <div>{config.email.deanAcademics}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
