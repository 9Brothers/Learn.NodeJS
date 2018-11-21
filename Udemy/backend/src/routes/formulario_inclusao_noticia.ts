import { app } from "../config/server";

app.get('/formulario_inclusao_noticia', (req, res) => {
  res.send('admin/form_add_noticia');
});

