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

export const changePagination = createAction(
  '[Car | List] Change pagination',
  props<{ params: FetchCarsRequest }>()
);
