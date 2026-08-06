import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getNotices } from "@/lib/content";
import { NoticesArchive } from "@/components/sections/notices-archive";

export default function NoticesPage() {
  const config = getSiteConfig();
  const notices = getNotices();
  return (
    <>
      <main id="main-content" className="flex-1">
        <NoticesArchive notices={notices} />
      </main>
      <Footer config={config} />
    </>
  );
}
