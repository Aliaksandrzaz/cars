import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoadListEntity } from './road-list.entity';

@Entity('drivers')
export class DriversEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => RoadListEntity, (roadList) => roadList.driver)
  roadList: RoadListEntity[];
}
