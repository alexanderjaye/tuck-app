export interface Route<T> {
  method: string;
  route: string;
  controller: { new(): T };
  action: string;
}