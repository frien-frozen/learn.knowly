"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function MagicTranslation() {
    const { t } = useLanguage();

    return (
        <section id="mission" className="container mx-auto px-4 py-20">
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                    {t.magicTranslation.title}
                </h2>
                <p className="text-2xl text-gray-600 font-semibold">
                    {t.magicTranslation.subtitle}
                </p>
            </div>

            {/* Split Card - No Floating Bulb */}
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                {/* Left Side - Complex English */}
                <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">🇬🇧</span>
                        <h3 className="text-xl font-extrabold text-gray-400">
                            {t.magicTranslation.english.title}
                        </h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed opacity-60">
                        {t.magicTranslation.english.example}
                    </p>
                </div>

                {/* Right Side - Clear Uzbek */}
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 border-2 border-red-800 shadow-xl hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">🇺🇿</span>
                        <h3 className="text-xl font-extrabold text-white">
                            {t.magicTranslation.uzbek.title}
                        </h3>
                    </div>
                    <p className="text-white text-lg leading-relaxed font-semibold">
                        {t.magicTranslation.uzbek.example}
                    </p>
                </div>
            </div>
        </section>
    );
}
