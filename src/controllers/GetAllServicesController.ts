import { Request, Response } from  'express';
import { GetAllServicesService } from '../services/GetAllServicesService';

class GetAllServicesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllServicesService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { GetAllServicesController }