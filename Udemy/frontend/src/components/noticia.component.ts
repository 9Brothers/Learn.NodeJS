import { AsyncComponent } from "vue";
import { Requester } from "../../../shared/utils/Requester";
import { INoticia } from "../../../shared/models/INoticia";
import { Route } from "vue-router";

export const NoticiaComponent: AsyncComponent = (resolve, rejects) => {
  Requester.GetHTML<string>('/templates/noticia.template.html')
    .then((template) => {

      resolve({
        template,
        data () {
          return {
            noticia: null
          }
        },
        methods: {
          GetNoticia(id_noticia: number) {
            let self: any = this;

            Requester.GetJSON<INoticia[]>(`/api/noticias/${id_noticia}`)
              .then((noticia) => {
                self.noticia = noticia;
              });
          }
        },
        created() {
          let self: any = this;

          self.GetNoticia((self.$route as Route).params.id);
        },
        watch: {
          '$route' (to: Route, from: Route) {
            let self: any = this;

            self.GetNoticia(to.params.id);
          }
        }
      });
    })
    .catch((error) => {
      rejects(error);
    })
};