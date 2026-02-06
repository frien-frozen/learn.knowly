'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { MOCK_SUBJECTS, getSyllabus } from '@/utils/mockData';
import { ArrowLeft, PlayCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLangRouter } from '@/hooks/useLangRouter';
import T from '@/components/ui/T';

// --- INSTANT UI DICTIONARY ---
const UI_TEXT = {
    en: { back: "Back to Subjects", code: "Code", lessons: "lessons", notFound: "Subject not found" },
    uz: { back: "Fanlarga qaytish", code: "Kod", lessons: "ta dars", notFound: "Fan topilmadi" }
};

export default function SubjectPage() {
    const params = useParams();
    const { push, lang } = useLangRouter();
    const t = UI_TEXT[lang as 'en' | 'uz'] || UI_TEXT.uz;

    const curriculumSlug = Array.isArray(params.curriculumSlug) ? params.curriculumSlug[0] : params.curriculumSlug;
    const subjectSlug = Array.isArray(params.subjectSlug) ? params.subjectSlug[0] : params.subjectSlug;

    const subjects = MOCK_SUBJECTS[curriculumSlug] || [];
    const subject = subjects.find(s => s.slug === subjectSlug);
    const syllabus = getSyllabus(subjectSlug, subject?.title || '');

    // Default: First unit open
    const [expandedUnit, setExpandedUnit] = useState<string | null>(syllabus[0]?.title || null);

    if (!subject) return <div className="p-20 text-center font-bold text-gray-500">{t.notFound}</div>;

    return (
        <motion.main
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#F9FAFB] font-nunito pt-32 pb-20"
        >
            <div className="container mx-auto px-6 max-w-4xl">

                {/* BACK BUTTON */}
                <button
                    onClick={() => push(`/curriculum/${curriculumSlug}`)}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#D92D20] transition-colors mb-8"
                >
                    <div className="p-2 bg-white rounded-full border border-gray-100 shadow-sm">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span>{t.back}</span>
                </button>

                {/* HEADER */}
                <div className="mb-10">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl font-extrabold text-[#101828] mb-3"
                    >
                        <T>{subject.title}</T>
                    </motion.h1>
                    <div className="flex items-center gap-3">
                        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                            {curriculumSlug}
                        </span>
                        <span className="text-gray-400 font-bold text-sm">
                            • {t.code}: {subject.code}
                        </span>
                    </div>
                </div>

                {/* SYLLABUS LIST */}
                <div className="space-y-4">
                    {syllabus.map((unit, idx) => {
                        const isOpen = expandedUnit === unit.title;

                        return (
                            <motion.div
                                layout
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05, layout: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 } }}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                            >

                                {/* ACCORDION HEADER */}
                                <button
                                    onClick={() => setExpandedUnit(isOpen ? null : unit.title)}
                                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">

                                        {/* --- THE ROTATING ANIMATION YOU WANTED --- */}
                                        <motion.div
                                            animate={{
                                                rotate: isOpen ? 360 : 0,
                                                backgroundColor: isOpen ? '#D92D20' : '#F3F4F6',
                                                color: isOpen ? '#ffffff' : '#6B7280'
                                            }}
                                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm"
                                        >
                                            {idx + 1}
                                        </motion.div>

                                        {/* UNIT TITLE */}
                                        <h3 className="text-lg font-bold text-[#101828] text-left">
                                            <T>{unit.title}</T>
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider hidden sm:block">
                                            {unit.topics.length} {t.lessons}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        </motion.div>
                                    </div>
                                </button>

                                {/* TOPIC LIST (Staggered Entrance) */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-2">
                                                {unit.topics.map((topic, tIdx) => (
                                                    <motion.div
                                                        key={tIdx}
                                                        initial={{ x: -10, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: tIdx * 0.05 }}
                                                        className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors"
                                                    >
                                                        <PlayCircle className="w-4 h-4 text-gray-300 group-hover:text-[#D92D20] transition-colors" />
                                                        <span className="text-sm font-bold text-gray-600 group-hover:text-[#101828]">
                                                            <T>{topic}</T>
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </motion.main>
    );
}
