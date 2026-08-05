import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { PrincipalContent } from "@/components/sections/principal-content";

export default function PrincipalPage() {
  const config = getSiteConfig();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <PrincipalContent />
      </main>
      <Footer config={config} />
    </>
  );
}
