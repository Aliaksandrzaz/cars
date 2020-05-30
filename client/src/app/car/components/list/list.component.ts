import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table/src/table.types';
import {
  catchError,
  distinctUntilChanged,
  map,
  skip,
  startWith,
  tap,
} from 'rxjs/operators';

import { chooseCarType } from '../../../helpers';
import { Car, CarType } from '../../models';
import { getList, getPaging } from '../../state/list/selectors';
import { changePagination, fetchList } from '../../state/list/actions';
import { ListState } from '../../state/list/reducer';
import { Pagination } from '../../../models';

@Component({
  selector: 'app-car-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit, OnDestroy {
  list$: Observable<Car[]> = this.store.select(getList);
  paging$: Observable<Pagination> = this.store.select(getPaging);
  subs$: Subscription;

  constructor(
    private store: Store<ListState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;

    this.subs$ = this.paging$
      .pipe(
        startWith(params),
        skip(2),
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
        ),
        tap((params) => {
          this.router.navigate([], {
            queryParams: {
              size: params.size,
              page: params.page,
            },
          });
        }),
        map((params) => this.store.dispatch(fetchList({ params }))),
        catchError(() => of())
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  chooseType(type: CarType) {
    return chooseCarType(type);
  }

  changePagination($event: NzTableQueryParams) {
    const params = {
      page: $event.pageIndex,
      size: $event.pageSize,
    };

    this.store.dispatch(changePagination({ params }));
  }
}
