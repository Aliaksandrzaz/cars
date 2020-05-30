import { createAction, props } from '@ngrx/store';

export const showNotification = createAction(
  '[Shared | Notification] Show notification',
  props<{
    notificationType: 'success' | 'error';
    title?: string;
    message?: string;
  }>()
);
