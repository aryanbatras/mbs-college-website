import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";

import { Hero } from "@/components/sections/hero";
import { AboutStrip } from "@/components/sections/about";
import { ManagementSection } from "@/components/sections/management-section";
import { ProgramsSection } from "@/components/sections/programs";
import { CampusSection } from "@/components/sections/campus";
import { ActivitiesSection } from "@/components/sections/activities-section";
import { PlacementSection } from "@/components/sections/placement-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ClubsSection } from "@/components/sections/clubs-section";
import { ImportantLinks } from "@/components/sections/important-links";
import { CampusNewsSection } from "@/components/sections/campus-news";
import { NewsNotices } from "@/components/sections/news-notices";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact-form-section";
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
      <Header config={config} />
      <main id="main-content">
        {/* Hero - slow parallax with lag for dreamy effect */}
        <div data-speed="0.7" data-lag="0.5">
          <Hero />
        </div>

        {/* About - medium parallax with slight lag */}
        <div data-speed="0.85" data-lag="0.3">
          <AboutStrip config={config} />
        </div>

        {/* Management - normal speed, no lag */}
        <div data-speed="1">
          <ManagementSection config={config} />
        </div>

        {/* Programs - fast parallax for energy */}
        <div data-speed="1.15" data-lag="0.2">
          <ProgramsSection />
        </div>

        {/* Campus - slow parallax for depth */}
        <div data-speed="0.8" data-lag="0.4">
          <CampusSection />
        </div>

        {/* Activities - normal speed */}
        <div data-speed="1">
          <ActivitiesSection />
        </div>

        {/* Placement - subtle parallax with lag */}
        <div data-speed="0.9" data-lag="0.25">
          <PlacementSection />
        </div>

        {/* Gallery - normal speed */}
        <div data-speed="1">
          <GallerySection />
        </div>

        {/* Clubs - fast parallax */}
        <div data-speed="1.1" data-lag="0.15">
          <ClubsSection />
        </div>

        {/* Important Links - normal speed */}
        <div data-speed="1">
          <ImportantLinks />
        </div>

        {/* Campus News - medium parallax */}
        <div data-speed="0.85" data-lag="0.3">
          <CampusNewsSection />
        </div>

        {/* News & Notices - normal speed */}
        <div data-speed="1">
          <NewsNotices news={news} notices={notices} />
        </div>

        {/* Testimonials - subtle parallax */}
        <div data-speed="0.9" data-lag="0.2">
          <TestimonialsSection />
        </div>

        {/* Contact - normal speed */}
        <div data-speed="1">
          <ContactSection config={config} />
        </div>
      </main>
      <Footer config={config} />
      <BackToTop />
    </>
  );
}
