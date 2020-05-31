import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { TrailerController } from './trailers/trailer.controller';
import { TrailerService } from './trailers/trailer.service';
import { DriversController } from './drivers/drivers.controller';
import { DriversService } from './drivers/drivers.service';
import { CarParkService } from './car-park.service';
import { CarParkController } from './car-park.controller';
import { RoadListService } from './road-list/road-list.service';
import { RoadListController } from './road-list/road-list.controller';
import { FuelController } from './fuel/fuel-controller';
import { FuelService } from './fuel/fuel.service';

import { CarsTypeEntity } from './entities/cars-type.entity';
import { RoadListEntity } from './entities/road-list.entity';
import { DailyReportEntity } from './entities/daily-report.entity';
import { FuelEntity } from './entities/fuel.entity';
import { AdBlueEntity } from './entities/adblue.entity';
import { TrailersEntity } from './entities/trailers.entity';
import { CarsEntity } from './entities/cars.entity';
import { DriversEntity } from './entities/drivers.entity';

@Module({
  controllers: [
    CarsController,
    TrailerController,
    DriversController,
    CarParkController,
    RoadListController,
    FuelController,
  ],
  providers: [
    CarsService,
    TrailerService,
    DriversService,
    CarParkService,
    RoadListService,
    FuelService,
  ],
  imports: [
    TypeOrmModule.forFeature([
      CarsEntity,
      RoadListEntity,
      DriversEntity,
      DailyReportEntity,
      TrailersEntity,
      FuelEntity,
      AdBlueEntity,
      CarsTypeEntity,
    ]),
  ],
})
export class CarParkModule {}
