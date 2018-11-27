import * as express from 'express';
import { ProductController } from '../controllers/ProductController';

const routes = express.Router();

routes.get('/', ProductController.Index);
routes.get('/:id', ProductController.Show)
routes.post('/', ProductController.Store);
routes.put('/:id', ProductController.Update);
routes.delete('/:id', ProductController.Destroy);

export let ProductRoutes = routes