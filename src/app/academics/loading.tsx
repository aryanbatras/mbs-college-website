import { CardSkeleton } from "@/components/ui/skeleton";

export default function AcademicsLoading() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-5 space-y-12">
        {/* Header skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-32 animate-shimmer bg-ink-faint" />
          <div className="h-10 w-48 animate-shimmer bg-ink-faint" />
          <div className="h-4 w-96 animate-shimmer bg-ink-faint" />
        </div>

        {/* Program finder skeleton */}
        <div className="border border-line p-6 space-y-4">
          <div className="h-10 w-full animate-shimmer bg-ink-faint" />
          <div className="flex gap-3">
            <div className="h-10 w-24 animate-shimmer bg-ink-faint" />
            <div className="h-10 w-24 animate-shimmer bg-ink-faint" />
            <div className="h-10 w-24 animate-shimmer bg-ink-faint" />
          </div>
        </div>

        {/* Programs grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
