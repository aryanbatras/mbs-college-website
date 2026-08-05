import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getNews } from "@/lib/content";
import { NewsArchive } from "@/components/sections/news-archive";

export default function NewsPage() {
  const config = getSiteConfig();
  const news = getNews();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <NewsArchive news={news} />
      </main>
      <Footer config={config} />
    </>
  );
}
