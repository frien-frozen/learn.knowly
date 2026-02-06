'use client';

import React, { Suspense } from 'react';
import { useT } from '@/hooks/useT';

function TInner({ children, className }: { children: string; className?: string }) {
    const translated = useT(children);
    return <span className={className}>{translated}</span>;
}

// Wrap in Suspense for Next.js useSearchParams in useT hook
export default function T({ children, className }: { children: string; className?: string }) {
    return (
        <Suspense fallback={<span className={className}>{children}</span>}>
            <TInner className={className}>{children}</TInner>
        </Suspense>
    );
}

// Helper for getting current language (for non-component usage)
export const getCurrentLang = () => {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang') || 'uz';
    }
    return 'uz';
};
