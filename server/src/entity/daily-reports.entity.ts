import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { ListEntity } from "./list.entity"

@Entity("DailyReports")
export class DailyReportsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  model: string

  @ManyToOne(type => ListEntity, list => list.dailyReports)
  list: ListEntity
}
