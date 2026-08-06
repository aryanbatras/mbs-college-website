export function PageHeaderSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 w-32 bg-white/10 rounded" />
      <div className="h-10 w-64 bg-white/10 rounded" />
      <div className="h-4 w-96 bg-white/10 rounded max-w-full" />
    </div>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[16/10] bg-white/10 rounded-xl mb-4" />
          <div className="h-4 w-24 bg-white/10 rounded mb-2" />
          <div className="h-6 w-3/4 bg-white/10 rounded mb-2" />
          <div className="h-4 w-full bg-white/10 rounded" />
        </div>
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="h-[100dvh] bg-[#00274C] animate-pulse flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="h-16 w-[600px] max-w-full bg-white/10 rounded mx-auto" />
        <div className="h-8 w-[400px] max-w-full bg-[#FFCB05]/20 rounded mx-auto" />
        <div className="h-4 w-[300px] max-w-full bg-white/10 rounded mx-auto" />
      </div>
    </div>
  );
}

