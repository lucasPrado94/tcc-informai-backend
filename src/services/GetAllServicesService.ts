import prismaClient from '../prisma';

class GetAllServicesService {
    async execute() {

        await prismaClient.$connect;
        const services = await prismaClient.services.findMany();
        await prismaClient.$disconnect;
        return services;
    }
}

export { GetAllServicesService }