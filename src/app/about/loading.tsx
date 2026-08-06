import { PageHeaderSkeleton, ContentSkeleton } from "@/components/ui/page-skeleton";

export default function AboutLoading() {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#00274C]">
      <div className="max-w-6xl mx-auto px-5 space-y-12">
        <PageHeaderSkeleton />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-4 bg-white/10 rounded animate-pulse" />
            ))}
          </div>
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-white/10 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
