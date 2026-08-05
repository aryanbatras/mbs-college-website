"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight, FileText, GraduationCap, Newspaper } from "lucide-react";
import Link from "next/link";

interface SearchResult {
  title: string;
  href: string;
  type: "page" | "program" | "news";
  description?: string;
}

const STATIC_RESULTS: SearchResult[] = [
  { title: "About the College", href: "/about", type: "page", description: "Learn about MBSCET's history and mission" },
  { title: "Computer Science", href: "/academics/computer-science", type: "program", description: "B.E. in Computer Science & Engineering" },
  { title: "Information Technology", href: "/academics/information-technology", type: "program", description: "B.E. in Information Technology" },
  { title: "Electronics & Communication", href: "/academics/electronics-communication", type: "program", description: "B.E. in Electronics & Communication" },
  { title: "Electrical Engineering", href: "/academics/electrical", type: "program", description: "B.E. in Electrical Engineering" },
  { title: "Mechanical Engineering", href: "/academics/mechanical", type: "program", description: "B.E. in Mechanical Engineering" },
  { title: "Civil Engineering", href: "/academics/civil", type: "program", description: "B.E. in Civil Engineering" },
  { title: "MCA", href: "/academics/mca", type: "program", description: "Master of Computer Applications" },
  { title: "Admissions", href: "/admissions", type: "page", description: "Apply for B.E. and MCA programs" },
  { title: "Placements", href: "/placements", type: "page", description: "Training & Placement cell" },
  { title: "Campus Facilities", href: "/campus", type: "page", description: "Labs, library, hostels, and more" },
  { title: "News & Events", href: "/news", type: "news", description: "Latest news and announcements" },
  { title: "Notices", href: "/notices", type: "page", description: "Official notices and circulars" },
  { title: "Contact Us", href: "/contact", type: "page", description: "Get in touch with MBSCET" },
  { title: "Chairman's Desk", href: "/about/chairman", type: "page", description: "Message from the Chairman" },
  { title: "Principal's Desk", href: "/about/principal", type: "page", description: "Message from the Principal" },
];

const TYPE_ICONS = {
  page: FileText,
  program: GraduationCap,
  news: Newspaper,
};

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const search = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const filtered = STATIC_RESULTS.filter(
      (r) =>
        r.title.toLowerCase().includes(q.toLowerCase()) ||
        r.description?.toLowerCase().includes(q.toLowerCase())
    );
    setResults(filtered);
  }, []);

  useEffect(() => {
    search(query);
  }, [query, search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs text-ink-muted bg-ink/[0.03] hover:bg-ink/[0.06] transition-colors"
        aria-label="Search"
      >
        <Search className="size-3.5" />
        <span className="hidden md:inline">Search</span>
        <kbd className="hidden md:inline text-[10px] text-ink-faint font-mono">⌘K</kbd>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-ink/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-[15vh] max-w-xl w-full bg-white shadow-2xl shadow-ink/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-ink/10">
                <Search className="size-5 text-ink-faint" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search programs, pages, news..."
                  className="flex-1 text-base text-ink placeholder:text-ink-faint outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-ink-faint hover:text-ink transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto">
                {query && results.length === 0 && (
                  <div className="px-5 py-8 text-center text-sm text-ink-muted">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                )}
                {results.map((result) => {
                  const Icon = TYPE_ICONS[result.type];
                  return (
                    <Link
                      key={result.href}
                      href={result.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-ink/[0.03] transition-colors"
                    >
                      <div className="size-8 flex items-center justify-center bg-ink/[0.05]">
                        <Icon className="size-4 text-ink-faint" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-ink">{result.title}</div>
                        {result.description && (
                          <div className="text-xs text-ink-muted mt-0.5 truncate">{result.description}</div>
                        )}
                      </div>
                      <ArrowRight className="size-4 text-ink-faint" />
                    </Link>
                  );
                })}
                {!query && (
                  <div className="px-5 py-6 text-center text-sm text-ink-muted">
                    Type to search across all pages and programs
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-ink/10 flex items-center justify-between text-[11px] text-ink-faint">
                <span>Navigate with ↑↓</span>
                <span>Select with ↵</span>
                <span>Close with Esc</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
