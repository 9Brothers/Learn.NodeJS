import * as express from "express";
import * as mongoose from 'mongoose';

const Product = mongoose.model('Product');

export class ProductController {
  public static async Index(req: express.Request, res: express.Response) {
    const { page = 1 } = req.query;
    
    const products = await Product.paginate({}, { page, limit: 10});

    return res.json(products)
  }

  public static async Show(req: express.Request, res: express.Response) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  }

  public static async Store(req: express.Request, res: express.Response) {
    const product = await Product.create(req.body);

    return res.json(product);
  }

  public static async Update(req: express.Request, res: express.Response) {
    // a propriedade "new: true" retorna o objeto já atualizado no banco
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(product);
  }

  public static async Destroy(req: express.Request, res: express.Response) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
}