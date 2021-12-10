import { Request, Response } from  'express';
import { GetAllTypesService } from '../services/GetAllTypesService';

class GetAllTypesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllTypesService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { GetAllTypesController }