import { Request, Response } from 'express';
import { GetOccurrencesCountGroupByServicesService } from '../services/GetOccurrencesCountGroupByServicesService';

class GetOccurrencesCountGroupByServicesController {
    async handle(request: Request, response: Response) {
        const service = new GetOccurrencesCountGroupByServicesService();

        const result = await service.execute().catch((e) => {
            return response.status(500).json({ message: 'Somenthing went wrong' });
        });

        return response.status(200).json(result);
    }
}

export { GetOccurrencesCountGroupByServicesController }