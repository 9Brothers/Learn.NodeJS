import * as express from "express";
import { INoticia } from "../../../shared/models/INoticia";
import { NoticiaFactory } from "../factories/NoticiaFactory";

export class NoticiasController {

  // GET: /noticias
  public static async Get(req: express.Request, res: express.Response) {
    
    return res.json(await NoticiaFactory.Get());
  }

  // GET: /noticias/{id} 
  public static async GetById(req: express.Request, res: express.Response) {
    
    return res.json(await NoticiaFactory.GetById(req.params.id));
  }

  // POST: /noticias
  public static async Store(req: express.Request, res: express.Response) {

    const noticia = req.body as INoticia;

    const result = await NoticiaFactory.Store(noticia) ;

    if(typeof result === 'number') {
      
      return res.status(result);
    }

    return res.json(result);
  }
}