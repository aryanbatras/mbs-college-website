"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AdvancedCardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  variant?: "default" | "featured" | "minimal" | "overlay";
  className?: string;
  children?: React.ReactNode;
}

export function AdvancedCard({
  title,
  description,
  image,
  href,
  variant = "default",
  className = "",
  children,
}: AdvancedCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative overflow-hidden bg-white ${className}`}
    >
      {/* Image */}
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
          
          {/* Overlay variant */}
          {variant === "overlay" && (
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          )}
        </div>
      )}

      {/* Content */}
      <div className={`p-5 ${variant === "overlay" ? "absolute bottom-0 left-0 right-0 text-paper" : ""}`}>
        <h3 className={`font-semibold leading-snug ${variant === "overlay" ? "text-paper" : "text-ink group-hover:text-accent"} transition-colors`}>
          {title}
        </h3>
        {description && (
          <p className={`text-sm mt-2 leading-relaxed ${variant === "overlay" ? "text-paper/70" : "text-ink-muted"}`}>
            {description}
          </p>
        )}
        {children}
        {href && variant !== "overlay" && (
          <div className="flex items-center gap-1.5 mt-4 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>

      {/* Featured indicator */}
      {variant === "featured" && (
        <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

// Specialized card variants
export function ProgramCard({
  title,
  description,
  image,
  href,
  intake,
  degree,
}: {
  title: string;
  description?: string;
  image?: string;
  href: string;
  intake?: number;
  degree?: string;
}) {
  return (
    <AdvancedCard
      title={title}
      description={description}
      image={image}
      href={href}
      variant="default"
    >
      {(intake || degree) && (
        <div className="flex items-center gap-3 text-sm text-ink-muted mt-3">
          {intake && <span>{intake} seats</span>}
          {intake && degree && <span>&middot;</span>}
          {degree && <span>{degree}</span>}
        </div>
      )}
    </AdvancedCard>
  );
}

export function FacultyCard({
  name,
  designation,
  department,
  image,
  qualifications,
}: {
  name: string;
  designation: string;
  department: string;
  image?: string;
  qualifications?: string;
}) {
  return (
    <AdvancedCard
      title={name}
      description={designation}
      image={image}
      variant="minimal"
    >
      <div className="text-sm text-accent mt-1">{department}</div>
      {qualifications && (
        <div className="text-xs text-ink-faint mt-2">{qualifications}</div>
      )}
    </AdvancedCard>
  );
}

export function NewsCard({
  title,
  date,
  category,
  image,
  href,
  excerpt,
}: {
  title: string;
  date: string;
  category: string;
  image?: string;
  href: string;
  excerpt?: string;
}) {
  return (
    <AdvancedCard
      title={title}
      description={excerpt}
      image={image}
      href={href}
      variant="default"
    >
      <div className="flex items-center gap-2 text-xs text-ink-faint mt-3">
        <span>{date}</span>
        <span>&middot;</span>
        <span className="text-accent font-medium">{category}</span>
      </div>
    </AdvancedCard>
  );
}
