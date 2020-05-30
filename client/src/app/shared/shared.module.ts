import { NgModule } from '@angular/core';
import { EffectsModule } from "@ngrx/effects"
import { NotificationEffects } from "./notification/effects"

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature([NotificationEffects])
  ],
  providers: [],
})
export class SharedModule {}

