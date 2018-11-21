import * as http from "http";



let server = http.createServer((req, res) => {
  
  let categoria = req.url

  if (categoria == '/tecnologia') {
    res.end("Notícias de Tecnologia");  
  } 
  else if (categoria == '/moda') {
    res.end("Notícias de Moda");  
  }
  else if (categoria == '/beleza') {
    res.end("Notícias de Beleza");  
  } 
  else {
    res.end("Portal de notícias");
  }
});

server.listen(3000)