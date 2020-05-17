import { createAction, props } from '@ngrx/store';
import { Car, EditCarRequest } from '../../models';

export const submitRequest = createAction(
  '[Car | Edit] Edit car request',
  props<{ id: string; data: EditCarRequest }>()
);

export const submitSuccess = createAction('[Car | Edit] Edit car success');

export const submitFailed = createAction('[Car | Edit] Edit car failed');

export const fetchCarRequest = createAction(
  '[Car | Edit] Fetch car request',
  props<{ id: string }>()
);

export const fetchCarSuccess = createAction(
  '[Car | Edit] Fetch car success',
  props<{ data: Car }>()
);

export const fetchCarFailed = createAction('[Car | Edit] Fetch car failed');

export const removeCarRequest = createAction(
  '[Car | Edit] Remove car request',
  props<{ id: string }>()
);

export const removeCarSuccess = createAction('[Car | Edit] Remove car success');

export const removeCarFailed = createAction('[Car | Edit] Remove car failed');
