import { Request, Response } from 'express';
import { GetOccurrenceDetailsService } from '../services/GetOccurrenceDetailsService';

class GetOccurrenceDetailsController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new GetOccurrenceDetailsService();

        const result = await service.execute(+id);

        return response.json(result);
    }
}

export { GetOccurrenceDetailsController }