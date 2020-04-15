import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ListEntity } from "./list.entity"

@Entity("Users")
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({nullable: true})
  carId: number

  @Column({nullable: true})
  trailerId: number

  @OneToMany(type => ListEntity, list => list.user)
  list: ListEntity[]
}
