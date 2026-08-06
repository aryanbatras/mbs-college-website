import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getProgramBySlug, getFaculty } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { CSEDepartmentContent } from "@/components/sections/cse-department";

export default function CSEDepartmentPage() {
  const config = getSiteConfig();
  const program = getProgramBySlug("cse");
  const faculty = getFaculty("cse");

  if (!program) return null;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Academics", url: "/academics" },
        { name: "CSE Department", url: "/academics/cse" },
      ]} />
      <main id="main-content" className="flex-1">
        <CSEDepartmentContent program={program} faculty={faculty} />
      </main>
      <Footer config={config} />
    </>
  );
}