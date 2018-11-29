import { RouteConfig } from "vue-router";

import { NoticiasComponent } from "../components/noticias.component";
import { NoticiaComponent } from "../components/noticia.component";

export const NoticiasRoute: RouteConfig[] = [
  { path: '/noticia', component: NoticiasComponent },
  { path: '/noticia/:id', component: NoticiaComponent }
];