import * as express from "express";
import { INoticia } from "../../../shared/models/INoticia";
import { MySqlPromise } from "../common/MySqlPromise";

export class NoticiasController {

  // GET: /noticias
  public static async Index(req: express.Request, res: express.Response) {
    
    const noticias = await MySqlPromise.Query<INoticia[]>("SELECT * FROM noticias");

    return res.json(noticias);
  }

  // GET: /noticias/{id} 
  public static async GetById(req: express.Request, res: express.Response) {
    
    const noticia = await MySqlPromise.Query<INoticia[]>(`SELECT * FROM noticias WHERE id_noticia = ${req.params.id}`);

    if (noticia.length) {
      return res.json(noticia[0]);
    }

    return null;
  }

  // POST: /noticias
  public static async Store(req: express.Request, res: express.Response) {

    const noticia = req.body as INoticia;

    const result = await MySqlPromise.Query<INoticia[]>(`INSERT INTO noticias (titulo, noticia) VALUES ("${noticia.titulo}", "${noticia.noticia}")`)

    if (result.length) {
      return res.json(result[0])
    }

    return res.json(null);
  }
}