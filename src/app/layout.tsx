import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteBackground } from "@/components/layout/site-background";
import { RouteLoadingIndicator } from "@/components/ui/route-loading";
import { ScrollToTop } from "@/components/ui/page-transition";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { getSiteConfig } from "@/lib/content";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "MBSCET | Mahant Bachittar Singh College of Engineering & Technology",
    template: "%s | MBSCET",
  },
  description:
    "AICTE approved engineering college affiliated to University of Jammu. B.E. programs in CSE, IT, ECE, EE, ME, Civil, AI&ML, and MCA. Jammu, J&K 181101.",
  keywords: [
    "MBSCET",
    "engineering college Jammu",
    "B.E. admission J&K",
    "JKCET",
    "University of Jammu",
    "AICTE approved",
    "Sikh minority institution",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MBSCET",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const config = getSiteConfig();
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col pb-16 lg:pb-0">
        <SiteBackground />
        <RouteLoadingIndicator />
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#003366] focus:text-[#FFD700] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:outline-none"
        >
          Skip to main content
        </a>
        {/* Header rendered OUTSIDE SmoothScroll so fixed positioning works */}
        <Header config={config} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
