import { NoticiaModel } from "../models/noticia.model";
import { INoticia } from "../../../shared/models/INoticia";

export abstract class NoticiaFactory {
  public static async Get(): Promise<INoticia[]> {
    return new NoticiaModel().Get();
  }

  public static async GetById(id: number | string): Promise<INoticia> {
    return new NoticiaModel().GetById(id);
  }

  public static async Store(noticia: INoticia) {
    return new NoticiaModel().Store(noticia);
  }
}