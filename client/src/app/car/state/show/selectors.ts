import { createSelector } from '@ngrx/store';
import { CarState, getCarState } from '../index';
import { ShowCarState, showFeatureKey } from './reducer';

export const getShowState = createSelector(
  getCarState,
  (state: CarState) => state[showFeatureKey]
);

export const getCar = createSelector(
  getShowState,
  (state: ShowCarState) => state.data
);
