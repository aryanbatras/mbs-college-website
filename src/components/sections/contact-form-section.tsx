"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import type { SiteConfig } from "@/lib/content";

interface ContactSectionProps {
  config: SiteConfig;
}

export function ContactSection({ config }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(formData.subject || "Inquiry from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${config.email.principal}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white" aria-label="Contact us">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight mb-6">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-lg text-[#5C6370] leading-relaxed mb-12 max-w-lg">
              Whether you&apos;re a parent seeking information about admissions, a student with questions, or anyone interested in MBSCET — we&apos;re here to help.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="size-12 flex items-center justify-center bg-gray-100 shrink-0">
                  <FaMapMarkerAlt className="text-[#00274C] text-lg" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#00274C] mb-1">Visit Us</h3>
                  <p className="text-sm text-[#5C6370] leading-relaxed">
                    {config.address.line1}, {config.address.line2},
                    <br />
                    {config.address.city} — {config.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="size-12 flex items-center justify-center bg-gray-100 shrink-0">
                  <FaPhone className="text-[#00274C] text-lg" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#00274C] mb-1">Call Us</h3>
                  <p className="text-sm text-[#5C6370]">
                    Landline:{" "}
                    <a href={`tel:${config.phone.landline}`} className="hover:text-gray-400 transition-colors">
                      {config.phone.landline}
                    </a>
                  </p>
                  <p className="text-sm text-[#5C6370] mt-1">
                    Principal:{" "}
                    <a href={`tel:${config.phone.principal}`} className="hover:text-gray-400 transition-colors">
                      {config.phone.principal}
                    </a>
                  </p>
                  <p className="text-sm text-[#5C6370] mt-1">
                    Vice-Principal:{" "}
                    <a href={`tel:${config.phone.vicePrincipal}`} className="hover:text-gray-400 transition-colors">
                      {config.phone.vicePrincipal}
                    </a>
                  </p>
                  <p className="text-sm text-[#5C6370] mt-1">
                    Placement Cell:{" "}
                    <a href={`tel:${config.phone.tpCell}`} className="hover:text-gray-400 transition-colors">
                      {config.phone.tpCell}
                    </a>
                  </p>
                  <p className="text-sm text-[#5C6370] mt-1">
                    Admissions:{" "}
                    {config.phone.inquiry.map((phone, i) => (
                      <span key={phone}>
                        <a href={`tel:${phone}`} className="hover:text-gray-400 transition-colors">
                          {phone}
                        </a>
                        {i < config.phone.inquiry.length - 1 && " / "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="size-12 flex items-center justify-center bg-gray-100 shrink-0">
                  <FaEnvelope className="text-[#00274C] text-lg" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#00274C] mb-1">Email Us</h3>
                  <p className="text-sm text-[#5C6370]">
                    <a href={`mailto:${config.email.principal}`} className="hover:text-gray-400 transition-colors">
                      {config.email.principal}
                    </a>
                  </p>
                  <p className="text-sm text-[#5C6370] mt-1">
                    <a href={`mailto:${config.email.deanAcademics}`} className="hover:text-gray-400 transition-colors">
                      {config.email.deanAcademics}
                    </a>
                  </p>
                  <p className="text-sm text-[#5C6370] mt-1">
                    Placement:{" "}
                    <a href={`mailto:${config.email.tpCell}`} className="hover:text-gray-400 transition-colors">
                      {config.email.tpCell}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-10">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="size-10 flex items-center justify-center bg-gray-100 text-[#00274C] hover:bg-[#00274C] hover:text-white transition-all" aria-label="Facebook">
                  <FaFacebookF className="text-sm" />
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="size-10 flex items-center justify-center bg-gray-100 text-[#00274C] hover:bg-[#00274C] hover:text-white transition-all" aria-label="Instagram">
                  <FaInstagram className="text-sm" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="size-10 flex items-center justify-center bg-gray-100 text-[#00274C] hover:bg-[#00274C] hover:text-white transition-all" aria-label="LinkedIn">
                  <FaLinkedinIn className="text-sm" />
                </a>
              )}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-[#00274C] p-12 md:p-16 flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="size-16 flex items-center justify-center bg-gray-100 mb-6">
                  <FaCheckCircle className="text-3xl text-[#00274C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Ready</h3>
                <p className="text-white/70 mb-6 max-w-sm">
                  Your email client should open shortly. If not, reach us at{" "}
                  <a href={`mailto:${config.email.principal}`} className="text-gray-400 font-bold hover:underline">
                    {config.email.principal}
                  </a>
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  className="text-sm font-bold text-gray-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#00274C] p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                <p className="text-sm text-white/60 mb-8">
                  Fill out the form below and we&apos;ll get back to you promptly.
                </p>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-[#00274C] text-sm focus:outline-none focus:border-[#00274C] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                    <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                      Email Address
                    </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 bg-white text-[#00274C] text-sm focus:outline-none focus:border-[#00274C] transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                      Phone Number
                    </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 bg-white text-[#00274C] text-sm focus:outline-none focus:border-[#00274C] transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-white mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-[#00274C] text-sm focus:outline-none focus:border-[#00274C] transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="Program Information">Program Information</option>
                      <option value="Campus Visit">Schedule a Campus Visit</option>
                      <option value="Fee Structure">Fee Structure</option>
                      <option value="Placement Inquiry">Placement Inquiry</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-[#00274C] text-sm focus:outline-none focus:border-[#00274C] transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 bg-white text-[#00274C] px-8 py-4 text-sm font-bold hover:bg-gray-100 transition-colors disabled:opacity-60"
                  >
                    {sending ? (
                      "Opening email..."
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-white/40 mt-4 text-center">
                  Your message will be sent via email. We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 md:mt-24">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Find Us
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#00274C] tracking-tight">
              Our Location
            </h3>
          </div>
          <div className="w-full h-[400px] bg-[#F9FAFB] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.5!2d74.815!3d32.646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9b3f8037351f%3A0xb9054afb3d23d080!2sMBS%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MBS College of Engineering & Technology Location"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#5C6370]">
              {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
            </p>
            <a
              href="https://www.google.com/maps/place/MBS+College+of+Engineering+%26+Technology/@32.646,74.815,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#00274C] hover:text-gray-400 transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
