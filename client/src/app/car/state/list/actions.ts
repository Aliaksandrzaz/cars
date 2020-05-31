import { createAction, props } from '@ngrx/store';

import { Car, FetchCarsRequest } from '../../models';
import { Paging } from '../../../models';

export const fetchList = createAction(
  '[Car | List] Load list',
  props<{ params: FetchCarsRequest }>()
);

export const fetchListSuccess = createAction(
  '[Car | List] List success',
  props<{ list: Paging<Car> }>()
);

export const changeCarTypesFilter = createAction(
  '[Car | List] Change car types filter',
  props<{ types: string[] }>()
);

export const changePageSize = createAction(
  '[Car | List] Change page size',
  props<{ pageSize: number }>()
);

export const changeCurrentPage = createAction(
  '[Car | List] Change current page',
  props<{ currentPage: number }>()
);
