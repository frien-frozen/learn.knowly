import { useState, useMemo, useCallback, useEffect } from 'react';
import Fuse from 'fuse.js';
import { fetchSearchIndex } from '@/app/actions/search';

export type SearchResult = {
    id: string;
    type: 'curriculum' | 'subject' | 'topic';
    title: string;
    subtitle?: string;
    link: string;
    breadcrumbs: string[];
};

export const useGlobalSearch = () => {
    const [searchIndex, setSearchIndex] = useState<SearchResult[]>([]);

    useEffect(() => {
        // Fetch search data from database
        fetchSearchIndex().then(data => {
            setSearchIndex(data);
        }).catch(err => {
            console.error('Failed to load search index:', err);
        });
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
        if (!query || searchIndex.length === 0) return [];
        return fuse.search(query).map(res => res.item);
    }, [fuse, searchIndex]);

    return { search, isLoading: searchIndex.length === 0 };
};
