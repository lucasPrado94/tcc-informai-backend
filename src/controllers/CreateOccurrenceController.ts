import { Request, Response } from "express";
import { CreateOccurenceService } from "../services/CreateOccurrenceService";


class CreateOccurrenceController {
    async handle(request: Request, response: Response) {
        const occurrence = request.body;

        const service = new CreateOccurenceService();

        const result = await service.execute(occurrence).catch((e) => {
            return response.status(500).send('Something went wrong');
        });
        
        return response.json(result);
    }
}

export { CreateOccurrenceController }