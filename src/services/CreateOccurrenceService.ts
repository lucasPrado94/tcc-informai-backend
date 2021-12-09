import Occurrence from '../interfaces/occurrence';
import prismaClient from '../prisma';
import { Prisma } from '@prisma/client';

class CreateOccurenceService {
    async execute(occurrence: Occurrence) {
        await prismaClient.$connect;

        const occurrenceCreated = await prismaClient.occurrences.create({
            data: {
                name: occurrence.name,
                type: Number(occurrence.type),
                obs: occurrence.obs,
                latitude: Number(occurrence.latitude),
                longitude: Number(occurrence.longitude)
            },
        }).catch((error) => {
            throw error;
        })

        await prismaClient.$disconnect;

        return occurrenceCreated;
    }
}

export { CreateOccurenceService };