import { createAction, props } from '@ngrx/store';
import { Car } from '../../models';

export const fetchCar = createAction(
  '[Show | Car] Fetch car',
  props<{ id: string }>()
);

export const fetchCarSuccess = createAction(
  '[Show | Car] Fetch car success',
  props<{ data: Car }>()
);

export const fetchCarFailed = createAction(
  '[Show | Car] Fetch car failed',
  props<{ error: any }>()
);
