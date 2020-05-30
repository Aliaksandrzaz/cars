export interface Paging<T> {
  data: T[];
  size: number;
  page: number;
  total: number;
}

export interface Pagination {
  size: number;
  page: number;
  total: number;
}
