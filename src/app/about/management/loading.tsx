import { PageHeaderSkeleton } from "@/components/ui/page-skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#00274C]">
      <div className="max-w-4xl mx-auto px-5 space-y-8">
        <PageHeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] bg-white/10 rounded-xl animate-pulse" />
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 bg-white/10 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
