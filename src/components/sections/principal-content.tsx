"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function PrincipalContent() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
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
          Principal&apos;s Desk
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="size-20 border border-line bg-surface flex items-center justify-center">
            <span className="font-heading text-lg text-ink-faint">DK</span>
          </div>
          <div>
            <div className="font-heading text-lg font-bold text-ink">Dr. Dinesh Kumar Gupta</div>
            <div className="text-sm text-ink-faint">Director-cum-Principal</div>
            <div className="text-xs text-ink-faint">MBSCET, Jammu</div>
          </div>
        </div>

        <div className="border-l-2 border-accent pl-6 mb-8">
          <Quote className="mb-2 size-4 text-accent" />
          <blockquote className="text-base leading-relaxed text-ink-muted italic">
            Welcome to Mahant Bachittar Singh College of Engineering and Technology. As the
            Director-cum-Principal, I am proud to lead an institution that has been shaping
            competent engineers since 1999.
          </blockquote>
        </div>

        <div className="flex flex-col gap-4 text-sm leading-relaxed text-ink-muted">
          <p>
            Our college offers eight B.E. programs (CSE, IT, ECE, EE, ME, Civil, AI&amp;ML) and
            MCA, with a combined intake of over 360 students annually. We are committed to
            providing contemporary education while fostering research, innovation, and
            professional ethics.
          </p>
          <p>
            Our faculty includes PhD-qualified professors and experienced assistant professors
            who bring both academic rigor and industry relevance to the classroom. We regularly
            organize workshops, seminars, industrial visits, and training programs to bridge
            the gap between academia and industry.
          </p>
          <p>
            The Training and Placement Cell works actively to connect our students with
            industry opportunities, conducting campus recruitment drives and technical training
            programs including Python, Machine Learning, Power BI, and Digital Marketing.
          </p>
          <p>
            I invite prospective students and parents to visit our campus and experience the
            academic environment at MBSCET.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
