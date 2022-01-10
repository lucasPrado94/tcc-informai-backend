import { Request, Response } from "express";
import { UpdateOccurrenceStatusService } from "../services/UpdateOccurrenceStatusService";

class UpdateOccurrenceStatusController {
    async handle(request: Request, response: Response) {
        const occurrence = request.body;
        
        const service = new UpdateOccurrenceStatusService();

        const result = await service.execute(occurrence).catch((e) => {
            return response.status(500).json({ message: 'Somenthing went wrong' });
        });

        return response.status(200).json(result);
    }
}

export { UpdateOccurrenceStatusController }