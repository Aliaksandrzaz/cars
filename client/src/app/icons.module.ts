import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { IconDefinition } from '@ant-design/icons-angular';
import {
  CarOutline,
  GatewayOutline,
  UserOutline,
  EditOutline,
  QuestionOutline,
  DeleteOutline,
  HomeOutline,
  CheckCircleOutline,
  CloseCircleOutline,
} from '@ant-design/icons-angular/icons';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd';

const icons: IconDefinition[] = [
  CarOutline,
  GatewayOutline,
  UserOutline,
  EditOutline,
  QuestionOutline,
  DeleteOutline,
  HomeOutline,
  CheckCircleOutline,
  CloseCircleOutline,
];

@NgModule({
  imports: [NzIconModule.forRoot(icons), HttpClientModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsModule {}
