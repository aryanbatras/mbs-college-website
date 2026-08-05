import Link from "next/link";
import { ArrowRight, FileText, Calendar } from "lucide-react";
import type { NewsArticle, Notice } from "@/lib/content";

interface NewsNoticesProps {
  news: NewsArticle[];
  notices: Notice[];
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function NewsNotices({ news, notices }: NewsNoticesProps) {
  const featured = news[0];
  const restNews = news.slice(1, 5);

  return (
    <section className="bg-paper" aria-label="Latest news and notices">
      <div className="page-container section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
          {/* News column */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-2">
                  Latest
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                  News & Events
                </h2>
              </div>
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors group"
              >
                View all
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Featured article — large with image */}
            {featured && (
              <Link href={`/news/${featured.slug}`} className="group block mb-10">
                <div className="relative aspect-[16/8] overflow-hidden bg-ink/5 mb-5">
                  {featured.image ? (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full bg-ink/5" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-faint mb-2.5">
                  <Calendar className="size-3" />
                  <span>{formatDate(featured.date)}</span>
                  <span>&middot;</span>
                  <span className="text-accent">{featured.category}</span>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                  {featured.title}
                </h3>
              </Link>
            )}

            {/* Other articles — compact list with images */}
            <div className="flex flex-col gap-6">
              {restNews.map((article) => (
                <Link key={article.slug} href={`/news/${article.slug}`} className="group flex gap-5">
                  {article.image && (
                    <div className="relative w-28 h-20 md:w-36 md:h-24 shrink-0 overflow-hidden bg-ink/5">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-ink-faint mb-1.5">
                      <span>{formatDate(article.date)}</span>
                      <span>&middot;</span>
                      <span className="text-accent">{article.category}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-medium text-ink group-hover:text-accent transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Notices column */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-2">
                  Official
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                  Notices
                </h2>
              </div>
              <Link
                href="/notices"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors group"
              >
                View all
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              {notices.map((notice) => (
                <div key={notice.slug} className="group">
                  <div className="flex items-start gap-3">
                    <FileText className="size-4 mt-0.5 text-ink-faint shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-ink leading-snug">
                        {notice.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] text-ink-faint mt-1.5">
                        <Calendar className="size-3" />
                        <span>{formatDate(notice.date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
