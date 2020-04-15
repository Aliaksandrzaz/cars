import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"

import { CarType } from "../models"
import { ListEntity } from "./list.entity"

@Entity("Cars")
export class CarsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  model: string

  @Column()
  registrationNumber: string

  @Column()
  fuelConsumptionRate: number

  @Column()
  winterFuelConsumptionRate: number

  @Column()
  adBlueConsumptionRate: number

  @Column()
  weBastoConsumptionRate: number

  @Column()
  carType: CarType

  @OneToMany(type => ListEntity, list => list.car)
  list: ListEntity[]
}
