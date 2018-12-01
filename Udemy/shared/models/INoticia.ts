import { IModel } from "./IModel";

export interface INoticia extends IModel<INoticia> {  
  id_noticia?: number;
  titulo: string;
  noticia: string;
  data_criacao?: string;
}