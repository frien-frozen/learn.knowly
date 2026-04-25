import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const teachers = await prisma.teacher.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        profilePic: true,
        _count: { select: { topics: true } },
      },
    });
    return NextResponse.json({
      count: teachers.length,
      teachers: teachers.map(t => ({
        ...t,
        profilePicSet: !!t.profilePic,
        profilePicPreview: t.profilePic ? t.profilePic.slice(0, 80) + '...' : null,
        topicCount: t._count.topics,
      })),
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || String(error) }, { status: 500 });
  }
}
