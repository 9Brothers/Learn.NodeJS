import { AsyncComponent } from "vue";
import { Requester } from "../../../shared/utils/Requester";
import { INoticia } from "../../../shared/models/INoticia";

export const NoticiasComponent: AsyncComponent = (resolve, rejects) => {
  Requester.GetHTML<string>('/templates/noticias.template.html')
    .then((template) => {

      resolve({
        template,
        data () {
          return {
            noticias: []
          }
        },
        methods: {
          GetNoticias() {
            let self: any = this;

            Requester.GetJSON<INoticia[]>('/api/noticias')
              .then((values) => {
                self.noticias = values;
              });
          }
        },
        created() {
          let self: any = this;

          self.GetNoticias();
        }
      });
    })
    .catch((error) => {
      rejects(error);
    })
};