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
  registrationNumber: string;

  @Column()
  fuelConsumptionRate: number;

  @Column()
  winterFuelConsumptionRate: number;

  @Column()
  adBlueConsumptionRate: number;

  @Column()
  weBastoConsumptionRate: number;

  @Column()
  type: CarType;

  @Column()
  inArchive: boolean;

  @OneToMany((type) => RoadListEntity, (roadList) => roadList.car)
  roadList: RoadListEntity[];
}
