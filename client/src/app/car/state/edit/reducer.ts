import { createReducer, on } from '@ngrx/store';
import { fetchCarSuccess } from './actions';
import { Car } from '../../models';

export const editFeatureKey = 'editCar';

export interface EditCarState {
  car: Car | null;
}

export const initialEditCarState = {
  car: null,
};

export const editCarReducer = createReducer(
  initialEditCarState,
  on(fetchCarSuccess, (state, action) => ({
    ...state,
    car: action.data
  }))
);
