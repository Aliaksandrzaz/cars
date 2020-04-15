import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { UsersEntity } from "./users.entity"
import { CarsEntity } from "./carsEntity"
import { DailyReportsEntity } from "./daily-reports.entity"

@Entity("List")
export class ListEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => UsersEntity, user => user.list)
  user: UsersEntity

  @ManyToOne(type => CarsEntity, cars => cars.list)
  car: CarsEntity

  @OneToMany(type => DailyReportsEntity, dailyReport => dailyReport.list)
  dailyReports: DailyReportsEntity[]

}
