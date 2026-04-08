export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] font-nunito">
      <div className="container mx-auto px-6 pt-48 pb-20">
        
        {/* Welcome Text Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 w-64 bg-gray-200 rounded-2xl animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-gray-200 rounded-xl animate-pulse mx-auto"></div>
        </div>
        
        {/* CURRICULUM GRID SKELETON */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
            {/* Big Red Card Placeholder */}
            <div className="col-span-1 md:col-span-6 bg-gray-200 rounded-[2.5rem] min-h-[320px] animate-pulse"></div>
            {/* Small White Card Placeholder */}
            <div className="col-span-1 md:col-span-3 bg-gray-200 rounded-[2.5rem] min-h-[320px] animate-pulse"></div>
            {/* Small Yellow Card Placeholder */}
            <div className="col-span-1 md:col-span-3 bg-gray-200 rounded-[2.5rem] min-h-[320px] animate-pulse"></div>
            {/* Wide Purple Card Placeholder */}
            <div className="col-span-1 md:col-span-12 bg-gray-200 rounded-[2.5rem] min-h-[200px] animate-pulse"></div>
        </div>

        {/* Popular Courses Section Skeleton */}
        <div className="space-y-4 max-w-4xl mx-auto">
            <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-6"></div>
            <div className="bg-white rounded-[2.5rem] p-8 space-y-4 shadow-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-20 bg-gray-50 rounded-2xl animate-pulse"></div>
                ))}
            </div>
        </div>

      </div>
    </main>
  );
}
