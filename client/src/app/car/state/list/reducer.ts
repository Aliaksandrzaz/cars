import { createReducer, on } from '@ngrx/store';

import {
  changeCarTypesFilter,
  changeCurrentPage,
  changePageSize,
  fetchListSuccess,
} from './actions';
import { Car } from '../../models';

export interface ListState {
  data: Car[];
  page: number;
  size: number;
  total: number;
  types: string[];
}

export const initialListState: ListState = {
  data: [],
  page: 1,
  total: 1,
  size: 10,
  types: [],
};

export const listFeatureKey = 'list';

export const listReducer = createReducer(
  initialListState,
  on(fetchListSuccess, (state, payload) => ({
    ...state,
    ...payload.list,
  })),
  on(changeCarTypesFilter, (state, action) => ({
    ...state,
    types: action.types,
  })),
  on(changeCurrentPage, (state, action) => ({
    ...state,
    page: action.currentPage,
  })),
  on(changePageSize, (state, action) => ({
    ...state,
    size: action.pageSize,
  }))
);
