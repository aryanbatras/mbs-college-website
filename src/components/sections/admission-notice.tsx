import Link from "next/link";
import { FaArrowRight, FaDownload, FaExclamationTriangle } from "react-icons/fa";

export function AdmissionNotice() {
  return (
    <section className="bg-gray-100" aria-label="Admission Notice">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="size-10 flex items-center justify-center bg-[#00274C] shrink-0">
              <FaExclamationTriangle className="text-gray-400 text-sm" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00274C] mb-2">
                B.Tech Admission 2026-27
              </h2>
              <p className="text-sm text-[#00274C]/70 max-w-xl">
                Session 2026-27 has started. Limited seats available across all departments. 
                Apply before the last date. Total sanctioned intake: 330 seats.
              </p>
              <p className="text-xs text-[#00274C]/50 mt-2">
                Employment Notice 2026 — Last date to apply: 5th August, 2026
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.mbscet.edu.in/wp-content/uploads/2026/06/B.Tech-2026-Admission-Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00274C] text-gray-400 px-6 py-3 text-sm font-bold hover:bg-[#1E406B] transition-colors"
            >
              <FaDownload className="text-xs" />
              Download Form
            </a>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 border-2 border-[#00274C] text-[#00274C] px-6 py-3 text-sm font-bold hover:bg-[#00274C] hover:text-gray-400 transition-colors"
            >
              Admission Details
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
