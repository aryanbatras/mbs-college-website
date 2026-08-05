"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  aspectRatio = "16/10",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-ink/5 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Shimmer placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-shimmer" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-ink-faint text-sm">
          Image not available
        </div>
      )}

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Gallery image with lightbox trigger
export function GalleryImage({
  src,
  alt,
  onClick,
  className = "",
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      onClick={onClick}
    >
      {/* Shimmer placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-shimmer" />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
      
      {/* Zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="size-10 bg-paper/90 flex items-center justify-center">
          <svg className="size-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
