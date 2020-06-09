import express from 'express';

import { ContactController } from './controllers/ContactController';

const routes = express.Router();
const contactController = new ContactController();

routes.get('/contact', contactController.index);

routes.post('/contact', contactController.create);

routes.post('/contact/:id', contactController.update);

routes.delete('/contact/:id', contactController.delete);


export default routes;