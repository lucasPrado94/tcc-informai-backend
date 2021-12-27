import Router from 'express';
import { CreateOccurrenceController } from './controllers/CreateOccurrenceController';
import { GetAllOccurrencesController } from './controllers/GetAllOccurrencesController';
import { GetOccurrenceDetails } from './controllers/GetOccurrenceDetailsController';
import { GetAllServicesController } from './controllers/GetAllServicesController';
import multer from 'multer';
import uploadConfig from './config/upload';

const router = Router();
const upload = multer(uploadConfig);

router.post('/occurrences/create', upload.array('images'), new CreateOccurrenceController().handle);
router.get('/occurrences/all', new GetAllOccurrencesController().handle);
router.get('/occurrences/:id', new GetOccurrenceDetails().handle);
router.get('/services/all', new GetAllServicesController().handle);

export default router;