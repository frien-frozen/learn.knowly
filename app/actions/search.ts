'use server';

import prisma from '@/lib/prisma';
import { SearchResult } from '@/hooks/useGlobalSearch';

export async function fetchSearchIndex(): Promise<SearchResult[]> {
    const index: SearchResult[] = [];

    // Fetch all required data in a few queries to avoid N+1
    const curriculums = await prisma.curriculum.findMany({
        include: {
            subjects: {
                include: {
                    units: {
                        include: {
                            topics: true
                        }
                    }
                }
            }
        }
    });

    for (const curr of curriculums) {
        index.push({
            id: `curr-${curr.id}`,
            type: 'curriculum',
            title: curr.name,
            subtitle: 'Curriculum',
            link: `/curriculum/${curr.name}`,
            breadcrumbs: ['Curriculum']
        });

        for (const subj of curr.subjects) {
            index.push({
                id: `subj-${subj.id}`,
                type: 'subject',
                title: subj.name,
                subtitle: `Subject`,
                link: `/curriculum/${curr.name}/${subj.id}`,
                breadcrumbs: [curr.name]
            });

            for (const unit of subj.units) {
                for (const topic of unit.topics) {
                    index.push({
                        id: `topic-${topic.id}`,
                        type: 'topic',
                        title: topic.title,
                        subtitle: `Unit: ${unit.title}`,
                        link: `/curriculum/${curr.name}/${subj.id}`,
                        breadcrumbs: [curr.name, subj.name]
                    });
                }
            }
        }
    }

    return index;
}
