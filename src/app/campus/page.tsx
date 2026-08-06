import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { CampusContent } from "@/components/sections/campus-content";

export default function CampusPage() {
  const config = getSiteConfig();
  return (
    <>
      <main id="main-content" className="flex-1">
        <CampusContent />
      </main>
      <Footer config={config} />
    </>
  );
}
