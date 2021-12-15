import { Request, Response } from "express";
import { CreateOccurenceService } from "../services/CreateOccurrenceService";

class CreateOccurrenceController {
    async handle(request: Request, response: Response) {
        const occurrence = request.body;
        const files = <Express.Multer.File[]>request.files;

        const service = new CreateOccurenceService();

        const result = await service.execute(occurrence, files).catch((e) => {
            return response.status(500).json({ message: 'Somenthing went wrong' });
        });

        return response.status(201).json(result);
    }
}

export { CreateOccurrenceController }