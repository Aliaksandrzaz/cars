import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CreateCarState } from '../../state/create/reducer';
import { fetchCarsTypes, submit } from '../../state/create/actions';
import { getCarsTypes } from '../../state/create/selectors';

@Component({
  selector: 'app-car-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  types = this.store.select(getCarsTypes);

  constructor(private fb: FormBuilder, private store: Store<CreateCarState>) {
    this.createForm = this.fb.group({
      model: [null, [Validators.required]],
      registrationNumber: [null, [Validators.required]],
      fuelConsumptionRate: [null, [Validators.required]],
      winterFuelConsumptionRate: [null, [Validators.required]],
      adBlueConsumptionRate: [null, [Validators.required]],
      weBastoConsumptionRate: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCarsTypes());
  }

  submitForm() {
    const data = {
      ...this.createForm.value,
      type: this.createForm.value['type'][0],
    };
    this.store.dispatch(submit({ body: data }));
  }
}
