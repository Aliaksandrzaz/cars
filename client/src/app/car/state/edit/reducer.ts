import { createReducer, on } from '@ngrx/store';

import {
  fetchCarSuccess,
  moveCarInArchiveFailed,
  moveCarInArchiveSuccess,
  submitFailed,
  submitSuccess,
  fetchCarsTypesSuccess,
} from './actions';
import { Car } from '../../models';
import { Choice } from '../../../models';

export const editFeatureKey = 'editCar';

export interface EditCarState {
  car: Car | null;
  carsTypes: Choice[];
  errors: any;
}

export const initialEditCarState: EditCarState = {
  car: null,
  carsTypes: [],
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
  })),
  on(fetchCarsTypesSuccess, (state, { data }) => ({
    ...state,
    carsTypes: data,
  }))
);
