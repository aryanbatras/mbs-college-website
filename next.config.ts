import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Legacy WordPress URL → new route redirects
  async redirects() {
    return [
      // Department pages
      { source: "/computer-science/", destination: "/academics/computer-science", permanent: true },
      { source: "/electrical-v1/", destination: "/academics/electrical", permanent: true },
      { source: "/electronic-and-communication-v1/", destination: "/academics/electronics-communication", permanent: true },
      { source: "/mechanical-engineering-v1/", destination: "/academics/mechanical", permanent: true },
      { source: "/civil-engineering-2/", destination: "/academics/civil", permanent: true },
      { source: "/mca-v1/", destination: "/academics/mca", permanent: true },
      { source: "/information-technology-v1/", destination: "/academics/information-technology", permanent: true },

      // About pages
      { source: "/chairman/", destination: "/about/chairman", permanent: true },
      { source: "/principal/", destination: "/about/principal", permanent: true },
      { source: "/college-management/", destination: "/about/management", permanent: true },

      // Admissions
      { source: "/eligiblity-admission-procedure-v1/", destination: "/admissions", permanent: true },
      { source: "/college-prospectus/", destination: "/admissions", permanent: true },

      // Placements
      { source: "/placement-brochure/", destination: "/placements", permanent: true },

      // Campus
      { source: "/galleries/", destination: "/campus/galleries", permanent: true },
      { source: "/video-gallery/", destination: "/campus/video-gallery", permanent: true },
      { source: "/drone-club/", destination: "/campus/clubs", permanent: true },
      { source: "/activity/", destination: "/campus", permanent: true },

      // News/Notices
      { source: "/press-release/", destination: "/news", permanent: true },
      { source: "/college-magazine/", destination: "/news", permanent: true },
    ];
  },
};

export default nextConfig;
