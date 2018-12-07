import { INoticia } from "../../../shared/models/INoticia";
import { MySqlPromise } from "../common/MySqlPromise";

export class NoticiaModel implements INoticia {
  id_noticia: number;
  titulo: string;
  noticia: string;
  resumo: string;
  autor: string;
  data_criacao: string;  
  data_noticia: string;
  
  Get(): Promise<INoticia[]> {
    return MySqlPromise.Query<INoticia[]>("SELECT * FROM noticias");
  }
  
  GetById(id_noticia: number | string): Promise<INoticia> {

    return new Promise<INoticia>((resolve, rejects) => {

      MySqlPromise.Query<INoticia[]>(`SELECT * FROM noticias WHERE id_noticia = ?`, [ id_noticia ] )
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
      MySqlPromise.Query(`INSERT INTO noticias SET ?`, noticia)
        .then(() => {
          resolve(200)
        })
        .catch((err) => {
          rejects(err);
        })
    })
  }

  Update(value: INoticia): Promise<INoticia> {
    throw new Error("Method not implemented.");
  }
}