import Router from 'express';
import Cors from 'cors';
import { CreateOccurrenceController } from './controllers/CreateOccurrenceController';
import { GetAllOccurrencesController } from './controllers/GetAllOccurrencesController';
import { GetOccurrenceDetails } from './controllers/GetOccurrenceDetailsController';
import { GetAllServicesController } from './controllers/GetAllServicesController';
import { GetOccurrencesByStatusController } from './controllers/GetOccurrencesByStatusController';
import { UpdateOccurrenceStatusController } from './controllers/UpdateOccurrenceStatusController';

import multer from 'multer';
import uploadConfig from './config/upload';

const router = Router();
const upload = multer(uploadConfig);

router.use(Cors({
    origin: '*',
    credentials: true
}))

router.post('/occurrences/create', upload.array('images'), new CreateOccurrenceController().handle);
router.get('/occurrences/all', new GetAllOccurrencesController().handle);
router.get('/occurrences/all/:status', new GetOccurrencesByStatusController().handle);
router.get('/occurrences/:id', new GetOccurrenceDetails().handle);
router.patch('/occurrences/update', upload.none(), new UpdateOccurrenceStatusController().handle);
router.get('/services/all', new GetAllServicesController().handle);


export default router;