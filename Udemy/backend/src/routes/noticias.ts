import * as express from 'express';
import { NoticiasController } from '../controllers/NoticiasController';

const app = express.Router();

app.get('/', NoticiasController.Get);
app.get('/:id', NoticiasController.GetById);
app.post('/', NoticiasController.Store);

export const noticias = app;