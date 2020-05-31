import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars_type')
export class CarsTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  label: string;
}
