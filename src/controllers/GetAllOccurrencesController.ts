import { Request, Response } from  'express';
import { GetAllOccurrencesService } from '../services/GetAllOccurrencesService';

class GetAllOccurrencesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllOccurrencesService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { GetAllOccurrencesController }