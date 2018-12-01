import * as express from "express";
import { INoticia } from "../../../shared/models/INoticia";
import { NoticiaFactory } from "../factories/noticia.factory";
import { IController } from "./IController";

export class NoticiasController implements IController {
  // GET: /noticias
  public async Get(req: express.Request, res: express.Response): Promise<express.Response> {
    return res.json(await NoticiaFactory.Get());
  }

  // GET: /noticias/{id} 
  public async GetById(req: express.Request, res: express.Response): Promise<express.Response> {
    return res.json(await NoticiaFactory.GetById(req.params.id));
  }
  
  // POST: /noticias
  public async Save(req: express.Request, res: express.Response): Promise<express.Response> {
    const noticia = req.body as INoticia;

    const result = await NoticiaFactory.Store(noticia) ;

    if(typeof result === 'number') {
      
      return res.sendStatus(result);
    }

    return res.json(result);
  }

  // PUT: /noticias
  public async Update(req: express.Request, res: express.Response): Promise<express.Response> {
    throw new Error("Method not implemented.");
  }

  // DELETE: /noticias/id
  public async Delete(req: express.Request, res: express.Response): Promise<express.Response> {
    throw new Error("Method not implemented.");
  }
}