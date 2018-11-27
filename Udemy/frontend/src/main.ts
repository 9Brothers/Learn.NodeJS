import Vue from "vue";
import VueRouter from "vue-router";
import NoticiasComponent, { NoticiasRoute } from "./components/noticias.component.vue";

Vue.use(VueRouter);

Vue.component('noticias', NoticiasComponent);

let router = new VueRouter({
  routes: [
    NoticiasRoute
  ]
})

new Vue({
  router
}).$mount('#app');



