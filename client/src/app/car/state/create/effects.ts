import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { CarService } from '../../car.service';
import { submit, submitFailed, submitSuccess } from './actions';
import { showNotification } from '../../../shared/notification/action';

@Injectable()
export class CreateEffects {
  fetchCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submit),
      mergeMap((payload) =>
        this.carService.createCars(payload.body).pipe(
          map(() => submitSuccess()),
          catchError((err) =>
            from([
              submitFailed(err),
              showNotification({ notificationType: 'error' }),
            ])
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private carService: CarService) {}
}
