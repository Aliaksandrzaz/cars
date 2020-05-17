import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Cars, CarType } from '../../models';
import { getList } from '../../state/list/selectors';
import { fetchList } from '../../state/list/actions';
import { ListState } from '../../state/list/reducer';
import { chooseCarType } from '../../../helpers';

@Component({
  selector: 'app-car-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  list$: Observable<Cars> = this.store.select(getList);

  constructor(private store: Store<ListState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    this.store.dispatch(fetchList({ params }));
  }

  chooseType(type: CarType) {
    return chooseCarType(type);
  }

  changePagination($event: number) {}
}
