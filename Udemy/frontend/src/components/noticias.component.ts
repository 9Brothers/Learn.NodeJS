import Vue, { ComponentOptions } from "vue";
import { Requester } from "../../../shared/utils/Requester";
import { INoticia } from "../../../shared/models/INoticia";

export default class NoticiasComponent implements ComponentOptions<Vue> {
  public noticias: INoticia[] = [];
  
  data () {
    let self = this;

    Requester.GetJSON<INoticia[]>('/api/noticias')
    .then((values) => {
      self.noticias = values;
    })

    return {
      noticias: self.noticias
    }
  }

  template = `
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
  `;
}