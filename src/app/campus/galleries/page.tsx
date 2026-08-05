import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { GalleriesContent } from "@/components/sections/galleries-content";

export default function GalleriesPage() {
  const config = getSiteConfig();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <GalleriesContent />
      </main>
      <Footer config={config} />
    </>
  );
}
