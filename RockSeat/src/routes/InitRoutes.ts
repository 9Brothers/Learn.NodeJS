import * as express from 'express';

const route: express.Router = express.Router();

route.use('/products', require("./ProductsRoute"));

export let router = route;