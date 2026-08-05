import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { BackToTop } from "@/components/ui/back-to-top";
import { ChatWidget } from "@/components/ui/chat-widget";
import { Hero } from "@/components/sections/hero";
import { StatBand } from "@/components/sections/stats";
import { RankingsSection } from "@/components/sections/rankings";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProgramsSection } from "@/components/sections/programs";
import { PartnersSection } from "@/components/sections/partners";
import { AboutStrip } from "@/components/sections/about";
import { EventsSection } from "@/components/sections/events";
import { NewsNotices } from "@/components/sections/news-notices";
import { PlacementsSection } from "@/components/sections/placements";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { AlumniStories } from "@/components/sections/alumni-stories";
import { ResearchSection } from "@/components/sections/research";
import { CampusSection } from "@/components/sections/campus";
import { CampusMap } from "@/components/sections/campus-map";
import { VideoSection } from "@/components/sections/video-section";
import { SocialFeed } from "@/components/sections/social-feed";
import { FAQSection } from "@/components/sections/faq";
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
        <WhyChooseUs />
        <ProgramsSection programs={programs} />
        <PartnersSection />
        <AboutStrip config={config} />
        <EventsSection />
        <NewsNotices news={news} notices={notices} />
        <PlacementsSection />
        <TestimonialsSection />
        <AlumniStories />
        <ResearchSection />
        <CampusSection />
        <CampusMap />
        <VideoSection />
        <SocialFeed />
        <FAQSection />
        <ContactCTA config={config} />
      </main>
      <Footer config={config} />
      <MobileCTA />
      <BackToTop />
      <ChatWidget />
    </>
  );
}
