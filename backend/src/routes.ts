import { Router } from 'express';
import userControler from './controllers/UserController';

const routes = Router();

routes.get('/users', userControler.index);
routes.post('/users', userControler.create);

export default routes;
