import { createAction, props } from '@ngrx/store';
import { Cars, FetchCarsRequest } from '../../models'

export const fetchList = createAction(
  '[Car | List] Load list',
  props< {params: FetchCarsRequest} >()
);

export const fetchListSuccess = createAction(
  '[Car | List] List success',
  props<{ list: Cars }>()
);

export const fetchListFailed = createAction(
  '[Car | List] List failed',
  props<{ error: any }>()
);
