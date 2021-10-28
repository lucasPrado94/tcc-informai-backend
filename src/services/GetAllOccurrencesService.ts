import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GetAllOccurrencesService {
    async execute() {
        const occurrences = await prisma.occurrences.findMany();
        return occurrences;
    }
}

export { GetAllOccurrencesService }