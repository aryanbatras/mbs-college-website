"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { SiteConfig } from "@/lib/content";
import { MapPin, Phone, Mail, Send, CheckCircle } from "react-icons/fa";
import { Breadcrumb } from "@/components/ui/breadcrumb";

interface ContactContentProps {
  config: SiteConfig;
}

export function ContactContent({ config }: ContactContentProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="page-container section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Breadcrumb items={[{ label: "Contact" }]} />
        <h1 className="mt-4 font-heading text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
          Contact Us
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
          Have questions about admissions, programs, or campus life? Reach out to
          our office and we will be happy to help.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-8"
        >
          <div className="flex gap-4">
            <div className="shrink-0 size-10 flex items-center justify-center bg-accent/10">
              <MapPin className="size-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Address</div>
              <div className="mt-2 text-sm leading-relaxed text-ink-muted">
                {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 size-10 flex items-center justify-center bg-accent/10">
              <Phone className="size-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Phone</div>
              <div className="mt-2 text-sm text-ink-muted">Principal: {config.phone.principal}</div>
              <div className="text-sm text-ink-muted">Vice-Principal: {config.phone.vicePrincipal}</div>
              <div className="text-sm text-ink-muted">Inquiry: {config.phone.inquiry.join(" / ")}</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 size-10 flex items-center justify-center bg-accent/10">
              <Mail className="size-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Email</div>
              <div className="mt-2 text-sm text-ink-muted">{config.email.principal}</div>
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
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle className="size-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-ink mb-2">Message Sent!</h3>
              <p className="text-sm text-ink-muted">Thank you for reaching out. We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-ink">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-ink">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-ink">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors text-ink"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="placements">Placement Query</option>
                    <option value="campus">Campus Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              {/* Honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-accent text-paper hover:bg-accent-strong disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
              >
                {loading ? (
                  <>
                    <div className="size-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
