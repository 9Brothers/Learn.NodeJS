import * as express from 'express';
import { home } from "./home.route";
import { noticias } from "./noticias.route";

const app = express.Router();

app.use('/', home);
app.use('/noticias', noticias);

export const main = app;
