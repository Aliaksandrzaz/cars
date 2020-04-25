import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm"
import { DriversEntity } from "./drivers.entity"
import { CarsEntity } from "./cars.entity"
import { DailyReportsEntity } from "./daily-reports.entity"
import { TrailersEntity } from "./trailers.entity"

@Entity("road_list")
export class RoadListEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  road_list_id: string

  @Column()
  odometer_start: number

  @Column()
  odometer_end: number

  @Column()
  fuel_start: number

  @Column()
  fuel_end: number

  @Column("simple-array")
  simpleAr: string[]

  @ManyToOne(type => DriversEntity, driver => driver.road_list)
  driver: DriversEntity

  @ManyToOne(type => CarsEntity, cars => cars.road_list)
  car: CarsEntity

  @ManyToOne(type => TrailersEntity, trailer => trailer.road_list)
  trailer: TrailersEntity

  @OneToMany(type => DailyReportsEntity, dailyReport => dailyReport.road_list)
  daily_reports: DailyReportsEntity[]
}
