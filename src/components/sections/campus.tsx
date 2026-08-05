import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FACILITIES = [
  { name: "Computer Labs", image: "/media/general/1-1024x579.jpg" },
  { name: "Workshop", image: "/media/general/11-1024x768.jpg" },
  { name: "Seminar Hall", image: "/media/general/10-1024x768.jpeg" },
  { name: "Library", image: "/media/general/2-1024x768.jpeg" },
];

export function CampusSection() {
  return (
    <section className="bg-paper" aria-label="Campus facilities">
      <div className="page-container section-spacing">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
              Campus
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              Our Facilities
            </h2>
          </div>
          <Link
            href="/campus"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors group"
          >
            Explore campus
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Image grid — masonry-like */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {FACILITIES.map((facility, i) => (
            <div key={facility.name} className={`relative overflow-hidden bg-ink/5 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <div className={`${i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/3]"}`}>
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-ink/70 to-transparent">
                <span className="text-sm md:text-base font-medium text-paper">{facility.name}</span>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/campus"
          className="md:hidden inline-flex items-center gap-1.5 mt-8 text-sm font-medium text-ink hover:text-accent transition-colors group"
        >
          Explore campus
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
