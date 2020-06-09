import express from 'express';

import { ContactController } from './controllers/ContactController';

const routes = express.Router();
const contactController = new ContactController();

routes.get('/items', contactController.index);

routes.post('/points', contactController.create);

routes.post('/points/:id', contactController.update);

routes.delete('/points/:id', contactController.delete);


export default routes;