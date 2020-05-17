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
  roadListId: string;

  @Column()
  dayStart: number;

  @Column({ nullable: true })
  dayEnd: number;

  @Column()
  odometerStart: number;

  @Column({ nullable: true })
  odometerEnd: number;

  @Column()
  fuelStart: number;

  @Column({ nullable: true })
  fuelEnd: number;

  @Column()
  adBlueStart: number;

  @Column({ nullable: true })
  adBlueEnd: number;

  @Column()
  temperature: number;

  @Column({ nullable: true })
  route: string;

  @Column()
  driverId: number;

  @ManyToOne((type) => DriversEntity, (drivers) => drivers.roadList)
  driver: DriversEntity;

  @Column()
  carId: number;

  @ManyToOne((type) => CarsEntity, (cars) => cars.roadList)
  car: CarsEntity;

  @Column({ nullable: true})
  trailerId: number;

  @ManyToOne((type) => TrailersEntity, (trailers) => trailers.roadList)
  trailer: TrailersEntity;

  @OneToMany(
    (type) => DailyReportEntity,
    (dailyReport) => dailyReport.roadList,
  )
  dailyReports: DailyReportEntity[];

  @OneToMany((type) => FuelEntity, (fuel) => fuel.roadList)
  fuel: FuelEntity[];

  @OneToMany((type) => AdBlueEntity, (ad_blue) => ad_blue.roadList)
  adBlue: AdBlueEntity[];
}
