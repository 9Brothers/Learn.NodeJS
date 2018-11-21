import { app } from "../config/server";

app.get('/noticias', (req, res) => {  
  res.send('noticias/noticias');  
});