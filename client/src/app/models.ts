export interface Paging<T> {
  data: T[];
  size: number;
  page: number;
  pages: number;
}
