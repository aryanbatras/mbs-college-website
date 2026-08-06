import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getProgramBySlug, getFaculty } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GenericDepartmentContent } from "@/components/sections/generic-department";

export default function ITDepartmentPage() {
  const config = getSiteConfig();
  const program = getProgramBySlug("it");
  const faculty = getFaculty("it");
  if (!program) return null;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Academics", url: "/academics" }, { name: "IT Department", url: "/academics/it" }]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <GenericDepartmentContent
          program={program}
          faculty={faculty}
          heroImage="/media/general/2-1024x768.jpeg"
          labs={["Programming Lab", "Web Technologies Lab", "Database Lab", "Network Lab", "Software Engineering Lab", "Cloud Computing Lab"]}
          labImages={["/media/general/2-1024x768.jpeg"]}
          alumniImages={[]}
          videos={[]}
          syllabus={[]}
          notices={[]}
          contactHod={{ name: "Mr. Surinder Kumar", email: "hod.it@mbscet.edu.in", phone: "+91-9419130161" }}
        />
      </main>
      <Footer config={config} />
    </>
  );
}
