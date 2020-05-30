import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { NzIconModule, NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons.module';
import { CarModule } from './car/car.module';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from "./layout/layout.component"

@NgModule({
  declarations: [AppComponent, LayoutComponent],
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
    NzIconModule,
    SharedModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
})
export class AppModule {}
