import VueRouter, { RouteConfig } from "vue-router";
import { HomeRoute } from "./home.route";
import { NoticiasRoute } from "./noticias.route";

let Routes: RouteConfig[] = NoticiasRoute.concat(HomeRoute);

export const router = new VueRouter({
  routes: Routes
});