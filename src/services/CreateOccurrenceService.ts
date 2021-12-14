import Occurrence from '../interfaces/occurrence';
import prismaClient from '../prisma';

class CreateOccurenceService {
    async execute(occurrence: Occurrence, files: Express.Multer.File[]) {
        await prismaClient.$connect;
        
        const images = files.map(image => {
            return {
                path: image.filename,
            }
        })

        const occurrenceCreated = await prismaClient.occurrences.create({
            data: {
                name: occurrence.name,
                typeId: Number(occurrence.typeId),
                obs: occurrence.obs,
                latitude: Number(occurrence.latitude),
                longitude: Number(occurrence.longitude),
                images: {
                    create: images
                }
            },
            include: {
                images: true,
                type: true,
            }
        }).catch((error) => {
            throw error;
        });

        await prismaClient.$disconnect;

        return occurrenceCreated;
    }
}

export { CreateOccurenceService };