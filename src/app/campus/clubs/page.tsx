import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { ClubsContent } from "@/components/sections/clubs-content";

export default function ClubsPage() {
  const config = getSiteConfig();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <ClubsContent />
      </main>
      <Footer config={config} />
    </>
  );
}
