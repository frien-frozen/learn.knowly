'use server'
import prisma from '@/lib/prisma';

export async function getLiveCurriculum() {
  try {
    const data = await prisma.curriculum.findMany({
      include: {
        subjects: {
          include: {
            units: {
              include: {
                topics: {
                  include: {
                    teacher: true // Crucial: Fetch the author of the lesson
                  },
                  orderBy: { createdAt: 'asc' }
                }
              },
              orderBy: { createdAt: 'asc' }
            }
          }
        }
      }
    });
    return { success: true, data };
  } catch (error) {
    console.error("Learn Fetch error:", error);
    return { success: false, data: [] };
  }
}
