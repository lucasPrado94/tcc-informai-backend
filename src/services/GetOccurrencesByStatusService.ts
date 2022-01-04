import prismaClient from '../prisma';

class GetOccurrencesByStatusService {
    async execute(status: number) {

        await prismaClient.$connect;
        const occurrences = await prismaClient.occurrences.findMany(
            { 
                include: {
                    service: true,
                    images: true,
                },
                where: {
                    status: status
                } 
            }
        );
        await prismaClient.$disconnect;
        return occurrences;
    }
}

export { GetOccurrencesByStatusService }