import Vue from "vue";
import VueRouter from "vue-router";
import NoticiasComponent from "./components/noticias.component.vue";
import NoticiasRoute from "./routes/noticias.route";

Vue.use(VueRouter);

Vue.component('noticias', NoticiasComponent);

let router = new VueRouter({
  routes: [
    new NoticiasRoute
  ]
})

new Vue({
  router
}).$mount('#app');



