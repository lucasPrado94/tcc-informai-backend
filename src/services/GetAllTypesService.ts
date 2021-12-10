import prismaClient from '../prisma';

class GetAllTypesService {
    async execute() {

        await prismaClient.$connect;
        const occurrences = await prismaClient.types.findMany();
        await prismaClient.$disconnect;
        return occurrences;
    }
}

export { GetAllTypesService }