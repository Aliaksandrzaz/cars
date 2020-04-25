import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm"
import { CarsController } from "./cars/cars.controller"
import { CarsService } from "./cars/cars.service"
import { CarsEntity } from "./entity/cars.entity"
import { TrailerController } from "./trailers/trailer.controller"
import { TrailerService } from "./trailers/trailer.service"
import { TrailersEntity } from "./entity/trailers.entity"
import { DriversController } from "./drivers/drivers.controller"
import { DriversService } from "./drivers/drivers.service"
import { DriversEntity } from "./entity/drivers.entity"
import { CarParkService } from "./car-park.service"
import { CarParkController } from "./car-park.controller"
import { RoadListService } from "./road-list/road-list.service"
import { RoadListController } from "./road-list/road-list.controller"
import { RoadListEntity } from "./entity/road-list.entity"
import { DailyReportsEntity } from "./entity/daily-reports.entity"

@Module({
  controllers: [CarsController, TrailerController, DriversController, CarParkController, RoadListController],
  providers: [CarsService, TrailerService, DriversService, CarParkService, RoadListService],
  imports: [TypeOrmModule.forFeature([CarsEntity, RoadListEntity, DriversEntity, DailyReportsEntity, TrailersEntity])]
})
export class CarParkModule {
}
