"use client";

import { useState } from "react";
import { FaPlay, FaTimes, FaImages, FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  { src: "/media/homepage/admin-block.jpg", alt: "Administrative Block" },
  { src: "/media/homepage/auditorium.jpg", alt: "College Auditorium" },
  { src: "/media/homepage/central-park.jpg", alt: "Central Park" },
  { src: "/media/homepage/library.jpg", alt: "College Library" },
  { src: "/media/homepage/seminar-hall.jpg", alt: "Seminar Hall" },
  { src: "/media/homepage/computer-lab.jpg", alt: "Computer Lab" },
  { src: "/media/homepage/mechanical-lab.jpg", alt: "Mechanical Lab" },
  { src: "/media/homepage/physics-lab.jpg", alt: "Physics Lab" },
  { src: "/media/homepage/playground.jpg", alt: "Playground" },
  { src: "/media/homepage/canteen.jpg", alt: "College Canteen" },
  { src: "/media/homepage/campus-view-1.jpg", alt: "Campus View" },
  { src: "/media/homepage/campus-view-2.jpg", alt: "Campus View" },
  { src: "/media/homepage/campus-view-3.jpg", alt: "Campus View" },
  { src: "/media/homepage/workshop.jpg", alt: "Workshop" },
  { src: "/media/homepage/fresher-party.jpg", alt: "Fresher Party" },
  { src: "/media/homepage/industrial-visit.jpg", alt: "Industrial Visit" },
  { src: "/media/homepage/blood-donation.jpg", alt: "Blood Donation Camp" },
  { src: "/media/homepage/ict-academy.jpg", alt: "ICT Academy" },
  { src: "/media/homepage/nba-accreditation.jpg", alt: "NBA Accreditation" },
  { src: "/media/homepage/placement-students.jpg", alt: "Placement Students" },
];

type VideoItem = { name: string; department: string; src: string; ratio: "9:16" | "16:9" };

export function GallerySection() {
  const [showAllImages, setShowAllImages] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const visibleImages = showAllImages ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 8);

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src);
    setCurrentImageIndex(index);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const images = visibleImages;
    const newIndex = direction === "next"
      ? (currentImageIndex + 1) % images.length
      : (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(images[newIndex].src);
  };

  return (
    <section className="bg-white" aria-label="Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-3 sm:mb-4">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight">
            Life at MBSCET
          </h2>
        </div>

        {/* Featured Video - 16:9 */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="relative w-full bg-[#00274C] rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={FEATURED_VIDEO.src}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title={FEATURED_VIDEO.title}
            />
          </div>
          <div className="mt-3 sm:mt-4">
            <h3 className="text-base sm:text-lg font-bold text-[#00274C]">{FEATURED_VIDEO.title}</h3>
            <p className="text-xs sm:text-sm text-[#5C6370]">{FEATURED_VIDEO.description}</p>
          </div>
        </div>

        {/* Testimonial Videos - 9:16 */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00274C] mb-6 sm:mb-8">
            Student Testimonials
          </h3>
          
          {/* Mobile: Horizontal scroll for testimonial videos */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <div
                key={video.name}
                className="relative cursor-pointer group flex-shrink-0 snap-start"
                style={{ width: "calc(40vw - 12px)", minWidth: "140px", maxWidth: "180px" }}
                onClick={() => setPlayingVideo(video)}
              >
                {/* 9:16 container */}
                <div className="relative w-full bg-[#00274C] rounded-lg overflow-hidden" style={{ paddingBottom: "177.78%" }}>
                  <video
                    src={video.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    preload="metadata"
                    playsInline
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-active:bg-black/10 transition-colors">
                    <div className="size-10 sm:size-12 flex items-center justify-center bg-[#FFCB05] rounded-full group-active:scale-110 transition-transform">
                      <FaPlay className="text-[#00274C] text-xs sm:text-sm ml-0.5" />
                    </div>
                  </div>
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                  <p className="text-white text-[10px] sm:text-xs font-bold truncate">{video.name}</p>
                  <p className="text-white/60 text-[8px] sm:text-[10px]">{video.department}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid for testimonial videos */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <div
                key={video.name}
                className="relative cursor-pointer group"
                onClick={() => setPlayingVideo(video)}
              >
                {/* 9:16 container */}
                <div className="relative w-full bg-[#00274C] rounded-lg overflow-hidden" style={{ paddingBottom: "177.78%" }}>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00274C]">
              Campus Photos
            </h3>
            <button
              onClick={() => setShowAllImages(!showAllImages)}
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors py-2 sm:py-0"
            >
              <FaImages className="text-xs" />
              {showAllImages ? "Show Less" : `View All (${GALLERY_IMAGES.length})`}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {visibleImages.map((image, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group rounded-md"
                onClick={() => openLightbox(image.src, i)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-active:bg-black/20 transition-colors flex items-center justify-center">
                  <FaExpand className="text-white opacity-0 group-active:opacity-100 transition-opacity text-sm sm:text-base" />
                </div>
              </div>
            ))}
          </div>

          {!showAllImages && GALLERY_IMAGES.length > 8 && (
            <div className="text-center mt-6 sm:mt-8">
              <button
                onClick={() => setShowAllImages(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#00274C] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm font-bold hover:bg-[#1E406B] transition-colors w-full sm:w-auto"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 size-10 sm:size-12 flex items-center justify-center text-white hover:text-[#FFCB05] transition-colors z-10"
            aria-label="Close video"
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: playingVideo.ratio === "16:9" ? "min(95vw, 960px)" : "min(60vw, 350px)",
                maxWidth: playingVideo.ratio === "16:9" ? "95vw" : "180px",
                aspectRatio: playingVideo.ratio === "16:9" ? "16/9" : "9/16",
              }}
            >
              <video
                src={playingVideo.src}
                className="absolute inset-0 w-full h-full object-contain bg-black rounded-lg"
                controls
                autoPlay
              />
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-2 sm:p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 size-10 sm:size-12 flex items-center justify-center text-white hover:text-[#FFCB05] transition-colors z-10"
            aria-label="Close image"
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>
          
          {/* Navigation arrows - visible on all screens */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 size-10 sm:size-12 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white hover:text-[#FFCB05] transition-colors z-10"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 size-10 sm:size-12 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white hover:text-[#FFCB05] transition-colors z-10"
            aria-label="Next image"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>

          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Image counter */}
          <div className="mt-3 sm:mt-4 text-white/70 text-xs sm:text-sm">
            {currentImageIndex + 1} / {visibleImages.length}
          </div>
        </div>
      )}

      {/* Hide scrollbar utility */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
