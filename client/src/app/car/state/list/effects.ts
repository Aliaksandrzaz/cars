import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { fetchList, fetchListSuccess } from './actions';
import { CarService } from '../../car.service';

@Injectable()
export class ListEffects {
  fetchCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchList),
      mergeMap((action) =>
        this.carService.fetchCars(action.params).pipe(
          map((cars) => {
            console.log(cars);
            return fetchListSuccess({ list: cars });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private carService: CarService) {}
}
