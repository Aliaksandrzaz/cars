import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { RoadListEntity } from './road-list.entity';

@Entity('daily_report')
export class DailyReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight: number;

  @Column()
  mileage: number;

  // TODO: ADD GEOGRAPHY
  @Column({ nullable: true })
  loading_place: string;

  // TODO: ADD GEOGRAPHY
  @Column({ nullable: true })
  unloading_place: string;

  @Column({ name: 'roadListId' })
  road_list_id: number;

  @ManyToOne((type) => RoadListEntity, (roadList) => roadList.daily_reports)
  road_list: RoadListEntity;
}
