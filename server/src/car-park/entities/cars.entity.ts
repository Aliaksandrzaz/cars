import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { CarType } from '../../models';
import { RoadListEntity } from './road-list.entity';

@Entity('cars')
export class CarsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  registration_number: string;

  @Column()
  fuel_consumption_rate: number;

  @Column()
  winter_fuel_consumption_rate: number;

  @Column()
  ad_blue_consumption_rate: number;

  @Column()
  we_basto_consumption_rate: number;

  @Column()
  type: CarType;

  @OneToMany((type) => RoadListEntity, (roadList) => roadList.car)
  road_list: RoadListEntity[];
}
