import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarParkModule } from './car-park.module';

import { CarsEntity } from './entities/cars.entity';
import { RoadListEntity } from './entities/road-list.entity';
import { DriversEntity } from './entities/drivers.entity';
import { DailyReportEntity } from './entities/daily-report.entity';
import { TrailersEntity } from './entities/trailers.entity';

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
      entities: [
        CarsEntity,
        RoadListEntity,
        DriversEntity,
        DailyReportEntity,
        TrailersEntity,
      ],
    }),
    CarParkModule,
  ],
})
export class AppModule {}
