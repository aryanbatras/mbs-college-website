import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { ChairmanContent } from "@/components/sections/chairman-content";

export default function ChairmanPage() {
  const config = getSiteConfig();
  return (
    <>
      <main id="main-content" className="flex-1">
        <ChairmanContent />
      </main>
      <Footer config={config} />
    </>
  );
}
