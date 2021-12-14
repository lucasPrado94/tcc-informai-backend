import express from 'express';
import router from './routes';
import path from 'path';

const app = express();
app.use(express.json());
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

export default app;