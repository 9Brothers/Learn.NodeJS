import * as express from 'express';
import { NoticiasController } from '../controllers/noticias.controller';

const app = express.Router();

let controller = new NoticiasController();

app.get('/', controller.Get);
app.get('/:id', controller.GetById);
app.post('/', controller.Save);

export const noticias = app;