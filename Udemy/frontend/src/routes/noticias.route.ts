import { RouteConfig } from "vue-router";

import NoticiasComponent from "../components/noticias.component";

export const NoticiasRoute: RouteConfig[] = [{ path: '/noticia', component: new NoticiasComponent() }];