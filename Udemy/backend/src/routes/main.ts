import * as express from 'express';
import { home } from "./home";
import { noticias } from "./noticias";
import { formulario_inclusao_noticia } from "./formulario_inclusao_noticia";

const routes = express.Router();

routes.use('/home', home);
routes.use('/noticias', noticias);
routes.use('/formulario_inclusao_noticia', formulario_inclusao_noticia);

export const router = routes;