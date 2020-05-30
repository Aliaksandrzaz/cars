import { createReducer, on } from '@ngrx/store';

import { changePagination, fetchListSuccess } from './actions';
import { Car } from '../../models';

export interface ListState {
  list: Car[];
  page: number;
  size: number;
  total: number;
}

export const initialListState: ListState = {
  list: [],
  page: 1,
  total: 1,
  size: 10,
};

export const listFeatureKey = 'list';

export const listReducer = createReducer(
  initialListState,
  on(fetchListSuccess, (state, payload) => ({
    ...state,
    ...payload.list,
    list: payload.list.data,
  })),
  on(changePagination, (state, action) => ({
    ...state,
    page: action.params.page,
    size: action.params.size,
  }))
);
