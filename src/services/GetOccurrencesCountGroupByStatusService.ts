import prismaClient from '../prisma';
import { statusAberta, statusEmAndamento, statusFinalizada } from '../enums/status';

class GetOccurrencesCountGroupByStatusService {
        async execute() {

            await prismaClient.$connect;

            var countOccurrencesStatus = [];

            const occurrencesAberta = await prismaClient.occurrences.count({
                where: {
                    status: statusAberta
                }
            }).catch((error) => {
                throw error;
            });

            countOccurrencesStatus.push({
                status: "Em aberto",
                count: occurrencesAberta
            });

            const occurrencesEmAndamento = await prismaClient.occurrences.count({
                where: {
                    status: statusEmAndamento
                }
            }).catch((error) => {
                throw error;
            });

            countOccurrencesStatus.push({
                status: "Em andamento",
                count: occurrencesEmAndamento
            });

            const occurrencesFinalizada = await prismaClient.occurrences.count({
                where: {
                    status: statusFinalizada
                }
            }).catch((error) => {
                throw error;
            });

            countOccurrencesStatus.push({
                status: "Finalizadas",
                count: occurrencesFinalizada
            });

            await prismaClient.$disconnect;
            return countOccurrencesStatus;
        }
    }

export { GetOccurrencesCountGroupByStatusService }