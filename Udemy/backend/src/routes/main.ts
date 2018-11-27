import * as express from 'express';
import { home } from "./home";
import { noticias } from "./noticias";
import { formulario_inclusao_noticia } from "./formulario_inclusao_noticia";

const app = express.Router();

app.use('/', home);
app.use('/noticias', noticias);
app.use('/formulario_inclusao_noticia', formulario_inclusao_noticia);

export const main = app;