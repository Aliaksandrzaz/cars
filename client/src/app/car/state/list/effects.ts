import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { fetchList, fetchListSuccess } from './actions';
import { CarService } from '../../car.service';
import { showNotification } from '../../../shared/notification/action';

@Injectable()
export class ListEffects {
  fetchCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchList),
      mergeMap((action) =>
        this.carService.fetchCars(action.params).pipe(
          map((payload) => fetchListSuccess({ list: payload })),
          catchError(() => of(showNotification({ notificationType: 'error' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private carService: CarService) {}
}
