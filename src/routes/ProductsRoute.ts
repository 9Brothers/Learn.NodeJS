import * as express from 'express';
import { ProductController } from '../controllers/ProductController';

const ProductRoutes = express.Router();

ProductRoutes.get('/', ProductController.Index);
ProductRoutes.get('/:id', ProductController.Show)
ProductRoutes.post('/', ProductController.Store);
ProductRoutes.put('/:id', ProductController.Update);
ProductRoutes.delete('/:id', ProductController.Destroy);

module.exports = ProductRoutes;