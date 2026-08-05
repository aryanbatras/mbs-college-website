import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { BackToTop } from "@/components/ui/back-to-top";
import { Hero } from "@/components/sections/hero";
import { StatBand } from "@/components/sections/stats";
import { RankingsSection } from "@/components/sections/rankings";
import { ProgramsSection } from "@/components/sections/programs";
import { AboutStrip } from "@/components/sections/about";
import { NewsNotices } from "@/components/sections/news-notices";
import { EventsSection } from "@/components/sections/events";
import { PlacementsSection } from "@/components/sections/placements";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CampusSection } from "@/components/sections/campus";
import { ContactCTA } from "@/components/sections/contact-cta";
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
        <Hero />
        <StatBand />
        <RankingsSection />
        <ProgramsSection programs={programs} />
        <AboutStrip config={config} />
        <EventsSection />
        <NewsNotices news={news} notices={notices} />
        <PlacementsSection />
        <TestimonialsSection />
        <CampusSection />
        <ContactCTA config={config} />
      </main>
      <Footer config={config} />
      <MobileCTA />
      <BackToTop />
    </>
  );
}
