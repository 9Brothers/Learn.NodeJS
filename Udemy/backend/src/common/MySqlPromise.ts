import { MySqlConnection } from "../config/database";
import { QueryOptions } from "mysql";

export class MySqlPromise<T> {

  public static Query<T>(query: string, values?: any): Promise<T> {

    return new Promise<T>((resolve, reject) => {
      MySqlConnection.query(query, values, (err, res: T) => {

        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}