import { app } from "./config/server";
import "./routes/main";

app.listen(3000, () => {
  console.log('Servidor rodando com Express');
});