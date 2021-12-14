import Router from 'express';
import { CreateOccurrenceController } from './controllers/CreateOccurrenceController';
import { GetAllOccurrencesController } from './controllers/GetAllOccurrencesController';
import { GetAllTypesController } from './controllers/GetAllTypesController';
import multer from 'multer';
import uploadConfig from './config/upload';

const router = Router();
const upload = multer(uploadConfig);

router.post('/occurrences/create', upload.array('images'), new CreateOccurrenceController().handle);
router.get('/occurrences/all', new GetAllOccurrencesController().handle);
router.get('/types/all', new GetAllTypesController().handle);

export default router;