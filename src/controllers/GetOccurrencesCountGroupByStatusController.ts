import { Request, Response } from 'express';
import { GetOccurrencesCountGroupByStatusService } from '../services/GetOccurrencesCountGroupByStatusService';

class GetOccurrencesCountGroupByStatusController {
    async handle(request: Request, response: Response) {
        const service = new GetOccurrencesCountGroupByStatusService();

        const result = await service.execute().catch((e) => {
            return response.status(500).json({ message: 'Somenthing went wrong' });
        });

        return response.status(200).json(result);
    }
}

export { GetOccurrencesCountGroupByStatusController }