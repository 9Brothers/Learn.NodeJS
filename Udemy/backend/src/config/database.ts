import * as mysql from "mysql";

const mySqlConnection = mysql.createConnection({
  host: 'localhost',
  database: 'portal_noticias',
  user: 'root',
  password: 'root'
});

// mySqlConnection.config.queryFormat = function (query, values) {
//   if (!values) return query;

//   return query.replace(/\:(\w+)/g, function (txt: any, key: any) {
  
//     if (values.hasOwnProperty(key)) {
//       return this.escape(values[key]);
//     }

//     return txt;

//   }.bind(this));
// };

export const MySqlConnection = mySqlConnection;