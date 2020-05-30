import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NzBreadCrumbModule,
  NzButtonModule,
  NzCardModule,
  NzDescriptionsModule,
  NzDividerModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzInputNumberModule,
  NzNotificationService,
  NzPageHeaderModule,
  NzSelectModule,
  NzTableModule,
} from 'ng-zorro-antd';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { carFeatureKey, effects, initialState, reducers } from './state';
import { CarService } from './car.service';
import { ListComponent } from './components/list/list.component';
import { CarRoutingModule } from './car-routing.module';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    StoreModule.forFeature(carFeatureKey, reducers, {
      initialState,
    }),
    EffectsModule.forFeature(effects),
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzInputNumberModule,
    NzSelectModule,
    NzCardModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzDescriptionsModule,
  ],
  providers: [CarService, NzNotificationService],
})
export class CarModule {}
