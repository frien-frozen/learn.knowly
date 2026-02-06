'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useLangRouter } from '@/hooks/useLangRouter';
import { ArrowLeft } from 'lucide-react';
import { MOCK_SUBJECTS, MOCK_CURRICULUMS } from '@/utils/mockData';
import { motion } from 'framer-motion';
import T from '@/components/ui/T';

export default function CurriculumPage() {
    const params = useParams();
    const { push } = useLangRouter();
    const slug = Array.isArray(params.curriculumSlug) ? params.curriculumSlug[0] : params.curriculumSlug;

    const curriculum = MOCK_CURRICULUMS[slug as keyof typeof MOCK_CURRICULUMS];
    const subjects = MOCK_SUBJECTS[slug as keyof typeof MOCK_SUBJECTS];

    // Helper for dynamic colors based on subject title
    const getIconColor = (title: string) => {
        if (title.includes('Math')) return 'bg-red-50 text-red-500';
        if (title.includes('Physics')) return 'bg-blue-50 text-blue-500';
        if (title.includes('Chem')) return 'bg-green-50 text-green-500';
        if (title.includes('Bio')) return 'bg-purple-50 text-purple-500';
        if (title.includes('Computer')) return 'bg-indigo-50 text-indigo-500';
        if (title.includes('English')) return 'bg-orange-50 text-orange-500';
        if (title.includes('Econ')) return 'bg-teal-50 text-teal-500';
        if (title.includes('Science')) return 'bg-cyan-50 text-cyan-500';
        return 'bg-gray-50 text-gray-500';
    };

    if (!curriculum) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F2F4F7]">
                <h1 className="text-2xl font-bold mb-4"><T>Curriculum Not Found</T></h1>
                <button onClick={() => push('/')} className="text-red-600 font-bold hover:underline"><T>Go Home</T></button>
            </div>
        );
    }

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#F2F4F7] font-nunito"
        >
            <div className="container mx-auto px-6 pt-32 pb-20 max-w-7xl">
                <button onClick={() => push('/')} className="flex items-center gap-2 text-gray-500 font-bold hover:text-[#D92D20] mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> <T>Back to Dashboard</T>
                </button>

                <h1 className="text-4xl font-extrabold text-[#101828] mb-2"><T>{curriculum.title}</T></h1>
                <p className="text-xl text-gray-500 mb-12"><T>{curriculum.subtitle}</T></p>

                {subjects ? (
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{
                            show: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {subjects.map((subj) => (
                            <motion.div
                                key={subj.slug}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                onClick={() => push(`/curriculum/${slug}/${subj.slug}`)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-transparent hover:shadow-xl cursor-pointer flex flex-col items-start"
                            >
                                {/* Icon Box */}
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${getIconColor(subj.title)}`}>
                                    <subj.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-extrabold text-[#101828] mb-1"><T>{subj.title}</T></h3>
                                <span className="text-sm font-bold text-gray-400">Code: {subj.code}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="bg-white rounded-[1.5rem] p-12 text-center shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-400"><T>Coming Soon</T></h3>
                    </div>
                )}
            </div>
        </motion.main>
    );
}
