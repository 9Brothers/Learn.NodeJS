export interface IModel<T> {
  Get(): Promise<T[]>;
  GetById(id: number | string): Promise<T>;
  Store(value: T): void;
  Update(value: T): Promise<T>;
}