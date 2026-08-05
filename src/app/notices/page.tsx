import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getNotices } from "@/lib/content";
import { NoticesArchive } from "@/components/sections/notices-archive";

export default function NoticesPage() {
  const config = getSiteConfig();
  const notices = getNotices();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <NoticesArchive notices={notices} />
      </main>
      <Footer config={config} />
    </>
  );
}
