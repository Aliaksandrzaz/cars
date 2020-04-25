import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm"

import { CarParkModule } from "./car-park.module"

import { CarsEntity } from "./entity/cars.entity"
import { RoadListEntity } from "./entity/road-list.entity"
import { DriversEntity } from "./entity/drivers.entity"
import { DailyReportsEntity } from "./entity/daily-reports.entity"
import { TrailersEntity } from "./entity/trailers.entity"

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
      entities: [CarsEntity, RoadListEntity, DriversEntity, DailyReportsEntity, TrailersEntity]
    }),
    CarParkModule
  ],
})
export class AppModule {
}
