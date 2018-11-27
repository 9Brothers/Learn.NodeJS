import * as express from 'express';
import * as cors from 'cors';
import { main } from "../routes/main";

// Iniciando o web server
const server = express();

// Enviar dados para o servicor (POST, PUT...) no formato JSON
server.use(express.json())
server.use('/', main);
server.use(cors());

export let app = server;