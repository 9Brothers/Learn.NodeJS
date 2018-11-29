import Vue from "vue";
import VueRouter from "vue-router";
import { HomeComponent } from "./components/home.component";
import { NoticiasComponent } from "./components/noticias.component";
import { router } from "./routes/router";

// Inicializa os componentes
Vue.component('home', HomeComponent);
Vue.component('noticias', NoticiasComponent);

// Inicializa o vue-router
Vue.use(VueRouter);

// Inicializa o app
new Vue({
  router
}).$mount('#app');