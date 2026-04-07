'use server'

import prisma from '@/lib/prisma';

export async function getCourseTopics() {
  try {
    return await prisma.topic.findMany({
      include: {
        lessons: { orderBy: { order: 'asc' } },
        teacher: true
      },
      orderBy: { order: 'asc' }
    });
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

// One-time function to seed existing mock data into the DB
export async function seedMockData(mockTopics: any[]) {
  try {
    // Create a dummy teacher to own this seeded content
    const teacher = await prisma.teacher.upsert({
      where: { email: 'system@knowly.uz' },
      update: {},
      create: {
        name: 'Knowly System',
        email: 'system@knowly.uz',
      }
    });

    // Check if we already seeded to prevent duplicates
    const existing = await prisma.topic.count({ where: { teacherId: teacher.id } });
    if (existing > 0) return { success: true, message: "Already seeded." };

    // Loop through mock data and insert
    for (let i = 0; i < mockTopics.length; i++) {
      const topic = mockTopics[i];
      await prisma.topic.create({
        data: {
          title: topic.title || `Topic ${i + 1}`,
          order: i,
          teacherId: teacher.id,
          lessons: {
            create: (topic.lessons || topic.items || []).map((lesson: any, j: number) => ({
              title: lesson.title || `Lesson ${j + 1}`,
              ytLink: lesson.ytLink || lesson.videoUrl || '',
              order: j,
              isSaved: true
            }))
          }
        }
      });
    }
    return { success: true, message: "Mock data successfully pushed to database!" };
  } catch (error) {
    console.error("Seeding Error:", error);
    return { success: false, error: String(error) };
  }
}
