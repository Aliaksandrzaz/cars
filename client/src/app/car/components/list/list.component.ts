import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NzTableFilterList } from 'ng-zorro-antd/table/src/table.types';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  skip,
  startWith,
  tap,
} from 'rxjs/operators';

import { chooseCarType } from '../../../helpers';
import { Car, CarType } from '../../models';
import { getList, getPagingParams } from '../../state/list/selectors';
import {
  changeCarTypesFilter,
  changeCurrentPage,
  changePageSize,
  fetchList,
} from '../../state/list/actions';
import { ListState } from '../../state/list/reducer';

@Component({
  selector: 'app-car-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit, OnDestroy {
  filterCarTypes: NzTableFilterList = [
    { value: 'dumpTruck', text: 'Самосвал', byDefault: true },
    { value: 'tractor', text: 'Тягач', byDefault: true },
  ];

  list$: Observable<Car[]> = this.store.select(getList);
  paging$ = this.store.select(getPagingParams);

  subs$: Subscription;

  constructor(
    private store: Store<ListState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setFiltersFromURL();

    this.subs$ = this.paging$
      .pipe(
        skip(2),
        startWith(this.getURLParams()),
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
        ),
        debounceTime(10),
        tap((params) => {
          this.router.navigate([], {
            queryParams: {
              size: params.size,
              page: params.page,
              types: [params.types],
            },
          });
        }),
        map((params) => {
          this.store.dispatch(fetchList({ params }));
        }),
        catchError(() => of())
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  setFiltersFromURL() {
    const params = this.route.snapshot.queryParams['types'] || [
      'dumpTruck',
      'tractor',
    ];
    this.filterCarTypes = this.filterCarTypes.map((type) => ({
      ...type,
      byDefault: params.includes(type.value),
    }));

    this.changeCarTypesFilter(params);
  }

  chooseType(type: CarType) {
    return chooseCarType(type);
  }

  changeCarTypesFilter(types: string[]) {
    this.store.dispatch(changeCarTypesFilter({ types }));
  }

  changePageSize(pageSize: number) {
    this.store.dispatch(changePageSize({ pageSize }));
  }

  changeCurrentPage(currentPage: number) {
    this.store.dispatch(changeCurrentPage({ currentPage }));
  }

  getURLParams() {
    const { size, page, types } = this.route.snapshot.queryParams;

    return {
      size: size ? parseFloat(size) : 10,
      page: page ? parseFloat(page) : 1,
      types: types ? types.split(',') : ['dumpTruck', 'tractor'],
    };
  }
}
