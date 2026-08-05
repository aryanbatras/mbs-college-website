import { NewsCardSkeleton } from "@/components/ui/skeleton";

export default function NewsLoading() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-5 space-y-12">
        {/* Header skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-24 animate-shimmer bg-ink-faint" />
          <div className="h-10 w-48 animate-shimmer bg-ink-faint" />
        </div>

        {/* Featured article skeleton */}
        <div className="space-y-4">
          <div className="aspect-[16/8] w-full animate-shimmer bg-ink-faint" />
          <div className="h-4 w-48 animate-shimmer bg-ink-faint" />
          <div className="h-8 w-3/4 animate-shimmer bg-ink-faint" />
        </div>

        {/* News list skeleton */}
        <div className="space-y-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
