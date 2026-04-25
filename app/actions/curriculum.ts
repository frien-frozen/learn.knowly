'use server';

import prisma from '@/lib/prisma';

export async function getCurriculums() {
  try {
    return await prisma.curriculum.findMany({
      include: {
        subjects: {
          include: {
            units: {
              include: {
                topics: {
                  orderBy: { order: 'asc' }
                }
              },
              orderBy: { order: 'asc' }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

export async function getCurriculumBySlug(slug: string) {
  try {
    return await prisma.curriculum.findFirst({
      where: {
        OR: [
          { id: slug },
          { name: { equals: decodeURIComponent(slug), mode: 'insensitive' } }
        ]
      },
      include: {
        subjects: {
          include: {
            units: {
                include: {
                    topics: {
                        orderBy: { order: 'asc' }
                    }
                },
                orderBy: { order: 'asc' }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error("Database Error:", error);
    return null;
  }
}

export async function getSubjectBySlug(subjectSlug: string) {
    try {
      return await prisma.subject.findUnique({
        where: { id: subjectSlug },
        include: {
          curriculum: true,
          units: {
            include: {
              topics: {
                include: {
                  publishedBy: {
                    select: { id: true, name: true, bio: true, profilePic: true }
                  }
                },
                orderBy: { order: 'asc' }
              }
            },
            orderBy: { order: 'asc' }
          }
        }
      });
    } catch (error) {
      console.error("Database Error:", error);
      return null;
    }
  }
