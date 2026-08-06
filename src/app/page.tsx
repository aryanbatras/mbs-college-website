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
        {/* Hero - subtle slow parallax */}
        <div data-speed="0.8">
          <Hero />
        </div>

        {/* About - medium parallax for depth */}
        <div data-speed="0.9">
          <AboutStrip config={config} />
        </div>

        {/* Management - normal speed */}
        <div data-speed="1">
          <ManagementSection config={config} />
        </div>

        {/* Programs - slight fast parallax */}
        <div data-speed="1.1">
          <ProgramsSection />
        </div>

        {/* Campus - slow parallax for depth */}
        <div data-speed="0.85">
          <CampusSection />
        </div>

        {/* Activities - normal speed */}
        <div data-speed="1">
          <ActivitiesSection />
        </div>

        {/* Placement - subtle parallax */}
        <div data-speed="0.95">
          <PlacementSection />
        </div>

        {/* Gallery - normal speed */}
        <div data-speed="1">
          <GallerySection />
        </div>

        {/* Clubs - slight fast parallax */}
        <div data-speed="1.05">
          <ClubsSection />
        </div>

        {/* Important Links - normal speed */}
        <div data-speed="1">
          <ImportantLinks />
        </div>

        {/* Campus News - slow parallax */}
        <div data-speed="0.9">
          <CampusNewsSection />
        </div>

        {/* News & Notices - normal speed */}
        <div data-speed="1">
          <NewsNotices news={news} notices={notices} />
        </div>

        {/* Testimonials - subtle parallax */}
        <div data-speed="0.95">
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
