'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLangRouter } from '@/hooks/useLangRouter';
import { useGlobalSearch } from '@/hooks/useGlobalSearch';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Search, GraduationCap, BookOpen, PlayCircle, X, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import T from '@/components/ui/T';

// UI Dictionary
const NAV_TEXT = {
    en: { curriculums: "Curriculums", courses: "Courses", teaching: "Start Teaching", placeholder: "Search for physics, algebra..." },
    uz: { curriculums: "O'quv dasturlari", courses: "Kurslar", teaching: "Ta'lim berishni boshlang", placeholder: "Mavzuni qidirish..." }
};

export default function Header() {
    const { push, lang } = useLangRouter();
    const router = useRouter();
    const { toggleLanguage } = useLanguage();
    const { search } = useGlobalSearch();

    const t = NAV_TEXT[lang as 'en' | 'uz'] || NAV_TEXT.uz;

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // --- FIX: HANDLE HASH LINKS CORRECTLY ---
    const handleHashNav = (hash: string) => {
        router.push(`/?lang=${lang}${hash}`);
    };

    const handleSearch = useDebouncedCallback(async (term: string) => {
        if (!term || term.length < 2) {
            setResults([]);
            setIsSearching(false);
            return;
        }

        setIsSearching(true);
        let searchTerm = term;

        // AI Translation for Dropdown
        if (lang === 'uz') {
            try {
                const res = await fetch('/api/translate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: term, targetLang: 'en' })
                });
                const data = await res.json();
                if (data.translatedText) searchTerm = data.translatedText;
            } catch (e) {
                // Silent fail
            }
        }

        const matches = search(searchTerm);
        setResults(matches);
        setIsSearching(false);
    }, 500);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.length > 0) {
            setIsFocused(false);
            push(`/search?q=${encodeURIComponent(query)}`);
            setResults([]);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-24 bg-white/90 backdrop-blur-lg border-b border-gray-100 transition-all">
            <div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4">

                {/* LOGO */}
                <div onClick={() => push('/')} className="cursor-pointer flex-shrink-0 hover:scale-105 transition-transform">
                    <img src="/logos/knowly-header.png" alt="KNOWLY" className="h-14 w-auto object-contain" />
                </div>

                {/* NAVIGATION - ORIGINAL GRAY UI + FIXED LINKS */}
                <nav className="hidden xl:flex items-center gap-1 bg-gray-100 p-1 rounded-full border border-gray-200 mx-4">
                    <button
                        onClick={() => handleHashNav('#curriculums')}
                        className="px-6 py-2.5 rounded-full text-sm font-extrabold text-gray-600 hover:bg-white hover:text-[#D92D20] hover:shadow-sm transition-all whitespace-nowrap"
                    >
                        {t.curriculums}
                    </button>
                    <button
                        onClick={() => handleHashNav('#courses')}
                        className="px-6 py-2.5 rounded-full text-sm font-extrabold text-gray-600 hover:bg-white hover:text-[#D92D20] hover:shadow-sm transition-all whitespace-nowrap"
                    >
                        {t.courses}
                    </button>
                    <a
                        href="https://teacher.knowly.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full text-sm font-extrabold text-gray-600 hover:bg-white hover:text-[#FDB022] hover:shadow-sm transition-all whitespace-nowrap"
                    >
                        {t.teaching}
                    </a>
                </nav>

                {/* SEARCH & LANG */}
                <div className="flex items-center gap-4 flex-shrink-0">
                    <div ref={searchRef} className="relative hidden lg:block group">
                        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2.5 focus-within:ring-2 focus-within:ring-[#D92D20]/20 transition-all w-64 xl:w-80">
                            {isSearching ? <Loader2 className="w-4 h-4 text-[#D92D20] mr-2.5 animate-spin" /> : <Search className="w-4 h-4 text-gray-400 mr-2.5" />}
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => { setQuery(e.target.value); handleSearch(e.target.value); }}
                                onKeyDown={handleKeyDown}
                                onFocus={() => setIsFocused(true)}
                                placeholder={t.placeholder}
                                className="bg-transparent border-none outline-none text-sm font-bold text-gray-700 w-full placeholder-gray-400"
                            />
                            {query && <button onClick={() => { setQuery(''); setResults([]); }} className="text-gray-400 hover:text-red-500 transition-colors"><X className="w-3 h-3" /></button>}
                        </div>

                        {isFocused && results.length > 0 && (
                            <div className="absolute top-full mt-3 right-0 w-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 z-50">
                                <div className="px-5 py-2 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider flex justify-between">
                                    <span><T>Best Matches</T></span>
                                    <span className="text-gray-300">{results.length} <T>found</T></span>
                                </div>
                                {results.slice(0, 5).map(res => (
                                    <div
                                        key={res.id}
                                        onClick={() => { push(res.link); setIsFocused(false); setQuery(''); }}
                                        className="px-5 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-4 border-b border-gray-50 last:border-0 group/item transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                                            {res.type === 'curriculum' ? <GraduationCap className="w-4 h-4 text-red-500" /> :
                                                res.type === 'subject' ? <BookOpen className="w-4 h-4 text-blue-500" /> :
                                                    <PlayCircle className="w-4 h-4 text-green-500" />}
                                        </div>
                                        <div className="overflow-hidden flex-1">
                                            <div className="font-bold text-sm text-gray-800 truncate group-hover/item:text-[#D92D20] transition-colors">
                                                <T>{res.title}</T>
                                            </div>
                                            <div className="text-xs text-gray-400 truncate">
                                                {res.breadcrumbs.join(' > ')}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {results.length > 5 && (
                                    <div
                                        onClick={() => { push(`/search?q=${encodeURIComponent(query)}`); setIsFocused(false); }}
                                        className="px-5 py-3 text-center text-xs font-bold text-[#D92D20] hover:bg-red-50 cursor-pointer transition-colors"
                                    >
                                        <T>View all results</T>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-colors font-bold text-sm text-gray-700 active:scale-95"
                    >
                        {lang === 'uz' ? <><span className="text-lg">🇺🇿</span><span>O'zb</span></> : <><span className="text-lg">🇬🇧</span><span>Eng</span></>}
                    </button>
                </div>
            </div>
        </header>
    );
}
