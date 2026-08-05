import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getNews } from "@/lib/content";
import { NewsArticlePage } from "@/components/sections/news-article";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getNews().map((article) => ({ slug: article.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = getSiteConfig();
  const articles = getNews();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  return (
    <>
      <ArticleJsonLd article={article} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "News", url: "/news" },
        { name: article.title, url: `/news/${article.slug}` },
      ]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <NewsArticlePage article={article} />
      </main>
      <Footer config={config} />
    </>
  );
}
