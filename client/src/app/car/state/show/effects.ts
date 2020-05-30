import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CarService } from '../../car.service';
import { fetchCar, fetchCarSuccess } from './actions';
import { showNotification } from '../../../shared/notification/action';

@Injectable()
export class ShowEffects {
  fetchCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCar),
      mergeMap((payload) =>
        this.carService.fetchCar(payload.id).pipe(
          map((data) => fetchCarSuccess({ data })),
          catchError(() =>
            of(showNotification({ notificationType: 'error' }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private carService: CarService) {}
}
