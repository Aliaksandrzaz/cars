import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { RoadListEntity } from "./road-list.entity"

@Entity("daily_reports")
export class DailyReportsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => RoadListEntity, roadList => roadList.daily_reports)
  road_list: RoadListEntity
}
