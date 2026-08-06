import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getProgramBySlug, getFaculty } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GenericDepartmentContent } from "@/components/sections/generic-department";

export default function MCADepartmentPage() {
  const config = getSiteConfig();
  const program = getProgramBySlug("mca");
  const faculty = getFaculty("mca");
  if (!program) return null;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Academics", url: "/academics" }, { name: "MCA Department", url: "/academics/mca" }]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <GenericDepartmentContent
          program={program}
          faculty={faculty}
          heroImage="/media/general/3-1024x576.jpeg"
          labs={["Advanced Computing Lab", "Software Development Lab", "Database Systems Lab"]}
          labImages={["/media/general/3-1024x576.jpeg"]}
          alumniImages={[]}
          videos={[]}
          syllabus={[]}
          notices={[]}
          contactHod={{ name: "Dr. Amrik Singh", email: "hod.mca@mbscet.edu.in", phone: "+91-9419130161" }}
        />
      </main>
      <Footer config={config} />
    </>
  );
}
