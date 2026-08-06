import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig, getProgramBySlug, getFaculty } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GenericDepartmentContent } from "@/components/sections/generic-department";

export default function EEDepartmentPage() {
  const config = getSiteConfig();
  const program = getProgramBySlug("ee");
  const faculty = getFaculty("ee");
  if (!program) return null;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Academics", url: "/academics" }, { name: "EE Department", url: "/academics/ee" }]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <GenericDepartmentContent
          program={program}
          faculty={faculty}
          heroImage="/media/general/10-1024x768.jpeg"
          labs={["Electrical Machines Lab", "Power Electronics Lab", "Control Systems Lab", "Power Systems Lab", "Measurements & Instrumentation Lab", "Network Analysis Lab", "Project Lab"]}
          labImages={["/media/ee/labs/lab1.png", "/media/ee/labs/lab2.png", "/media/ee/labs/lab3.png"]}
          alumniImages={["/media/ee/alumni/e1.png", "/media/ee/alumni/e2.png", "/media/ee/alumni/e3.png", "/media/ee/alumni/e4.png", "/media/ee/alumni/e6.png", "/media/ee/alumni/e7.png", "/media/ee/alumni/karamdeep.jpg", "/media/ee/alumni/prabjyot.jpg"]}
          videos={[]}
          syllabus={[{ title: "EE Syllabus", file: "/docs/ee/syllabus.pdf" }]}
          notices={[]}
          contactHod={{ name: "Dr. Nitin Langer", email: "hod.ee@mbscet.edu.in", phone: "+91-9419130161" }}
        />
      </main>
      <Footer config={config} />
    </>
  );
}
