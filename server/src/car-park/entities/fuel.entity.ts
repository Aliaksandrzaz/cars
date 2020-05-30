import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({ nullable: true })
  gasStation: string;

  @Column()
  roadListId: number;

  @ManyToOne((type) => RoadListEntity, (roadList) => roadList.fuel)
  roadList: RoadListEntity;
}
