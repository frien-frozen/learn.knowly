import { useRouter as useNextRouter, useSearchParams } from 'next/navigation';

export const useLangRouter = () => {
    const router = useNextRouter();
    const searchParams = useSearchParams();
    const lang = searchParams.get('lang') || 'uz';

    // 1. Helper to generate a safe link with the current language
    const getLink = (path: string) => {
        const separator = path.includes('?') ? '&' : '?';
        return `${path}${separator}lang=${lang}`;
    };

    // 2. Wrapper for router.push that automatically appends lang
    const push = (path: string) => {
        router.push(getLink(path));
    };

    return { push, getLink, lang };
};
