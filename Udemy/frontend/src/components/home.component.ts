import Vue, { ComponentOptions } from "vue";

export default class HomeComponent implements ComponentOptions<Vue> {
  data() {
    let nome: string = 'Heber';

    return {
      nome
    };
  }
  
  template = `
    <div>
      <h1>Bem vindo ao Portal de Notícias!</h1>

      <h3>{{ nome }}</h3>
    </div>
  `
}