import { createSelector } from '@ngrx/store';
import { CarState, getCarState } from '../index';
import { listFeatureKey, ListState } from './reducer';

export const getListState = createSelector(
  getCarState,
  (state: CarState) => state[listFeatureKey]
);

export const getList = createSelector(
  getListState,
  (state: ListState) => state.cars
);
