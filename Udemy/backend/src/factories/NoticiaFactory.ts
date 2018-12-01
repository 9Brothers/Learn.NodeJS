import { NoticiaModel } from "../models/NoticiaModel";
import { INoticia } from "../../../shared/models/INoticia";

export class NoticiaFactory {
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