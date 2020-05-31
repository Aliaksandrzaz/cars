import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { CarService } from '../../car.service';
import {
  fetchCarsTypes,
  fetchCarsTypesSuccess,
  submit,
  submitFailed,
  submitSuccess,
} from './actions';
import { showNotification } from '../../../shared/notification/action';

@Injectable()
export class CreateEffects {
  createCar$ = createEffect(() =>
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

  fetchCarsType = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCarsTypes),
      mergeMap(() =>
        this.carService.fetchCarsTypes().pipe(
          map((data) => fetchCarsTypesSuccess({ data })),
          catchError(() => of(showNotification({ notificationType: 'error' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private carService: CarService) {}
}
