import Vue from "vue";
import VueRouter from "vue-router";
import { router } from "./routes/router";
import { HomeComponent } from "./components/home/home.component";
import { NoticiasComponent } from "./components/noticias/noticias.component";
// import { FormAddNoticiaComponent } from "./components/admin/form_add_noticia.component";

// Inicializa os componentes
Vue.component('home', HomeComponent);
Vue.component('noticias', NoticiasComponent);
// Vue.component('form_add_noticia', FormAddNoticiaComponent);

// Inicializa o vue-router
Vue.use(VueRouter);

// Inicializa o app
new Vue({
  router
}).$mount('#app');