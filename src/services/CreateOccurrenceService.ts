import Occurrence from '../interfaces/occurrence';
import prismaClient from '../prisma';

class CreateOccurenceService {
    async execute(occurrence: Occurrence) {
        await prismaClient.$connect;
        await prismaClient.occurrences.create({
            data: occurrence,
        })
        await prismaClient.$disconnect;
    }
}

export { CreateOccurenceService };