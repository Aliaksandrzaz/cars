import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { TrailerType } from "../models"

@Entity("Trailers")
export class TrailersEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  model: string

  @Column()
  registrationNumber: string

  @Column()
  trailerType: TrailerType

  @Column()
  weight: number
}
