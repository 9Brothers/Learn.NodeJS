import { RouteConfig } from "vue-router";
import { FormAddNoticiaComponent } from "../components/admin/form_add_noticia.component";

const adminNoticiaPrefix: string = "/admin/noticia"

export const AdminRoute: RouteConfig[] = [
  { path: `${adminNoticiaPrefix}/cadastrar`, component: FormAddNoticiaComponent }
];