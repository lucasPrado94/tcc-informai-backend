import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Occurrence {
    name: string
}
class CreateOccurenceService {
    async execute(occurrence: Occurrence) {
        await prisma.$connect;
        await prisma.occurrences.create({
            data: occurrence,
        })
        await prisma.$disconnect;
    }
}

export { CreateOccurenceService };