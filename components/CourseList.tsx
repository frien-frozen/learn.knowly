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
                setCourses(flattenedCourses.slice(0, 15)); // Top 15 courses
            } catch (error) {
                console.error("Error fetching courses", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCourses();
    }, []);

    return (
        <section id="courses" className="py-24 px-6 bg-[#F2F4F7]">
            <div className="w-full max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-[#101828] mb-4 font-nunito">
                        <T>Most Popular Courses</T>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium font-nunito">
                        <T>Join thousands of students mastering these subjects</T>
                    </p>
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm min-h-[300px]">
                    {isLoading ? (
                        <div className="w-full h-full flex flex-col items-center justify-center p-12 text-gray-400">
                             <Loader2 className="w-8 h-8 animate-spin mb-4" />
                             <T>Loading curriculum...</T>
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
                                className="group flex flex-col sm:flex-row items-center justify-between p-4 mb-3 bg-gray-50 hover:bg-red-50 rounded-2xl border border-transparent hover:border-red-100 transition-all cursor-pointer font-nunito"
                            >

                                {/* Left: Icon + Title */}
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-gray-500 group-hover:text-[#D92D20]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#D92D20] transition-colors">
                                            <T>{course.title}</T>
                                        </h3>
                                    </div>
                                </div>

                                {/* Right: Badges */}
                                <div className="flex items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto justify-end">
                                    <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-blue-100 text-blue-600">
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
