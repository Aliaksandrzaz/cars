import { createSelector } from '@ngrx/store';

import { CarState, getCarState } from '../index';
import { CreateCarState, createFeatureKey } from './reducer';

export const getCarCreateState = createSelector(
  getCarState,
  (state: CarState) => state[createFeatureKey]
);

export const getCarsTypes = createSelector(
  getCarCreateState,
  (state: CreateCarState) => state.carsTypes
);
