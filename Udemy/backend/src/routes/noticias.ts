import { app } from "../config/server";
import { MySqlConnection } from "../config/database";
import { INoticia } from "../models/INoticia";


app.get('/noticias', (req, res) => {  
  MySqlConnection.query("SELECT * FROM noticias", (err, noticias: INoticia[]) => {

    res.send(noticias);  
  });
});