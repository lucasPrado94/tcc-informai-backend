import Router from 'express';
import { CreateOccurrenceController } from './controllers/CreateOccurrenceController';
import { GetAllOccurrencesController } from './controllers/GetAllOccurrencesController';
import multer from 'multer';

const router = Router();
const upload = multer();

router.post('/occurrences/create', upload.none(), new CreateOccurrenceController().handle);
router.get('/occurrences/all', new GetAllOccurrencesController().handle);

export default router;