import * as express from 'express';

const app = express.Router();

app.get('/', (req, res) => {
  res.send('home/index');
});

export const home = app;