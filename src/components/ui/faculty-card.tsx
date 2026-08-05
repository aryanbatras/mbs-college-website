"use client";

import { motion } from "motion/react";
import { Mail, Phone, BookOpen, Award } from "lucide-react";

interface FacultyCardProps {
  name: string;
  designation: string;
  department: string;
  image?: string;
  qualifications?: string[];
  specializations?: string[];
  email?: string;
  phone?: string;
  publications?: number;
}

export function FacultyCard({
  name,
  designation,
  department,
  image,
  qualifications = [],
  specializations = [],
  email,
  phone,
  publications,
}: FacultyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-ink/5">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="size-20 bg-accent/10 flex items-center justify-center">
              <span className="text-2xl font-semibold text-accent">{name.charAt(0)}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Contact overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            {email && (
              <a href={`mailto:${email}`} className="size-8 bg-paper/90 flex items-center justify-center hover:bg-paper transition-colors">
                <Mail className="size-4 text-ink" />
              </a>
            )}
            {phone && (
              <a href={`tel:${phone}`} className="size-8 bg-paper/90 flex items-center justify-center hover:bg-paper transition-colors">
                <Phone className="size-4 text-ink" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-ink group-hover:text-accent transition-colors">{name}</h3>
        <p className="text-sm text-accent mt-1">{designation}</p>
        <p className="text-xs text-ink-muted mt-1">{department}</p>

        {/* Qualifications */}
        {qualifications.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {qualifications.slice(0, 2).map((q, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 bg-ink/[0.03] text-ink-muted">
                {q}
              </span>
            ))}
          </div>
        )}

        {/* Specializations */}
        {specializations.length > 0 && (
          <div className="mt-3">
            <div className="flex items-center gap-1.5 text-[10px] text-ink-faint mb-1">
              <BookOpen className="size-3" />
              <span>Specializations</span>
            </div>
            <p className="text-xs text-ink-muted line-clamp-2">
              {specializations.join(", ")}
            </p>
          </div>
        )}

        {/* Publications count */}
        {publications && (
          <div className="flex items-center gap-1.5 mt-3 text-xs text-ink-muted">
            <Award className="size-3 text-accent" />
            <span>{publications} publications</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Faculty list variant
export function FacultyListItem({
  name,
  designation,
  department,
  image,
  email,
}: {
  name: string;
  designation: string;
  department: string;
  image?: string;
  email?: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-4 p-4 bg-ink/[0.02] hover:bg-ink/[0.04] transition-colors group"
    >
      {/* Avatar */}
      <div className="size-12 shrink-0 overflow-hidden bg-ink/5">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-accent/10">
            <span className="text-sm font-semibold text-accent">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors truncate">
          {name}
        </h4>
        <p className="text-xs text-accent">{designation}</p>
        <p className="text-xs text-ink-muted">{department}</p>
      </div>

      {/* Contact */}
      {email && (
        <a href={`mailto:${email}`} className="size-8 flex items-center justify-center text-ink-faint hover:text-accent transition-colors">
          <Mail className="size-4" />
        </a>
      )}
    </motion.div>
  );
}
