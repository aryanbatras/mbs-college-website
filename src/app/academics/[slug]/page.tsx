import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getPrograms, getFaculty } from "@/lib/content";
import { DepartmentContent } from "@/components/sections/department-content";
import { CourseJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getPrograms().map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = getSiteConfig();
  const programs = getPrograms();
  const program = programs.find((p) => p.slug === slug);
  if (!program) return notFound();

  const facultyMap: Record<string, string> = {
    cse: "cse",
    it: "cse",
    ee: "ee",
    ece: "ece",
    me: "me",
    civil: "ce",
    mca: "mca",
  };
  const facultyCode = facultyMap[slug] || slug;
  const faculty = getFaculty(facultyCode);

  return (
    <>
      <CourseJsonLd program={program} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Academics", url: "/academics" },
        { name: program.title, url: `/academics/${program.slug}` },
      ]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <DepartmentContent program={program} faculty={faculty} />
      </main>
      <Footer config={config} />
    </>
  );
}
