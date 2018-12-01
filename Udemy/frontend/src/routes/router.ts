import VueRouter, { RouteConfig } from "vue-router";
import { HomeRoute } from "./home.route";
import { NoticiasRoute } from "./noticias.route";
import { AdminRoute } from "./admin.route";

let Routes: RouteConfig[] = [];

Routes = Routes
  .concat(NoticiasRoute)
  .concat(HomeRoute)
  .concat(AdminRoute);

export const router = new VueRouter({
  routes: Routes
});