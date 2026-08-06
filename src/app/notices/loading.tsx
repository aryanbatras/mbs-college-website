import { PageHeaderSkeleton, CardGridSkeleton } from "@/components/ui/page-skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#00274C]">
      <div className="max-w-6xl mx-auto px-5 space-y-12">
        <PageHeaderSkeleton />
        <CardGridSkeleton />
      </div>
    </div>
  );
}
