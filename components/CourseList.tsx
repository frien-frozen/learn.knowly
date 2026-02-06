'use client';

import React from 'react';
import { useLangRouter } from '@/hooks/useLangRouter';
import { Calculator, Zap, FlaskConical, Dna, Laptop, Pencil, Globe, BookOpen, ShieldCheck, Gamepad2, Brain, Atom, Code2, Music } from 'lucide-react';
import T from '@/components/ui/T';

// Color map for subjects
const ICON_COLORS = {
    Calculator: '#D92D20', // Math
    Zap: '#FDB022', // Physics
    FlaskConical: '#10B981', // Chemistry
    Dna: '#8B5CF6', // Biology
    Laptop: '#3B82F6', // CS
    Pencil: '#F43F5E', // English
    Globe: '#0EA5E9', // Geography
    BookOpen: '#EA580C', // Literature
    ShieldCheck: '#6366F1', // Law
    Gamepad2: '#8B5CF6', // Game Design
    Brain: '#EC4899', // Psych
    Atom: '#6366F1', // Science
    Code2: '#10B981', // Coding
    Music: '#F59E0B', // Music
};

const iconMap: any = {
    Calculator, Zap, FlaskConical, Dna, Laptop, Pencil, Globe, BookOpen, ShieldCheck, Gamepad2, Brain, Atom, Code2, Music
};

const TOP_COURSES = [
    { id: 1, title: 'Mathematics', code: '0580', level: 'IGCSE', board: 'CIE', icon: 'Calculator', link: '/curriculum/igcse/math-0580' },
    { id: 2, title: 'Physics', code: '0625', level: 'IGCSE', board: 'CIE', icon: 'Zap', link: '/curriculum/igcse/physics-0625' },
    { id: 3, title: 'Chemistry', code: '0620', level: 'IGCSE', board: 'CIE', icon: 'FlaskConical', link: '/curriculum/igcse/chemistry-0620' },
    { id: 4, title: 'Biology', code: '0610', level: 'IGCSE', board: 'CIE', icon: 'Dna', link: '/curriculum/igcse/biology-0610' },
    { id: 5, title: 'Mathematics', code: '9709', level: 'A-LEVEL', board: 'CIE', icon: 'Calculator', link: '/curriculum/a-levels/math-9709' },
    { id: 6, title: 'Physics', code: '9702', level: 'A-LEVEL', board: 'CIE', icon: 'Zap', link: '/curriculum/a-levels/physics-9702' },
    { id: 7, title: 'Computer Science', code: '0478', level: 'IGCSE', board: 'CIE', icon: 'Laptop', link: '/curriculum/igcse/cs-0478' },
    { id: 8, title: 'English', code: '1111', level: 'LOWER SEC', board: 'CIE', icon: 'Pencil', link: '/curriculum/lower-secondary/english-1111' },
    { id: 9, title: 'Science', code: '1113', level: 'LOWER SEC', board: 'CIE', icon: 'Atom', link: '/curriculum/lower-secondary/science-1113' },
    { id: 10, title: 'Mathematics', code: '1112', level: 'LOWER SEC', board: 'CIE', icon: 'Calculator', link: '/curriculum/lower-secondary/math-1112' },
    { id: 11, title: 'Economics', code: '9708', level: 'A-LEVEL', board: 'CIE', icon: 'Globe', link: '/curriculum/a-levels/econ-9708' },
    { id: 12, title: 'Chemistry', code: '9701', level: 'A-LEVEL', board: 'CIE', icon: 'FlaskConical', link: '/curriculum/a-levels/chemistry-9701' },
    { id: 13, title: 'CS', code: '9618', level: 'A-LEVEL', board: 'CIE', icon: 'Laptop', link: '/curriculum/a-levels/cs-9618' },
    { id: 14, title: 'Maths A', code: '4MA1', level: 'IGCSE', board: 'Edexcel', icon: 'Calculator', link: '/curriculum/pearson/math-a-4ma1' },
    { id: 15, title: 'Physics', code: '4PH1', level: 'IGCSE', board: 'Edexcel', icon: 'Atom', link: '/curriculum/pearson/physics-4ph1' },
];

export default function CourseList() {
    const { push } = useLangRouter();
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
                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
                    {TOP_COURSES.map((course) => {
                        const Icon = iconMap[course.icon] || BookOpen;
                        // @ts-ignore
                        const iconColor = ICON_COLORS[course.icon] || '#666';

                        return (
                            <div
                                key={course.id}
                                onClick={() => push(course.link)}
                                className="group flex flex-col sm:flex-row items-center justify-between p-4 mb-3 bg-gray-50 hover:bg-red-50 rounded-2xl border border-transparent hover:border-red-100 transition-all cursor-pointer font-nunito"
                            >

                                {/* Left: Icon + Title */}
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" style={{ color: iconColor }} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#D92D20] transition-colors">
                                            <T>{course.title}</T>
                                        </h3>
                                        <p className="text-sm font-bold text-gray-400">
                                            Code: {course.code}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Badges */}
                                <div className="flex items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto justify-end">
                                    <span className={`px-3 py-1 rounded-lg text-xs font-extrabold ${course.level === 'A-LEVEL' ? 'bg-purple-100 text-purple-600' :
                                        course.level === 'LOWER SEC' ? 'bg-orange-100 text-orange-600' :
                                            'bg-blue-100 text-blue-600'
                                        }`}>
                                        {course.level}
                                    </span>
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-extrabold">
                                        {course.board}
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
