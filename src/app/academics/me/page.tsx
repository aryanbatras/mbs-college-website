import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getProgramBySlug, getFaculty } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GenericDepartmentContent } from "@/components/sections/generic-department";

export default function MEDepartmentPage() {
  const config = getSiteConfig();
  const program = getProgramBySlug("me");
  const faculty = getFaculty("me");
  if (!program) return null;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Academics", url: "/academics" }, { name: "ME Department", url: "/academics/me" }]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <GenericDepartmentContent
          program={program}
          faculty={faculty}
          heroImage="/media/general/11-1024x768.jpg"
          labs={["CAD/CAM Lab", "Fluid Mechanics Lab", "Thermal Engineering Lab", "Manufacturing Processes Lab", "Strength of Materials Lab", "Theory of Machines Lab", "Project Lab"]}
          labImages={["/media/general/11-1024x768.jpg"]}
          alumniImages={[]}
          videos={[]}
          syllabus={[{ title: "ME Syllabus", file: "/docs/me/syllabus.pdf" }]}
          notices={[]}
          contactHod={{ name: "Dr. Ritesh Sharma", email: "hod.me@mbscet.edu.in", phone: "+91-9419130161" }}
        />
      </main>
      <Footer config={config} />
    </>
  );
}
