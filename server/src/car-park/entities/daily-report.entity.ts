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
  loadingPlace: string;

  // TODO: ADD GEOGRAPHY
  @Column({ nullable: true })
  unloadingPlace: string;

  @Column()
  roadListId: number;

  @ManyToOne((type) => RoadListEntity, (roadList) => roadList.dailyReports)
  roadList: RoadListEntity;
}
