import { createReducer, on } from "@ngrx/store"
import { fetchListSuccess } from "./actions"
import { Cars } from "../../models"

export interface ListState {
  [key: string]: any
  cars: Cars
}

export const initialListState:ListState = {
  cars: []
}

export const listFeatureKey = "list";

export const listReducer = createReducer(
  initialListState,
  on(fetchListSuccess, (state, payload) => ({
    ...state,
    cars: payload.list
  }))
)

