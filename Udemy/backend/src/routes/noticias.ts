import * as express from 'express';
import { NoticiasController } from '../controllers/NoticiasController';

const routes = express.Router();

routes.get('/', NoticiasController.Index);
routes.get('/:id', NoticiasController.GetById);
routes.post('/', NoticiasController.Store);

export const noticias = routes;