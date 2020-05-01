import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoadListEntity } from './road-list.entity';

@Entity('fuel')
export class FuelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  date: number;

  @Column()
  type: string;

  @Column({nullable: true})
  gas_station: string

  @Column({ name: 'roadListId' })
  road_list_id: number;

  @ManyToOne((type) => RoadListEntity, (roadList) => roadList.fuel)
  road_list: RoadListEntity;
}
