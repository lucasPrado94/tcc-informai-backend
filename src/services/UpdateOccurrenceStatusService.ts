import prismaClient from '../prisma';

interface OccurrenceStatusEdit {
    id: number,
    status: number
}

class UpdateOccurrenceStatusService {
    async execute(occurrence: OccurrenceStatusEdit) {
        await prismaClient.$connect;

        const occurrenceUpdated = await prismaClient.occurrences.update({
            where: { id: Number(occurrence.id) },
            data: {
                status: Number(occurrence.status),
            },
        }).catch((error) => {
            throw error;
        });

        await prismaClient.$disconnect;

        return occurrenceUpdated;
    }
}

export { UpdateOccurrenceStatusService };