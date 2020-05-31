import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

import { CarService } from '../../car.service';
import {
  moveCarInArchiveRequest,
  fetchCarRequest,
  fetchCarSuccess,
  submitRequest,
  submitFailed,
  submitSuccess,
  moveCarInArchiveFailed,
  moveCarInArchiveSuccess,
  fetchCarsTypes,
  fetchCarsTypesSuccess,
} from './actions';
import { showNotification } from '../../../shared/notification/action';

@Injectable()
export class EditEffects {
  fetchCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCarRequest),
      mergeMap((payload) =>
        this.carService.fetchCar(payload.id).pipe(
          map((cars) => fetchCarSuccess({ data: cars })),
          catchError(() => of(showNotification({ notificationType: 'error' })))
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
            return [
              submitSuccess(),
              showNotification({ notificationType: 'success' }),
            ];
          }),
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

  moveInArchive$ = createEffect(() =>
    this.actions$.pipe(
      ofType(moveCarInArchiveRequest),
      mergeMap((payload) =>
        this.carService.moveInArchive(payload.id).pipe(
          mergeMap(() => {
            this.route.navigate(['cars']);
            return [
              moveCarInArchiveSuccess(),
              showNotification({ notificationType: 'success' }),
            ];
          }),
          catchError((err) =>
            from([
              moveCarInArchiveFailed(err),
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

  constructor(
    private actions$: Actions,
    private carService: CarService,
    private notification: NzNotificationService,
    private route: Router
  ) {}
}
