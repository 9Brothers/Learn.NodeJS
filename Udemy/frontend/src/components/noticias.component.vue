<template>
  <table>
    <tr>
      <td>ID</td>
      <td>Título</td>
      <td>Notícia</td>
    </tr>
    <tr v-for="noticia in noticias" v-bind:key="noticia.id_noticia">
      <td>{{ noticia.id_noticia }}</td>
      <td>{{ noticia.titulo }}</td>
      <td>{{ noticia.noticia }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import { ComponentOptions } from "vue";
import { RouteConfig } from "vue-router";
import { Requester } from "../../../shared/utils/Requester";
import { INoticia } from "../../../shared/models/INoticia";

export default class NoticiasComponent implements ComponentOptions<Vue> {
  data() {

    let noticias: INoticia[] = [];

    Requester.Get<INoticia[]>('/api/noticias')
    .then((values) => {
      noticias = values;
    })

    return {
      noticias
    }
  }
  
  mounted () {
    let noticias: INoticia[] = [];

    Requester.Get<INoticia[]>('/api/noticias')
    .then((values) => {
      noticias = values;
    })

    return {
      noticias
    }
  }
}

export const NoticiasRoute: RouteConfig = { path: '/noticia', component: new NoticiasComponent() };
</script>