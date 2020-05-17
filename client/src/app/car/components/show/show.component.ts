import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowCarState } from '../../state/show/reducer';
import { ActivatedRoute } from '@angular/router';
import { fetchCar } from '../../state/show/actions';
import { getCar } from '../../state/show/selectors';
import { chooseCarType } from '../../../helpers';
import { CarType } from '../../models';

@Component({
  selector: 'app-car-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  car$ = this.store.select(getCar);

  constructor(
    private store: Store<ShowCarState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.store.dispatch(fetchCar({ id }));
  }

  chooseType(type: CarType) {
    return chooseCarType(type);
  }
}
