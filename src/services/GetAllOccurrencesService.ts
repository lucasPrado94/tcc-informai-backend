import prismaClient from '../prisma';

class GetAllOccurrencesService {
    async execute() {

        await prismaClient.$connect;
        const occurrences = await prismaClient.occurrences.findMany(
            { 
                include: {
                    type: true,
                    images: true,
                } 
            }
        );
        await prismaClient.$disconnect;
        return occurrences;
    }
}

export { GetAllOccurrencesService }