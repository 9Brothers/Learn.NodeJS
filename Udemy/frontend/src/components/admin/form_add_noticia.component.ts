import { AsyncComponent } from "vue";
import { Requester } from "../../../../shared/utils/Requester";
import { INoticia } from "../../../../shared/models/INoticia";

export const FormAddNoticiaComponent: AsyncComponent = (resolve, rejects) => {
  Requester.GetHTML<string>('/templates/admin/form_add_noticias.template.html')
    .then((template) => {

      resolve({
        template,
        data () {
          return {
            titulo: 'asd',
            noticia: 'asd'
          }
        },
        methods: {
          Enviar: function (this: INoticia, event) {
            let self = this;
            
            Requester.PostJSON('/api/noticias', {
              titulo: self.titulo,
              noticia: self.noticia
            })
            .then(() => {
              self.titulo = ''
              self.noticia = ''
            });
          }
        }
      });
    })
    .catch((error) => {

      rejects(error);
    })
};