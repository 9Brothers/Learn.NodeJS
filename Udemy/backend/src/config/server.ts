import * as express from 'express';
import { router } from "../routes/main";

// Iniciando o web server
const server = express();

// Enviar dados para o servicor (POST, PUT...) no formato JSON
server.use(express.json())

server.use('/', router);

export const app = server;
