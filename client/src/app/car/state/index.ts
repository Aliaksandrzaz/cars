import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ListEffects } from './list/effects';
import {
  initialListState,
  listFeatureKey,
  listReducer,
  ListState,
} from './list/reducer';
import {
  createCarReducer,
  CreateCarState,
  createFeatureKey,
  initialCreateCarState,
} from './create/reducer';
import { CreateEffects } from './create/effects';

import {
  editCarReducer,
  EditCarState,
  editFeatureKey,
  initialEditCarState,
} from './edit/reducer';
import { EditEffects } from './edit/effects';
import {
  showFeatureKey,
  ShowCarState,
  showCarReducer,
  initialShowCarState,
} from './show/reducer';
import { ShowEffects } from './show/effects';

export const carFeatureKey = 'car';

export interface CarState {
  [listFeatureKey]: ListState;
  [createFeatureKey]: CreateCarState;
  [editFeatureKey]: EditCarState;
  [showFeatureKey]: ShowCarState;
}

export const reducers: ActionReducerMap<CarState> = {
  [listFeatureKey]: listReducer,
  [createFeatureKey]: createCarReducer,
  [editFeatureKey]: editCarReducer,
  [showFeatureKey]: showCarReducer,
};

export const initialState = {
  [listFeatureKey]: initialListState,
  [createFeatureKey]: initialCreateCarState,
  [editFeatureKey]: initialEditCarState,
  [showFeatureKey]: initialShowCarState,
};

export const effects = [ListEffects, CreateEffects, EditEffects, ShowEffects];

export const getCarState = createFeatureSelector<CarState>(carFeatureKey);
