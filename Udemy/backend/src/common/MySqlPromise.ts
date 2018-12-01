import { MySqlConnection } from "../config/database";
import { QueryOptions } from "mysql";

export class MySqlPromise<T> {

  public static Query<T>(queryOptions: QueryOptions): Promise<T> {

    return new Promise<T>((resolve, reject) => {
      MySqlConnection.query(queryOptions, (err, res: T) => {

        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}