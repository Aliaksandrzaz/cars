import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm"

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { CreateListModule } from "./create-list/create-list.module"
import { CarParkModule } from "./car-park/car-park.module"

import { CarsEntity } from "./entity/carsEntity"
import { ListEntity } from "./entity/list.entity"
import { UsersEntity } from "./entity/users.entity"
import { DailyReportsEntity } from "./entity/daily-reports.entity"
import { TrailersEntity } from "./entity/trailersEntity"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      // port: 3306,
      username: 'postgres',
      password: 'AlienShooter2',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      entities: [CarsEntity, ListEntity, UsersEntity, DailyReportsEntity, TrailersEntity]
    }),
    CreateListModule,
    CarParkModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
