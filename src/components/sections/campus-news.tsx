import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CAMPUS_NEWS = [
  {
    title: "Five-Days Faculty Development Programme on Digital Marketing at MBSCET",
    date: "July 28, 2026",
    slug: "2026-07-27-five-days-faculty-development-programme-on-digital-marketing",
  },
  {
    title: "MBSCET Organizes Campus Placement Drive with Kandhari Beverages Pvt. Ltd.",
    date: "June 21, 2026",
    slug: "2026-07-27-mbscet-mbs-organizes-campus-placement-drive-with-kandhari-be",
  },
  {
    title: "MBSCET Organized Seminar on the Concept of Financial Literacy",
    date: "June 13, 2026",
    slug: "2026-07-27-mbscet-organized-seminar-on-the-concept-of-financial-literac",
  },
  {
    title: "Department of IT Organized One Day Session on PowerBI",
    date: "May 2024",
    slug: "2026-07-27-department-of-i-t-organized-one-day-session-on-powerbi-on-19",
  },
  {
    title: "GDG 'Build with AI' Workshop held at MBSCET Jammu",
    date: "May 11, 2024",
    slug: "2026-07-27-mbscet-jammu-organized-guest-lecture-on-ubiquitous-artificia",
  },
  {
    title: "MBSCET Organizes Seminar on Applications of AI in Association with Industry",
    date: "May 2024",
    slug: "2026-07-27-mbscet-organizes-seminar-on-applications-of-ai-in-associatio",
  },
  {
    title: "Five-Day Workshop on Python Libraries: NumPy, Pandas, Tkinter Concluded",
    date: "April 2024",
    slug: "2026-07-27-python-libraries-numpy-pandas-tkinter-workshop-concluded",
  },
  {
    title: "MBSCET Organized Guest Lecture on NEP 2020",
    date: "March 2024",
    slug: "2026-07-27-mbscet-organized-guest-lecture-on-nep-2020",
  },
];

export function CampusNewsSection() {
  return (
    <section className="bg-white" aria-label="Campus News">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
              Campus News
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00274C] tracking-tight">
              Latest Updates
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#00274C] hover:text-gray-400 transition-colors group"
          >
            View all
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAMPUS_NEWS.slice(0, 6).map((news) => (
            <Link
              key={news.slug}
              href={`/news/${news.slug}`}
              className="group p-6 bg-[#F9FAFB] hover:bg-[#00274C] transition-colors"
            >
              <time className="text-xs text-[#9CA3AF] group-hover:text-white/50 transition-colors">
                {news.date}
              </time>
              <h3 className="text-base font-medium text-[#00274C] group-hover:text-white transition-colors mt-2 leading-snug">
                {news.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Read more
                <FaArrowRight className="text-xs" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-base font-bold text-[#00274C] hover:text-gray-400 transition-colors"
          >
            View all news
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
