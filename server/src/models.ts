export type CarType = 'tractor' | 'dumpTruck' | string;
export type TrailerType = 'wagon' | 'dumpTruck' | string;

export interface Paging<T> {
  data: T[];
  size: number;
  page: number;
  total: number;
}

export interface Choice {
  label: string;
  value: string;
}

export interface PaginationRequest {
  size: string;
  page: string;
  [key: string]: any;
}
