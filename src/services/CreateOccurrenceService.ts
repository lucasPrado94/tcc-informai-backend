import { prismaClient } from '../prisma';
import Occurrence from '../interfaces/Occurrence'

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