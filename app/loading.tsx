import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] font-nunito">
      <div className="container mx-auto px-6 pt-48 pb-20">
        <div className="text-center mb-12">
          <div className="h-10 w-64 bg-gray-200 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-gray-200 rounded-lg animate-pulse mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            <div className="md:col-span-2 bg-gray-200 rounded-3xl min-h-[220px] animate-pulse shadow-sm"></div>
            <div className="md:col-span-1 bg-gray-200 rounded-3xl min-h-[220px] animate-pulse shadow-sm"></div>
            <div className="md:col-span-1 bg-gray-200 rounded-3xl min-h-[220px] animate-pulse shadow-sm"></div>
            <div className="md:col-span-full bg-gray-200 rounded-3xl min-h-[220px] animate-pulse shadow-sm"></div>
        </div>

        <div className="flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      </div>
    </main>
  );
}
