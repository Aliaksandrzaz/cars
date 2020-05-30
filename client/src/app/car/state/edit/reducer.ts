import { createReducer, on } from '@ngrx/store';

import {
  fetchCarSuccess,
  moveCarInArchiveFailed,
  moveCarInArchiveSuccess,
  submitFailed,
  submitSuccess,
} from './actions';
import { Car } from '../../models';

export const editFeatureKey = 'editCar';

export interface EditCarState {
  car: Car | null;
  errors: any;
}

export const initialEditCarState: EditCarState = {
  car: null,
  errors: {},
};

export const editCarReducer = createReducer(
  initialEditCarState,
  on(fetchCarSuccess, (state, action) => ({
    ...state,
    car: action.data,
  })),
  on(submitSuccess, (state) => ({
    ...state,
    errors: {},
  })),
  on(submitFailed, (state, { errors }) => ({
    ...state,
    errors,
  })),
  on(moveCarInArchiveSuccess, (state) => ({
    ...state,
    errors: {},
  })),
  on(moveCarInArchiveFailed, (state, { errors }) => ({
    ...state,
    errors,
  }))
);
