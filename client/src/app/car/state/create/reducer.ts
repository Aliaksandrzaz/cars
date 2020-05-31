import { createReducer, on } from '@ngrx/store';

import { fetchCarsTypesSuccess, submitFailed, submitSuccess } from './actions';
import { Choice } from '../../../models';

export const createFeatureKey = 'createCar';

export interface CreateCarState {
  error: any;
  carsTypes: Choice[];
}

export const initialCreateCarState = {
  error: {},
  carsTypes: [],
};

export const createCarReducer = createReducer(
  initialCreateCarState,
  on(submitSuccess, (state) => ({
    ...state,
    error: {},
  })),
  on(submitFailed, (state, { errors }) => ({
    ...state,
    errors: errors,
  })),
  on(fetchCarsTypesSuccess, (state, { data }) => ({
    ...state,
    carsTypes: data,
  }))
);
