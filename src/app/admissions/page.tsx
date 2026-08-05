import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { AdmissionsContent } from "@/components/sections/admissions-content";

export default function AdmissionsPage() {
  const config = getSiteConfig();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <AdmissionsContent config={config} />
      </main>
      <Footer config={config} />
    </>
  );
}
