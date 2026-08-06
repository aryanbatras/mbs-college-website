"use client";

import { motion } from "motion/react";
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const SOCIAL_POSTS = [
  { image: "/media/general/DSC_0123-1024x683.jpg", likes: 124, platform: "instagram" },
  { image: "/media/general/DSC_0128-1024x683.jpg", likes: 89, platform: "instagram" },
  { image: "/media/general/DSC_0131-1024x683.jpg", likes: 156, platform: "instagram" },
  { image: "/media/general/1-1024x579.jpg", likes: 201, platform: "instagram" },
  { image: "/media/general/2-1024x768.jpeg", likes: 67, platform: "instagram" },
  { image: "/media/general/10-1024x768.jpeg", likes: 143, platform: "instagram" },
];

const SOCIAL_LINKS = [
  { icon: FaInstagram, label: "Instagram", href: "#", followers: "5.2K" },
  { icon: FaYoutube, label: "YouTube", href: "#", followers: "2.1K" },
  { icon: FaFacebookF, label: "Facebook", href: "#", followers: "8.3K" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#", followers: "3.7K" },
];

export function SocialFeed() {
  return (
    <section className="bg-white" aria-label="Social media">
      <div className="page-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Connect With Us
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
            Follow MBSCET
          </h2>
          <p className="text-base md:text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Stay updated with campus life, events, and achievements.
          </p>
        </motion.div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-12">
          {SOCIAL_LINKS.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="size-12 flex items-center justify-center bg-ink/[0.03] text-ink-muted group-hover:bg-accent group-hover:text-paper transition-colors">
                <social.icon className="size-5" />
              </div>
              <div className="text-center">
                <div className="text-xs font-medium text-ink">{social.label}</div>
                <div className="text-[10px] text-ink-faint">{social.followers} followers</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Instagram-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {SOCIAL_POSTS.map((post, i) => (
            <motion.a
              key={i}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden bg-ink/5"
            >
              <img
                src={post.image}
                alt={`Social post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 text-paper text-sm font-medium">
                  <FaInstagram className="size-4" />
                  {post.likes}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors group"
          >
            View all posts
            <FaExternalLinkAlt className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
