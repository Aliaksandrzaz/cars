import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { EditCarState } from '../../state/edit/reducer';
import {
  moveCarInArchiveRequest,
  fetchCarRequest,
  submitRequest,
  fetchCarsTypes,
} from '../../state/edit/actions';
import { getCar, getCarsTypes } from '../../state/edit/selectors';
import { Car } from '../../models';

@Component({
  selector: 'app-car-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  subs$: Subscription;
  editForm: FormGroup;
  car$ = this.store.select(getCar);
  id: string;

  types = this.store.select(getCarsTypes);

  constructor(
    private fb: FormBuilder,
    private store: Store<EditCarState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.store.dispatch(fetchCarsTypes());
    this.store.dispatch(fetchCarRequest({ id: this.id }));

    this.subs$ = this.car$
      .pipe(
        filter((data) => !!data),
        tap((data) => this.initForm(data))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  submitForm() {
    const data = {
      ...this.editForm.value,
      type: this.editForm.value['type'],
    };

    this.store.dispatch(submitRequest({ id: this.id, data }));
  }

  remove() {
    this.store.dispatch(moveCarInArchiveRequest({ id: this.id }));
  }

  private initForm(data: Car) {
    this.editForm = this.fb.group({
      model: [data.model, [Validators.required]],
      registrationNumber: [data.registrationNumber, [Validators.required]],
      fuelConsumptionRate: [data.fuelConsumptionRate, [Validators.required]],
      winterFuelConsumptionRate: [
        data.winterFuelConsumptionRate,
        [Validators.required],
      ],
      adBlueConsumptionRate: [
        data.adBlueConsumptionRate,
        [Validators.required],
      ],
      weBastoConsumptionRate: [
        data.weBastoConsumptionRate,
        [Validators.required],
      ],
      type: [data.type, [Validators.required]],
    });
  }
}
