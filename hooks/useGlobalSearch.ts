import { useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { MOCK_CURRICULUMS, MOCK_SUBJECTS, getSyllabus } from '@/utils/mockData';

export type SearchResult = {
    id: string;
    type: 'curriculum' | 'subject' | 'topic';
    title: string;
    subtitle?: string;
    link: string;
    breadcrumbs: string[];
};

export const useGlobalSearch = () => {
    const searchIndex = useMemo(() => {
        const index: SearchResult[] = [];

        Object.entries(MOCK_CURRICULUMS).forEach(([slug, curr]) => {
            index.push({
                id: `curr-${slug}`,
                type: 'curriculum',
                title: curr.title,
                subtitle: curr.subtitle,
                link: `/curriculum/${slug}`,
                breadcrumbs: ['Curriculum']
            });

            const subjects = MOCK_SUBJECTS[slug] || [];
            subjects.forEach((subj) => {
                index.push({
                    id: `subj-${subj.slug}`,
                    type: 'subject',
                    title: subj.title,
                    subtitle: `Code: ${subj.code}`,
                    link: `/curriculum/${slug}/${subj.slug}`,
                    breadcrumbs: [curr.title]
                });

                const syllabus = getSyllabus(subj.slug, subj.title);
                syllabus.forEach((unit) => {
                    unit.topics.forEach((topic) => {
                        index.push({
                            id: `topic-${topic}`,
                            type: 'topic',
                            title: topic,
                            subtitle: `Unit: ${unit.title}`,
                            link: `/curriculum/${slug}/${subj.slug}`,
                            breadcrumbs: [curr.title, subj.title]
                        });
                    });
                });
            });
        });
        return index;
    }, []);

    const fuse = useMemo(() => new Fuse(searchIndex, {
        keys: [
            { name: 'title', weight: 0.7 },
            { name: 'subtitle', weight: 0.2 },
            { name: 'breadcrumbs', weight: 0.1 }
        ],
        threshold: 0.3,
        ignoreLocation: true,
    }), [searchIndex]);

    const search = useCallback((query: string) => {
        if (!query) return [];
        return fuse.search(query).map(res => res.item);
    }, [fuse]);

    return { search };
};
