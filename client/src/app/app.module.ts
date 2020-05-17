import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons.module';
import { CarModule } from "./car/car.module"
import {
  NzIconModule,
  NzLayoutModule,
  NzMenuModule
} from "ng-zorro-antd"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx',
    }),
    EffectsModule.forRoot(),
    CarModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
