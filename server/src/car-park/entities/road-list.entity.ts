import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DriversEntity } from './drivers.entity';
import { CarsEntity } from './cars.entity';
import { DailyReportEntity } from './daily-report.entity';
import { TrailersEntity } from './trailers.entity';
import { FuelEntity } from './fuel.entity';
import { AdBlueEntity } from './adblue.entity';

@Entity('road_list')
export class RoadListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  road_list_id: string;

  @Column()
  day_start: number;

  @Column({ nullable: true })
  day_end: number;

  @Column()
  odometer_start: number;

  @Column({ nullable: true })
  odometer_end: number;

  @Column()
  fuel_start: number;

  @Column({ nullable: true })
  fuel_end: number;

  @Column()
  ad_blue_start: number;

  @Column({ nullable: true })
  ad_blue_end: number;

  @Column()
  temperature: number;

  @Column({ nullable: true })
  route: string;

  @Column({ name: 'driverId' })
  driver_id: number;

  @ManyToOne((type) => DriversEntity, (drivers) => drivers.road_list)
  driver: DriversEntity;

  @Column({ name: 'carId' })
  car_id: number;

  @ManyToOne((type) => CarsEntity, (cars) => cars.road_list)
  car: CarsEntity;

  @Column({ nullable: true, name: 'trailerId' })
  trailer_id: number;

  @ManyToOne((type) => TrailersEntity, (trailers) => trailers.road_list)
  trailer: TrailersEntity;

  @OneToMany(
    (type) => DailyReportEntity,
    (dailyReport) => dailyReport.road_list,
  )
  daily_reports: DailyReportEntity[];

  @OneToMany((type) => FuelEntity, (fuel) => fuel.road_list)
  fuel: FuelEntity[];

  @OneToMany((type) => AdBlueEntity, (ad_blue) => ad_blue.road_list)
  ad_blue: AdBlueEntity[];
}
