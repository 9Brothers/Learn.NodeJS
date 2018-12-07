import * as express from 'express';
import * as cors from 'cors';
import * as expressValidator from "express-validator";
import { main } from "../routes/main.route";


// Iniciando o web server
const server = express();

server.use(expressValidator());

// Enviar dados para o servicor (POST, PUT...) no formato JSON
server.use(express.json())
server.use('/', main);

// Habilita o Cross-Origin
server.use(cors());




export let app = server;