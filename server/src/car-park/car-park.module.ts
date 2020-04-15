import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm"
import { CarsController } from "./cars/cars.controller"
import { CarsService } from "./cars/cars.service"
import { CarsEntity } from "../entity/carsEntity"
import { TrailerController } from "./trailers/trailer.controller"
import { TrailerService } from "./trailers/trailer.service"
import { TrailersEntity } from "../entity/trailersEntity"
import { UsersController } from "./users/users.controller"
import { UsersService } from "./users/users.service"
import { UsersEntity } from "../entity/users.entity"
import { CarParkService } from "./car-park.service"
import { CarParkController } from "./car-park.controller"

@Module({
  controllers: [CarsController, TrailerController, UsersController, CarParkController],
  providers: [CarsService, TrailerService, UsersService, CarParkService],
  imports: [TypeOrmModule.forFeature([CarsEntity, TrailersEntity, UsersEntity])]
})
export class CarParkModule {
}
