// import Vue, { ComponentOptions } from "vue";
import { Requester } from "../../../shared/utils/Requester";
import { AsyncComponent } from "vue";

export const HomeComponent: AsyncComponent = (resolve, rejects) => {
  Requester.GetHTML<string>('/templates/home.template.html')
    .then((template) => {
      let nome = 'Heber';

      resolve({
        template,
        data() {
          return {
            nome
          }
        }
      })
    })
    .catch((error) => {
      rejects(error);
    });
};