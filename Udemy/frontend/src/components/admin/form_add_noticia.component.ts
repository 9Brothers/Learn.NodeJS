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
            model: {
              titulo: '',
              resumo: '',
              autor: '',
              noticia: '',
              data_noticia: ''              
            }
          }
        },
        methods: {
          Enviar: function (this: any, event) {
            let self = this;
            
            Requester.PostJSON('/api/noticias', self.model)
            .then(() => {
              (<INoticia>self.model).titulo = '';
              (<INoticia>self.model).resumo = '';
              (<INoticia>self.model).autor = '';
              (<INoticia>self.model).noticia = '';
              (<INoticia>self.model).data_noticia = '';
            });
          },
          Validate(this: any) {

            return this.model.titulo &&
            this.model.resumo &&
            (this.model.resumo.length >= 10 || this.model.resumo.length <= 100) &&
            this.model.autor &&
            this.model.data_noticia &&
            this.model.noticia
          },          
        },        
      });
    })
    .catch((error) => {

      rejects(error);
    })
};