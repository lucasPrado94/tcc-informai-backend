import prismaClient from '../prisma';

class GetOccurrencesCountGroupByServicesService {
    async execute() {

        await prismaClient.$connect;
        const occurrences = await prismaClient.services.findMany({
            select: {
                serviceName: true,
                _count: {
                    select: { occurrences: true },
                },
            },
        }).catch((error) => {
            throw error;
        });
        await prismaClient.$disconnect;
        return occurrences;
    }
}

export { GetOccurrencesCountGroupByServicesService }