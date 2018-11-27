import { MySqlConnection } from "../config/database";

export class MySqlPromise<T> {
  public static Query<T> (query: string) : Promise<T> {

    let promise = new Promise<T>((resolve, reject) => {
      
      MySqlConnection.query(query, (err, noticias: T) => {

        if(err) {
          reject(err);
        } else {
          resolve(noticias);
        }
      });
    });

    return promise;
  }
}