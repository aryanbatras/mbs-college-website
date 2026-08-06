import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { ClubsContent } from "@/components/sections/clubs-content";

export default function ClubsPage() {
  const config = getSiteConfig();
  return (
    <>
      <main id="main-content" className="flex-1">
        <ClubsContent />
      </main>
      <Footer config={config} />
    </>
  );
}
