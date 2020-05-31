import { createAction, props } from '@ngrx/store';
import { CreateCarRequest } from '../../models';
import { Choice } from '../../../models';

export const submit = createAction(
  '[Car | Create] Create car',
  props<{ body: CreateCarRequest }>()
);

export const submitSuccess = createAction('[Car | Create] Create car success');

export const submitFailed = createAction(
  '[Car | Create] Create car failed',
  props<{ errors: any }>()
);

export const fetchCarsTypes = createAction('[Car | Create] Fetch cars types');

export const fetchCarsTypesSuccess = createAction(
  '[Car | Create] Fetch cars types success',
  props<{ data: Choice[] }>()
);
