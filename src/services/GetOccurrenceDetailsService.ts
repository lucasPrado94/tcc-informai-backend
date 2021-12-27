import prismaClient from '../prisma';

class GetOccurrenceDetailsService {
    async execute(id: number) {

        await prismaClient.$connect;
        const occurrence = await prismaClient.occurrences.findUnique(
            { 
                where: {
                    id
                },
                include: {
                    service: true,
                    images: true,
                } 
            }
        );
        
        await prismaClient.$disconnect;

        return occurrence;
    }
}

export { GetOccurrenceDetailsService }