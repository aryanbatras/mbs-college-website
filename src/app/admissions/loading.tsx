import { PageHeaderSkeleton, ContentSkeleton } from "@/components/ui/page-skeleton";

export default function AdmissionsLoading() {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#00274C]">
      <div className="max-w-6xl mx-auto px-5 space-y-12">
        <PageHeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-48 bg-white/10 rounded-xl mb-4" />
              <div className="h-6 w-3/4 bg-white/10 rounded mb-2" />
              <div className="h-4 w-full bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
