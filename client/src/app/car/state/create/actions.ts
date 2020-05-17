import { createAction, props } from '@ngrx/store';
import { CreateCarRequest } from '../../models';

export const submit = createAction(
  '[Car | Create] Create car',
  props<{ data: CreateCarRequest }>()
);

export const submitSuccess = createAction('[Car | Create] Create car success');

export const submitFailed = createAction('[Car | Create] Create car failed');
