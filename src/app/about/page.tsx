import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { AboutContent } from "@/components/sections/about-content";
import { CollegeJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export default function AboutPage() {
  const config = getSiteConfig();
  return (
    <>
      <CollegeJsonLd />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
      ]} />
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <AboutContent config={config} />
      </main>
      <Footer config={config} />
    </>
  );
}
