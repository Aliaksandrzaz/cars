import { createReducer, on } from '@ngrx/store';

import { submitFailed, submitSuccess } from './actions';

export const createFeatureKey = 'createCar';

export interface CreateCarState {
  error: any;
}

export const initialCreateCarState = {
  error: {},
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
  }))
);
