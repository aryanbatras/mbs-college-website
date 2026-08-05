import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { ChairmanContent } from "@/components/sections/chairman-content";

export default function ChairmanPage() {
  const config = getSiteConfig();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <ChairmanContent />
      </main>
      <Footer config={config} />
    </>
  );
}
