import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getProgramBySlug, getFaculty } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GenericDepartmentContent } from "@/components/sections/generic-department";

export default function ECEDepartmentPage() {
  const config = getSiteConfig();
  const program = getProgramBySlug("ece");
  const faculty = getFaculty("ece");
  if (!program) return null;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Academics", url: "/academics" }, { name: "ECE Department", url: "/academics/ece" }]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <GenericDepartmentContent
          program={program}
          faculty={faculty}
          heroImage="/media/general/1-1-1024x579.jpeg"
          labs={["Analog Electronics Lab", "Digital Electronics Lab", "Communication Systems Lab", "Signal Processing Lab", "VLSI Design Lab", "Microprocessor & Microcontroller Lab", "Project Lab"]}
          labImages={["/media/general/10-1024x768.jpeg"]}
          alumniImages={[]}
          videos={[]}
          syllabus={[{ title: "ECE Syllabus", file: "/docs/ece/syllabus.pdf" }]}
          notices={[]}
          contactHod={{ name: "Dr. Sanjeev Singh", email: "hod.ece@mbscet.edu.in", phone: "+91-9419130161" }}
        />
      </main>
      <Footer config={config} />
    </>
  );
}
