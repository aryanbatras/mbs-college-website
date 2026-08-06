const ACTIVITIES = [
  {
    title: "Aarohan",
    description: "The annual techno-cultural festival of MBSCET featuring technical competitions, cultural performances, and guest lectures from industry experts.",
    category: "Annual Fest",
  },
  {
    title: "Fresher Fiesta",
    description: "Welcome event for new students with cultural performances, interactive music, and dance events to help them settle into college life.",
    category: "Student Event",
  },
  {
    title: "GDG Build with AI",
    description: "Google Developer Group workshop on artificial intelligence and machine learning, held in collaboration with GDG Jammu.",
    category: "Technical Workshop",
  },
  {
    title: "Faculty Development Programme",
    description: "Five-day FDP on Digital Marketing and other emerging technologies for faculty skill enhancement and academic growth.",
    category: "Training",
  },
  {
    title: "NSS Activities",
    description: "Old age home visits, blood donation camps, and community service initiatives by the NSS unit for social responsibility.",
    category: "Community Service",
  },
  {
    title: "Industrial Visits",
    description: "Factory tours and site visits including MDL Sewerage Treatment Plant, Cadila, and other industrial establishments for practical exposure.",
    category: "Industry Connect",
  },
  {
    title: "Guest Speaker Sessions",
    description: "Talks by industry professionals including Dr. Jaswant Singh, Mr. Manjit Singh, and other experts on various technical and social topics.",
    category: "Seminar",
  },
  {
    title: "MSME Seminars",
    description: "Seminars on Micro, Small and Medium Enterprises covering entrepreneurship, startups, and business development opportunities.",
    category: "Seminar",
  },
  {
    title: "Traffic Rules Awareness",
    description: "Awareness program on traffic rules and road safety conducted in collaboration with local authorities.",
    category: "Awareness",
  },
];

export function ActivitiesSection() {
  return (
    <section className="bg-white" aria-label="Activities">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Campus Life
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00274C] leading-[1.05] tracking-tight">
            Activities & Events
          </h2>
          <p className="text-lg text-[#5C6370] mt-4 max-w-2xl">
            A vibrant campus life with technical festivals, cultural events, and community service initiatives throughout the year
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((activity) => (
            <div
              key={activity.title}
              className="p-8 bg-gray-50"
            >
              <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                {activity.category}
              </span>
              <h3 className="text-lg font-bold text-[#00274C] mt-2 mb-3">
                {activity.title}
              </h3>
              <p className="text-sm text-[#5C6370] leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
