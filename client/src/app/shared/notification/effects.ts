import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { NzNotificationService } from 'ng-zorro-antd';
import { showNotification } from './action';

@Injectable()
export class NotificationEffects {
  showNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showNotification),
        tap(({ message = "", notificationType, title }) => {
          const titleText =
            title || notificationType === 'success' ? 'Успешно' : 'Ошибка';
          // const messageText =
          //   message || notificationType === 'success' ? 'Успешно' : 'Ошибка';

          this.notification[notificationType](titleText, message, {
            nzPosition: 'bottomRight',
            nzDuration: 1500,
          });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notification: NzNotificationService
  ) {}
}
