'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Force scroll to top whenever the route changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Instant jump (prevent smooth scroll fighting)
        });
    }, [pathname]);

    return null;
}
