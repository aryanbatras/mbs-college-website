import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SiteConfig } from "@/lib/content";

interface AboutStripProps {
  config: SiteConfig;
}

export function AboutStrip({ config }: AboutStripProps) {
  return (
    <section className="bg-paper" aria-label="About the college">
      <div className="page-container section-spacing">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Our Vision
          </p>
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-ink leading-relaxed tracking-tight">
            &ldquo;{config.vision}&rdquo;
          </blockquote>
          <div className="mt-8 md:mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors group"
            >
              Learn more about us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
