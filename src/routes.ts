import Router from 'express';
import { CreateOccurrenceController } from './controllers/CreateOccurrenceController';
import { GetAllOccurrencesController } from './controllers/GetAllOccurrencesController';

const router = Router();

router.get('/occurrences/create', new CreateOccurrenceController().handle);
router.get('/occurrences/all', new GetAllOccurrencesController().handle);

export default router;