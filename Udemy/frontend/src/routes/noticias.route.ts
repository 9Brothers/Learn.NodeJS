import NoticiasComponent from "../components/noticias.component.vue";
import { RouteConfig } from "vue-router";

export default class NoticiasRoute implements RouteConfig { path = '/noticia'; component = NoticiasComponent };