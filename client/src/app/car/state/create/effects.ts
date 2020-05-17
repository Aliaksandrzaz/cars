import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CarService } from '../../car.service';
import { submit, submitSuccess } from './actions';

@Injectable()
export class CreateEffects {
  fetchCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submit),
      mergeMap((payload) =>
        this.carService.createCars(payload.data).pipe(
          map((cars) => {
            console.log(cars);
            return submitSuccess();
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private carService: CarService) {}
}
