import * as mysql from "mysql";

export let MySqlConnection = mysql.createConnection({
  host: 'localhost',
  database: 'portal_noticias',
  user: 'root',
  password: 'root'
});