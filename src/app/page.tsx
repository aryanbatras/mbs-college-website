import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { StatBand } from "@/components/sections/stats";
import { ProgramsSection } from "@/components/sections/programs";
import { AboutStrip } from "@/components/sections/about";
import { NewsNotices } from "@/components/sections/news-notices";
import { PlacementsSection } from "@/components/sections/placements";
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
        <ProgramsSection programs={programs} />
        <AboutStrip config={config} />
        <NewsNotices news={news} notices={notices} />
        <PlacementsSection />
        <CampusSection />
        <ContactCTA config={config} />
      </main>
      <Footer config={config} />
    </>
  );
}
