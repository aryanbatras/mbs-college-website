import { FaExternalLinkAlt } from "react-icons/fa";

const IMPORTANT_LINKS = [
  { label: "Mandatory Disclosure", url: "https://www.mbscet.edu.in/mandatory-disclosure/" },
  { label: "AICTE Approvals", url: "https://www.mbscet.edu.in/acite_approvals" },
  { label: "Anti Ragging", url: "https://www.mbscet.edu.in/anti-ragging/" },
  { label: "Grievance Cell", url: "https://www.mbscet.edu.in/grievances-redressal-cell/" },
  { label: "Alumni Registration", url: "https://www.mbscet.edu.in/alumni-registration/" },
  { label: "Virtual Tour", url: "https://www.mbscet.edu.in/campus-virtual-tour/" },
  { label: "College Calendar", url: "https://www.mbscet.edu.in/college-calendar/" },
  { label: "College Magazine", url: "https://www.mbscet.edu.in/college-magazine/" },
  { label: "National Digital Library", url: "https://www.mbscet.edu.in/national-digital-library/" },
  { label: "JGate Journals", url: "https://www.mbscet.edu.in/jgate/" },
  { label: "AICTE Suggested Books", url: "https://www.mbscet.edu.in/ict-books/" },
  { label: "AICTE Feedback", url: "https://www.mbscet.edu.in/aicte-feedback/" },
];

export function ImportantLinks() {
  return (
    <section className="bg-[#F9FAFB]" aria-label="Important Links">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00274C] tracking-tight">
            Important Links
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {IMPORTANT_LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-4 bg-white hover:bg-[#00274C] transition-colors"
            >
              <span className="text-sm font-medium text-[#00274C] group-hover:text-white transition-colors flex-1">
                {link.label}
              </span>
              <FaExternalLinkAlt className="text-[10px] text-[#9CA3AF] group-hover:text-gray-400 transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
