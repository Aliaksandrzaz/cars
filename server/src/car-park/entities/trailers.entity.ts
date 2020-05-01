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
  registration_number: string;

  @Column()
  type: TrailerType;

  @Column()
  weight: number;

  @OneToMany((type) => RoadListEntity, (roadList) => roadList.trailer)
  road_list: RoadListEntity[];
}
