"use client";

import { motion } from "motion/react";
import { Building2 } from "lucide-react";

const MANAGEMENT = [
  { role: "Chairman", name: "Prof. Amar Singh Sudan", trust: "Sant Manjit Singh Trust" },
  { role: "Director-cum-Principal", name: "Dr. Dinesh Kumar Gupta", trust: "" },
  { role: "Vice-Principal", name: "Office of the Vice-Principal", trust: "" },
  { role: "Dean Academics", name: "Office of the Dean", trust: "" },
];

const TRUST_INFO = {
  name: "Sant Manjit Singh Trust",
  heritage: "Dera Sant Pura Nangali Sahib",
  established: "The trust was established to promote technical and professional education in the Jammu region, with a focus on serving the Sikh minority community and the broader society.",
};

export function ManagementContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="inline-block size-1.5 bg-accent" />
          ABOUT
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
          College Management
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          MBSCET is managed by the Sant Manjit Singh Trust, operating under the aegis of
          Dera Sant Pura Nangali Sahib. The college administration is led by a dedicated
          team of educators and administrators.
        </p>
      </motion.div>

      {/* Trust info */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 border border-line p-6"
      >
        <div className="flex items-center gap-3 mb-3">
          <Building2 className="size-5 text-accent" />
          <h2 className="font-heading text-xl font-bold text-ink">{TRUST_INFO.name}</h2>
        </div>
        <div className="text-xs text-ink-faint mb-2">{TRUST_INFO.heritage}</div>
        <p className="text-sm leading-relaxed text-ink-muted">{TRUST_INFO.established}</p>
      </motion.section>

      {/* Management team */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Administration</h2>
        <div className="mt-4 flex flex-col gap-0">
          {MANAGEMENT.map((member, i) => (
            <div key={i} className="flex items-start gap-4 border-b border-line py-5 last:border-b-0">
              <div className="size-12 shrink-0 border border-line bg-surface flex items-center justify-center">
                <span className="font-heading text-sm text-ink-faint">
                  {member.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                </span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-accent mb-1">{member.role}</div>
                <div className="font-heading text-base font-semibold text-ink">{member.name}</div>
                {member.trust && (
                  <div className="text-xs text-ink-faint mt-0.5">{member.trust}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
