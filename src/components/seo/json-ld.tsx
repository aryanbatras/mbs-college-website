import type { Program, NewsArticle } from "@/lib/content";

// EducationalOrganization - for homepage and about pages
export function EducationalOrgJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Mahant Bachittar Singh College of Engineering & Technology",
    alternateName: "MBSCET",
    url: "https://www.mbscet.edu.in",
    logo: "https://www.mbscet.edu.in/logo.png",
    description:
      "AICTE approved engineering college affiliated to University of Jammu, offering B.E. programs in CSE, IT, ECE, EE, ME, Civil, AI&ML, and MCA.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Babliana, Jeevan Nagar Road, P.O. Miran Sahib",
      addressLocality: "Jammu",
      addressRegion: "Jammu & Kashmir",
      postalCode: "181101",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8082848658",
        contactType: "principal office",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-8825034047",
        contactType: "customer service",
      },
    ],
    sameAs: [
      "https://www.facebook.com/mbscet/",
      "https://www.instagram.com/mbscet/",
      "https://www.youtube.com/@mbscet",
      "https://www.linkedin.com/school/mbscet/",
    ],
    foundingDate: "1999",
    telephone: "+91-8082848658",
    email: "principal@mbscet.edu.in",
    areaServed: {
      "@type": "State",
      name: "Jammu & Kashmir",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Programs",
      itemListElement: [
        { "@type": "EducationalOccupationalProgram", name: "B.E. Computer Science & Engineering", occupationalCategory: "CSE" },
        { "@type": "EducationalOccupationalProgram", name: "B.E. Information Technology", occupationalCategory: "IT" },
        { "@type": "EducationalOccupationalProgram", name: "B.E. Electronics & Communication Engineering", occupationalCategory: "ECE" },
        { "@type": "EducationalOccupationalProgram", name: "B.E. Electrical Engineering", occupationalCategory: "EE" },
        { "@type": "EducationalOccupationalProgram", name: "B.E. Mechanical Engineering", occupationalCategory: "ME" },
        { "@type": "EducationalOccupationalProgram", name: "B.E. Civil Engineering", occupationalCategory: "CE" },
        { "@type": "EducationalOccupationalProgram", name: "B.E. AI & Machine Learning", occupationalCategory: "AIML" },
        { "@type": "EducationalOccupationalProgram", name: "Master of Computer Applications", occupationalCategory: "MCA" },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// CollegeOrUniversity - alternative for about page
export function CollegeJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "Mahant Bachittar Singh College of Engineering & Technology",
    url: "https://www.mbscet.edu.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Babliana, Jeevan Nagar Road, P.O. Miran Sahib",
      addressLocality: "Jammu",
      addressRegion: "Jammu & Kashmir",
      postalCode: "181101",
      addressCountry: "IN",
    },
    foundingDate: "1999",
    telephone: "+91-8082848658",
    email: "principal@mbscet.edu.in",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Article - for news article pages
export function ArticleJsonLd({ article }: { article: NewsArticle }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "MBSCET",
      url: "https://www.mbscet.edu.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Mahant Bachittar Singh College of Engineering & Technology",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mbscet.edu.in/logo.png",
      },
    },
    url: `https://www.mbscet.edu.in/news/${article.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mbscet.edu.in/news/${article.slug}`,
    },
    articleSection: article.category,
    description: article.content.substring(0, 160),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// BreadcrumbList - for all interior pages
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://www.mbscet.edu.in${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Course - for program/department pages
export function CourseJsonLd({ program }: { program: Program }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: `${program.degree} ${program.title}`,
    url: `https://www.mbscet.edu.in/academics/${program.slug}`,
    provider: {
      "@type": "CollegeOrUniversity",
      name: "Mahant Bachittar Singh College of Engineering & Technology",
      url: "https://www.mbscet.edu.in",
    },
    occupationalCategory: program.code,
    timeToComplete: program.duration,
    educationalLevel: "Bachelor's Degree",
    description: program.description || `${program.title} program at MBSCET, Jammu.`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
