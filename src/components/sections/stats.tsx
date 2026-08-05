export function StatBand() {
  const stats = [
    { value: "8", label: "Programs", suffix: "+" },
    { value: "30", label: "Faculty Members", suffix: "+" },
    { value: "490", label: "Total Seats", suffix: "" },
    { value: "25", label: "Years of Excellence", suffix: "+" },
  ];

  return (
    <section className="bg-navy text-paper" aria-label="Key statistics">
      <div className="page-container py-14 md:py-18">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                {stat.value}<span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-sm text-paper/60 mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
