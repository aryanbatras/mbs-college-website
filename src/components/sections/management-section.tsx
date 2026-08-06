import type { SiteConfig } from "@/lib/content";

interface ManagementSectionProps {
  config: SiteConfig;
}

export function ManagementSection({ config }: ManagementSectionProps) {
  if (!config.management || config.management.length === 0) return null;

  return (
    <section className="bg-white" aria-label="College Management">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-4">
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight">
            College Administration
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {config.management.map((person) => (
            <div key={person.name} className="text-center">
              <div className="aspect-[3/4] overflow-hidden mb-4 bg-[#F9FAFB]">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-bold text-[#00274C] mb-1">{person.name}</h3>
              <p className="text-xs text-[#5C6370]">{person.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
