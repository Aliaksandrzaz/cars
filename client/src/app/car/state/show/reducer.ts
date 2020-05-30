import { createReducer, on } from '@ngrx/store';

import { Car } from '../../models';
import { fetchCarSuccess } from './actions';

export const showFeatureKey = 'show';

export interface ShowCarState {
  data: Car | null;
}

export const initialShowCarState = {
  data: null,
};

export const showCarReducer = createReducer(
  initialShowCarState,
  on(fetchCarSuccess, (state, action) => ({
    ...state,
    data: action.data,
  }))
);
