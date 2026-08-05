import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const RECRUITERS = [
  "Infosys",
  "Wipro",
  "TCS",
  "HCL Technologies",
  "Tech Mahindra",
  "Byju's",
  "Jaro Education",
  "Kandhari Beverages",
];

export function PlacementsSection() {
  return (
    <section className="bg-white" aria-label="Placement highlights">
      <div className="page-container section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left — content */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
              Placements
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink mb-6">
              Where Our Graduates Work
            </h2>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed mb-10 max-w-md">
              Our Training &amp; Placement cell works year-round to connect students with
              top employers. The highest package offered has reached ₹7.2 LPA, with
              an average of ₹4.5 LPA across all branches.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">₹7.2L</div>
                <div className="text-sm text-ink-muted mt-1">Highest Package</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">₹4.5L</div>
                <div className="text-sm text-ink-muted mt-1">Average Package</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">85%</div>
                <div className="text-sm text-ink-muted mt-1">Placement Rate</div>
              </div>
            </div>
            <Link
              href="/placements"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors group"
            >
              View placement details
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right — recruiter logos */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink-faint mb-6">
              Our Recruiters
            </p>
            <div className="grid grid-cols-2 gap-4">
              {RECRUITERS.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center h-16 md:h-20 bg-ink/[0.03] text-sm font-medium text-ink-muted hover:bg-ink/[0.06] transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
