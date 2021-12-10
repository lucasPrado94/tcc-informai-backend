import Router from 'express';
import { CreateOccurrenceController } from './controllers/CreateOccurrenceController';
import { GetAllOccurrencesController } from './controllers/GetAllOccurrencesController';
import { GetAllTypesController } from './controllers/GetAllTypesController';
import multer from 'multer';

const router = Router();
const upload = multer();

router.post('/occurrences/create', upload.none(), new CreateOccurrenceController().handle);
router.get('/occurrences/all', new GetAllOccurrencesController().handle);
router.get('/types/all', new GetAllTypesController().handle);

export default router;