import { MySqlConnection } from "../config/database";

export class MySqlPromise<T> {
  public static Query<T>(query: string) : Promise<T> {

    return new Promise<T>((resolve, reject) => {
      MySqlConnection.query(query, (err, res: T) => {

        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}