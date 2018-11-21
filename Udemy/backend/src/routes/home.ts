import { app } from "../config/server";

app.get('/', (req, res) => {
  res.send('home/index');
});