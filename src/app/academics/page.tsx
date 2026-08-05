import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getPrograms } from "@/lib/content";
import { AcademicsOverview } from "@/components/sections/academics-overview";

export default function AcademicsPage() {
  const config = getSiteConfig();
  const programs = getPrograms();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <AcademicsOverview programs={programs} />
      </main>
      <Footer config={config} />
    </>
  );
}
