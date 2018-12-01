import { INoticia } from "../../../shared/models/INoticia";
import { MySqlPromise } from "../common/MySqlPromise";

export class NoticiaModel implements INoticia {
  Update(value: INoticia): Promise<INoticia> {
    throw new Error("Method not implemented.");
  }
  id_noticia: number;
  titulo: string;
  noticia: string;
  data_criacao: string;
  
  Get(): Promise<INoticia[]> {
    return MySqlPromise.Query<INoticia[]>({ sql: "SELECT * FROM noticias" });
  }
  
  GetById(id: number | string): Promise<INoticia> {

    return new Promise<INoticia>((resolve, rejects) => {

      MySqlPromise.Query<INoticia[]>({ sql: `SELECT * FROM noticias WHERE id_noticia = :id`, values: { id } })
        .then((value) => {

          const noticia = value;

          if (noticia.length) {
            resolve(noticia[0]);
          }

          resolve(null);
        })
        .then((error) => {
          rejects(error);
        })
    });
  }

  Store(noticia: INoticia): Promise<any> {
    return new Promise<number>((resolve, rejects) => {
      MySqlPromise.Query({ sql: `INSERT INTO noticias (titulo, noticia) VALUES (:titulo, :noticia)`, values: noticia })
        .then(() => {
          resolve(200)
        })
        .catch((err) => {
          rejects(err);
        })
    })
  }
}