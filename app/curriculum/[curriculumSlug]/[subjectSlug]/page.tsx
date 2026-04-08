'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, PlayCircle, ChevronDown, Database, Loader2, X, Hourglass, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLangRouter } from '@/hooks/useLangRouter';
import T from '@/components/ui/T';
import { getSubjectBySlug } from '@/app/actions/curriculum';
import LessonPlayer from '@/components/LessonPlayer';

// --- INSTANT UI DICTIONARY ---
const UI_TEXT = {
    en: { back: "Back to Subjects", code: "Code", lessons: "lessons", notFound: "Content in production", seeding: "Loading...", seedBtn: "Load Data" },
    uz: { back: "Fanlarga qaytish", code: "Kod", lessons: "ta dars", notFound: "Darslik tayyorgarlikda", seeding: "Yuklanmoqda...", seedBtn: "Yuklash" }
};

export default function SubjectPage() {
    const params = useParams();
    const { push, lang } = useLangRouter();
    const t = UI_TEXT[lang as 'en' | 'uz'] || UI_TEXT.uz;

    const curriculumSlug = Array.isArray(params.curriculumSlug) ? params.curriculumSlug[0] : params.curriculumSlug;
    const subjectSlug = Array.isArray(params.subjectSlug) ? params.subjectSlug[0] : params.subjectSlug;

    // --- STATE ---
    const [subject, setSubject] = useState<any>(null);
    const [expandedUnit, setExpandedUnit] = useState<string | null>(null);
    const [isLoadingDB, setIsLoadingDB] = useState(true);
    const [activeLesson, setActiveLesson] = useState<any>(null);

    // --- FETCH DATA ---
    useEffect(() => {
        const load = async () => {
            if (!subjectSlug) return;
            try {
                const dbSubject = await getSubjectBySlug(subjectSlug as string);
                if (dbSubject) {
                    setSubject(dbSubject);
                    if (dbSubject.units && dbSubject.units.length > 0) {
                        setExpandedUnit(dbSubject.units[0].title);
                    }
                }
            } catch (error) {
                console.error("Failed to load subject", error);
            } finally {
                setIsLoadingDB(false);
            }
        };
        load();
    }, [subjectSlug]);

    if (isLoadingDB) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB]">
                <Loader2 className="w-10 h-10 animate-spin text-gray-400 mb-4" />
                <h1 className="text-xl font-bold text-gray-500"><T>Loading Subject content...</T></h1>
            </div>
        );
    }

    if (!subject) {
         return (
             <div className="p-20 text-center flex flex-col items-center h-screen bg-[#F9FAFB] pt-40">
                 <h1 className="font-bold text-2xl text-gray-500 mb-4">{t.notFound}</h1>
                 <button onClick={() => push(`/curriculum/${curriculumSlug}`)} className="mt-8 text-gray-500 hover:text-red-500 font-bold underline"><T>Go Back</T></button>
             </div>
         );
    }

    return (
        <>
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
                        <T>{subject.name}</T>
                    </motion.h1>
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                            {(subject?.curriculum?.name || 'Curriculum').toUpperCase()}
                        </span>
                    </div>
                </div>

                {/* SYLLABUS LIST OR VIDEO PLAYER */}
                {activeLesson ? (
                    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-300">
                        <button 
                            onClick={() => setActiveLesson(null)} 
                            className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#101828] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> {t.back}
                        </button>
                        <LessonPlayer topic={activeLesson} />
                    </div>
                ) : (
                <div className="space-y-4">
                    {subject.units && subject.units.map((unit: any, idx: number) => {
                        const isOpen = expandedUnit === unit.title;

                        return (
                            <motion.div
                                layout
                                key={unit.id}
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
                                        {/* SPINNING NUMBER */}
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
                                                {unit.topics.map((topic: any, tIdx: number) => (
                                                    <motion.div
                                                        key={topic.id}
                                                        initial={{ x: -10, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: tIdx * 0.05 }}
                                                        onClick={() => setActiveLesson(topic)}
                                                        className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors"
                                                    >
                                                        <PlayCircle className="w-4 h-4 text-gray-300 group-hover:text-[#D92D20] transition-colors" />
                                                        <span className="text-sm font-bold text-gray-600 group-hover:text-[#101828]">
                                                            <T>{topic.title}</T>
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
                )}

            </div>
        </motion.main>
        </>
    );
}
