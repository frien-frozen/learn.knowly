'use client';

import React, { useEffect, useState } from 'react';
import { useLangRouter } from '@/hooks/useLangRouter';
import { BookOpen, ShieldCheck, Gamepad2, Brain, Atom, Code2, Music, Calculator, Zap, FlaskConical, Dna, Laptop, Pencil, Globe, Loader2 } from 'lucide-react';
import T from '@/components/ui/T';
import { getCurriculums } from '@/app/actions/curriculum';

const iconMap: any = {
    Calculator, Zap, FlaskConical, Dna, Laptop, Pencil, Globe, BookOpen, ShieldCheck, Gamepad2, Brain, Atom, Code2, Music
};

export default function CourseList() {
    const { push } = useLangRouter();
    const [courses, setCourses] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const curriculums = await getCurriculums();
                const flattenedCourses: any[] = [];
                curriculums.forEach(curr => {
                    curr.subjects.forEach(subj => {
                        // Create a displayable course object
                        flattenedCourses.push({
                            id: subj.id,
                            title: subj.name,
                            level: curr.name, // e.g. Cambridge IGCSE
                            curriculumId: curr.id, // e.g. igcse
                            link: `/curriculum/${curr.id}/${subj.id}`
                        });
                    });
                });
                setCourses(flattenedCourses.slice(0, 10)); // Top 10 courses
            } catch (error) {
                console.error("Error fetching courses", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCourses();
    }, []);

    return (
        <section id="courses" className="py-6 md:py-12 px-0 md:px-6 bg-[#F9FAFB]">
            <div className="w-full max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-xl md:text-4xl font-extrabold text-[#101828] mb-2 md:mb-3 font-nunito">
                        <T>Most Popular Courses</T>
                    </h2>
                    <p className="text-sm md:text-xl text-gray-500 font-medium font-nunito px-4">
                        <T>Join thousands of students mastering these subjects</T>
                    </p>
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-3 md:p-8 shadow-sm">
                    {isLoading ? (
                        <div className="space-y-2 md:space-y-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-2xl animate-pulse">
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className="w-9 h-9 md:w-12 md:h-12 bg-gray-200 rounded-xl shrink-0" />
                                        <div className="h-4 md:h-5 bg-gray-200 rounded w-2/3 max-w-[200px]" />
                                    </div>
                                    <div className="w-16 md:w-20 h-5 md:h-6 bg-gray-200 rounded-lg shrink-0 ml-3" />
                                </div>
                            ))}
                        </div>
                    ) : courses.length === 0 ? (
                        <div className="text-center py-12">
                          <h3 className="text-xl font-bold text-[#101828]">New Courses in Production</h3>
                          <p className="text-gray-500 mt-2">Our educators are currently curating high-quality materials. Check back soon!</p>
                        </div>
                    ) : courses.map((course) => {
                        const Icon = iconMap[course.icon] || BookOpen;

                        return (
                            <div
                                key={course.id}
                                onClick={() => push(course.link)}
                                className="group flex flex-row items-center justify-between p-3 md:p-4 mb-2 md:mb-3 bg-gray-50 hover:bg-red-50 rounded-2xl border border-transparent hover:border-red-100 transition-all cursor-pointer font-nunito"
                            >

                                {/* Left: Icon + Title */}
                                <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
                                    <div className="w-9 h-9 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-[#D92D20]" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm md:text-lg font-bold text-[#101828] group-hover:text-[#D92D20] transition-colors truncate">
                                            <T>{course.title}</T>
                                        </h3>
                                    </div>
                                </div>

                                {/* Right: Badges */}
                                <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                                    <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-lg text-[10px] md:text-xs font-extrabold bg-blue-100 text-blue-600 whitespace-nowrap">
                                        {course.level}
                                    </span>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
