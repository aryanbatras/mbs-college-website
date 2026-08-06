import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getProgramBySlug, getFaculty } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GenericDepartmentContent } from "@/components/sections/generic-department";

export default function CivilDepartmentPage() {
  const config = getSiteConfig();
  const program = getProgramBySlug("civil");
  const faculty = getFaculty("civil");
  if (!program) return null;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Academics", url: "/academics" }, { name: "Civil Department", url: "/academics/civil" }]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <GenericDepartmentContent
          program={program}
          faculty={faculty}
          heroImage="/media/general/2-1-1024x576.jpg"
          labs={["Survey Lab", "Fluid Mechanics Lab", "Strength of Materials Lab", "Geotechnical Engineering Lab", "Transportation Engineering Lab", "Environmental Engineering Lab"]}
          labImages={["/media/general/2-1-1024x576.jpg"]}
          alumniImages={[]}
          videos={[]}
          syllabus={[]}
          notices={[]}
          contactHod={{ name: "Mr. Gurmeet Singh", email: "hod.civil@mbscet.edu.in", phone: "+91-9419130161" }}
        />
      </main>
      <Footer config={config} />
    </>
  );
}
