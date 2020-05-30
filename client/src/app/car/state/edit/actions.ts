import { createAction, props } from '@ngrx/store';
import { Car, EditCarRequest } from '../../models';

export const fetchCarRequest = createAction(
  '[Car | Edit] Fetch car request',
  props<{ id: string }>()
);

export const fetchCarSuccess = createAction(
  '[Car | Edit] Fetch car success',
  props<{ data: Car }>()
);

export const submitRequest = createAction(
  '[Car | Edit] Edit car request',
  props<{ id: string; data: EditCarRequest }>()
);

export const submitSuccess = createAction('[Car | Edit] Edit car success');

export const submitFailed = createAction(
  '[Car | Edit] Edit car failed',
  props<{ errors: any }>()
);

export const moveCarInArchiveRequest = createAction(
  '[Car | Edit] Move car in archive request',
  props<{ id: string }>()
);

export const moveCarInArchiveSuccess = createAction(
  '[Car | Edit] Move car in archive success'
);

export const moveCarInArchiveFailed = createAction(
  '[Car | Edit] Move car in archive failed',
  props<{ errors: any }>()
);
