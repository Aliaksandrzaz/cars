import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CarService } from '../../car.service';
import { fetchCar, fetchCarSuccess } from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from "@angular/core"

@Injectable()
export class ShowEffects {
  fetchCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCar),
      mergeMap((payload) =>
        this.carService.fetchCar(payload.id).pipe(
          map((data) => fetchCarSuccess({ data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private carService: CarService) {}
}
