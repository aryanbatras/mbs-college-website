"use client";

import { motion } from "motion/react";
import type { SiteConfig } from "@/lib/content";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactContentProps {
  config: SiteConfig;
}

export function ContactContent({ config }: ContactContentProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          CONTACT
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Have questions about admissions, programs, or campus life? Reach out to
          our office and we will be happy to help.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
            <div>
              <div className="text-sm font-semibold text-ink">Address</div>
              <div className="mt-1 text-sm leading-relaxed text-ink-muted">
                {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
            <div>
              <div className="text-sm font-semibold text-ink">Phone</div>
              <div className="mt-1 text-sm text-ink-muted">Principal: {config.phone.principal}</div>
              <div className="text-sm text-ink-muted">Vice-Principal: {config.phone.vicePrincipal}</div>
              <div className="text-sm text-ink-muted">Inquiry: {config.phone.inquiry.join(" / ")}</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
            <div>
              <div className="text-sm font-semibold text-ink">Email</div>
              <div className="mt-1 text-sm text-ink-muted">{config.email.principal}</div>
              <div className="text-sm text-ink-muted">{config.email.vicePrincipal}</div>
              <div className="text-sm text-ink-muted">{config.email.deanAcademics}</div>
              <div className="text-sm text-ink-muted">{config.email.tpCell}</div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm font-medium text-ink">Name</Label>
              <Input id="name" name="name" required className="rounded-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-medium text-ink">Email</Label>
              <Input id="email" name="email" type="email" required className="rounded-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-sm font-medium text-ink">Phone</Label>
              <Input id="phone" name="phone" className="rounded-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject" className="text-sm font-medium text-ink">Subject</Label>
              <Input id="subject" name="subject" required className="rounded-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-sm font-medium text-ink">Message</Label>
              <Textarea id="message" name="message" rows={5} required className="rounded-sm" />
            </div>
            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />
            <Button type="submit" className="bg-ink text-paper hover:bg-ink/90 rounded-sm w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
