import Link from "next/link";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";
import type { NewsArticle, Notice } from "@/lib/content";

interface NewsNoticesProps {
  news: NewsArticle[];
  notices: Notice[];
}

export function NewsNotices({ news, notices }: NewsNoticesProps) {
  return (
    <section className="bg-white" aria-label="News and notices">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* News */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-2">
                  Latest News
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#00274C] tracking-tight">
                  What&apos;s Happening
                </h2>
              </div>
              <Link
                href="/news"
                className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors group"
              >
                View all
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-0 divide-y divide-[#E5E7EB]">
              {news.slice(0, 4).map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="block py-5 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <time className="text-xs font-medium text-[#9CA3AF]">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <h3 className="text-base font-semibold text-[#00274C] group-hover:text-[#FFCB05] transition-colors mt-1 leading-snug">
                        {article.title}
                      </h3>
                    </div>
                    <FaArrowRight className="text-[#9CA3AF] group-hover:text-[#FFCB05] transition-colors mt-1 shrink-0 text-xs" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Notices */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-2">
                  Official Notices
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#00274C] tracking-tight">
                  Important Updates
                </h2>
              </div>
              <Link
                href="/notices"
                className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors group"
              >
                View all
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-0 divide-y divide-[#E5E7EB]">
              {notices.slice(0, 4).map((notice) => (
                <Link
                  key={notice.slug}
                  href={`/notices/${notice.slug}`}
                  className="block py-5 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="size-8 flex items-center justify-center bg-[#FFCB05]/20 shrink-0 mt-0.5">
                        <FaFileAlt className="text-[#FFCB05] text-xs" />
                      </div>
                      <div>
                        <time className="text-xs font-medium text-[#9CA3AF]">
                          {new Date(notice.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                        <h3 className="text-base font-semibold text-[#00274C] group-hover:text-[#FFCB05] transition-colors mt-1 leading-snug">
                          {notice.title}
                        </h3>
                      </div>
                    </div>
                    <FaArrowRight className="text-[#9CA3AF] group-hover:text-[#FFCB05] transition-colors mt-1 shrink-0 text-xs" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
