import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrailerType } from '../../models';
import { RoadListEntity } from './road-list.entity';

@Entity('trailers')
export class TrailersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  registrationNumber: string;

  @Column()
  type: TrailerType;

  @Column()
  weight: number;

  @OneToMany((type) => RoadListEntity, (roadList) => roadList.trailer)
  roadList: RoadListEntity[];
}
