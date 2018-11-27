import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Enviar dados para o servidor (POST, PUT...) no formato JSON
app.use(express.json());

// Habilita o CORS
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/node_api', { useNewUrlParser: true });
requireDir('./models/');

// Rotas
app.use('/api', require('./routes/InitRoutes'));

app.listen(3000);