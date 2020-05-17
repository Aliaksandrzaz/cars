import { createReducer } from "@ngrx/store"

export const createFeatureKey = 'createCar';

export interface CreateCarState {}

export const initialCreateCarState = {};

export const createCarReducer = createReducer(
  initialCreateCarState
)
