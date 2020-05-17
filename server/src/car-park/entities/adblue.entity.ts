import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoadListEntity } from './road-list.entity';

@Entity('adblue')
export class AdBlueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @CreateDateColumn()
  date: number;

  @ManyToOne((type) => RoadListEntity, (roadList) => roadList.adBlue)
  roadList: RoadListEntity;
}
