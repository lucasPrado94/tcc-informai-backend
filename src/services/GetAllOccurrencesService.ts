import Occurrence from '../interfaces/occurrence';
import { prismaClient } from '../prisma';

class GetAllOccurrencesService {
    async execute() {
        await prismaClient.$connect;
        const occurrences = await prismaClient.occurrences.findMany();
        await prismaClient.$disconnect;
        return occurrences;
    }
}

export { GetAllOccurrencesService }