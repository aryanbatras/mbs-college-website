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
import {
  getSiteConfig,
  getPrograms,
  getLatestNews,
  getLatestNotices,
} from "@/lib/content";
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
        <Hero />

        <div data-speed="0.95">
          <AboutStrip config={config} />
        </div>

        <div data-speed="1.02">
          <ManagementSection config={config} />
        </div>

        <div data-speed="0.98">
          <ProgramsSection />
        </div>

        <div data-speed="1.03">
          <CampusSection />
        </div>

        <ActivitiesSection />

        <div data-speed="0.97">
          <PlacementSection />
        </div>

        <GallerySection />

        <div data-speed="1.01">
          <ClubsSection />
        </div>

        <ImportantLinks />

        <div data-speed="0.99">
          <CampusNewsSection />
        </div>

        <NewsNotices news={news} notices={notices} />

        <div data-speed="1.02">
          <TestimonialsSection />
        </div>

        <ContactSection config={config} />
      </main>
      <Footer config={config} />
      <BackToTop />
    </>
  );
}
