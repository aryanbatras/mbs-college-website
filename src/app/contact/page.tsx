import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { ContactContent } from "@/components/sections/contact-content";

export default function ContactPage() {
  const config = getSiteConfig();
  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <ContactContent config={config} />
      </main>
      <Footer config={config} />
    </>
  );
}
