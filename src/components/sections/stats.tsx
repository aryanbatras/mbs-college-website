export function StatBand() {
  const stats = [
    { value: "7", label: "Programs" },
    { value: "30+", label: "Faculty Members" },
    { value: "490", label: "Total Seats" },
    { value: "25+", label: "Years of Excellence" },
  ];

  return (
    <section className="bg-paper" aria-label="Key statistics">
      <div className="page-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-semibold text-ink tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-ink-muted mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
