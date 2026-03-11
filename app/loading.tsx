// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex flex-col gap-6 p-6 animate-pulse">
      {/* Search Bar Skeleton */}
      <div className="h-10 w-full max-w-md bg-[#4B644A]/20 rounded-full" />

      {/* Categories Row */}
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-8 w-20 bg-[#A3C586]/20 rounded-full" />
        ))}
      </div>

      {/* Playlist Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="h-16 bg-[#4B644A]/30 rounded-[20px] flex items-center p-3 gap-3"
          >
            <div className="w-10 h-10 bg-[#A3C586]/40 rounded-lg" />
            <div className="h-4 w-24 bg-[#F9FBF2]/10 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}