import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { VideoGalleryContent } from "@/components/sections/video-gallery-content";

export default function VideoGalleryPage() {
  const config = getSiteConfig();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <VideoGalleryContent />
      </main>
      <Footer config={config} />
    </>
  );
}
