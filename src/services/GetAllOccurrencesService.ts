import prismaClient from '../prisma';

class GetAllOccurrencesService {
    async execute() {

        await prismaClient.$connect;
        const occurrences = await prismaClient.occurrences.findMany(
            { 
                include: {
                    service: true,
                    images: true,
                },
                orderBy: {
                    createdAt: 'asc',
                } 
            }
        );
        await prismaClient.$disconnect;
        return occurrences;
    }
}

export { GetAllOccurrencesService }