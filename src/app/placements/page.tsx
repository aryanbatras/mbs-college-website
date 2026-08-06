import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { PlacementsContent } from "@/components/sections/placements-content";

export default function PlacementsPage() {
  const config = getSiteConfig();
  return (
    <>
      <main id="main-content" className="flex-1">
        <PlacementsContent />
      </main>
      <Footer config={config} />
    </>
  );
}
