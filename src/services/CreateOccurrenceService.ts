import { statusAberta } from '../enums/status';
import Occurrence from '../interfaces/occurrence';
import prismaClient from '../prisma';

export interface ImageProp{
    key: string
}

class CreateOccurenceService {
    async execute(occurrence: Occurrence, files: ImageProp[]) {
        const images = files.map(image => {
            return {
                fileName: image.key,
            }
        })

        await prismaClient.$connect;

        const occurrenceCreated = await prismaClient.occurrences.create({
            data: {
                name: occurrence.name,
                serviceId: Number(occurrence.serviceId),
                obs: occurrence.obs,
                latitude: Number(occurrence.latitude),
                longitude: Number(occurrence.longitude),
                status: statusAberta,
                images: {
                    create: images
                }
            },
            include: {
                images: true,
                service: true,
            }
        }).catch((error) => {
            throw error;
        });

        await prismaClient.$disconnect;

        return occurrenceCreated;
    }
}

export { CreateOccurenceService };