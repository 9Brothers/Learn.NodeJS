import * as express from 'express';

const app = express.Router();

app.get('/', (req, res) => {
  res.send('admin/form_add_noticia');
});

export const formulario_inclusao_noticia = app;
