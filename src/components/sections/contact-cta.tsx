"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import type { SiteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  config: SiteConfig;
}

export function ContactCTA({ config }: ContactCTAProps) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <div>
            <div className="flex items-center gap-2 text-xs text-paper/40">
              <span className="inline-block size-1.5 bg-accent" />
              GET IN TOUCH
            </div>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">
              Contact Us
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/60">
              Have questions about admissions or programs? Reach out to our office and we will be happy to help.
            </p>
            <Link href="/contact" className="mt-5 inline-flex">
              <Button className="bg-accent text-paper hover:bg-accent-strong rounded-sm px-5">
                Open Contact Form
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-sm text-paper/70">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
              </span>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>Principal: {config.phone.principal} · Inquiry: {config.phone.inquiry[0]}</span>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{config.email.principal}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
