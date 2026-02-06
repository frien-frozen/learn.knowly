'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLangRouter } from '@/hooks/useLangRouter';
import { useGlobalSearch, SearchResult } from '@/hooks/useGlobalSearch';
import T from '@/components/ui/T';
import { Search, GraduationCap, BookOpen, PlayCircle, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Quick UI dictionary just for the "Search Results" headers to prevent flashing
const UI_TEXT = {
    en: { resultsFor: "Search Results for", found: "Found", matches: "matches", noResults: "No results found" },
    uz: { resultsFor: "Qidiruv natijalari:", found: "Topildi:", matches: "ta natija", noResults: "Hech narsa topilmadi" }
};

function SearchContent() {
    const searchParams = useSearchParams();
    const rawQuery = searchParams.get('q') || '';
    const query = decodeURIComponent(rawQuery);
    const { push, lang } = useLangRouter();
    const t = UI_TEXT[lang as 'en' | 'uz'] || UI_TEXT.uz;

    const { search } = useGlobalSearch();
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isAnalyzing, setIsAnalyzing] = useState(true);

    useEffect(() => {
        const runAiSearch = async () => {
            setIsAnalyzing(true);
            if (!query) {
                setIsAnalyzing(false);
                return;
            }

            let termToSearch = query;

            // 1. AI TRANSLATION (Only if Uzbek)
            if (lang === 'uz') {
                try {
                    const res = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ text: query, targetLang: 'en' }),
                    });
                    const data = await res.json();

                    if (data.translatedText) {
                        console.log(`AI Success: ${query} -> ${data.translatedText}`);
                        termToSearch = data.translatedText;
                    }
                } catch (e) {
                    console.error("AI Translation failed, using raw query");
                }
            }

            // 2. SEARCH DATABASE (English content)
            const matches = search(termToSearch);
            setResults(matches);
            setIsAnalyzing(false);
        };

        runAiSearch();
    }, [query, lang, search]);

    const getIcon = (type: string) => {
        if (type === 'curriculum') return <GraduationCap className="w-6 h-6 text-red-500" />;
        if (type === 'subject') return <BookOpen className="w-6 h-6 text-blue-500" />;
        return <PlayCircle className="w-6 h-6 text-green-500" />;
    };

    return (
        <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl min-h-screen">
            <div className="mb-10">
                <h1 className="text-3xl font-extrabold text-[#101828] mb-2">
                    {t.resultsFor} <span className="text-[#D92D20]">"{query}"</span>
                </h1>

                {isAnalyzing ? (
                    <div className="flex items-center gap-2 text-[#D92D20] font-bold text-sm animate-pulse">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <T>Analyzing content...</T>
                    </div>
                ) : (
                    <p className="text-gray-500 font-medium text-sm">
                        {t.found} {results.length} {t.matches}
                    </p>
                )}
            </div>

            {!isAnalyzing && (
                <div className="space-y-4">
                    {results.length > 0 ? (
                        results.map((res, idx) => (
                            <motion.div
                                key={res.id + idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => push(res.link)}
                                className="group bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-red-100 hover:shadow-md cursor-pointer transition-all flex items-center justify-between"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                                        {getIcon(res.type)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400 font-bold mb-0.5">
                                            <span className="uppercase tracking-wider"><T>{res.type}</T></span>
                                            <span>•</span>
                                            <span>{res.breadcrumbs.join(' > ')}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#D92D20] transition-colors">
                                            <T>{res.title}</T>
                                        </h3>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#D92D20] -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-6 h-6 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{t.noResults}</h3>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB] font-nunito">
            <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-red-500" /></div>}>
                <SearchContent />
            </Suspense>
        </main>
    );
}
