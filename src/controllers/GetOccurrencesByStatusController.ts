import { Request, Response } from 'express';
import { GetOccurrencesByStatusService } from '../services/GetOccurrencesByStatusService';

class GetOccurrencesByStatusController {
    async handle(request: Request, response: Response) {
        const { status } = request.params;

        const service = new GetOccurrencesByStatusService();

        const result = await service.execute(+status);

        return response.json(result);
    }
}

export { GetOccurrencesByStatusController }