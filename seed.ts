import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

// MOCK DATA IMPORT
import { MOCK_CURRICULUMS, MOCK_SUBJECTS, MOCK_SYLLABUS, getSyllabus } from "./utils/mockData.ts";

const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Starting DB Seed...");

    // Create system teacher
    const systemTeacher = await prisma.teacher.upsert({
        where: { email: 'system@knowly.uz' },
        update: {},
        create: {
            name: 'System Admin',
            email: 'system@knowly.uz',
        }
    });

    for (const [currSlug, currData] of Object.entries(MOCK_CURRICULUMS)) {
        console.log(`Upserting Curriculum: ${currData.title}`);
        const curriculum = await prisma.curriculum.upsert({
            where: { name: currData.title },
            update: {},
            create: { name: currData.title }
        });

        const subjects = MOCK_SUBJECTS[currSlug] || [];
        for (const subjData of subjects) {
            console.log(`  Upserting Subject: ${subjData.title}`);
            const subject = await prisma.subject.upsert({
                where: { id: `subj_${currSlug}_${subjData.slug}` },
                update: {
                    name: subjData.title,
                    curriculumId: curriculum.id
                },
                create: {
                    id: `subj_${currSlug}_${subjData.slug}`,
                    name: subjData.title,
                    curriculumId: curriculum.id
                }
            });

            const units = getSyllabus(subjData.slug, subjData.title);
            let unitOrder = 0;
            for (const unitData of units) {
                const unit = await prisma.unit.upsert({
                    where: { id: `unit_${subject.id}_${unitOrder}` },
                    update: {
                        title: unitData.title,
                        order: unitOrder,
                        subjectId: subject.id,
                        teacherId: systemTeacher.id
                    },
                    create: {
                        id: `unit_${subject.id}_${unitOrder}`,
                        title: unitData.title,
                        order: unitOrder,
                        subjectId: subject.id,
                        teacherId: systemTeacher.id
                    }
                });

                let topicOrder = 0;
                for (const topicTitle of unitData.topics) {
                    await prisma.topic.upsert({
                        where: { id: `topic_${unit.id}_${topicOrder}` },
                        update: {
                            title: topicTitle,
                            order: topicOrder,
                            unitId: unit.id,
                            teacherId: systemTeacher.id,
                            ytLink: null // explicit null for coming soon
                        },
                        create: {
                            id: `topic_${unit.id}_${topicOrder}`,
                            title: topicTitle,
                            order: topicOrder,
                            unitId: unit.id,
                            teacherId: systemTeacher.id,
                            ytLink: null
                        }
                    });
                    topicOrder++;
                }
                unitOrder++;
            }
        }
    }

    console.log("Database Seeded Successfully");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
