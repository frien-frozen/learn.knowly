'use client';

import React, { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface LanguageContextType {
    lang: string;
    isTranslating: boolean;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function LanguageProviderInner({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // 1. Source of Truth: URL (default to 'uz')
    const lang = searchParams.get('lang') || 'uz';

    const [isTranslating, setIsTranslating] = useState(false);

    // 2. Sync LocalStorage on mount/change
    useEffect(() => {
        localStorage.setItem('knowly_lang', lang);
    }, [lang]);

    // 3. Toggle Handler
    const toggleLanguage = () => {
        setIsTranslating(true);
        const nextLang = lang === 'uz' ? 'en' : 'uz';

        // Update URL
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', nextLang);
        router.push(`${pathname}?${params.toString()}`);

        // Keep overlay up briefly
        setTimeout(() => setIsTranslating(false), 1500);
    };

    return (
        <LanguageContext.Provider value={{ lang, isTranslating, toggleLanguage }}>
            {/* LOADING OVERLAY */}
            {isTranslating && (
                <div className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-4 border-gray-100 border-t-[#D92D20] rounded-full animate-spin mb-6"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828] animate-pulse text-center px-4">
                        {lang === 'en' ? "Ingliz tiliga tarjima qilinmoqda..." : "O'zbek tiliga tarjima qilinmoqda..."}
                    </h2>
                    <p className="text-gray-400 mt-2 font-medium">Applying AI Translations...</p>
                </div>
            )}
            {children}
        </LanguageContext.Provider>
    );
}

// Wrap in Suspense for Next.js useSearchParams
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div />}>
            <LanguageProviderInner>{children}</LanguageProviderInner>
        </Suspense>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
