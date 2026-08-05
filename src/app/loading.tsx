import { HeroSkeleton, StatSkeleton, CardSkeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <div className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-5">
          <StatSkeleton />
        </div>
      </div>
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-5 space-y-8">
          <div className="space-y-2">
            <div className="h-4 w-24 animate-shimmer bg-ink-faint" />
            <div className="h-8 w-64 animate-shimmer bg-ink-faint" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
