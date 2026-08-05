"use client";

import { useState } from "react";
import { FaPlay, FaTimes, FaImages, FaExpand } from "react-icons/fa";

const FEATURED_VIDEO = {
  title: "Campus Tour",
  description: "A glimpse into life at MBSCET Jammu",
  src: "https://drive.google.com/file/d/1XbZ9EDbPrS50MUpsaiuc48ocH_SxCiii/preview",
  ratio: "16:9" as const,
};

const TESTIMONIAL_VIDEOS = [
  {
    name: "Aayushman",
    department: "CSE",
    src: "/media/videos/aayushman-cse.mp4",
    ratio: "9:16" as const,
  },
  {
    name: "Mansi Sharma",
    department: "ECE",
    src: "/media/videos/mansi-sharma-ece.mp4",
    ratio: "9:16" as const,
  },
  {
    name: "Rahul Bhargav",
    department: "EE",
    src: "/media/videos/rahul-bhargav.mp4",
    ratio: "9:16" as const,
  },
  {
    name: "Rishika Gupta",
    department: "IT",
    src: "/media/videos/rishika-gupta-it.mp4",
    ratio: "9:16" as const,
  },
  {
    name: "Satinderjeet Singh",
    department: "ECE",
    src: "/media/videos/satinderjeet-singh-ece.mp4",
    ratio: "9:16" as const,
  },
];

const GALLERY_IMAGES = [
  { src: "/media/homepage/gallery-1.jpg", alt: "Campus event" },
  { src: "/media/homepage/gallery-2.jpg", alt: "College activity" },
  { src: "/media/homepage/gallery-3.jpg", alt: "Student gathering" },
  { src: "/media/homepage/gallery-4.jpg", alt: "Placement drive" },
  { src: "/media/homepage/gallery-5.jpg", alt: "College function" },
  { src: "/media/homepage/gallery-6.jpg", alt: "Campus life" },
  { src: "/media/homepage/gallery-7.jpg", alt: "Event celebration" },
  { src: "/media/homepage/gallery-8.jpg", alt: "Fresher Fiesta" },
  { src: "/media/homepage/ict-academy.jpg", alt: "ICT Academy" },
  { src: "/media/homepage/industrial-visit.jpg", alt: "Industrial visit" },
  { src: "/media/homepage/campus-event.jpg", alt: "Campus event" },
  { src: "/media/homepage/blood-donation.jpg", alt: "Blood donation camp" },
];

type VideoItem = { name: string; department: string; src: string; ratio: "9:16" | "16:9" };

export function GallerySection() {
  const [showAllImages, setShowAllImages] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const visibleImages = showAllImages ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 8);

  return (
    <section className="bg-white" aria-label="Gallery">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight">
            Life at MBSCET
          </h2>
        </div>

        {/* Featured Video - 16:9 */}
        <div className="mb-16">
          <div className="relative w-full bg-[#00274C]" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={FEATURED_VIDEO.src}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title={FEATURED_VIDEO.title}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-[#00274C]">{FEATURED_VIDEO.title}</h3>
            <p className="text-sm text-[#5C6370]">{FEATURED_VIDEO.description}</p>
          </div>
        </div>

        {/* Testimonial Videos - 9:16 */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#00274C] mb-8">
            Student Testimonials
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <div
                key={video.name}
                className="relative cursor-pointer group"
                onClick={() => setPlayingVideo(video)}
              >
                {/* 9:16 container */}
                <div className="relative w-full bg-[#00274C]" style={{ paddingBottom: "177.78%" }}>
                  <video
                    src={video.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    preload="metadata"
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      (e.target as HTMLVideoElement).pause();
                      (e.target as HTMLVideoElement).currentTime = 0;
                    }}
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="size-12 flex items-center justify-center bg-[#FFCB05] rounded-full group-hover:scale-110 transition-transform">
                      <FaPlay className="text-[#00274C] text-sm ml-0.5" />
                    </div>
                  </div>
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-xs font-bold">{video.name}</p>
                  <p className="text-white/60 text-[10px]">{video.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#00274C]">
              Campus Photos
            </h3>
            <button
              onClick={() => setShowAllImages(!showAllImages)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
            >
              <FaImages className="text-xs" />
              {showAllImages ? "Show Less" : `View All (${GALLERY_IMAGES.length})`}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleImages.map((image, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {!showAllImages && GALLERY_IMAGES.length > 8 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllImages(true)}
                className="inline-flex items-center gap-2 bg-[#00274C] text-[#FFCB05] px-8 py-4 text-sm font-bold hover:bg-[#1E406B] transition-colors"
              >
                <FaImages className="text-xs" />
                View All Photos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Video Lightbox */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-6 right-6 size-12 flex items-center justify-center text-white hover:text-[#FFCB05] transition-colors z-10"
            aria-label="Close video"
          >
            <FaTimes className="text-xl" />
          </button>
          <div
            className="relative"
            style={{
              width: playingVideo.ratio === "16:9" ? "min(90vw, 960px)" : "min(400px, 90vw)",
              aspectRatio: playingVideo.ratio === "16:9" ? "16/9" : "9/16",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={playingVideo.src}
              className="absolute inset-0 w-full h-full object-contain bg-black"
              controls
              autoPlay
            />
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 size-12 flex items-center justify-center text-white hover:text-[#FFCB05] transition-colors z-10"
            aria-label="Close image"
          >
            <FaTimes className="text-xl" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
