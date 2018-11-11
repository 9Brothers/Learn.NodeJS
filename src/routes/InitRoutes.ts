import * as express from 'express';

const router: express.Router = express.Router();

router.use('/products', require('./ProductsRoute'));

module.exports = router;