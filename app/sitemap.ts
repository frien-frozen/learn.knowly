import { MetadataRoute } from 'next';
import prisma from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://learn.knowly.uz';

  const static_urls: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${base}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  try {
    const curriculums = await prisma.curriculum.findMany({
      include: { subjects: true },
    });

    const curriculum_urls: MetadataRoute.Sitemap = curriculums.flatMap((c) => [
      {
        url: `${base}/curriculum/${c.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      ...c.subjects.map((s) => ({
        url: `${base}/curriculum/${c.id}/${s.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
    ]);

    return [...static_urls, ...curriculum_urls];
  } catch {
    return static_urls;
  }
}
