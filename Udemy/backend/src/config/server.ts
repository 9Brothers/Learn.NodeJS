import * as express from 'express';
import * as cors from 'cors';
import { main } from "../routes/main";

let server = express();

server.use('/', main);
server.use(cors());

export let app = server;