import CourseList from '@/components/CourseList';
import Link from 'next/link';
import T from '@/components/ui/T';
import prisma from '@/lib/prisma';
import { GraduationCap, Star, BookOpen, Book } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Dashboard() {
  const curriculums = await prisma.curriculum.findMany({
    orderBy: { name: 'asc' }
  });

  return (
    <main className="min-h-screen bg-[#F2F4F7] font-nunito">
      <div className="container mx-auto px-6 pt-48 pb-20">

        {/* Welcome Text */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101828] mb-4"><T>Welcome Back</T></h1>
          <p className="text-xl text-gray-500"><T>Choose your curriculum to continue learning</T></p>
        </div>

        {/* CURRICULUM GRID */}
        <section id="curriculums" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* 1. CAMBRIDGE IGCSE (Red - Scale & Depth) */}
            <Link
              href={`/curriculum/${curriculums[0]?.id || 'igcse'}`}
              className="col-span-1 md:col-span-6 bg-[#D92D20] rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-red-200/50 cursor-pointer transition-all relative overflow-hidden group min-h-[320px] flex flex-col justify-between block hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3"><T>{curriculums[0]?.name || 'Cambridge IGCSE'}</T></h2>
                <p className="text-red-100 font-medium text-lg max-w-sm"><T>International General Certificate of Secondary Education</T></p>
              </div>
              <GraduationCap className="absolute -bottom-8 -right-8 w-64 h-64 text-white opacity-10 rotate-12 group-hover:rotate-[20deg] group-hover:scale-125 group-hover:opacity-20 transition-all duration-500 ease-out" />
            </Link>

            {/* 2. A-LEVELS (White - Scale) */}
            <Link
              href={`/curriculum/${curriculums[1]?.id || 'a-levels'}`}
              className="col-span-1 md:col-span-3 bg-white rounded-[2.5rem] p-8 text-[#101828] shadow-lg shadow-gray-200/50 cursor-pointer transition-all flex flex-col justify-between min-h-[320px] group border-2 border-transparent hover:border-gray-100 block hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="bg-red-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D92D20] group-hover:text-white transition-all duration-300">
                  <Star className="w-7 h-7 text-[#D92D20] group-hover:text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3"><T>{curriculums[1]?.name || 'A-Levels'}</T></h2>
                <p className="text-gray-500 font-medium text-sm leading-relaxed"><T>Advanced Level qualifications for university preparation</T></p>
              </div>
              <div className="mt-4">
                <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider group-hover:bg-[#D92D20] group-hover:text-white transition-colors">
                  <T>Coming Soon</T>
                </span>
              </div>
            </Link>

            {/* 3. PEARSON (Yellow - Scale) */}
            <Link
              href={`/curriculum/${curriculums[2]?.id || 'pearson'}`}
              className="col-span-1 md:col-span-3 bg-[#FDB022] rounded-[2.5rem] p-8 text-[#7B2D08] shadow-xl shadow-yellow-200/50 cursor-pointer transition-all flex flex-col justify-between min-h-[320px] relative overflow-hidden group block hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="bg-white/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-white/50 transition-colors">
                  <BookOpen className="w-7 h-7 text-[#7B2D08]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3"><T>{curriculums[2]?.name || 'Pearson'}</T></h2>
                <p className="text-[#7B2D08]/80 font-medium text-sm"><T>Edexcel International</T></p>
              </div>
              <BookOpen className="absolute -bottom-4 -right-4 w-40 h-40 text-white opacity-20 rotate-[-10deg] group-hover:rotate-0 group-hover:scale-125 group-hover:opacity-30 transition-all duration-500 ease-out" />
            </Link>

            {/* 4. LOWER SECONDARY (Purple - Scale & Parallax) */}
            <Link
              href={`/curriculum/${curriculums[3]?.id || 'lower-secondary'}`}
              className="col-span-1 md:col-span-12 bg-[#8B5CF6] rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-purple-200/50 cursor-pointer transition-all relative overflow-hidden group flex flex-col md:flex-row items-center justify-between block hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-1"><T>{curriculums[3]?.name || 'Cambridge Lower Secondary'}</T></h2>
                  <p className="text-purple-100 font-medium text-lg"><T>Build a strong foundation for IGCSE success</T></p>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-white/20 transition-all duration-700"></div>
              <div className="hidden md:block bg-white/20 p-3 rounded-full backdrop-blur-md group-hover:scale-110 transition-transform">
                <Book className="w-6 h-6 text-white" />
              </div>
            </Link>

          </div>
        </section>

        {/* SECTION 2: COURSES */}
        <section id="courses">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1.5 bg-[#D92D20] rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-[#101828]"><T>Popular Courses</T></h2>
          </div>
          <CourseList />
        </section>

      </div>
    </main>
  );
}
