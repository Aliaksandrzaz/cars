import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

import { CarService } from '../../car.service';
import {
  removeCarRequest,
  fetchCarRequest,
  fetchCarSuccess,
  submitRequest,
  submitFailed,
  submitSuccess,
} from './actions';

@Injectable()
export class EditEffects {
  fetchCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCarRequest),
      mergeMap((payload) =>
        this.carService.fetchCar(payload.id).pipe(
          map((cars) => fetchCarSuccess({ data: cars })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  editCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submitRequest),
      mergeMap((payload) =>
        this.carService.editCar(payload.id, payload.data).pipe(
          mergeMap(() => {
            this.notification.success('Редактирование', 'Успешно');
            return [submitSuccess()];
          }),
          catchError(() => of(submitFailed()))
        )
      )
    )
  );

  removeCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeCarRequest),
      mergeMap((payload) =>
        this.carService.removeCar(payload.id).pipe(
          mergeMap(() => {
            this.notification.success('Удаление', 'Успешно');
            this.route.navigate(['cars']);
            return [submitSuccess()];
          }),
          catchError(() => of(submitFailed()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private carService: CarService,
    private notification: NzNotificationService,
    private route: Router
  ) {}
}
