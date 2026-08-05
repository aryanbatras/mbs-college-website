import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { ProgramsSection } from "@/components/sections/programs";
import { AboutStrip } from "@/components/sections/about";
import { NewsNotices } from "@/components/sections/news-notices";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CampusSection } from "@/components/sections/campus";
import { ContactSection } from "@/components/sections/contact-form-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { PlacementSection } from "@/components/sections/placement-section";
import { ClubsSection } from "@/components/sections/clubs-section";
import { getSiteConfig, getPrograms, getLatestNews, getLatestNotices } from "@/lib/content";
import { EducationalOrgJsonLd } from "@/components/seo/json-ld";

export default function HomePage() {
  const config = getSiteConfig();
  const programs = getPrograms();
  const news = getLatestNews(5);
  const notices = getLatestNotices(5);

  return (
    <>
      <EducationalOrgJsonLd />
      <ScrollProgress />
      <Header config={config} />
      <main id="main-content">
        <Hero />
        <AboutStrip config={config} />
        <ProgramsSection programs={programs} />
        <CampusSection />
        <PlacementSection />
        <GallerySection />
        <ClubsSection />
        <NewsNotices news={news} notices={notices} />
        <TestimonialsSection />
        <ContactSection config={config} />
      </main>
      <Footer config={config} />
      <MobileCTA />
      <BackToTop />
    </>
  );
}
