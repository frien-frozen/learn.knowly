import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

export const useT = (text: string) => {
    const searchParams = useSearchParams();
    const lang = searchParams.get('lang') || 'uz'; // URL Driver

    const [translated, setTranslated] = useState(text);
    const isFetching = useRef(false);

    useEffect(() => {
        const translate = async () => {
            // If English, return original
            if (lang === 'en') {
                setTranslated(text);
                return;
            }

            // Check Cache
            const cacheKey = `tr_${lang}_${text}`;
            const cached = typeof window !== 'undefined' ? localStorage.getItem(cacheKey) : null;

            if (cached && cached !== text) {
                setTranslated(cached);
                return;
            }

            if (isFetching.current) return;

            // Fetch API
            try {
                isFetching.current = true;
                const res = await fetch('/api/translate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text, targetLang: lang }),
                });
                const data = await res.json();

                if (data.translatedText) {
                    setTranslated(data.translatedText);
                    localStorage.setItem(cacheKey, data.translatedText);
                }
            } catch (e) {
                // silent fail
            } finally {
                isFetching.current = false;
            }
        };

        translate();
    }, [text, lang]); // Re-run when URL lang changes

    return translated;
};
