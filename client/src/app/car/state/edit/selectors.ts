import { createSelector } from '@ngrx/store';

import { CarState, getCarState } from '../index';
import { EditCarState, editFeatureKey } from './reducer';

export const getCarEditState = createSelector(
  getCarState,
  (state: CarState) => state[editFeatureKey]
);

export const getCar = createSelector(
  getCarEditState,
  (state: EditCarState) => state.car
);

export const getCarsTypes = createSelector(
  getCarEditState,
  (state: EditCarState) => state.carsTypes
);

