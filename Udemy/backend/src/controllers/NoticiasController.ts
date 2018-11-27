import * as express from 'express';
import { MySqlPromise } from "../common/MySqlPromise";
import { INoticia } from "../../../shared/models/INoticia"

export class NoticiasController {
  public static async Get(req: express.Request, res: express.Response): Promise<express.Response> {
    let noticias = await MySqlPromise.Query<INoticia[]>("SELECT * FROM noticias");

    return res.json(noticias);
  }

  public static async GetById(req: express.Request, res: express.Response): Promise<express.Response> {
    let noticias = await MySqlPromise.Query<INoticia[]>(`SELECT * FROM noticias WHERE id_noticia = ${req.params.id}`);

    if(noticias.length) {
      return res.json(noticias[0]);
    }

    return res.json(null);
  }
}