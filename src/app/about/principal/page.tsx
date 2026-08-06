import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { PrincipalContent } from "@/components/sections/principal-content";

export default function PrincipalPage() {
  const config = getSiteConfig();
  return (
    <>
      <main id="main-content" className="flex-1">
        <PrincipalContent />
      </main>
      <Footer config={config} />
    </>
  );
}
