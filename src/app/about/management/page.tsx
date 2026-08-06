import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { ManagementContent } from "@/components/sections/management-content";

export default function ManagementPage() {
  const config = getSiteConfig();
  return (
    <>
      <main id="main-content" className="flex-1">
        <ManagementContent />
      </main>
      <Footer config={config} />
    </>
  );
}
