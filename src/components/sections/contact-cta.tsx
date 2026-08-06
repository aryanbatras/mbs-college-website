"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowRight } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

interface ContactCTAProps {
  config: SiteConfig;
}

export function ContactCTA({ config }: ContactCTAProps) {
  return (
    <section className="bg-navy text-paper" aria-label="Contact information">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-paper/10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start gap-4 text-left"
          >
            <div className="size-10 flex items-center justify-center bg-accent/20 shrink-0">
              <MapPin className="size-5 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-paper mb-1">Address</h3>
              <div className="text-sm text-paper/50 leading-relaxed">
                {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-start gap-4 text-left"
          >
            <div className="size-10 flex items-center justify-center bg-accent/20 shrink-0">
              <Phone className="size-5 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-paper mb-1">Phone</h3>
              <div className="text-sm text-paper/50 leading-relaxed">
                <div>Principal: {config.phone.principal}</div>
                <div>Inquiry: {config.phone.inquiry.join(" / ")}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-start gap-4 text-left"
          >
            <div className="size-10 flex items-center justify-center bg-accent/20 shrink-0">
              <Mail className="size-5 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-paper mb-1">Email</h3>
              <div className="text-sm text-paper/50 leading-relaxed">
                <div>{config.email.principal}</div>
                <div>{config.email.deanAcademics}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
