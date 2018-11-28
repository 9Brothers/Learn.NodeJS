// import Vue, { ComponentOptions } from "vue";
import { Requester } from "../../../shared/utils/Requester";

export const HomeComponent = (resolve: any, rejects: any) => {
  Requester.GetHTML<string>('/templates/home.template.html')
  .then((value) => {
    let nome = 'Heber';

    resolve({
      template: value,
      data() {
        return {
          nome
        }
      }
    })
  })
  .catch((error) => {
    rejects(error);
  })
}