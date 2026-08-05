import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/content";

interface ProgramsProps {
  programs: Program[];
}

const PROGRAM_IMAGES: Record<string, string> = {
  "computer-science": "/media/general/1-1024x579.jpg",
  "information-technology": "/media/general/2-1024x768.jpeg",
  "electronics-communication": "/media/general/1-1-1024x579.jpeg",
  "electrical": "/media/general/10-1024x768.jpeg",
  "mechanical": "/media/general/11-1024x768.jpg",
  "civil": "/media/general/2-1-1024x576.jpg",
  "mca": "/media/general/3-1024x576.jpeg",
};

export function ProgramsSection({ programs }: ProgramsProps) {
  const featured = programs[0];
  const rest = programs.slice(1);

  return (
    <section className="bg-surface" aria-label="Academic programs">
      <div className="page-container section-spacing">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
            Academics
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            Programs Offered
          </h2>
          <p className="text-base text-ink-muted mt-3 max-w-lg leading-relaxed">
            Seven undergraduate programs and one postgraduate program, each designed
            to prepare students for the demands of modern industry.
          </p>
        </div>

        {/* Featured program — large */}
        {featured && (
          <Link
            href={`/academics/${featured.slug}`}
            className="group block mb-6"
          >
            <div className="relative aspect-[16/7] overflow-hidden bg-ink/5">
              <img
                src={PROGRAM_IMAGES[featured.slug] || "/media/general/DSC_0123-1024x683.jpg"}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <span className="text-xs font-medium tracking-widest uppercase text-accent mb-2 block">
                  Featured Program
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-paper tracking-tight mb-2">
                  {featured.title}
                </h3>
                <p className="text-sm text-paper/70 max-w-md">
                  {featured.intake} seats &middot; {featured.duration} &middot; {featured.eligibility}
                </p>
              </div>
            </div>
          </Link>
        )}

        {/* Program grid — clean, no borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((program) => (
            <Link
              key={program.slug}
              href={`/academics/${program.slug}`}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 mb-3">
                <img
                  src={PROGRAM_IMAGES[program.slug] || "/media/general/DSC_0123-1024x683.jpg"}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-ink-muted mt-0.5">
                    {program.intake} seats &middot; {program.degree}
                  </p>
                </div>
                <ArrowRight className="size-4 mt-1 text-ink-faint group-hover:text-accent transition-colors shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
